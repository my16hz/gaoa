var jQuery = require('./jquery.core.js');

var tmplItmAtt = "_tmplitem",
	htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
	newTmplItems = {},
	wrappedItems = {},
	appendToTmplItems,
	topTmplItem = { key: 0, data: {} },
	itemKey = 0,
	cloneIndex = 0,
	stack = [];

jQuery.extend({
	tmpl: {}
});
	
jQuery.extend( jQuery.tmpl, {
	tag: {
		"tmpl": {
			_default: { $2: "null" },
			open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
			// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
			// This means that {{tmpl foo}} treats foo as a template (which IS a function).
			// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
		},
		"wrap": {
			_default: { $2: "null" },
			open: "$item.calls(__,$1,$2);__=[];",
			close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
		},
		"each": {
			_default: { $2: "$index, $value" },
			open: "if($notnull_1){$.each($1a,function($2){with(this){",
			close: "}});}"
		},
		"if": {
			open: "if(($notnull_1) && $1a){",
			close: "}"
		},
		"else": {
			_default: { $1: "true" },
			open: "}else if(($notnull_1) && $1a){"
		},
		"html": {
			// Unecoded expression evaluation.
			open: "if($notnull_1){__.push($1a);}"
		},
		"=": {
			// Encoded expression evaluation. Abbreviated form is ${}.
			_default: { $1: "$data" },
			open: "if($notnull_1){__.push($.encode($1a));}"
		},
		"!": {
			// Comment tag. Skipped by parser
			open: ""
		}
	},

	// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
	complete: function( items ) {
		newTmplItems = {};
	},

	// Call this from code which overrides domManip, or equivalent
	// Manage cloning/storing template items etc.
	afterManip: function afterManip( elem, fragClone, callback ) {
		// Provides cloned fragment ready for fixup prior to and after insertion into DOM
		var content = fragClone.nodeType === 11 ?
			jQuery.makeArray(fragClone.childNodes) :
			fragClone.nodeType === 1 ? [fragClone] : [];

		// Return fragment to original caller (e.g. append) for DOM insertion
		callback.call( elem, fragClone );

		// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
		storeTmplItems( content );
		cloneIndex++;
	}
});

// Generate a reusable function that will serve to render a template against data
function buildTmplFn( markup ) {
	return new Function("jQuery","$item",
		// Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
		"var $=jQuery,call,__=[],$data=$item.data;" +

		// Introduce the data as local variables using with(){}
		"with($data){__.push('" +

		// Convert the template into pure JavaScript
		jQuery.trim(markup)
			.replace( /([\\'])/g, "\\$1" )
			.replace( /[\r\t\n]/g, " " )
			.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
			.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
			function( all, slash, type, fnargs, target, parens, args ) {
				var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
				if ( !tag ) {
					throw "Unknown template tag: " + type;
				}
				def = tag._default || [];
				if ( parens && !/\w$/.test(target)) {
					target += parens;
					parens = "";
				}
				if ( target ) {
					target = unescape( target );
					args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
					// Support for target being things like a.toLowerCase();
					// In that case don't call with template item as 'this' pointer. Just evaluate...
					expr = parens ? (target.indexOf(".") > -1 ? target + unescape( parens ) : ("(" + target + ").call($item" + args)) : target;
					exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
				} else {
					exprAutoFnDetect = expr = def.$1 || "null";
				}
				fnargs = unescape( fnargs );
				return "');" +
					tag[ slash ? "close" : "open" ]
						.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
						.split( "$1a" ).join( exprAutoFnDetect )
						.split( "$1" ).join( expr )
						.split( "$2" ).join( fnargs || def.$2 || "" ) +
					"__.push('";
			}) +
		"');}return __;"
	);
}

function unescape( args ) {
	return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
}

module.exports = jQuery;
module.exports.template = buildTmplFn;