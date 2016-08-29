/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*
 // jQuery Ajax File Uploader
 //
 // @author: Jordan Feldstein <jfeldstein.com>
 //
 //  - Ajaxifies an individual <input type="file">
 //  - Files are sandboxed. Doesn't matter how many, or where they are, on the page.
 //  - Allows for extra parameters to be included with the file
 //  - onStart callback can cancel the upload by returning false
 */
(function ($) {
    $.fn.ajaxfileupload = function (options) {
        var settings = {
            params: {},
            action: '',
            onStart: function () {
            },
            onComplete: function (response) {
            },
            onCancel: function () {
            },
            validate_extensions: true,
            valid_extensions: ['gif', 'png', 'jpg', 'jpeg'],
            submit_button: null
        };

        var uploading_file = false;

        if (options) {
            $.extend(settings, options);
        }


        // 'this' is a jQuery collection of one or more (hopefully) 
        //  file elements, but doesn't check for this yet
        return this.each(function () {
            var $element = $(this);

            // Skip elements that are already setup. May replace this
            //  with uninit() later, to allow updating that settings
            if ($element.data('ajaxUploader-setup') === true) return;

            $element.change(function () {
                // since a new image was selected, reset the marker
                uploading_file = false;

                // only update the file from here if we haven't assigned a submit button
                if (settings.submit_button == null) {
                    upload_file();
                }
            });

            if (settings.submit_button == null) {
                // do nothing
            } else {
                settings.submit_button.click(function (e) {
                    // Prevent non-AJAXy submit
                    e.preventDefault();

                    // only attempt to upload file if we're not uploading
                    if (!uploading_file) {
                        upload_file();
                    }
                });
            }

            var upload_file = function () {
                if ($element.val() == '') return settings.onCancel.apply($element, [settings.params]);

                // make sure extension is valid
                var ext = $element.val().split('.').pop().toLowerCase();
                if (true === settings.validate_extensions && $.inArray(ext, settings.valid_extensions) == -1) {
                    // Pass back to the user
                    settings.onComplete.apply($element, [{
                        status: false,
                        message: 'The select file type is invalid. File must be ' + settings.valid_extensions.join(', ') + '.'
                    }, settings.params]);
                } else {
                    uploading_file = true;

                    // Creates the form, extra inputs and iframe used to
                    //  submit / upload the file
                    wrapElement($element);

                    // Call user-supplied (or default) onStart(), setting
                    //  it's this context to the file DOM element
                    var ret = settings.onStart.apply($element, [settings.params]);

                    // let onStart have the option to cancel the upload
                    if (ret !== false) {
                        $element.parent('form').submit(function (e) {
                            e.stopPropagation();
                        }).submit();
                    } else {
                        uploading_file = false;
                    }
                }
            };

            // Mark this element as setup
            $element.data('ajaxUploader-setup', true);

            /*
             // Internal handler that tries to parse the response
             //  and clean up after ourselves.
             */
            var handleResponse = function (loadedFrame, element) {
                var response, responseStr = $(loadedFrame).contents().text();
                try {
                    //response = $.parseJSON($.trim(responseStr));
                    response = JSON.parse(responseStr);
                } catch (e) {
                    response = responseStr;
                }

                // Tear-down the wrapper form
                element.siblings().remove();
                element.unwrap();

                uploading_file = false;

                // Pass back to the user
                settings.onComplete.apply(element, [response, settings.params]);
            };

            /*
             // Wraps element in a <form> tag, and inserts hidden inputs for each
             //  key:value pair in settings.params so they can be sent along with
             //  the upload. Then, creates an iframe that the whole thing is
             //  uploaded through.
             */
            var wrapElement = function (element) {
                // Create an iframe to submit through, using a semi-unique ID
                var frame_id = 'ajaxUploader-iframe-' + Math.round(new Date().getTime() / 1000)
                $('body').after('<iframe width="0" height="0" style="display:none;" name="' + frame_id + '" id="' + frame_id + '"/>');
                $('#' + frame_id).get(0).onload = function () {
                    handleResponse(this, element);
                };

                // Wrap it in a form
                element.wrap(function () {
                    return '<form action="' + settings.action + '" method="POST" enctype="multipart/form-data" target="' + frame_id + '" />'
                })
                // Insert <input type='hidden'>'s for each param
                    .before(function () {
                        var key, html = '';
                        for (key in settings.params) {
                            var paramVal = settings.params[key];
                            if (typeof paramVal === 'function') {
                                paramVal = paramVal();
                            }
                            html += '<input type="hidden" name="' + key + '" value="' + paramVal + '" />';
                        }
                        return html;
                    });
            }
        });
    }
})(jQuery)

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/customize/?id=47aa25c4ba2870b696b235fcb5ec389c)
 * Config saved to config.json and https://gist.github.com/47aa25c4ba2870b696b235fcb5ec389c
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.6",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.6",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.6",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(r);d&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(d){var u=r,f=this.getPosition(this.$viewport);r="bottom"==r&&h.bottom+c>f.bottom?"top":"top"==r&&h.top-c<f.top?"bottom":"right"==r&&h.right+p>f.width?"left":"left"==r&&h.left-p<f.left?"right":r,s.removeClass(u).addClass(r)}var g=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,d=o[0].offsetHeight;"top"==i&&d!=s&&(e.top=e.top+s-d);var h=this.getViewportAdjustedDelta(i,e,l,d);h.left?e.left+=h.left:e.top+=h.top;var p=/top|bottom/.test(i),c=p?2*h.left-n+l:2*h.top-s+d,u=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var d=e.left-s,h=e.left+s+i;d<a.left?n.left=a.left-d:h>a.right&&(n.left=a.left+a.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.6",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.6",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
//! moment.js
//! version : 2.14.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(v(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;c>b;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]}function fa(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null):(e=sd.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:(e=sd.call(this._longMonthsParse,g),-1!==e?e:null)):(e=sd.call(this._longMonthsParse,g),-1!==e?e:(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){
// test the regex
if(e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;24>b;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function Fa(a){return this._weekdaysShort[a.day()]}function Ga(a){return this._weekdaysMin[a.day()]}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){
// test the regex
if(e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;7>b;b++)c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;7>b;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&-2===l(a).overflow&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(Yd>b||b>$d)&&(b=$d),l(a)._overflowWeeks&&-1===b&&(b=de),l(a)._overflowWeekday&&-1===b&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;c>b;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;c>b;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(f+=l(b).charsLeftOver,f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||d>f)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}
// FORMATTING
function xb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function yb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function zb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Ab(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Bb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=yb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ab(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Mb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ab(this):null!=b?this:NaN}function Cb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Db(a){return this.utcOffset(0,a)}function Eb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ab(this),"m")),this}function Fb(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(yb(Sd,this._i)),this}function Gb(a){return this.isValid()?(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Hb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ib(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Jb(){return this.isValid()?!this._isUTC:!1}function Kb(){return this.isValid()?this._isUTC:!1}function Lb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Mb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(g[ce])*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Nb(g[2],c),M:Nb(g[3],c),w:Nb(g[4],c),d:Nb(g[5],c),h:Nb(g[6],c),m:Nb(g[7],c),s:Nb(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Pb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Nb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Ob(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Pb(a,b){var c;return a.isValid()&&b.isValid()?(b=zb(b,a),a.isBefore(b)?c=Ob(a,b):(c=Ob(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Qb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Mb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=Qb(c._days),h=Qb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=zb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function Xb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return this.isValid()&&d.isValid()?(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=zb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Mb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Mb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Mb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Mb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||1>=f&&["m"]||f<kf.m&&["mm",f]||1>=g&&["h"]||g<kf.h&&["hh",g]||1>=h&&["d"]||h<kf.d&&["dd",h]||1>=i&&["M"]||i<kf.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a?(jf=a,!0):!1}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0===kf[a]?!1:void 0===b?kf[a]:(kf[a]=b,!0)}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);a=s(d/60),b=s(a/60),d%=60,a%=60,c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),I("month","M"),L("month",8),Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};xb("Z",":"),xb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=yb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Mb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Bb,Re.utc=Db,Re.local=Eb,Re.parseZone=Fb,Re.hasAlignedHourOffset=Gb,Re.isDST=Hb,Re.isLocal=Jb,Re.isUtcOffset=Kb,Re.isUtc=Lb,Re.isUTC=Lb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Cb),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ib);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.14.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Mb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});
/*
* bootstrap-table - v1.11.0 - 2016-07-02
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2016 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b=null,c=function(a){var b=arguments,c=!0,d=1;return a=a.replace(/%s/g,function(){var a=b[d++];return"undefined"==typeof a?(c=!1,""):a}),c?a:""},d=function(b,c,d,e){var f="";return a.each(b,function(a,b){return b[c]===e?(f=b[d],!1):!0}),f},e=function(b,c){var d=-1;return a.each(b,function(a,b){return b.field===c?(d=a,!1):!0}),d},f=function(b){var c,d,e,f=0,g=[];for(c=0;c<b[0].length;c++)f+=b[0][c].colspan||1;for(c=0;c<b.length;c++)for(g[c]=[],d=0;f>d;d++)g[c][d]=!1;for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++){var h=b[c][d],i=h.rowspan||1,j=h.colspan||1,k=a.inArray(!1,g[c]);for(1===j&&(h.fieldIndex=k,"undefined"==typeof h.field&&(h.field=k)),e=0;i>e;e++)g[c+e][k]=!0;for(e=0;j>e;e++)g[c][k+e]=!0}},g=function(){if(null===b){var c,d,e=a("<p/>").addClass("fixed-table-scroll-inner"),f=a("<div/>").addClass("fixed-table-scroll-outer");f.append(e),a("body").append(f),c=e[0].offsetWidth,f.css("overflow","scroll"),d=e[0].offsetWidth,c===d&&(d=f[0].clientWidth),f.remove(),b=c-d}return b},h=function(b,d,e,f){var g=d;if("string"==typeof d){var h=d.split(".");h.length>1?(g=window,a.each(h,function(a,b){g=g[b]})):g=window[d]}return"object"==typeof g?g:"function"==typeof g?g.apply(b,e):!g&&"string"==typeof d&&c.apply(this,[d].concat(e))?c.apply(this,[d].concat(e)):f},i=function(b,c,d){var e=Object.getOwnPropertyNames(b),f=Object.getOwnPropertyNames(c),g="";if(d&&e.length!==f.length)return!1;for(var h=0;h<e.length;h++)if(g=e[h],a.inArray(g,f)>-1&&b[g]!==c[g])return!1;return!0},j=function(a){return"string"==typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`/g,"&#x60;"):a},k=function(b){var c=0;return b.children().each(function(){c<a(this).outerHeight(!0)&&(c=a(this).outerHeight(!0))}),c},l=function(a){for(var b in a){var c=b.split(/(?=[A-Z])/).join("-").toLowerCase();c!==b&&(a[c]=a[b],delete a[b])}return a},m=function(a,b,c){var d=a;if("string"!=typeof b||a.hasOwnProperty(b))return c?j(a[b]):a[b];var e=b.split(".");for(var f in e)d=d&&d[e[f]];return c?j(d):d},n=function(){return!!(navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))},o=function(){Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;d>g;g++)a.call(e,c[g])&&h.push(c[g]);return h}}())},p=function(b,c){this.options=c,this.$el=a(b),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0,this.init()};p.DEFAULTS={classes:"table table-hover",locale:void 0,height:void 0,undefinedText:"-",sortName:void 0,sortOrder:"asc",sortStable:!1,striped:!1,columns:[[]],data:[],dataField:"rows",method:"get",url:void 0,ajax:void 0,cache:!0,contentType:"application/json",dataType:"json",ajaxOptions:{},queryParams:function(a){return a},queryParamsType:"limit",responseHandler:function(a){return a},pagination:!1,onlyInfoPagination:!1,sidePagination:"client",totalRows:0,pageNumber:1,pageSize:10,pageList:[10,25,50,100],paginationHAlign:"right",paginationVAlign:"bottom",paginationDetailHAlign:"left",paginationPreText:"&lsaquo;",paginationNextText:"&rsaquo;",search:!1,searchOnEnterKey:!1,strictSearch:!1,searchAlign:"right",selectItemName:"btSelectItem",showHeader:!0,showFooter:!1,showColumns:!1,showPaginationSwitch:!1,showRefresh:!1,showToggle:!1,buttonsAlign:"right",smartDisplay:!0,escape:!1,minimumCountColumns:1,idField:void 0,uniqueId:void 0,cardView:!1,detailView:!1,detailFormatter:function(){return""},trimOnSearch:!0,clickToSelect:!1,singleSelect:!1,toolbar:void 0,toolbarAlign:"left",checkboxHeader:!0,sortable:!0,silentSort:!0,maintainSelected:!1,searchTimeOut:500,searchText:"",iconSize:void 0,buttonsClass:"default",iconsPrefix:"glyphicon",icons:{paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",toggle:"glyphicon-list-alt icon-list-alt",columns:"glyphicon-th icon-th",detailOpen:"glyphicon-plus icon-plus",detailClose:"glyphicon-minus icon-minus"},customSearch:a.noop,customSort:a.noop,rowStyle:function(){return{}},rowAttributes:function(){return{}},footerStyle:function(){return{}},onAll:function(){return!1},onClickCell:function(){return!1},onDblClickCell:function(){return!1},onClickRow:function(){return!1},onDblClickRow:function(){return!1},onSort:function(){return!1},onCheck:function(){return!1},onUncheck:function(){return!1},onCheckAll:function(){return!1},onUncheckAll:function(){return!1},onCheckSome:function(){return!1},onUncheckSome:function(){return!1},onLoadSuccess:function(){return!1},onLoadError:function(){return!1},onColumnSwitch:function(){return!1},onPageChange:function(){return!1},onSearch:function(){return!1},onToggle:function(){return!1},onPreBody:function(){return!1},onPostBody:function(){return!1},onPostHeader:function(){return!1},onExpandRow:function(){return!1},onCollapseRow:function(){return!1},onRefreshOptions:function(){return!1},onRefresh:function(){return!1},onResetView:function(){return!1}},p.LOCALES={},p.LOCALES["en-US"]=p.LOCALES.en={formatLoadingMessage:function(){return"Loading, please wait..."},formatRecordsPerPage:function(a){return c("%s rows per page",a)},formatShowingRows:function(a,b,d){return c("Showing %s to %s of %s rows",a,b,d)},formatDetailPagination:function(a){return c("Showing %s rows",a)},formatSearch:function(){return"Search"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatRefresh:function(){return"Refresh"},formatToggle:function(){return"Toggle"},formatColumns:function(){return"Columns"},formatAllRows:function(){return"All"}},a.extend(p.DEFAULTS,p.LOCALES["en-US"]),p.COLUMN_DEFAULTS={radio:!1,checkbox:!1,checkboxEnabled:!0,field:void 0,title:void 0,titleTooltip:void 0,"class":void 0,align:void 0,halign:void 0,falign:void 0,valign:void 0,width:void 0,sortable:!1,order:"asc",visible:!0,switchable:!0,clickToSelect:!0,formatter:void 0,footerFormatter:void 0,events:void 0,sorter:void 0,sortName:void 0,cellStyle:void 0,searchable:!0,searchFormatter:!0,cardVisible:!0},p.EVENTS={"all.bs.table":"onAll","click-cell.bs.table":"onClickCell","dbl-click-cell.bs.table":"onDblClickCell","click-row.bs.table":"onClickRow","dbl-click-row.bs.table":"onDblClickRow","sort.bs.table":"onSort","check.bs.table":"onCheck","uncheck.bs.table":"onUncheck","check-all.bs.table":"onCheckAll","uncheck-all.bs.table":"onUncheckAll","check-some.bs.table":"onCheckSome","uncheck-some.bs.table":"onUncheckSome","load-success.bs.table":"onLoadSuccess","load-error.bs.table":"onLoadError","column-switch.bs.table":"onColumnSwitch","page-change.bs.table":"onPageChange","search.bs.table":"onSearch","toggle.bs.table":"onToggle","pre-body.bs.table":"onPreBody","post-body.bs.table":"onPostBody","post-header.bs.table":"onPostHeader","expand-row.bs.table":"onExpandRow","collapse-row.bs.table":"onCollapseRow","refresh-options.bs.table":"onRefreshOptions","reset-view.bs.table":"onResetView","refresh.bs.table":"onRefresh"},p.prototype.init=function(){this.initLocale(),this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initFooter(),this.initToolbar(),this.initPagination(),this.initBody(),this.initSearchText(),this.initServer()},p.prototype.initLocale=function(){if(this.options.locale){var b=this.options.locale.split(/-|_/);b[0].toLowerCase(),b[1]&&b[1].toUpperCase(),a.fn.bootstrapTable.locales[this.options.locale]?a.extend(this.options,a.fn.bootstrapTable.locales[this.options.locale]):a.fn.bootstrapTable.locales[b.join("-")]?a.extend(this.options,a.fn.bootstrapTable.locales[b.join("-")]):a.fn.bootstrapTable.locales[b[0]]&&a.extend(this.options,a.fn.bootstrapTable.locales[b[0]])}},p.prototype.initContainer=function(){this.$container=a(['<div class="bootstrap-table">','<div class="fixed-table-toolbar"></div>',"top"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?'<div class="fixed-table-pagination" style="clear: both;"></div>':"",'<div class="fixed-table-container">','<div class="fixed-table-header"><table></table></div>','<div class="fixed-table-body">','<div class="fixed-table-loading">',this.options.formatLoadingMessage(),"</div>","</div>",'<div class="fixed-table-footer"><table><tr></tr></table></div>',"bottom"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?'<div class="fixed-table-pagination"></div>':"","</div>","</div>"].join("")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$container.find(".fixed-table-footer"),this.$toolbar=this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after('<div class="clearfix"></div>'),this.$el.addClass(this.options.classes),this.options.striped&&this.$el.addClass("table-striped"),-1!==a.inArray("table-no-bordered",this.options.classes.split(" "))&&this.$tableContainer.addClass("table-no-bordered")},p.prototype.initTable=function(){var b=this,c=[],d=[];if(this.$header=this.$el.find(">thead"),this.$header.length||(this.$header=a("<thead></thead>").appendTo(this.$el)),this.$header.find("tr").each(function(){var b=[];a(this).find("th").each(function(){"undefined"!=typeof a(this).data("field")&&a(this).data("field",a(this).data("field")+""),b.push(a.extend({},{title:a(this).html(),"class":a(this).attr("class"),titleTooltip:a(this).attr("title"),rowspan:a(this).attr("rowspan")?+a(this).attr("rowspan"):void 0,colspan:a(this).attr("colspan")?+a(this).attr("colspan"):void 0},a(this).data()))}),c.push(b)}),a.isArray(this.options.columns[0])||(this.options.columns=[this.options.columns]),this.options.columns=a.extend(!0,[],c,this.options.columns),this.columns=[],f(this.options.columns),a.each(this.options.columns,function(c,d){a.each(d,function(d,e){e=a.extend({},p.COLUMN_DEFAULTS,e),"undefined"!=typeof e.fieldIndex&&(b.columns[e.fieldIndex]=e),b.options.columns[c][d]=e})}),!this.options.data.length){var e=[];this.$el.find(">tbody>tr").each(function(c){var f={};f._id=a(this).attr("id"),f._class=a(this).attr("class"),f._data=l(a(this).data()),a(this).find(">td").each(function(d){for(var g,h,i=a(this),j=+i.attr("colspan")||1,k=+i.attr("rowspan")||1;e[c]&&e[c][d];d++);for(g=d;d+j>g;g++)for(h=c;c+k>h;h++)e[h]||(e[h]=[]),e[h][g]=!0;var m=b.columns[d].field;f[m]=a(this).html(),f["_"+m+"_id"]=a(this).attr("id"),f["_"+m+"_class"]=a(this).attr("class"),f["_"+m+"_rowspan"]=a(this).attr("rowspan"),f["_"+m+"_colspan"]=a(this).attr("colspan"),f["_"+m+"_title"]=a(this).attr("title"),f["_"+m+"_data"]=l(a(this).data())}),d.push(f)}),this.options.data=d,d.length&&(this.fromHtml=!0)}},p.prototype.initHeader=function(){var b=this,d={},e=[];this.header={fields:[],styles:[],classes:[],formatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],searchables:[]},a.each(this.options.columns,function(f,g){e.push("<tr>"),0===f&&!b.options.cardView&&b.options.detailView&&e.push(c('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>',b.options.columns.length)),a.each(g,function(a,f){var g="",h="",i="",j="",k=c(' class="%s"',f["class"]),l=(b.options.sortOrder||f.order,"px"),m=f.width;if(void 0===f.width||b.options.cardView||"string"==typeof f.width&&-1!==f.width.indexOf("%")&&(l="%"),f.width&&"string"==typeof f.width&&(m=f.width.replace("%","").replace("px","")),h=c("text-align: %s; ",f.halign?f.halign:f.align),i=c("text-align: %s; ",f.align),j=c("vertical-align: %s; ",f.valign),j+=c("width: %s; ",!f.checkbox&&!f.radio||m?m?m+l:void 0:"36px"),"undefined"!=typeof f.fieldIndex){if(b.header.fields[f.fieldIndex]=f.field,b.header.styles[f.fieldIndex]=i+j,b.header.classes[f.fieldIndex]=k,b.header.formatters[f.fieldIndex]=f.formatter,b.header.events[f.fieldIndex]=f.events,b.header.sorters[f.fieldIndex]=f.sorter,b.header.sortNames[f.fieldIndex]=f.sortName,b.header.cellStyles[f.fieldIndex]=f.cellStyle,b.header.searchables[f.fieldIndex]=f.searchable,!f.visible)return;if(b.options.cardView&&!f.cardVisible)return;d[f.field]=f}e.push("<th"+c(' title="%s"',f.titleTooltip),f.checkbox||f.radio?c(' class="bs-checkbox %s"',f["class"]||""):k,c(' style="%s"',h+j),c(' rowspan="%s"',f.rowspan),c(' colspan="%s"',f.colspan),c(' data-field="%s"',f.field),"tabindex='0'",">"),e.push(c('<div class="th-inner %s">',b.options.sortable&&f.sortable?"sortable both":"")),g=f.title,f.checkbox&&(!b.options.singleSelect&&b.options.checkboxHeader&&(g='<input name="btSelectAll" type="checkbox" />'),b.header.stateField=f.field),f.radio&&(g="",b.header.stateField=f.field,b.options.singleSelect=!0),e.push(g),e.push("</div>"),e.push('<div class="fht-cell"></div>'),e.push("</div>"),e.push("</th>")}),e.push("</tr>")}),this.$header.html(e.join("")),this.$header.find("th[data-field]").each(function(){a(this).data(d[a(this).data("field")])}),this.$container.off("click",".th-inner").on("click",".th-inner",function(c){var d=a(this);return b.options.detailView&&d.closest(".bootstrap-table")[0]!==b.$container[0]?!1:void(b.options.sortable&&d.parent().data().sortable&&b.onSort(c))}),this.$header.children().children().off("keypress").on("keypress",function(c){if(b.options.sortable&&a(this).data().sortable){var d=c.keyCode||c.which;13==d&&b.onSort(c)}}),a(window).off("resize.bootstrap-table"),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",this.$header.outerHeight()+1),this.getCaret(),a(window).on("resize.bootstrap-table",a.proxy(this.resetWidth,this))),this.$selectAll=this.$header.find('[name="btSelectAll"]'),this.$selectAll.off("click").on("click",function(){var c=a(this).prop("checked");b[c?"checkAll":"uncheckAll"](),b.updateSelected()})},p.prototype.initFooter=function(){!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()},p.prototype.initData=function(a,b){this.data="append"===b?this.data.concat(a):"prepend"===b?[].concat(a).concat(this.data):a||this.options.data,this.options.data="append"===b?this.options.data.concat(a):"prepend"===b?[].concat(a).concat(this.options.data):this.data,"server"!==this.options.sidePagination&&this.initSort()},p.prototype.initSort=function(){var b=this,c=this.options.sortName,d="desc"===this.options.sortOrder?-1:1,e=a.inArray(this.options.sortName,this.header.fields);return this.options.customSort!==a.noop?void this.options.customSort.apply(this,[this.options.sortName,this.options.sortOrder]):void(-1!==e&&(this.options.sortStable&&a.each(this.data,function(a,b){b.hasOwnProperty("_position")||(b._position=a)}),this.data.sort(function(f,g){b.header.sortNames[e]&&(c=b.header.sortNames[e]);var i=m(f,c,b.options.escape),j=m(g,c,b.options.escape),k=h(b.header,b.header.sorters[e],[i,j]);return void 0!==k?d*k:((void 0===i||null===i)&&(i=""),(void 0===j||null===j)&&(j=""),b.options.sortStable&&i===j&&(i=f._position,j=g._position),a.isNumeric(i)&&a.isNumeric(j)?(i=parseFloat(i),j=parseFloat(j),j>i?-1*d:d):i===j?0:("string"!=typeof i&&(i=i.toString()),-1===i.localeCompare(j)?-1*d:d))})))},p.prototype.onSort=function(b){var c="keypress"===b.type?a(b.currentTarget):a(b.currentTarget).parent(),d=this.$header.find("th").eq(c.index());return this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===c.data("field")?this.options.sortOrder="asc"===this.options.sortOrder?"desc":"asc":(this.options.sortName=c.data("field"),this.options.sortOrder="asc"===c.data("order")?"desc":"asc"),this.trigger("sort",this.options.sortName,this.options.sortOrder),c.add(d).data("order",this.options.sortOrder),this.getCaret(),"server"===this.options.sidePagination?void this.initServer(this.options.silentSort):(this.initSort(),void this.initBody())},p.prototype.initToolbar=function(){var b,d,e=this,f=[],g=0,i=0;this.$toolbar.find(".bs-bars").children().length&&a("body").append(a(this.options.toolbar)),this.$toolbar.html(""),("string"==typeof this.options.toolbar||"object"==typeof this.options.toolbar)&&a(c('<div class="bs-bars pull-%s"></div>',this.options.toolbarAlign)).appendTo(this.$toolbar).append(a(this.options.toolbar)),f=[c('<div class="columns columns-%s btn-group pull-%s">',this.options.buttonsAlign,this.options.buttonsAlign)],"string"==typeof this.options.icons&&(this.options.icons=h(null,this.options.icons)),this.options.showPaginationSwitch&&f.push(c('<button class="btn'+c(" btn-%s",this.options.buttonsClass)+c(" btn-%s",this.options.iconSize)+'" type="button" name="paginationSwitch" title="%s">',this.options.formatPaginationSwitch()),c('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.paginationSwitchDown),"</button>"),this.options.showRefresh&&f.push(c('<button class="btn'+c(" btn-%s",this.options.buttonsClass)+c(" btn-%s",this.options.iconSize)+'" type="button" name="refresh" title="%s">',this.options.formatRefresh()),c('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.refresh),"</button>"),this.options.showToggle&&f.push(c('<button class="btn'+c(" btn-%s",this.options.buttonsClass)+c(" btn-%s",this.options.iconSize)+'" type="button" name="toggle" title="%s">',this.options.formatToggle()),c('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.toggle),"</button>"),this.options.showColumns&&(f.push(c('<div class="keep-open btn-group" title="%s">',this.options.formatColumns()),'<button type="button" class="btn'+c(" btn-%s",this.options.buttonsClass)+c(" btn-%s",this.options.iconSize)+' dropdown-toggle" data-toggle="dropdown">',c('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.columns),' <span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">'),a.each(this.columns,function(a,b){if(!(b.radio||b.checkbox||e.options.cardView&&!b.cardVisible)){var d=b.visible?' checked="checked"':"";b.switchable&&(f.push(c('<li><label><input type="checkbox" data-field="%s" value="%s"%s> %s</label></li>',b.field,a,d,b.title)),i++)}}),f.push("</ul>","</div>")),f.push("</div>"),(this.showToolbar||f.length>2)&&this.$toolbar.append(f.join("")),this.options.showPaginationSwitch&&this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click",a.proxy(this.togglePagination,this)),this.options.showRefresh&&this.$toolbar.find('button[name="refresh"]').off("click").on("click",a.proxy(this.refresh,this)),this.options.showToggle&&this.$toolbar.find('button[name="toggle"]').off("click").on("click",function(){e.toggleView()}),this.options.showColumns&&(b=this.$toolbar.find(".keep-open"),i<=this.options.minimumCountColumns&&b.find("input").prop("disabled",!0),b.find("li").off("click").on("click",function(a){a.stopImmediatePropagation()}),b.find("input").off("click").on("click",function(){var b=a(this);e.toggleColumn(a(this).val(),b.prop("checked"),!1),e.trigger("column-switch",a(this).data("field"),b.prop("checked"))})),this.options.search&&(f=[],f.push('<div class="pull-'+this.options.searchAlign+' search">',c('<input class="form-control'+c(" input-%s",this.options.iconSize)+'" type="text" placeholder="%s">',this.options.formatSearch()),"</div>"),this.$toolbar.append(f.join("")),d=this.$toolbar.find(".search input"),d.off("keyup drop").on("keyup drop",function(b){e.options.searchOnEnterKey&&13!==b.keyCode||a.inArray(b.keyCode,[37,38,39,40])>-1||(clearTimeout(g),g=setTimeout(function(){e.onSearch(b)},e.options.searchTimeOut))}),n()&&d.off("mouseup").on("mouseup",function(a){clearTimeout(g),g=setTimeout(function(){e.onSearch(a)},e.options.searchTimeOut)}))},p.prototype.onSearch=function(b){var c=a.trim(a(b.currentTarget).val());this.options.trimOnSearch&&a(b.currentTarget).val()!==c&&a(b.currentTarget).val(c),c!==this.searchText&&(this.searchText=c,this.options.searchText=c,this.options.pageNumber=1,this.initSearch(),this.updatePagination(),this.trigger("search",c))},p.prototype.initSearch=function(){var b=this;if("server"!==this.options.sidePagination){if(this.options.customSearch!==a.noop)return void this.options.customSearch.apply(this,[this.searchText]);var c=this.searchText&&(this.options.escape?j(this.searchText):this.searchText).toLowerCase(),d=a.isEmptyObject(this.filterColumns)?null:this.filterColumns;this.data=d?a.grep(this.options.data,function(b){for(var c in d)if(a.isArray(d[c])&&-1===a.inArray(b[c],d[c])||b[c]!==d[c])return!1;return!0}):this.options.data,this.data=c?a.grep(this.data,function(d,f){for(var g=0;g<b.header.fields.length;g++)if(b.header.searchables[g]){var i,j=a.isNumeric(b.header.fields[g])?parseInt(b.header.fields[g],10):b.header.fields[g],k=b.columns[e(b.columns,j)];if("string"==typeof j){i=d;for(var l=j.split("."),m=0;m<l.length;m++)i=i[l[m]];k&&k.searchFormatter&&(i=h(k,b.header.formatters[g],[i,d,f],i))}else i=d[j];if("string"==typeof i||"number"==typeof i)if(b.options.strictSearch){if((i+"").toLowerCase()===c)return!0}else if(-1!==(i+"").toLowerCase().indexOf(c))return!0}return!1}):this.data}},p.prototype.initPagination=function(){if(!this.options.pagination)return void this.$pagination.hide();this.$pagination.show();var b,d,e,f,g,h,i,j,k,l=this,m=[],n=!1,o=this.getData(),p=this.options.pageList;if("server"!==this.options.sidePagination&&(this.options.totalRows=o.length),this.totalPages=0,this.options.totalRows){if(this.options.pageSize===this.options.formatAllRows())this.options.pageSize=this.options.totalRows,n=!0;else if(this.options.pageSize===this.options.totalRows){var q="string"==typeof this.options.pageList?this.options.pageList.replace("[","").replace("]","").replace(/ /g,"").toLowerCase().split(","):this.options.pageList;a.inArray(this.options.formatAllRows().toLowerCase(),q)>-1&&(n=!0)}this.totalPages=~~((this.options.totalRows-1)/this.options.pageSize)+1,this.options.totalPages=this.totalPages}if(this.totalPages>0&&this.options.pageNumber>this.totalPages&&(this.options.pageNumber=this.totalPages),this.pageFrom=(this.options.pageNumber-1)*this.options.pageSize+1,this.pageTo=this.options.pageNumber*this.options.pageSize,this.pageTo>this.options.totalRows&&(this.pageTo=this.options.totalRows),m.push('<div class="pull-'+this.options.paginationDetailHAlign+' pagination-detail">','<span class="pagination-info">',this.options.onlyInfoPagination?this.options.formatDetailPagination(this.options.totalRows):this.options.formatShowingRows(this.pageFrom,this.pageTo,this.options.totalRows),"</span>"),!this.options.onlyInfoPagination){m.push('<span class="page-list">');var r=[c('<span class="btn-group %s">',"top"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?"dropdown":"dropup"),'<button type="button" class="btn'+c(" btn-%s",this.options.buttonsClass)+c(" btn-%s",this.options.iconSize)+' dropdown-toggle" data-toggle="dropdown">','<span class="page-size">',n?this.options.formatAllRows():this.options.pageSize,"</span>",' <span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">'];if("string"==typeof this.options.pageList){var s=this.options.pageList.replace("[","").replace("]","").replace(/ /g,"").split(",");p=[],a.each(s,function(a,b){p.push(b.toUpperCase()===l.options.formatAllRows().toUpperCase()?l.options.formatAllRows():+b)})}for(a.each(p,function(a,b){if(!l.options.smartDisplay||0===a||p[a-1]<=l.options.totalRows){var d;d=n?b===l.options.formatAllRows()?' class="active"':"":b===l.options.pageSize?' class="active"':"",r.push(c('<li%s><a href="javascript:void(0)">%s</a></li>',d,b))}}),r.push("</ul></span>"),m.push(this.options.formatRecordsPerPage(r.join(""))),m.push("</span>"),m.push("</div>",'<div class="pull-'+this.options.paginationHAlign+' pagination">','<ul class="pagination'+c(" pagination-%s",this.options.iconSize)+'">','<li class="page-pre"><a href="javascript:void(0)">'+this.options.paginationPreText+"</a></li>"),this.totalPages<5?(d=1,e=this.totalPages):(d=this.options.pageNumber-2,e=d+4,1>d&&(d=1,e=5),e>this.totalPages&&(e=this.totalPages,d=e-4)),this.totalPages>=6&&(this.options.pageNumber>=3&&(m.push('<li class="page-first'+(1===this.options.pageNumber?" active":"")+'">','<a href="javascript:void(0)">',1,"</a>","</li>"),d++),this.options.pageNumber>=4&&(4==this.options.pageNumber||6==this.totalPages||7==this.totalPages?d--:m.push('<li class="page-first-separator disabled">','<a href="javascript:void(0)">...</a>',"</li>"),e--)),this.totalPages>=7&&this.options.pageNumber>=this.totalPages-2&&d--,6==this.totalPages?this.options.pageNumber>=this.totalPages-2&&e++:this.totalPages>=7&&(7==this.totalPages||this.options.pageNumber>=this.totalPages-3)&&e++,b=d;e>=b;b++)m.push('<li class="page-number'+(b===this.options.pageNumber?" active":"")+'">','<a href="javascript:void(0)">',b,"</a>","</li>");this.totalPages>=8&&this.options.pageNumber<=this.totalPages-4&&m.push('<li class="page-last-separator disabled">','<a href="javascript:void(0)">...</a>',"</li>"),this.totalPages>=6&&this.options.pageNumber<=this.totalPages-3&&m.push('<li class="page-last'+(this.totalPages===this.options.pageNumber?" active":"")+'">','<a href="javascript:void(0)">',this.totalPages,"</a>","</li>"),m.push('<li class="page-next"><a href="javascript:void(0)">'+this.options.paginationNextText+"</a></li>","</ul>","</div>")}this.$pagination.html(m.join("")),this.options.onlyInfoPagination||(f=this.$pagination.find(".page-list a"),g=this.$pagination.find(".page-first"),h=this.$pagination.find(".page-pre"),i=this.$pagination.find(".page-next"),j=this.$pagination.find(".page-last"),k=this.$pagination.find(".page-number"),this.options.smartDisplay&&(this.totalPages<=1&&this.$pagination.find("div.pagination").hide(),(p.length<2||this.options.totalRows<=p[0])&&this.$pagination.find("span.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"]()),n&&(this.options.pageSize=this.options.formatAllRows()),f.off("click").on("click",a.proxy(this.onPageListChange,this)),g.off("click").on("click",a.proxy(this.onPageFirst,this)),h.off("click").on("click",a.proxy(this.onPagePre,this)),i.off("click").on("click",a.proxy(this.onPageNext,this)),j.off("click").on("click",a.proxy(this.onPageLast,this)),k.off("click").on("click",a.proxy(this.onPageNumber,this)))},p.prototype.updatePagination=function(b){b&&a(b.currentTarget).hasClass("disabled")||(this.options.maintainSelected||this.resetRows(),this.initPagination(),"server"===this.options.sidePagination?this.initServer():this.initBody(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize))},p.prototype.onPageListChange=function(b){var c=a(b.currentTarget);c.parent().addClass("active").siblings().removeClass("active"),this.options.pageSize=c.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+c.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(b)},p.prototype.onPageFirst=function(a){this.options.pageNumber=1,this.updatePagination(a)},p.prototype.onPagePre=function(a){this.options.pageNumber-1===0?this.options.pageNumber=this.options.totalPages:this.options.pageNumber--,this.updatePagination(a)},p.prototype.onPageNext=function(a){this.options.pageNumber+1>this.options.totalPages?this.options.pageNumber=1:this.options.pageNumber++,this.updatePagination(a)},p.prototype.onPageLast=function(a){this.options.pageNumber=this.totalPages,this.updatePagination(a)},p.prototype.onPageNumber=function(b){this.options.pageNumber!==+a(b.currentTarget).text()&&(this.options.pageNumber=+a(b.currentTarget).text(),this.updatePagination(b))},p.prototype.initBody=function(b){var f=this,g=[],i=this.getData();this.trigger("pre-body",i),this.$body=this.$el.find(">tbody"),this.$body.length||(this.$body=a("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=i.length);for(var k=this.pageFrom-1;k<this.pageTo;k++){var l,n=i[k],o={},p=[],q="",r={},s=[];if(o=h(this.options,this.options.rowStyle,[n,k],o),o&&o.css)for(l in o.css)p.push(l+": "+o.css[l]);if(r=h(this.options,this.options.rowAttributes,[n,k],r))for(l in r)s.push(c('%s="%s"',l,j(r[l])));n._data&&!a.isEmptyObject(n._data)&&a.each(n._data,function(a,b){"index"!==a&&(q+=c(' data-%s="%s"',a,b))}),g.push("<tr",c(" %s",s.join(" ")),c(' id="%s"',a.isArray(n)?void 0:n._id),c(' class="%s"',o.classes||(a.isArray(n)?void 0:n._class)),c(' data-index="%s"',k),c(' data-uniqueid="%s"',n[this.options.uniqueId]),c("%s",q),">"),this.options.cardView&&g.push(c('<td colspan="%s"><div class="card-views">',this.header.fields.length)),!this.options.cardView&&this.options.detailView&&g.push("<td>",'<a class="detail-icon" href="javascript:">',c('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.detailOpen),"</a>","</td>"),a.each(this.header.fields,function(b,e){var i="",j=m(n,e,f.options.escape),l="",q={},r="",s=f.header.classes[b],t="",u="",v="",w="",x=f.columns[b];if(!(f.fromHtml&&"undefined"==typeof j||!x.visible||f.options.cardView&&!x.cardVisible)){if(o=c('style="%s"',p.concat(f.header.styles[b]).join("; ")),n["_"+e+"_id"]&&(r=c(' id="%s"',n["_"+e+"_id"])),n["_"+e+"_class"]&&(s=c(' class="%s"',n["_"+e+"_class"])),n["_"+e+"_rowspan"]&&(u=c(' rowspan="%s"',n["_"+e+"_rowspan"])),n["_"+e+"_colspan"]&&(v=c(' colspan="%s"',n["_"+e+"_colspan"])),n["_"+e+"_title"]&&(w=c(' title="%s"',n["_"+e+"_title"])),q=h(f.header,f.header.cellStyles[b],[j,n,k,e],q),q.classes&&(s=c(' class="%s"',q.classes)),q.css){var y=[];for(var z in q.css)y.push(z+": "+q.css[z]);o=c('style="%s"',y.concat(f.header.styles[b]).join("; "))}j=h(x,f.header.formatters[b],[j,n,k],j),n["_"+e+"_data"]&&!a.isEmptyObject(n["_"+e+"_data"])&&a.each(n["_"+e+"_data"],function(a,b){"index"!==a&&(t+=c(' data-%s="%s"',a,b))}),x.checkbox||x.radio?(l=x.checkbox?"checkbox":l,l=x.radio?"radio":l,i=[c(f.options.cardView?'<div class="card-view %s">':'<td class="bs-checkbox %s">',x["class"]||""),"<input"+c(' data-index="%s"',k)+c(' name="%s"',f.options.selectItemName)+c(' type="%s"',l)+c(' value="%s"',n[f.options.idField])+c(' checked="%s"',j===!0||j&&j.checked?"checked":void 0)+c(' disabled="%s"',!x.checkboxEnabled||j&&j.disabled?"disabled":void 0)+" />",f.header.formatters[b]&&"string"==typeof j?j:"",f.options.cardView?"</div>":"</td>"].join(""),n[f.header.stateField]=j===!0||j&&j.checked):(j="undefined"==typeof j||null===j?f.options.undefinedText:j,i=f.options.cardView?['<div class="card-view">',f.options.showHeader?c('<span class="title" %s>%s</span>',o,d(f.columns,"field","title",e)):"",c('<span class="value">%s</span>',j),"</div>"].join(""):[c("<td%s %s %s %s %s %s %s>",r,s,o,t,u,v,w),j,"</td>"].join(""),f.options.cardView&&f.options.smartDisplay&&""===j&&(i='<div class="card-view"></div>')),g.push(i)}}),this.options.cardView&&g.push("</div></td>"),g.push("</tr>")}g.length||g.push('<tr class="no-records-found">',c('<td colspan="%s">%s</td>',this.$header.find("th").length,this.options.formatNoMatches()),"</tr>"),this.$body.html(g.join("")),b||this.scrollTo(0),this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",function(b){var d=a(this),g=d.parent(),h=f.data[g.data("index")],i=d[0].cellIndex,j=f.getVisibleFields(),k=j[f.options.detailView&&!f.options.cardView?i-1:i],l=f.columns[e(f.columns,k)],n=m(h,k,f.options.escape);if(!d.find(".detail-icon").length&&(f.trigger("click"===b.type?"click-cell":"dbl-click-cell",k,n,h,d),f.trigger("click"===b.type?"click-row":"dbl-click-row",h,g,k),
"click"===b.type&&f.options.clickToSelect&&l.clickToSelect)){var o=g.find(c('[name="%s"]',f.options.selectItemName));o.length&&o[0].click()}}),this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",function(){var b=a(this),d=b.parent().parent(),e=d.data("index"),g=i[e];if(d.next().is("tr.detail-view"))b.find("i").attr("class",c("%s %s",f.options.iconsPrefix,f.options.icons.detailOpen)),d.next().remove(),f.trigger("collapse-row",e,g);else{b.find("i").attr("class",c("%s %s",f.options.iconsPrefix,f.options.icons.detailClose)),d.after(c('<tr class="detail-view"><td colspan="%s"></td></tr>',d.find("td").length));var j=d.next().find("td"),k=h(f.options,f.options.detailFormatter,[e,g,j],"");1===j.length&&j.append(k),f.trigger("expand-row",e,g,j)}f.resetView()}),this.$selectItem=this.$body.find(c('[name="%s"]',this.options.selectItemName)),this.$selectItem.off("click").on("click",function(b){b.stopImmediatePropagation();var c=a(this),d=c.prop("checked"),e=f.data[c.data("index")];f.options.maintainSelected&&a(this).is(":radio")&&a.each(f.options.data,function(a,b){b[f.header.stateField]=!1}),e[f.header.stateField]=d,f.options.singleSelect&&(f.$selectItem.not(this).each(function(){f.data[a(this).data("index")][f.header.stateField]=!1}),f.$selectItem.filter(":checked").not(this).prop("checked",!1)),f.updateSelected(),f.trigger(d?"check":"uncheck",e,c)}),a.each(this.header.events,function(b,c){if(c){"string"==typeof c&&(c=h(null,c));var d=f.header.fields[b],e=a.inArray(d,f.getVisibleFields());f.options.detailView&&!f.options.cardView&&(e+=1);for(var g in c)f.$body.find(">tr:not(.no-records-found)").each(function(){var b=a(this),h=b.find(f.options.cardView?".card-view":"td").eq(e),i=g.indexOf(" "),j=g.substring(0,i),k=g.substring(i+1),l=c[g];h.find(k).off(j).on(j,function(a){var c=b.data("index"),e=f.data[c],g=e[d];l.apply(this,[a,g,e,c])})})}}),this.updateSelected(),this.resetView(),this.trigger("post-body",i)},p.prototype.initServer=function(b,c,d){var e,f=this,g={},i={searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};this.options.pagination&&(i.pageSize=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,i.pageNumber=this.options.pageNumber),(d||this.options.url||this.options.ajax)&&("limit"===this.options.queryParamsType&&(i={search:i.searchText,sort:i.sortName,order:i.sortOrder},this.options.pagination&&(i.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1),i.limit=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize)),a.isEmptyObject(this.filterColumnsPartial)||(i.filter=JSON.stringify(this.filterColumnsPartial,null)),g=h(this.options,this.options.queryParams,[i],g),a.extend(g,c||{}),g!==!1&&(b||this.$tableLoading.show(),e=a.extend({},h(null,this.options.ajaxOptions),{type:this.options.method,url:d||this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(g):g,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(a){a=h(f.options,f.options.responseHandler,[a],a),f.load(a),f.trigger("load-success",a),b||f.$tableLoading.hide()},error:function(a){f.trigger("load-error",a.status,a),b||f.$tableLoading.hide()}}),this.options.ajax?h(this,this.options.ajax,[e],null):(this._xhr&&4!==this._xhr.readyState&&this._xhr.abort(),this._xhr=a.ajax(e))))},p.prototype.initSearchText=function(){if(this.options.search&&""!==this.options.searchText){var a=this.$toolbar.find(".search input");a.val(this.options.searchText),this.onSearch({currentTarget:a})}},p.prototype.getCaret=function(){var b=this;a.each(this.$header.find("th"),function(c,d){a(d).find(".sortable").removeClass("desc asc").addClass(a(d).data("field")===b.options.sortName?b.options.sortOrder:"both")})},p.prototype.updateSelected=function(){var b=this.$selectItem.filter(":enabled").length&&this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",b),this.$selectItem.each(function(){a(this).closest("tr")[a(this).prop("checked")?"addClass":"removeClass"]("selected")})},p.prototype.updateRows=function(){var b=this;this.$selectItem.each(function(){b.data[a(this).data("index")][b.header.stateField]=a(this).prop("checked")})},p.prototype.resetRows=function(){var b=this;a.each(this.data,function(a,c){b.$selectAll.prop("checked",!1),b.$selectItem.prop("checked",!1),b.header.stateField&&(c[b.header.stateField]=!1)})},p.prototype.trigger=function(b){var c=Array.prototype.slice.call(arguments,1);b+=".bs.table",this.options[p.EVENTS[b]].apply(this.options,c),this.$el.trigger(a.Event(b),c),this.options.onAll(b,c),this.$el.trigger(a.Event("all.bs.table"),[b,c])},p.prototype.resetHeader=function(){clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(a.proxy(this.fitHeader,this),this.$el.is(":hidden")?100:0)},p.prototype.fitHeader=function(){var b,d,e,f,h=this;if(h.$el.is(":hidden"))return void(h.timeoutId_=setTimeout(a.proxy(h.fitHeader,h),100));if(b=this.$tableBody.get(0),d=b.scrollWidth>b.clientWidth&&b.scrollHeight>b.clientHeight+this.$header.outerHeight()?g():0,this.$el.css("margin-top",-this.$header.outerHeight()),e=a(":focus"),e.length>0){var i=e.parents("th");if(i.length>0){var j=i.attr("data-field");if(void 0!==j){var k=this.$header.find("[data-field='"+j+"']");k.length>0&&k.find(":input").addClass("focus-temp")}}}this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find('[name="btSelectAll"]'),this.$tableHeader.css({"margin-right":d}).find("table").css("width",this.$el.outerWidth()).html("").attr("class",this.$el.attr("class")).append(this.$header_),f=a(".focus-temp:visible:eq(0)"),f.length>0&&(f.focus(),this.$header.find(".focus-temp").removeClass("focus-temp")),this.$header.find("th[data-field]").each(function(){h.$header_.find(c('th[data-field="%s"]',a(this).data("field"))).data(a(this).data())});var l=this.getVisibleFields(),m=this.$header_.find("th");this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(b){var d=a(this),e=b;h.options.detailView&&!h.options.cardView&&(0===b&&h.$header_.find("th.detail").find(".fht-cell").width(d.innerWidth()),e=b-1);var f=h.$header_.find(c('th[data-field="%s"]',l[e]));f.length>1&&(f=a(m[d[0].cellIndex])),f.find(".fht-cell").width(d.innerWidth())}),this.$tableBody.off("scroll").on("scroll",function(){h.$tableHeader.scrollLeft(a(this).scrollLeft()),h.options.showFooter&&!h.options.cardView&&h.$tableFooter.scrollLeft(a(this).scrollLeft())}),h.trigger("post-header")},p.prototype.resetFooter=function(){var b=this,d=b.getData(),e=[];this.options.showFooter&&!this.options.cardView&&(!this.options.cardView&&this.options.detailView&&e.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>'),a.each(this.columns,function(a,f){var g,i="",j="",k=[],l={},m=c(' class="%s"',f["class"]);if(f.visible&&(!b.options.cardView||f.cardVisible)){if(i=c("text-align: %s; ",f.falign?f.falign:f.align),j=c("vertical-align: %s; ",f.valign),l=h(null,b.options.footerStyle),l&&l.css)for(g in l.css)k.push(g+": "+l.css[g]);e.push("<td",m,c(' style="%s"',i+j+k.concat().join("; ")),">"),e.push('<div class="th-inner">'),e.push(h(f,f.footerFormatter,[d],"&nbsp;")||"&nbsp;"),e.push("</div>"),e.push('<div class="fht-cell"></div>'),e.push("</div>"),e.push("</td>")}}),this.$tableFooter.find("tr").html(e.join("")),this.$tableFooter.show(),clearTimeout(this.timeoutFooter_),this.timeoutFooter_=setTimeout(a.proxy(this.fitFooter,this),this.$el.is(":hidden")?100:0))},p.prototype.fitFooter=function(){var b,c,d;return clearTimeout(this.timeoutFooter_),this.$el.is(":hidden")?void(this.timeoutFooter_=setTimeout(a.proxy(this.fitFooter,this),100)):(c=this.$el.css("width"),d=c>this.$tableBody.width()?g():0,this.$tableFooter.css({"margin-right":d}).find("table").css("width",c).attr("class",this.$el.attr("class")),b=this.$tableFooter.find("td"),void this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(c){var d=a(this);b.eq(c).find(".fht-cell").width(d.innerWidth())}))},p.prototype.toggleColumn=function(a,b,d){if(-1!==a&&(this.columns[a].visible=b,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var e=this.$toolbar.find(".keep-open input").prop("disabled",!1);d&&e.filter(c('[value="%s"]',a)).prop("checked",b),e.filter(":checked").length<=this.options.minimumCountColumns&&e.filter(":checked").prop("disabled",!0)}},p.prototype.toggleRow=function(a,b,d){-1!==a&&this.$body.find("undefined"!=typeof a?c('tr[data-index="%s"]',a):c('tr[data-uniqueid="%s"]',b))[d?"show":"hide"]()},p.prototype.getVisibleFields=function(){var b=this,c=[];return a.each(this.header.fields,function(a,d){var f=b.columns[e(b.columns,d)];f.visible&&c.push(d)}),c},p.prototype.resetView=function(a){var b=0;if(a&&a.height&&(this.options.height=a.height),this.$selectAll.prop("checked",this.$selectItem.length>0&&this.$selectItem.length===this.$selectItem.filter(":checked").length),this.options.height){var c=k(this.$toolbar),d=k(this.$pagination),e=this.options.height-c-d;this.$tableContainer.css("height",e+"px")}return this.options.cardView?(this.$el.css("margin-top","0"),this.$tableContainer.css("padding-bottom","0"),void this.$tableFooter.hide()):(this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),b+=this.$header.outerHeight()):(this.$tableHeader.hide(),this.trigger("post-header")),this.options.showFooter&&(this.resetFooter(),this.options.height&&(b+=this.$tableFooter.outerHeight()+1)),this.getCaret(),this.$tableContainer.css("padding-bottom",b+"px"),void this.trigger("reset-view"))},p.prototype.getData=function(b){return!this.searchText&&a.isEmptyObject(this.filterColumns)&&a.isEmptyObject(this.filterColumnsPartial)?b?this.options.data.slice(this.pageFrom-1,this.pageTo):this.options.data:b?this.data.slice(this.pageFrom-1,this.pageTo):this.data},p.prototype.load=function(b){var c=!1;"server"===this.options.sidePagination?(this.options.totalRows=b.total,c=b.fixedScroll,b=b[this.options.dataField]):a.isArray(b)||(c=b.fixedScroll,b=b.data),this.initData(b),this.initSearch(),this.initPagination(),this.initBody(c)},p.prototype.append=function(a){this.initData(a,"append"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)},p.prototype.prepend=function(a){this.initData(a,"prepend"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)},p.prototype.remove=function(b){var c,d,e=this.options.data.length;if(b.hasOwnProperty("field")&&b.hasOwnProperty("values")){for(c=e-1;c>=0;c--)d=this.options.data[c],d.hasOwnProperty(b.field)&&-1!==a.inArray(d[b.field],b.values)&&this.options.data.splice(c,1);e!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},p.prototype.removeAll=function(){this.options.data.length>0&&(this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))},p.prototype.getRowByUniqueId=function(a){var b,c,d,e=this.options.uniqueId,f=this.options.data.length,g=null;for(b=f-1;b>=0;b--){if(c=this.options.data[b],c.hasOwnProperty(e))d=c[e];else{if(!c._data.hasOwnProperty(e))continue;d=c._data[e]}if("string"==typeof d?a=a.toString():"number"==typeof d&&(Number(d)===d&&d%1===0?a=parseInt(a):d===Number(d)&&0!==d&&(a=parseFloat(a))),d===a){g=c;break}}return g},p.prototype.removeByUniqueId=function(a){var b=this.options.data.length,c=this.getRowByUniqueId(a);c&&this.options.data.splice(this.options.data.indexOf(c),1),b!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initBody(!0))},p.prototype.updateByUniqueId=function(b){var c=this,d=a.isArray(b)?b:[b];a.each(d,function(b,d){var e;d.hasOwnProperty("id")&&d.hasOwnProperty("row")&&(e=a.inArray(c.getRowByUniqueId(d.id),c.options.data),-1!==e&&a.extend(c.options.data[e],d.row))}),this.initSearch(),this.initSort(),this.initBody(!0)},p.prototype.insertRow=function(a){a.hasOwnProperty("index")&&a.hasOwnProperty("row")&&(this.data.splice(a.index,0,a.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))},p.prototype.updateRow=function(b){var c=this,d=a.isArray(b)?b:[b];a.each(d,function(b,d){d.hasOwnProperty("index")&&d.hasOwnProperty("row")&&a.extend(c.options.data[d.index],d.row)}),this.initSearch(),this.initSort(),this.initBody(!0)},p.prototype.showRow=function(a){(a.hasOwnProperty("index")||a.hasOwnProperty("uniqueId"))&&this.toggleRow(a.index,a.uniqueId,!0)},p.prototype.hideRow=function(a){(a.hasOwnProperty("index")||a.hasOwnProperty("uniqueId"))&&this.toggleRow(a.index,a.uniqueId,!1)},p.prototype.getRowsHidden=function(b){var c=a(this.$body[0]).children().filter(":hidden"),d=0;if(b)for(;d<c.length;d++)a(c[d]).show();return c},p.prototype.mergeCells=function(b){var c,d,e,f=b.index,g=a.inArray(b.field,this.getVisibleFields()),h=b.rowspan||1,i=b.colspan||1,j=this.$body.find(">tr");if(this.options.detailView&&!this.options.cardView&&(g+=1),e=j.eq(f).find(">td").eq(g),!(0>f||0>g||f>=this.data.length)){for(c=f;f+h>c;c++)for(d=g;g+i>d;d++)j.eq(c).find(">td").eq(d).hide();e.attr("rowspan",h).attr("colspan",i).show()}},p.prototype.updateCell=function(a){a.hasOwnProperty("index")&&a.hasOwnProperty("field")&&a.hasOwnProperty("value")&&(this.data[a.index][a.field]=a.value,a.reinit!==!1&&(this.initSort(),this.initBody(!0)))},p.prototype.getOptions=function(){return this.options},p.prototype.getSelections=function(){var b=this;return a.grep(this.options.data,function(a){return a[b.header.stateField]})},p.prototype.getAllSelections=function(){var b=this;return a.grep(this.options.data,function(a){return a[b.header.stateField]})},p.prototype.checkAll=function(){this.checkAll_(!0)},p.prototype.uncheckAll=function(){this.checkAll_(!1)},p.prototype.checkInvert=function(){var b=this,c=b.$selectItem.filter(":enabled"),d=c.filter(":checked");c.each(function(){a(this).prop("checked",!a(this).prop("checked"))}),b.updateRows(),b.updateSelected(),b.trigger("uncheck-some",d),d=b.getSelections(),b.trigger("check-some",d)},p.prototype.checkAll_=function(a){var b;a||(b=this.getSelections()),this.$selectAll.add(this.$selectAll_).prop("checked",a),this.$selectItem.filter(":enabled").prop("checked",a),this.updateRows(),a&&(b=this.getSelections()),this.trigger(a?"check-all":"uncheck-all",b)},p.prototype.check=function(a){this.check_(!0,a)},p.prototype.uncheck=function(a){this.check_(!1,a)},p.prototype.check_=function(a,b){var d=this.$selectItem.filter(c('[data-index="%s"]',b)).prop("checked",a);this.data[b][this.header.stateField]=a,this.updateSelected(),this.trigger(a?"check":"uncheck",this.data[b],d)},p.prototype.checkBy=function(a){this.checkBy_(!0,a)},p.prototype.uncheckBy=function(a){this.checkBy_(!1,a)},p.prototype.checkBy_=function(b,d){if(d.hasOwnProperty("field")&&d.hasOwnProperty("values")){var e=this,f=[];a.each(this.options.data,function(g,h){if(!h.hasOwnProperty(d.field))return!1;if(-1!==a.inArray(h[d.field],d.values)){var i=e.$selectItem.filter(":enabled").filter(c('[data-index="%s"]',g)).prop("checked",b);h[e.header.stateField]=b,f.push(h),e.trigger(b?"check":"uncheck",h,i)}}),this.updateSelected(),this.trigger(b?"check-some":"uncheck-some",f)}},p.prototype.destroy=function(){this.$el.insertBefore(this.$container),a(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"")},p.prototype.showLoading=function(){this.$tableLoading.show()},p.prototype.hideLoading=function(){this.$tableLoading.hide()},p.prototype.togglePagination=function(){this.options.pagination=!this.options.pagination;var a=this.$toolbar.find('button[name="paginationSwitch"] i');this.options.pagination?a.attr("class",this.options.iconsPrefix+" "+this.options.icons.paginationSwitchDown):a.attr("class",this.options.iconsPrefix+" "+this.options.icons.paginationSwitchUp),this.updatePagination()},p.prototype.refresh=function(a){a&&a.url&&(this.options.pageNumber=1),this.initServer(a&&a.silent,a&&a.query,a&&a.url),this.trigger("refresh",a)},p.prototype.resetWidth=function(){this.options.showHeader&&this.options.height&&this.fitHeader(),this.options.showFooter&&this.fitFooter()},p.prototype.showColumn=function(a){this.toggleColumn(e(this.columns,a),!0,!0)},p.prototype.hideColumn=function(a){this.toggleColumn(e(this.columns,a),!1,!0)},p.prototype.getHiddenColumns=function(){return a.grep(this.columns,function(a){return!a.visible})},p.prototype.getVisibleColumns=function(){return a.grep(this.columns,function(a){return a.visible})},p.prototype.toggleAllColumns=function(b){if(a.each(this.columns,function(a){this.columns[a].visible=b}),this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns){var c=this.$toolbar.find(".keep-open input").prop("disabled",!1);c.filter(":checked").length<=this.options.minimumCountColumns&&c.filter(":checked").prop("disabled",!0)}},p.prototype.showAllColumns=function(){this.toggleAllColumns(!0)},p.prototype.hideAllColumns=function(){this.toggleAllColumns(!1)},p.prototype.filterBy=function(b){this.filterColumns=a.isEmptyObject(b)?{}:b,this.options.pageNumber=1,this.initSearch(),this.updatePagination()},p.prototype.scrollTo=function(a){return"string"==typeof a&&(a="bottom"===a?this.$tableBody[0].scrollHeight:0),"number"==typeof a&&this.$tableBody.scrollTop(a),"undefined"==typeof a?this.$tableBody.scrollTop():void 0},p.prototype.getScrollPosition=function(){return this.scrollTo()},p.prototype.selectPage=function(a){a>0&&a<=this.options.totalPages&&(this.options.pageNumber=a,this.updatePagination())},p.prototype.prevPage=function(){this.options.pageNumber>1&&(this.options.pageNumber--,this.updatePagination())},p.prototype.nextPage=function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())},p.prototype.toggleView=function(){this.options.cardView=!this.options.cardView,this.initHeader(),this.initBody(),this.trigger("toggle",this.options.cardView)},p.prototype.refreshOptions=function(b){i(this.options,b,!0)||(this.options=a.extend(this.options,b),this.trigger("refresh-options",this.options),this.destroy(),this.init())},p.prototype.resetSearch=function(a){var b=this.$toolbar.find(".search input");b.val(a||""),this.onSearch({currentTarget:b})},p.prototype.expandRow_=function(a,b){var d=this.$body.find(c('> tr[data-index="%s"]',b));d.next().is("tr.detail-view")===(a?!1:!0)&&d.find("> td > .detail-icon").click()},p.prototype.expandRow=function(a){this.expandRow_(!0,a)},p.prototype.collapseRow=function(a){this.expandRow_(!1,a)},p.prototype.expandAllRows=function(b){if(b){var d=this.$body.find(c('> tr[data-index="%s"]',0)),e=this,f=null,g=!1,h=-1;if(d.next().is("tr.detail-view")?d.next().next().is("tr.detail-view")||(d.next().find(".detail-icon").click(),g=!0):(d.find("> td > .detail-icon").click(),g=!0),g)try{h=setInterval(function(){f=e.$body.find("tr.detail-view").last().find(".detail-icon"),f.length>0?f.click():clearInterval(h)},1)}catch(i){clearInterval(h)}}else for(var j=this.$body.children(),k=0;k<j.length;k++)this.expandRow_(!0,a(j[k]).data("index"))},p.prototype.collapseAllRows=function(b){if(b)this.expandRow_(!1,0);else for(var c=this.$body.children(),d=0;d<c.length;d++)this.expandRow_(!1,a(c[d]).data("index"))},p.prototype.updateFormatText=function(a,b){this.options[c("format%s",a)]&&("string"==typeof b?this.options[c("format%s",a)]=function(){return b}:"function"==typeof b&&(this.options[c("format%s",a)]=b)),this.initToolbar(),this.initPagination(),this.initBody()};var q=["getOptions","getSelections","getAllSelections","getData","load","append","prepend","remove","removeAll","insertRow","updateRow","updateCell","updateByUniqueId","removeByUniqueId","getRowByUniqueId","showRow","hideRow","getRowsHidden","mergeCells","checkAll","uncheckAll","checkInvert","check","uncheck","checkBy","uncheckBy","refresh","resetView","resetWidth","destroy","showLoading","hideLoading","showColumn","hideColumn","getHiddenColumns","getVisibleColumns","showAllColumns","hideAllColumns","filterBy","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","togglePagination","toggleView","refreshOptions","resetSearch","expandRow","collapseRow","expandAllRows","collapseAllRows","updateFormatText"];a.fn.bootstrapTable=function(b){var c,d=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=a(this),f=e.data("bootstrap.table"),g=a.extend({},p.DEFAULTS,e.data(),"object"==typeof b&&b);if("string"==typeof b){if(a.inArray(b,q)<0)throw new Error("Unknown method: "+b);if(!f)return;c=f[b].apply(f,d),"destroy"===b&&e.removeData("bootstrap.table")}f||e.data("bootstrap.table",f=new p(this,g))}),"undefined"==typeof c?this:c},a.fn.bootstrapTable.Constructor=p,a.fn.bootstrapTable.defaults=p.DEFAULTS,a.fn.bootstrapTable.columnDefaults=p.COLUMN_DEFAULTS,a.fn.bootstrapTable.locales=p.LOCALES,a.fn.bootstrapTable.methods=q,a.fn.bootstrapTable.utils={sprintf:c,getFieldIndex:e,compareObjects:i,calculateObjectValue:h,getItemField:m,objectKeys:o,isIEBrowser:n},a(function(){a('[data-toggle="table"]').bootstrapTable()})}(jQuery);
/*
* bootstrap-table - v1.11.0 - 2016-07-02
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2016 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";a.fn.bootstrapTable.locales["zh-CN"]={formatLoadingMessage:function(){return"正在努力地加载数据中，请稍候……"},formatRecordsPerPage:function(a){return"每页显示 "+a+" 条记录"},formatShowingRows:function(a,b,c){return"显示第 "+a+" 到第 "+b+" 条记录，总共 "+c+" 条记录"},formatSearch:function(){return"搜索"},formatNoMatches:function(){return"没有找到匹配的记录"},formatPaginationSwitch:function(){return"隐藏/显示分页"},formatRefresh:function(){return"刷新"},formatToggle:function(){return"切换"},formatColumns:function(){return"列"},formatExport:function(){return"导出数据"},formatClearFilters:function(){return"清空过滤"}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales["zh-CN"])}(jQuery);
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});
/*! version : 4.17.42
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */
!function(a){"use strict";if("function"==typeof define&&define.amd)
// AMD is used - Register as an anonymous module.
define(["jquery","moment"],a);else if("object"==typeof exports)a(require("jquery"),require("moment"));else{
// Neither AMD nor CommonJS used. Use global variables.
if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment)}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function(c,d){var e,f,g,h,i,j,k,l={},m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},w={},/********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/
x=function(){return void 0!==b.tz&&void 0!==d.timeZone&&null!==d.timeZone&&""!==d.timeZone},y=function(a){var c;return c=void 0===a||null===a?b():x()?b.tz(a,j,d.useStrict,d.timeZone):b(a,j,d.useStrict),x()&&c.tz(d.timeZone),c},z=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return-1!==i.indexOf("Y");case"M":return-1!==i.indexOf("M");case"d":return-1!==i.toLowerCase().indexOf("d");case"h":case"H":return-1!==i.toLowerCase().indexOf("h");case"m":return-1!==i.indexOf("m");case"s":return-1!==i.indexOf("s");default:return!1}},A=function(){return z("h")||z("m")||z("s")},B=function(){return z("y")||z("M")||z("d")},C=function(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]},D=function(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return z("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:d.tooltips.pickHour}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),z("m")&&(z("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:d.tooltips.pickMinute}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),z("s")&&(z("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:d.tooltips.pickSecond}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),h||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:d.tooltips.togglePeriod}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]))},E=function(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[D()];return z("h")&&e.push(b),z("m")&&e.push(c),z("s")&&e.push(d),e},F=function(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&B()&&A()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:d.tooltips.selectTime}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))},G=function(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(C()),e=a("<div>").addClass("timepicker").append(E()),f=a("<ul>").addClass("list-unstyled"),g=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(F());return d.inline&&b.removeClass("dropdown-menu"),h&&b.addClass("usetwentyfour"),z("s")&&!h&&b.addClass("wider"),d.sideBySide&&B()&&A()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(g),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(g),b):("top"===d.toolbarPlacement&&f.append(g),B()&&f.append(a("<li>").addClass(d.collapse&&A()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&f.append(g),A()&&f.append(a("<li>").addClass(d.collapse&&B()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&f.append(g),b.append(f))},H=function(){var b,e={};return b=c.is("input")||d.inline?c.data():c.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c])}),e},I=function(){var b,e=(n||c).position(),f=(n||c).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(c.is("input"))b=c.after(o).parent();else{if(d.inline)return void(b=c.append(o));b=c,c.children().first().after(o)}if(
// Top and bottom logic
"auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+c.outerHeight()<f.top?"top":"bottom"),
// Left and right logic
"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),
// find the first parent element that has a relative css positioning
"relative"!==b.css("position")&&(b=b.parents().filter(function(){return"relative"===a(this).css("position")}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a relative positioned container");o.css({top:"top"===g?"auto":e.top+c.outerHeight(),bottom:"top"===g?b.outerHeight()-(b===c?0:e.top):"auto",left:"left"===h?b===c?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-c.outerWidth()-(b===c?0:e.left)})},J=function(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||c.trigger(a)},K=function(a){"y"===a&&(a="YYYY"),J({type:"dp.update",change:a,viewDate:f.clone()})},L=function(a){o&&(a&&(k=Math.max(p,Math.min(3,k+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[k].clsName).show())},M=function(){var b=a("<tr>"),c=f.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(f.clone().endOf("w"));)b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");o.find(".datepicker-days thead").append(b)},N=function(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0},O=function(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0},P=function(a){return d.disabledHours[a.format("H")]===!0},Q=function(a){return d.enabledHours[a.format("H")]===!0},R=function(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&N(b))return!1;if(d.enabledDates&&"d"===c&&!O(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&-1!==d.daysOfWeekDisabled.indexOf(b.day()))return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&P(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!Q(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){return b.isBetween(this[0],this[1])?(e=!0,!1):void 0}),e)return!1}return!0},S=function(){for(var b=[],c=f.clone().startOf("y").startOf("d");c.isSame(f,"y");)b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");o.find(".datepicker-months td").empty().append(b)},T=function(){var b=o.find(".datepicker-months"),c=b.find("th"),g=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),R(f.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(f.year()),R(f.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),g.removeClass("active"),e.isSame(f,"y")&&!m&&g.eq(e.month()).addClass("active"),g.each(function(b){R(f.clone().month(b),"M")||a(this).addClass("disabled")})},U=function(){var a=o.find(".datepicker-years"),b=a.find("th"),c=f.clone().subtract(5,"y"),g=f.clone().add(6,"y"),h="";for(b.eq(0).find("span").attr("title",d.tooltips.prevDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+g.year()),d.maxDate&&d.maxDate.isBefore(g,"y")&&b.eq(2).addClass("disabled");!c.isAfter(g,"y");)h+='<span data-action="selectYear" class="year'+(c.isSame(e,"y")&&!m?" active":"")+(R(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");a.find("td").html(h)},V=function(){var a,c=o.find(".datepicker-decades"),g=c.find("th"),h=b({y:f.year()-f.year()%100-1}),i=h.clone().add(100,"y"),j=h.clone(),k=!1,l=!1,m="";for(g.eq(0).find("span").attr("title",d.tooltips.prevCentury),g.eq(2).find("span").attr("title",d.tooltips.nextCentury),c.find(".disabled").removeClass("disabled"),(h.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(h,"y"))&&g.eq(0).addClass("disabled"),g.eq(1).text(h.year()+"-"+i.year()),(h.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(i,"y"))&&g.eq(2).addClass("disabled");!h.isAfter(i,"y");)a=h.year()+12,k=d.minDate&&d.minDate.isAfter(h,"y")&&d.minDate.year()<=a,l=d.maxDate&&d.maxDate.isAfter(h,"y")&&d.maxDate.year()<=a,m+='<span data-action="selectDecade" class="decade'+(e.isAfter(h)&&e.year()<=a?" active":"")+(R(h,"y")||k||l?"":" disabled")+'" data-selection="'+(h.year()+6)+'">'+(h.year()+1)+" - "+(h.year()+12)+"</span>",h.add(12,"y");m+="<span></span><span></span><span></span>",c.find("td").html(m),g.eq(1).text(j.year()+1+"-"+h.year())},W=function(){var b,c,g,h,i=o.find(".datepicker-days"),j=i.find("th"),k=[];if(B()){for(j.eq(0).find("span").attr("title",d.tooltips.prevMonth),j.eq(1).attr("title",d.tooltips.selectMonth),j.eq(2).find("span").attr("title",d.tooltips.nextMonth),i.find(".disabled").removeClass("disabled"),j.eq(1).text(f.format(d.dayViewHeaderFormat)),R(f.clone().subtract(1,"M"),"M")||j.eq(0).addClass("disabled"),R(f.clone().add(1,"M"),"M")||j.eq(2).addClass("disabled"),b=f.clone().startOf("M").startOf("w").startOf("d"),h=0;42>h;h++)//always display 42 days (should show 6 weeks)
0===b.weekday()&&(c=a("<tr>"),d.calendarWeeks&&c.append('<td class="cw">'+b.week()+"</td>"),k.push(c)),g="",b.isBefore(f,"M")&&(g+=" old"),b.isAfter(f,"M")&&(g+=" new"),b.isSame(e,"d")&&!m&&(g+=" active"),R(b,"d")||(g+=" disabled"),b.isSame(y(),"d")&&(g+=" today"),0!==b.day()&&6!==b.day()||(g+=" weekend"),c.append('<td data-action="selectDay" data-day="'+b.format("L")+'" class="day'+g+'">'+b.date()+"</td>"),b.add(1,"d");i.find("tbody").empty().append(k),T(),U(),V()}},X=function(){var b=o.find(".timepicker-hours table"),c=f.clone().startOf("d"),d=[],e=a("<tr>");for(f.hour()>11&&!h&&c.hour(12);c.isSame(f,"d")&&(h||f.hour()<12&&c.hour()<12||f.hour()>11);)c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(R(c,"h")?"":" disabled")+'">'+c.format(h?"HH":"hh")+"</td>"),c.add(1,"h");b.empty().append(d)},Y=function(){for(var b=o.find(".timepicker-minutes table"),c=f.clone().startOf("h"),e=[],g=a("<tr>"),h=1===d.stepping?5:d.stepping;f.isSame(c,"h");)c.minute()%(4*h)===0&&(g=a("<tr>"),e.push(g)),g.append('<td data-action="selectMinute" class="minute'+(R(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(h,"m");b.empty().append(e)},Z=function(){for(var b=o.find(".timepicker-seconds table"),c=f.clone().startOf("m"),d=[],e=a("<tr>");f.isSame(c,"m");)c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(R(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");b.empty().append(d)},$=function(){var a,b,c=o.find(".timepicker span[data-time-component]");h||(a=o.find(".timepicker [data-action=togglePeriod]"),b=e.clone().add(e.hours()>=12?-12:12,"h"),a.text(e.format("A")),R(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(e.format(h?"HH":"hh")),c.filter("[data-time-component=minutes]").text(e.format("mm")),c.filter("[data-time-component=seconds]").text(e.format("ss")),X(),Y(),Z()},_=function(){o&&(W(),$())},aa=function(a){var b=m?null:e;
// case of calling setValue(null or false)
// case of calling setValue(null or false)
//viewDate = date.clone(); // TODO this doesn't work right on first use
return a?(a=a.clone().locale(d.locale),x()&&a.tz(d.timeZone),1!==d.stepping&&a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping).seconds(0),void(R(a)?(e=a,g.val(e.format(i)),c.data("date",e.format(i)),m=!1,_(),J({type:"dp.change",date:e.clone(),oldDate:b})):(d.keepInvalid?J({type:"dp.change",date:a,oldDate:b}):g.val(m?"":e.format(i)),J({type:"dp.error",date:a,oldDate:b})))):(m=!0,g.val(""),c.data("date",""),J({type:"dp.change",date:!1,oldDate:b}),void _())},/**
             * Hides the widget. Possibly will emit dp.hide
             */
ba=function(){var b=!1;
// Ignore event if in the middle of a picker transition
return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return c&&c.transitioning?(b=!0,!1):!0}),b?l:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",I),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,J({type:"dp.hide",date:e.clone()}),g.blur(),k=0,f=e.clone(),l)):l},ca=function(){aa(null)},da=function(a){
//inputDate.locale(options.locale);
return void 0===d.parseInputDate?b.isMoment(a)||(a=y(a)):a=d.parseInputDate(a),a},/********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
ea={next:function(){var a=q[k].navFnc;f.add(q[k].navStep,a),W(),K(a)},previous:function(){var a=q[k].navFnc;f.subtract(q[k].navStep,a),W(),K(a)},pickerSwitch:function(){L(1)},selectMonth:function(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c),k===p?(aa(e.clone().year(f.year()).month(f.month())),d.inline||ba()):(L(-1),W()),K("M")},selectYear:function(b){var c=parseInt(a(b.target).text(),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY")},selectDecade:function(b){var c=parseInt(a(b.target).data("selection"),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY")},selectDay:function(b){var c=f.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),aa(c.date(parseInt(a(b.target).text(),10))),A()||d.keepOpen||d.inline||ba()},incrementHours:function(){var a=e.clone().add(1,"h");R(a,"h")&&aa(a)},incrementMinutes:function(){var a=e.clone().add(d.stepping,"m");R(a,"m")&&aa(a)},incrementSeconds:function(){var a=e.clone().add(1,"s");R(a,"s")&&aa(a)},decrementHours:function(){var a=e.clone().subtract(1,"h");R(a,"h")&&aa(a)},decrementMinutes:function(){var a=e.clone().subtract(d.stepping,"m");R(a,"m")&&aa(a)},decrementSeconds:function(){var a=e.clone().subtract(1,"s");R(a,"s")&&aa(a)},togglePeriod:function(){aa(e.clone().add(e.hours()>=12?-12:12,"h"))},togglePicker:function(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(// if collapse plugin is available through bootstrap.js then use it
g.collapse("hide"),h.collapse("show")):(// otherwise just toggle in class on the two views
g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date)}},showPicker:function(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show()},showHours:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show()},showMinutes:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);h||(e.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),aa(e.clone().hours(c)),ea.showPicker.call(l)},selectMinute:function(b){aa(e.clone().minutes(parseInt(a(b.target).text(),10))),ea.showPicker.call(l)},selectSecond:function(b){aa(e.clone().seconds(parseInt(a(b.target).text(),10))),ea.showPicker.call(l)},clear:ca,today:function(){var a=y();R(a,"d")&&aa(a)},close:ba},fa=function(b){return a(b.currentTarget).is(".disabled")?!1:(ea[a(b.currentTarget).data("action")].apply(l,arguments),!1)},/**
             * Shows the widget. Possibly will emit dp.show and dp.change
             */
ga=function(){var b,c={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};// this handles clicks on the widget
return g.prop("disabled")||!d.ignoreReadonly&&g.prop("readonly")||o?l:(void 0!==g.val()&&0!==g.val().trim().length?aa(da(g.val().trim())):m&&d.useCurrent&&(d.inline||g.is("input")&&0===g.val().trim().length)&&(b=y(),"string"==typeof d.useCurrent&&(b=c[d.useCurrent](b)),aa(b)),o=G(),M(),S(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),_(),L(),a(window).on("resize",I),o.on("click","[data-action]",fa),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),I(),o.show(),d.focusOnShow&&!g.is(":focus")&&g.focus(),J({type:"dp.show"}),l)},/**
             * Shows or hides the widget
             */
ha=function(){return o?ba():ga()},ia=function(a){var b,c,e,f,g=null,h=[],i={},j=a.which,k="p";w[j]=k;for(b in w)w.hasOwnProperty(b)&&w[b]===k&&(h.push(b),parseInt(b,10)!==j&&(i[b]=!0));for(b in d.keyBinds)if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[j]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--)if(!(v[e[c]]in i)){f=!1;break}if(f){g=d.keyBinds[b];break}}g&&(g.call(l,o),a.stopPropagation(),a.preventDefault())},ja=function(a){w[a.which]="r",a.stopPropagation(),a.preventDefault()},ka=function(b){var c=a(b.target).val().trim(),d=c?da(c):null;return aa(d),b.stopImmediatePropagation(),!1},la=function(){g.on({change:ka,blur:d.debug?"":ba,keydown:ia,keyup:ja,focus:d.allowInputToggle?ga:""}),c.is("input")?g.on({focus:ga}):n&&(n.on("click",ha),n.on("mousedown",!1))},ma=function(){g.off({change:ka,blur:blur,keydown:ia,keyup:ja,focus:d.allowInputToggle?ba:""}),c.is("input")?g.off({focus:ga}):n&&(n.off("click",ha),n.off("mousedown",!1))},na=function(b){
// Store given enabledDates and disabledDates as keys.
// This way we can check their existence in O(1) time instead of looping through whole array.
// (for example: options.enabledDates['2014-02-27'] === true)
var c={};return a.each(b,function(){var a=da(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),Object.keys(c).length?c:!1},oa=function(b){
// Store given enabledHours and disabledHours as keys.
// This way we can check their existence in O(1) time instead of looping through whole array.
// (for example: options.enabledHours['2014-02-27'] === true)
var c={};return a.each(b,function(){c[this]=!0}),Object.keys(c).length?c:!1},pa=function(){var a=d.format||"L LT";i=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=e.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){//temp fix for #740
return e.localeData().longDateFormat(a)||a})}),j=d.extraFormats?d.extraFormats.slice():[],j.indexOf(a)<0&&j.indexOf(i)<0&&j.push(i),h=i.toLowerCase().indexOf("a")<1&&i.replace(/\[.*?\]/g,"").indexOf("h")<1,z("y")&&(p=2),z("M")&&(p=1),z("d")&&(p=0),k=Math.max(p,k),m||aa(e)};
// initializing element and component attributes
if(/********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
l.destroy=function(){
///<summary>Destroys the widget and removes all attached event listeners</summary>
ba(),ma(),c.removeData("DateTimePicker"),c.removeData("date")},l.toggle=ha,l.show=ga,l.hide=ba,l.disable=function(){
///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
return ba(),n&&n.hasClass("btn")&&n.addClass("disabled"),g.prop("disabled",!0),l},l.enable=function(){
///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
return n&&n.hasClass("btn")&&n.removeClass("disabled"),g.prop("disabled",!1),l},l.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,l},l.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===l[a])throw new TypeError("option "+a+" is not recognized!");l[a](b)}),l},l.date=function(a){
///<signature helpKeyword="$.fn.datetimepicker.date">
///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
///<returns type="Moment">date.clone()</returns>
///</signature>
///<signature>
///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
///</signature>
if(0===arguments.length)return m?null:e.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return aa(null===a?null:da(a)),l},l.format=function(a){
///<summary>test su</summary>
///<param name="newFormat">info about para</param>
///<returns type="string|boolean">returns foo</returns>
if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a string or boolean:false parameter "+a);return d.format=a,i&&pa(),l},l.timeZone=function(a){if(0===arguments.length)return d.timeZone;if("string"!=typeof a)throw new TypeError("newZone() expects a string parameter");return d.timeZone=a,l},l.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,l},l.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,j&&pa(),l},l.disabledDates=function(b){
///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
///<summary>Returns an array with the currently set disabled dates on the component.</summary>
///<returns type="array">options.disabledDates</returns>
///</signature>
///<signature>
///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
///options.enabledDates if such exist.</summary>
///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
///</signature>
if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=na(b),d.enabledDates=!1,_(),l},l.enabledDates=function(b){
///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
///<summary>Returns an array with the currently set enabled dates on the component.</summary>
///<returns type="array">options.enabledDates</returns>
///</signature>
///<signature>
///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
///</signature>
if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=na(b),d.disabledDates=!1,_(),l},l.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,_(),l;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||0>b||isNaN(b)?a:(-1===a.indexOf(b)&&a.push(b),a)},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!R(e,"d");){if(e.add(1,"d"),7===b)throw"Tried 7 times to find a valid date";b++}aa(e)}return _(),l},l.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&b.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+b.format(i));return d.maxDate=b,d.useCurrent&&!d.keepInvalid&&e.isAfter(a)&&aa(d.maxDate),f.isAfter(b)&&(f=b.clone().subtract(d.stepping,"m")),_(),l},l.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&b.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+b.format(i));return d.minDate=b,d.useCurrent&&!d.keepInvalid&&e.isBefore(a)&&aa(d.minDate),f.isBefore(b)&&(f=b.clone().add(d.stepping,"m")),_(),l},l.defaultDate=function(a){
///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
///<returns type="Moment">date.clone()</returns>
///</signature>
///<signature>
///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
///</signature>
if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,l;"string"==typeof a&&(a="now"===a||"moment"===a?y():y(a));var b=da(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!R(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=b,(d.defaultDate&&d.inline||""===g.val().trim())&&aa(d.defaultDate),l},l.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,e.locale(d.locale),f.locale(d.locale),i&&pa(),o&&(ba(),ga()),l},l.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||1>a)&&(a=1),d.stepping=a,l)},l.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&-1===b.indexOf(a.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,l},l.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?l:(d.collapse=a,o&&(ba(),ga()),l)},l.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(ba(),ga()),l},l.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(ba(),ga()),l},l.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,l},l.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(ba(),ga()),l},l.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(-1===r.indexOf(a))throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,k=Math.max(r.indexOf(a),p),L(),l},l.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===u.indexOf(a))throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(ba(),ga()),l},l.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),-1===t.indexOf(b.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),-1===s.indexOf(b.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical}return _(),l},l.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,_(),l},l.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(ba(),ga()),l},l.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(ba(),ga()),l},l.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(ba(),ga()),l},l.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,l},l.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,l},l.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,l},l.clear=function(){return ca(),l},l.keyBinds=function(a){return 0===arguments.length?d.keyBinds:(d.keyBinds=a,l)},l.getMoment=function(a){return y(a)},l.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,l},l.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,l},l.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,l},l.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");return d.keepInvalid=a,l},l.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,l},l.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,l},l.disabledTimeIntervals=function(b){
///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
///<summary>Returns an array with the currently set disabled dates on the component.</summary>
///<returns type="array">options.disabledTimeIntervals</returns>
///</signature>
///<signature>
///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
///options.enabledDates if such exist.</summary>
///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
///</signature>
if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,_(),l},l.disabledHours=function(b){
///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
///<summary>Returns an array with the currently set disabled hours on the component.</summary>
///<returns type="array">options.disabledHours</returns>
///</signature>
///<signature>
///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
///options.enabledHours if such exist.</summary>
///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
///</signature>
if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(d.disabledHours=oa(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}aa(e)}return _(),l},l.enabledHours=function(b){
///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
///<summary>Returns an array with the currently set enabled hours on the component.</summary>
///<returns type="array">options.enabledHours</returns>
///</signature>
///<signature>
///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
///</signature>
if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=oa(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}aa(e)}return _(),l},/**
         * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
         * @param {Takes string, viewDate, moment, null parameter.} newDate
         * @returns {viewDate.clone()}
         */
l.viewDate=function(a){if(0===arguments.length)return f.clone();if(!a)return f=e.clone(),l;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f=da(a),K(),l},c.is("input"))g=c;else if(g=c.find(d.datepickerInput),0===g.length)g=c.find("input");else if(!g.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(c.hasClass("input-group")&&(
// in case there is more then one 'input-group-addon' Issue #48
n=0===c.find(".datepickerbutton").length?c.find(".input-group-addon"):c.find(".datepickerbutton")),!d.inline&&!g.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");
// Set defaults for date here now instead of in var declaration
return e=y(),f=e.clone(),a.extend(!0,d,H()),l.options(d),pa(),la(),g.prop("disabled")&&l.disable(),g.is("input")&&0!==g.val().trim().length?aa(da(g.val().trim())):d.defaultDate&&void 0===g.attr("placeholder")&&aa(d.defaultDate),d.inline&&ga(),l};/********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/
/**
    * See (http://jquery.com/).
    * @name jQuery
    * @class
    * See the jQuery Library  (http://jquery.com/) for full details.  This just
    * documents the function and classes that are added to jQuery by this plug-in.
    */
/**
     * See (http://jquery.com/)
     * @name fn
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     * @memberOf jQuery
     */
/**
     * Show comments
     * @class datetimepicker
     * @memberOf jQuery.fn
     */
a.fn.datetimepicker=function(b){b=b||{};var d,e=Array.prototype.slice.call(arguments,1),f=!0,g=["destroy","hide","show","toggle"];if("object"==typeof b)return this.each(function(){var d=a(this);d.data("DateTimePicker")||(b=a.extend(!0,{},a.fn.datetimepicker.defaults,b),d.data("DateTimePicker",c(d,b)))});if("string"==typeof b)return this.each(function(){var c=a(this),g=c.data("DateTimePicker");if(!g)throw new Error('bootstrap-datetimepicker("'+b+'") method was called on an element that is not using DateTimePicker');d=g[b].apply(g,e),f=d===g}),f||a.inArray(b,g)>-1?this:d;throw new TypeError("Invalid arguments for DateTimePicker: "+b)},a.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(7,"d")):this.date(b.clone().add(this.stepping(),"m"))}},down:function(a){if(!a)return void this.show();var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(7,"d")):this.date(b.clone().subtract(this.stepping(),"m"))},"control up":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(1,"y")):this.date(b.clone().add(1,"h"))}},"control down":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(1,"y")):this.date(b.clone().subtract(1,"h"))}},left:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"d"))}},right:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"d"))}},pageUp:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"M"))}},pageDown:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},
//tab: function (widget) { //this break the flow of the form. disabling for now
//    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
//    if(toggle.length > 0) toggle.click();
//},
"control space":function(a){a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},"undefined"!=typeof module&&(module.exports=a.fn.datetimepicker)});
/**
 *  umeditor完整配置项
 *  可以在这里配置整个编辑器的特性
 */
/**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/


(function () {
    /**
     * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
     * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
     * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/umeditor/"这样的路径。
     * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
     * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
     * window.UMEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL = window.UMEDITOR_HOME_URL || (function () {

            function PathStack () {

                this.documentURL = self.document.URL || self.location.href;

                this.separator = '/';
                this.separatorPattern = /\\|\//g;
                this.currentDir = './';
                this.currentDirPattern = /^[.]\/]/;

                this.path = this.documentURL;
                this.stack = [];

                this.push(this.documentURL);

            }

            PathStack.isParentPath = function (path) {
                return path === '..';
            };

            PathStack.hasProtocol = function (path) {
                return !!PathStack.getProtocol(path);
            };

            PathStack.getProtocol = function (path) {

                var protocol = /^[^:]*:\/*/.exec(path);

                return protocol ? protocol[0] : null;

            };

            PathStack.prototype = {
                push: function (path) {

                    this.path = path;

                    update.call(this);
                    parse.call(this);

                    return this;

                },
                getPath: function () {
                    return this + "";
                },
                toString: function () {
                    return this.protocol + ( this.stack.concat(['']) ).join(this.separator);
                }
            };

            function update () {

                var protocol = PathStack.getProtocol(this.path || '');

                if (protocol) {

                    //根协议
                    this.protocol = protocol;

                    //local
                    this.localSeparator = /\\|\//.exec(this.path.replace(protocol, ''))[0];

                    this.stack = [];
                } else {
                    protocol = /\\|\//.exec(this.path);
                    protocol && (this.localSeparator = protocol[0]);
                }

            }

            function parse () {

                var parsedStack = this.path.replace(this.currentDirPattern, '');

                if (PathStack.hasProtocol(this.path)) {
                    parsedStack = parsedStack.replace(this.protocol, '');
                }

                parsedStack = parsedStack.split(this.localSeparator);
                parsedStack.length = parsedStack.length - 1;

                for (var i = 0, tempPath, l = parsedStack.length, root = this.stack; i < l; i++) {
                    tempPath = parsedStack[i];
                    if (tempPath) {
                        if (PathStack.isParentPath(tempPath)) {
                            root.pop();
                        } else {
                            root.push(tempPath);
                        }
                    }
                }
            }

            var currentPath = document.getElementsByTagName('script');

            currentPath = currentPath[currentPath.length - 1].src;

            return new PathStack().push(currentPath) + "";


        })();

    /**
     * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
     */
    window.UMEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UMEDITOR_HOME_URL: '/editor/'

        //图片上传配置区
        , imageUrl: "/ueditor"          //图片上传提交地址
        , imagePath: "/editor/"                //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
        , imageFieldName: "upfile"      //图片数据的key,若此处修改，需要在后台对应文件修改对应参数


        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
        , toolbar: [
            'undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
            '| justifyleft justifycenter justifyright justifyjustify',
            '| image',
            '| horizontal print preview', 'drafts'
        ]

        //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
        //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
        //,lang:"zh-cn"
        //,langPath:URL +"lang/"

        //ie下的链接自动监测
        //,autourldetectinie:false

        //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
        //现有如下皮肤:default
        //,theme:'default'
        //,themePath:URL +"themes/"


        //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
        //,charset:"utf-8"

        //常用配置项目
        //,isShow : true    //默认显示编辑器

        //,initialContent:'欢迎使用UMEDITOR!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        ,initialFrameWidth:'100%' //初始化编辑器宽度,默认500
        //,initialFrameHeight:500  //初始化编辑器高度,默认500

        //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

        //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值

        //,focus:false //初始化时，是否让编辑器获得焦点true或false

        //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

        //,fullscreen : false //是否开启初始化时即全屏，默认关闭

        //,readonly : false //编辑器初始化结束后,编辑区域是否是只读的，默认是false

        //,zIndex : 900     //编辑器层级的基数,默认是900

        //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
        //注意这里添加的样式，最好放在.edui-editor-body .edui-body-container这两个的下边，防止跟页面上css冲突
        //,initialStyle:'.edui-editor-body .edui-body-container p{line-height:1em}'

        //,autoSyncData:true //自动同步编辑器要提交的数据

        //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

        //,allHtmlEnabled:false //提交到后台的数据是否包含整个html字符串

        //fontfamily
        //字体设置
//        ,'fontfamily':[
//              { name: 'songti', val: '宋体,SimSun'},
//          ]

        //fontsize
        //字号
        //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

        //paragraph
        //段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准
        //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

        //undo
        //可以最多回退的次数,默认20
        //,maxUndoCount:20
        //当输入的字符数超过该值时，保存一次现场
        //,maxInputCount:1

        //imageScaleEnabled
        // 是否允许点击文件拖拽改变大小,默认true
        //,imageScaleEnabled:true

        //dropFileEnabled
        // 是否允许拖放图片到编辑区域，上传并插入,默认true
        //,dropFileEnabled:true

        //pasteImageEnabled
        // 是否允许粘贴QQ截屏，上传并插入,默认true
        //,pasteImageEnabled:true

        //autoHeightEnabled
        // 是否自动长高,默认true
        //,autoHeightEnabled:true

        //autoFloatEnabled
        //是否保持toolbar的位置不动,默认true
        //,autoFloatEnabled:true

        //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
        //,topOffset:30

        //填写过滤规则
        //,filterRules: {}
    };
})();

/*!
 * UEditor Mini版本
 * version: 1.2.2
 * build: Wed Mar 19 2014 17:08:14 GMT+0800 (中国标准时间)
 */

(function ($) {

    UMEDITOR_CONFIG = window.UMEDITOR_CONFIG || {};

    window.UM = {
        plugins: {},

        commands: {},

        I18N: {},

        version: "1.2.2"
    };

    var dom = UM.dom = {};
    /**
     * 浏览器判断模块
     * @file
     * @module UE.browser
     * @since 1.2.6.1
     */

    /**
     * 提供浏览器检测的模块
     * @unfile
     * @module UE.browser
     */
    var browser = UM.browser = function () {
        var agent = navigator.userAgent.toLowerCase(),
            opera = window.opera,
            browser = {
                /**
                 * @property {boolean} ie 检测当前浏览器是否为IE
                 * @example
                 * ```javascript
                 * if ( UE.browser.ie ) {
         *     console.log( '当前浏览器是IE' );
         * }
                 * ```
                 */
                ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),

                /**
                 * @property {boolean} opera 检测当前浏览器是否为Opera
                 * @example
                 * ```javascript
                 * if ( UE.browser.opera ) {
         *     console.log( '当前浏览器是Opera' );
         * }
                 * ```
                 */
                opera: ( !!opera && opera.version ),

                /**
                 * @property {boolean} webkit 检测当前浏览器是否是webkit内核的浏览器
                 * @example
                 * ```javascript
                 * if ( UE.browser.webkit ) {
         *     console.log( '当前浏览器是webkit内核浏览器' );
         * }
                 * ```
                 */
                webkit: ( agent.indexOf(' applewebkit/') > -1 ),

                /**
                 * @property {boolean} mac 检测当前浏览器是否是运行在mac平台下
                 * @example
                 * ```javascript
                 * if ( UE.browser.mac ) {
         *     console.log( '当前浏览器运行在mac平台下' );
         * }
                 * ```
                 */
                mac: ( agent.indexOf('macintosh') > -1 ),

                /**
                 * @property {boolean} quirks 检测当前浏览器是否处于“怪异模式”下
                 * @example
                 * ```javascript
                 * if ( UE.browser.quirks ) {
         *     console.log( '当前浏览器运行处于“怪异模式”' );
         * }
                 * ```
                 */
                quirks: ( document.compatMode == 'BackCompat' )
            };

        /**
         * @property {boolean} gecko 检测当前浏览器内核是否是gecko内核
         * @example
         * ```javascript
         * if ( UE.browser.gecko ) {
    *     console.log( '当前浏览器内核是gecko内核' );
    * }
         * ```
         */
        browser.gecko = ( navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

        var version = 0;

        // Internet Explorer 6.0+
        if (browser.ie) {


            var v1 = agent.match(/(?:msie\s([\w.]+))/);
            var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
            if (v1 && v2 && v1[1] && v2[1]) {
                version = Math.max(v1[1] * 1, v2[1] * 1);
            } else if (v1 && v1[1]) {
                version = v1[1] * 1;
            } else if (v2 && v2[1]) {
                version = v2[1] * 1;
            } else {
                version = 0;
            }

            browser.ie11Compat = document.documentMode == 11;
            /**
             * @property { boolean } ie9Compat 检测浏览器模式是否为 IE9 兼容模式
             * @warning 如果浏览器不是IE， 则该值为undefined
             * @example
             * ```javascript
             * if ( UE.browser.ie9Compat ) {
         *     console.log( '当前浏览器运行在IE9兼容模式下' );
         * }
             * ```
             */
            browser.ie9Compat = document.documentMode == 9;

            /**
             * @property { boolean } ie8 检测浏览器是否是IE8浏览器
             * @warning 如果浏览器不是IE， 则该值为undefined
             * @example
             * ```javascript
             * if ( UE.browser.ie8 ) {
         *     console.log( '当前浏览器是IE8浏览器' );
         * }
             * ```
             */
            browser.ie8 = !!document.documentMode;

            /**
             * @property { boolean } ie8Compat 检测浏览器模式是否为 IE8 兼容模式
             * @warning 如果浏览器不是IE， 则该值为undefined
             * @example
             * ```javascript
             * if ( UE.browser.ie8Compat ) {
         *     console.log( '当前浏览器运行在IE8兼容模式下' );
         * }
             * ```
             */
            browser.ie8Compat = document.documentMode == 8;

            /**
             * @property { boolean } ie7Compat 检测浏览器模式是否为 IE7 兼容模式
             * @warning 如果浏览器不是IE， 则该值为undefined
             * @example
             * ```javascript
             * if ( UE.browser.ie7Compat ) {
         *     console.log( '当前浏览器运行在IE7兼容模式下' );
         * }
             * ```
             */
            browser.ie7Compat = ( ( version == 7 && !document.documentMode )
            || document.documentMode == 7 );

            /**
             * @property { boolean } ie6Compat 检测浏览器模式是否为 IE6 模式 或者怪异模式
             * @warning 如果浏览器不是IE， 则该值为undefined
             * @example
             * ```javascript
             * if ( UE.browser.ie6Compat ) {
         *     console.log( '当前浏览器运行在IE6模式或者怪异模式下' );
         * }
             * ```
             */
            browser.ie6Compat = ( version < 7 || browser.quirks );

            browser.ie9above = version > 8;

            browser.ie9below = version < 9;

        }

        // Gecko.
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split('.');
                version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
            }
        }

        /**
         * @property { Number } chrome 检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
         * @warning 如果浏览器不是chrome， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.chrome ) {
     *     console.log( '当前浏览器是Chrome' );
     * }
         * ```
         */
        if (/chrome\/(\d+\.\d)/i.test(agent)) {
            browser.chrome = +RegExp['\x241'];
        }

        /**
         * @property { Number } safari 检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
         * @warning 如果浏览器不是safari， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.safari ) {
     *     console.log( '当前浏览器是Safari' );
     * }
         * ```
         */
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
        }


        // Opera 9.50+
        if (browser.opera)
            version = parseFloat(opera.version());

        // WebKit 522+ (Safari 3+)
        if (browser.webkit)
            version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);

        /**
         * @property { Number } version 检测当前浏览器版本号
         * @remind
         * <ul>
         *     <li>IE系列返回值为5,6,7,8,9,10等</li>
         *     <li>gecko系列会返回10900，158900等</li>
         *     <li>webkit系列会返回其build号 (如 522等)</li>
         * </ul>
         * @example
         * ```javascript
         * console.log( '当前浏览器版本号是： ' + UE.browser.version );
         * ```
         */
        browser.version = version;

        /**
         * @property { boolean } isCompatible 检测当前浏览器是否能够与UEditor良好兼容
         * @example
         * ```javascript
         * if ( UE.browser.isCompatible ) {
     *     console.log( '浏览器与UEditor能够良好兼容' );
     * }
         * ```
         */
        browser.isCompatible =
            !browser.mobile && (
            ( browser.ie && version >= 6 ) ||
            ( browser.gecko && version >= 10801 ) ||
            ( browser.opera && version >= 9.5 ) ||
            ( browser.air && version >= 1 ) ||
            ( browser.webkit && version >= 522 ) ||
            false );
        return browser;
    }();
//快捷方式
    var ie = browser.ie,
        webkit = browser.webkit,
        gecko = browser.gecko,
        opera = browser.opera;
    /**
     * @file
     * @name UM.Utils
     * @short Utils
     * @desc UEditor封装使用的静态工具函数
     * @import editor.js
     */
    var utils = UM.utils = {
        /**
         * 遍历数组，对象，nodeList
         * @name each
         * @grammar UM.utils.each(obj,iterator,[context])
         * @since 1.2.4+
         * @desc
         * * obj 要遍历的对象
         * * iterator 遍历的方法,方法的第一个是遍历的值，第二个是索引，第三个是obj
         * * context  iterator的上下文
         * @example
         * UM.utils.each([1,2],function(v,i){
     *     console.log(v)//值
     *     console.log(i)//索引
     * })
         * UM.utils.each(document.getElementsByTagName('*'),function(n){
     *     console.log(n.tagName)
     * })
         */
        each: function (obj, iterator, context) {
            if (obj == null) return;
            if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === false)
                        return false;
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === false)
                            return false;
                    }
                }
            }
        },

        makeInstance: function (obj) {
            var noop = new Function();
            noop.prototype = obj;
            obj = new noop;
            noop.prototype = null;
            return obj;
        },
        /**
         * 将source对象中的属性扩展到target对象上
         * @name extend
         * @grammar UM.utils.extend(target,source)  => Object  //覆盖扩展
         * @grammar UM.utils.extend(target,source,true)  ==> Object  //保留扩展
         */
        extend: function (t, s, b) {
            if (s) {
                for (var k in s) {
                    if (!b || !t.hasOwnProperty(k)) {
                        t[k] = s[k];
                    }
                }
            }
            return t;
        },
        extend2: function (t) {
            var a = arguments;
            for (var i = 1; i < a.length; i++) {
                var x = a[i];
                for (var k in x) {
                    if (!t.hasOwnProperty(k)) {
                        t[k] = x[k];
                    }
                }
            }
            return t;
        },
        /**
         * 模拟继承机制，subClass继承superClass
         * @name inherits
         * @grammar UM.utils.inherits(subClass,superClass) => subClass
         * @example
         * function SuperClass(){
     *     this.name = "小李";
     * }
         * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
         * function SubClass(){
     *     this.name = "小张";
     * }
         * UM.utils.inherits(SubClass,SuperClass);
         * var sub = new SubClass();
         * sub.hello("早上好!"); ==> "小张早上好！"
         */
        inherits: function (subClass, superClass) {
            var oldP = subClass.prototype,
                newP = utils.makeInstance(superClass.prototype);
            utils.extend(newP, oldP, true);
            subClass.prototype = newP;
            return (newP.constructor = subClass);
        },

        /**
         * 用指定的context作为fn上下文，也就是this
         * @name bind
         * @grammar UM.utils.bind(fn,context)  =>  fn
         */
        bind: function (fn, context) {
            return function () {
                return fn.apply(context, arguments);
            };
        },

        /**
         * 创建延迟delay执行的函数fn
         * @name defer
         * @grammar UM.utils.defer(fn,delay)  =>fn   //延迟delay毫秒执行fn，返回fn
         * @grammar UM.utils.defer(fn,delay,exclusion)  =>fn   //延迟delay毫秒执行fn，若exclusion为真，则互斥执行fn
         * @example
         * function test(){
     *     console.log("延迟输出！");
     * }
         * //非互斥延迟执行
         * var testDefer = UM.utils.defer(test,1000);
         * testDefer();   =>  "延迟输出！";
         * testDefer();   =>  "延迟输出！";
         * //互斥延迟执行
         * var testDefer1 = UM.utils.defer(test,1000,true);
         * testDefer1();   =>  //本次不执行
         * testDefer1();   =>  "延迟输出！";
         */
        defer: function (fn, delay, exclusion) {
            var timerID;
            return function () {
                if (exclusion) {
                    clearTimeout(timerID);
                }
                timerID = setTimeout(fn, delay);
            };
        },

        /**
         * 查找元素item在数组array中的索引, 若找不到返回-1
         * @name indexOf
         * @grammar UM.utils.indexOf(array,item)  => index|-1  //默认从数组开头部开始搜索
         * @grammar UM.utils.indexOf(array,item,start)  => index|-1  //start指定开始查找的位置
         */
        indexOf: function (array, item, start) {
            var index = -1;
            start = this.isNumber(start) ? start : 0;
            this.each(array, function (v, i) {
                if (i >= start && v === item) {
                    index = i;
                    return false;
                }
            });
            return index;
        },

        /**
         * 移除数组array中的元素item
         * @name removeItem
         * @grammar UM.utils.removeItem(array,item)
         */
        removeItem: function (array, item) {
            for (var i = 0, l = array.length; i < l; i++) {
                if (array[i] === item) {
                    array.splice(i, 1);
                    i--;
                }
            }
        },

        /**
         * 删除字符串str的首尾空格
         * @name trim
         * @grammar UM.utils.trim(str) => String
         */
        trim: function (str) {
            return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
        },

        /**
         * 将字符串list(以','分隔)或者数组list转成哈希对象
         * @name listToMap
         * @grammar UM.utils.listToMap(list)  => Object  //Object形如{test:1,br:1,textarea:1}
         */
        listToMap: function (list) {
            if (!list)return {};
            list = utils.isArray(list) ? list : list.split(',');
            for (var i = 0, ci, obj = {}; ci = list[i++];) {
                obj[ci.toUpperCase()] = obj[ci] = 1;
            }
            return obj;
        },

        /**
         * 将str中的html符号转义,默认将转义''&<">''四个字符，可自定义reg来确定需要转义的字符
         * @name unhtml
         * @grammar UM.utils.unhtml(str);  => String
         * @grammar UM.utils.unhtml(str,reg)  => String
         * @example
         * var html = '<body>You say:"你好！Baidu & UEditor!"</body>';
         * UM.utils.unhtml(html);   ==>  &lt;body&gt;You say:&quot;你好！Baidu &amp; UEditor!&quot;&lt;/body&gt;
         * UM.utils.unhtml(html,/[<>]/g)  ==>  &lt;body&gt;You say:"你好！Baidu & UEditor!"&lt;/body&gt;
         */
        unhtml: function (str, reg) {
            return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
                if (b) {
                    return a;
                } else {
                    return {
                        '<': '&lt;',
                        '&': '&amp;',
                        '"': '&quot;',
                        '>': '&gt;',
                        "'": '&#39;'
                    }[a]
                }

            }) : '';
        },
        /**
         * 将str中的转义字符还原成html字符
         * @name html
         * @grammar UM.utils.html(str)  => String   //详细参见<code><a href = '#unhtml'>unhtml</a></code>
         */
        html: function (str) {
            return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m) {
                return {
                    '&lt;': '<',
                    '&amp;': '&',
                    '&quot;': '"',
                    '&gt;': '>',
                    '&#39;': "'"
                }[m]
            }) : '';
        },
        /**
         * 将css样式转换为驼峰的形式。如font-size => fontSize
         * @name cssStyleToDomStyle
         * @grammar UM.utils.cssStyleToDomStyle(cssName)  => String
         */
        cssStyleToDomStyle: function () {
            var test = document.createElement('div').style,
                cache = {
                    'float': test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
                };

            return function (cssName) {
                return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
                        return match.charAt(1).toUpperCase();
                    }));
            };
        }(),
        /**
         * 动态加载文件到doc中，并依据obj来设置属性，加载成功后执行回调函数fn
         * @name loadFile
         * @grammar UM.utils.loadFile(doc,obj)
         * @grammar UM.utils.loadFile(doc,obj,fn)
         * @example
         * //指定加载到当前document中一个script文件，加载成功后执行function
         * utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('加载成功！')
     * });
         */
        loadFile: function () {
            var tmpList = [];

            function getItem (doc, obj) {
                try {
                    for (var i = 0, ci; ci = tmpList[i++];) {
                        if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                            return ci;
                        }
                    }
                } catch (e) {
                    return null;
                }

            }

            return function (doc, obj, fn) {
                var item = getItem(doc, obj);
                if (item) {
                    if (item.ready) {
                        fn && fn();
                    } else {
                        item.funs.push(fn)
                    }
                    return;
                }
                tmpList.push({
                    doc: doc,
                    url: obj.src || obj.href,
                    funs: [fn]
                });
                if (!doc.body) {
                    var html = [];
                    for (var p in obj) {
                        if (p == 'tag')continue;
                        html.push(p + '="' + obj[p] + '"')
                    }
                    doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                    return;
                }
                if (obj.id && doc.getElementById(obj.id)) {
                    return;
                }
                var element = doc.createElement(obj.tag);
                delete obj.tag;
                for (var p in obj) {
                    element.setAttribute(p, obj[p]);
                }
                element.onload = element.onreadystatechange = function () {
                    if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                        item = getItem(doc, obj);
                        if (item.funs.length > 0) {
                            item.ready = 1;
                            for (var fi; fi = item.funs.pop();) {
                                fi();
                            }
                        }
                        element.onload = element.onreadystatechange = null;
                    }
                };
                element.onerror = function () {
                    throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file umeditor.config.js ')
                };
                doc.getElementsByTagName("head")[0].appendChild(element);
            }
        }(),
        /**
         * 判断obj对象是否为空
         * @name isEmptyObject
         * @grammar UM.utils.isEmptyObject(obj)  => true|false
         * @example
         * UM.utils.isEmptyObject({}) ==>true
         * UM.utils.isEmptyObject([]) ==>true
         * UM.utils.isEmptyObject("") ==>true
         */
        isEmptyObject: function (obj) {
            if (obj == null) return true;
            if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
            for (var key in obj) if (obj.hasOwnProperty(key)) return false;
            return true;
        },

        /**
         * 统一将颜色值使用16进制形式表示
         * @name fixColor
         * @grammar UM.utils.fixColor(name,value) => value
         * @example
         * rgb(255,255,255)  => "#ffffff"
         */
        fixColor: function (name, value) {
            if (/color/i.test(name) && /rgba?/.test(value)) {
                var array = value.split(",");
                if (array.length > 3)
                    return "";
                value = "#";
                for (var i = 0, color; color = array[i++];) {
                    color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                    value += color.length == 1 ? "0" + color : color;
                }
                value = value.toUpperCase();
            }
            return value;
        },

        /**
         * 深度克隆对象，从source到target
         * @name clone
         * @grammar UM.utils.clone(source) => anthorObj 新的对象是完整的source的副本
         * @grammar UM.utils.clone(source,target) => target包含了source的所有内容，重名会覆盖
         */
        clone: function (source, target) {
            var tmp;
            target = target || {};
            for (var i in source) {
                if (source.hasOwnProperty(i)) {
                    tmp = source[i];
                    if (typeof tmp == 'object') {
                        target[i] = utils.isArray(tmp) ? [] : {};
                        utils.clone(source[i], target[i])
                    } else {
                        target[i] = tmp;
                    }
                }
            }
            return target;
        },
        /**
         * 转换cm/pt到px
         * @name transUnitToPx
         * @grammar UM.utils.transUnitToPx('20pt') => '27px'
         * @grammar UM.utils.transUnitToPx('0pt') => '0'
         */
        transUnitToPx: function (val) {
            if (!/(pt|cm)/.test(val)) {
                return val
            }
            var unit;
            val.replace(/([\d.]+)(\w+)/, function (str, v, u) {
                val = v;
                unit = u;
            });
            switch (unit) {
                case 'cm':
                    val = parseFloat(val) * 25;
                    break;
                case 'pt':
                    val = Math.round(parseFloat(val) * 96 / 72);
            }
            return val + (val ? 'px' : '');
        },
        /**
         * 动态添加css样式
         * @name cssRule
         * @grammar UM.utils.cssRule('添加的样式的节点名称',['样式'，'放到哪个document上'])
         * @grammar UM.utils.cssRule('body','body{background:#ccc}') => null  //给body添加背景颜色
         * @grammar UM.utils.cssRule('body') =>样式的字符串  //取得key值为body的样式的内容,如果没有找到key值先关的样式将返回空，例如刚才那个背景颜色，将返回 body{background:#ccc}
         * @grammar UM.utils.cssRule('body','') =>null //清空给定的key值的背景颜色
         */
        cssRule: browser.ie && browser.version != 11 ? function (key, style, doc) {
            var indexList, index;
            doc = doc || document;
            if (doc.indexList) {
                indexList = doc.indexList;
            } else {
                indexList = doc.indexList = {};
            }
            var sheetStyle;
            if (!indexList[key]) {
                if (style === undefined) {
                    return ''
                }
                sheetStyle = doc.createStyleSheet('', index = doc.styleSheets.length);
                indexList[key] = index;
            } else {
                sheetStyle = doc.styleSheets[indexList[key]];
            }
            if (style === undefined) {
                return sheetStyle.cssText
            }
            sheetStyle.cssText = style || ''
        } : function (key, style, doc) {
            doc = doc || document;
            var head = doc.getElementsByTagName('head')[0], node;
            if (!(node = doc.getElementById(key))) {
                if (style === undefined) {
                    return ''
                }
                node = doc.createElement('style');
                node.id = key;
                head.appendChild(node)
            }
            if (style === undefined) {
                return node.innerHTML
            }
            if (style !== '') {
                node.innerHTML = style;
            } else {
                head.removeChild(node)
            }
        }

    };
    /**
     * 判断str是否为字符串
     * @name isString
     * @grammar UM.utils.isString(str) => true|false
     */
    /**
     * 判断array是否为数组
     * @name isArray
     * @grammar UM.utils.isArray(obj) => true|false
     */
    /**
     * 判断obj对象是否为方法
     * @name isFunction
     * @grammar UM.utils.isFunction(obj)  => true|false
     */
    /**
     * 判断obj对象是否为数字
     * @name isNumber
     * @grammar UM.utils.isNumber(obj)  => true|false
     */
    utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function (v) {
        UM.utils['is' + v] = function (obj) {
            return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
        }
    });
    /**
     * @file
     * @name UM.EventBase
     * @short EventBase
     * @import editor.js,core/utils.js
     * @desc UE采用的事件基类，继承此类的对应类将获取addListener,removeListener,fireEvent方法。
     * 在UE中，Editor以及所有ui实例都继承了该类，故可以在对应的ui对象以及editor对象上使用上述方法。
     */
    var EventBase = UM.EventBase = function () {
    };

    EventBase.prototype = {
        /**
         * 注册事件监听器
         * @name addListener
         * @grammar editor.addListener(types,fn)  //types为事件名称，多个可用空格分隔
         * @example
         * editor.addListener('selectionchange',function(){
     *      console.log("选区已经变化！");
     * })
         * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this是注册的事件的编辑器实例
     * })
         */
        addListener: function (types, listener) {
            types = utils.trim(types).split(' ');
            for (var i = 0, ti; ti = types[i++];) {
                getListener(this, ti, true).push(listener);
            }
        },
        /**
         * 移除事件监听器
         * @name removeListener
         * @grammar editor.removeListener(types,fn)  //types为事件名称，多个可用空格分隔
         * @example
         * //changeCallback为方法体
         * editor.removeListener("selectionchange",changeCallback);
         */
        removeListener: function (types, listener) {
            types = utils.trim(types).split(' ');
            for (var i = 0, ti; ti = types[i++];) {
                utils.removeItem(getListener(this, ti) || [], listener);
            }
        },
        /**
         * 触发事件
         * @name fireEvent
         * @grammar editor.fireEvent(types)  //types为事件名称，多个可用空格分隔
         * @example
         * editor.fireEvent("selectionchange");
         */
        fireEvent: function () {
            var types = arguments[0];
            types = utils.trim(types).split(' ');
            for (var i = 0, ti; ti = types[i++];) {
                var listeners = getListener(this, ti),
                    r, t, k;
                if (listeners) {
                    k = listeners.length;
                    while (k--) {
                        if (!listeners[k])continue;
                        t = listeners[k].apply(this, arguments);
                        if (t === true) {
                            return t;
                        }
                        if (t !== undefined) {
                            r = t;
                        }
                    }
                }
                if (t = this['on' + ti.toLowerCase()]) {
                    r = t.apply(this, arguments);
                }
            }
            return r;
        }
    };
    /**
     * 获得对象所拥有监听类型的所有监听器
     * @public
     * @function
     * @param {Object} obj  查询监听器的对象
     * @param {String} type 事件类型
     * @param {Boolean} force  为true且当前所有type类型的侦听器不存在时，创建一个空监听器数组
     * @returns {Array} 监听器数组
     */
    function getListener (obj, type, force) {
        var allListeners;
        type = type.toLowerCase();
        return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
    }


///import editor.js
///import core/dom/dom.js
///import core/utils.js
    /**
     * dtd html语义化的体现类
     * @constructor
     * @namespace dtd
     */
    var dtd = dom.dtd = (function () {
        function _ (s) {
            for (var k in s) {
                s[k.toUpperCase()] = s[k];
            }
            return s;
        }

        var X = utils.extend2;
        var A = _({isindex: 1, fieldset: 1}),
            B = _({input: 1, button: 1, select: 1, textarea: 1, label: 1}),
            C = X(_({a: 1}), B),
            D = X({iframe: 1}, C),
            E = _({
                hr: 1,
                ul: 1,
                menu: 1,
                div: 1,
                blockquote: 1,
                noscript: 1,
                table: 1,
                center: 1,
                address: 1,
                dir: 1,
                pre: 1,
                h5: 1,
                dl: 1,
                h4: 1,
                noframes: 1,
                h6: 1,
                ol: 1,
                h1: 1,
                h3: 1,
                h2: 1
            }),
            F = _({ins: 1, del: 1, script: 1, style: 1}),
            G = X(_({
                b: 1,
                acronym: 1,
                bdo: 1,
                'var': 1,
                '#': 1,
                abbr: 1,
                code: 1,
                br: 1,
                i: 1,
                cite: 1,
                kbd: 1,
                u: 1,
                strike: 1,
                s: 1,
                tt: 1,
                strong: 1,
                q: 1,
                samp: 1,
                em: 1,
                dfn: 1,
                span: 1
            }), F),
            H = X(_({
                sub: 1,
                img: 1,
                embed: 1,
                object: 1,
                sup: 1,
                basefont: 1,
                map: 1,
                applet: 1,
                font: 1,
                big: 1,
                small: 1
            }), G),
            I = X(_({p: 1}), H),
            J = X(_({iframe: 1}), H, B),
            K = _({
                img: 1,
                embed: 1,
                noscript: 1,
                br: 1,
                kbd: 1,
                center: 1,
                button: 1,
                basefont: 1,
                h5: 1,
                h4: 1,
                samp: 1,
                h6: 1,
                ol: 1,
                h1: 1,
                h3: 1,
                h2: 1,
                form: 1,
                font: 1,
                '#': 1,
                select: 1,
                menu: 1,
                ins: 1,
                abbr: 1,
                label: 1,
                code: 1,
                table: 1,
                script: 1,
                cite: 1,
                input: 1,
                iframe: 1,
                strong: 1,
                textarea: 1,
                noframes: 1,
                big: 1,
                small: 1,
                span: 1,
                hr: 1,
                sub: 1,
                bdo: 1,
                'var': 1,
                div: 1,
                object: 1,
                sup: 1,
                strike: 1,
                dir: 1,
                map: 1,
                dl: 1,
                applet: 1,
                del: 1,
                isindex: 1,
                fieldset: 1,
                ul: 1,
                b: 1,
                acronym: 1,
                a: 1,
                blockquote: 1,
                i: 1,
                u: 1,
                s: 1,
                tt: 1,
                address: 1,
                q: 1,
                pre: 1,
                p: 1,
                em: 1,
                dfn: 1
            }),

            L = X(_({a: 0}), J),//a不能被切开，所以把他
            M = _({tr: 1}),
            N = _({'#': 1}),
            O = X(_({param: 1}), K),
            P = X(_({form: 1}), A, D, E, I),
            Q = _({li: 1, ol: 1, ul: 1}),
            R = _({style: 1, script: 1}),
            S = _({base: 1, link: 1, meta: 1, title: 1}),
            T = X(S, R),
            U = _({head: 1, body: 1}),
            V = _({html: 1});

        var block = _({
                address: 1,
                blockquote: 1,
                center: 1,
                dir: 1,
                div: 1,
                dl: 1,
                fieldset: 1,
                form: 1,
                h1: 1,
                h2: 1,
                h3: 1,
                h4: 1,
                h5: 1,
                h6: 1,
                hr: 1,
                isindex: 1,
                menu: 1,
                noframes: 1,
                ol: 1,
                p: 1,
                pre: 1,
                table: 1,
                ul: 1
            }),

            empty = _({
                area: 1,
                base: 1,
                basefont: 1,
                br: 1,
                col: 1,
                command: 1,
                dialog: 1,
                embed: 1,
                hr: 1,
                img: 1,
                input: 1,
                isindex: 1,
                keygen: 1,
                link: 1,
                meta: 1,
                param: 1,
                source: 1,
                track: 1,
                wbr: 1
            });

        return _({

            // $ 表示自定的属性

            // body外的元素列表.
            $nonBodyContent: X(V, U, S),

            //块结构元素列表
            $block: block,

            //内联元素列表
            $inline: L,

            $inlineWithA: X(_({a: 1}), L),

            $body: X(_({script: 1, style: 1}), block),

            $cdata: _({script: 1, style: 1}),

            //自闭和元素
            $empty: empty,

            //不是自闭合，但不能让range选中里边
            $nonChild: _({iframe: 1, textarea: 1}),
            //列表元素列表
            $listItem: _({dd: 1, dt: 1, li: 1}),

            //列表根元素列表
            $list: _({ul: 1, ol: 1, dl: 1}),

            //不能认为是空的元素
            $isNotEmpty: _({
                table: 1,
                ul: 1,
                ol: 1,
                dl: 1,
                iframe: 1,
                area: 1,
                base: 1,
                col: 1,
                hr: 1,
                img: 1,
                embed: 1,
                input: 1,
                link: 1,
                meta: 1,
                param: 1,
                h1: 1,
                h2: 1,
                h3: 1,
                h4: 1,
                h5: 1,
                h6: 1
            }),

            //如果没有子节点就可以删除的元素列表，像span,a
            $removeEmpty: _({
                a: 1,
                abbr: 1,
                acronym: 1,
                address: 1,
                b: 1,
                bdo: 1,
                big: 1,
                cite: 1,
                code: 1,
                del: 1,
                dfn: 1,
                em: 1,
                font: 1,
                i: 1,
                ins: 1,
                label: 1,
                kbd: 1,
                q: 1,
                s: 1,
                samp: 1,
                small: 1,
                span: 1,
                strike: 1,
                strong: 1,
                sub: 1,
                sup: 1,
                tt: 1,
                u: 1,
                'var': 1
            }),

            $removeEmptyBlock: _({'p': 1, 'div': 1}),

            //在table元素里的元素列表
            $tableContent: _({
                caption: 1,
                col: 1,
                colgroup: 1,
                tbody: 1,
                td: 1,
                tfoot: 1,
                th: 1,
                thead: 1,
                tr: 1,
                table: 1
            }),
            //不转换的标签
            $notTransContent: _({pre: 1, script: 1, style: 1, textarea: 1}),
            html: U,
            head: T,
            style: N,
            script: N,
            body: P,
            base: {},
            link: {},
            meta: {},
            title: N,
            col: {},
            tr: _({td: 1, th: 1}),
            img: {},
            embed: {},
            colgroup: _({thead: 1, col: 1, tbody: 1, tr: 1, tfoot: 1}),
            noscript: P,
            td: P,
            br: {},
            th: P,
            center: P,
            kbd: L,
            button: X(I, E),
            basefont: {},
            h5: L,
            h4: L,
            samp: L,
            h6: L,
            ol: Q,
            h1: L,
            h3: L,
            option: N,
            h2: L,
            form: X(A, D, E, I),
            select: _({optgroup: 1, option: 1}),
            font: L,
            ins: L,
            menu: Q,
            abbr: L,
            label: L,
            table: _({thead: 1, col: 1, tbody: 1, tr: 1, colgroup: 1, caption: 1, tfoot: 1}),
            code: L,
            tfoot: M,
            cite: L,
            li: P,
            input: {},
            iframe: P,
            strong: L,
            textarea: N,
            noframes: P,
            big: L,
            small: L,
            //trace:
            span: _({'#': 1, br: 1, b: 1, strong: 1, u: 1, i: 1, em: 1, sub: 1, sup: 1, strike: 1, span: 1}),
            hr: L,
            dt: L,
            sub: L,
            optgroup: _({option: 1}),
            param: {},
            bdo: L,
            'var': L,
            div: P,
            object: O,
            sup: L,
            dd: P,
            strike: L,
            area: {},
            dir: Q,
            map: X(_({area: 1, form: 1, p: 1}), A, F, E),
            applet: O,
            dl: _({dt: 1, dd: 1}),
            del: L,
            isindex: {},
            fieldset: X(_({legend: 1}), K),
            thead: M,
            ul: Q,
            acronym: L,
            b: L,
            a: X(_({a: 1}), J),
            blockquote: X(_({td: 1, tr: 1, tbody: 1, li: 1}), P),
            caption: L,
            i: L,
            u: L,
            tbody: M,
            s: L,
            address: X(D, I),
            tt: L,
            legend: L,
            q: L,
            pre: X(G, C),
            p: X(_({'a': 1}), L),
            em: L,
            dfn: L
        });
    })();

    /**
     * @file
     * @name UM.dom.domUtils
     * @short DomUtils
     * @import editor.js, core/utils.js,core/browser.js,core/dom/dtd.js
     * @desc UEditor封装的底层dom操作库
     */

    function getDomNode (node, start, ltr, startFromChild, fn, guard) {
        var tmpNode = startFromChild && node[start],
            parent;
        !tmpNode && (tmpNode = node[ltr]);
        while (!tmpNode && (parent = (parent || node).parentNode)) {
            if (parent.tagName == 'BODY' || guard && !guard(parent)) {
                return null;
            }
            tmpNode = parent[ltr];
        }
        if (tmpNode && fn && !fn(tmpNode)) {
            return getDomNode(tmpNode, start, ltr, false, fn);
        }
        return tmpNode;
    }

    var attrFix = ie && browser.version < 9 ? {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder"
        } : {
            tabindex: "tabIndex",
            readonly: "readOnly"
        },
        styleBlock = utils.listToMap([
            '-webkit-box', '-moz-box', 'block',
            'list-item', 'table', 'table-row-group',
            'table-header-group', 'table-footer-group',
            'table-row', 'table-column-group', 'table-column',
            'table-cell', 'table-caption'
        ]);
    var domUtils = dom.domUtils = {
        //节点常量
        NODE_ELEMENT: 1,
        NODE_DOCUMENT: 9,
        NODE_TEXT: 3,
        NODE_COMMENT: 8,
        NODE_DOCUMENT_FRAGMENT: 11,

        //位置关系
        POSITION_IDENTICAL: 0,
        POSITION_DISCONNECTED: 1,
        POSITION_FOLLOWING: 2,
        POSITION_PRECEDING: 4,
        POSITION_IS_CONTAINED: 8,
        POSITION_CONTAINS: 16,
        //ie6使用其他的会有一段空白出现
        fillChar: ie && browser.version == '6' ? '\ufeff' : '\u200B',
        //-------------------------Node部分--------------------------------
        keys: {
            /*Backspace*/ 8: 1, /*Delete*/ 46: 1,
            /*Shift*/ 16: 1, /*Ctrl*/ 17: 1, /*Alt*/ 18: 1,
            37: 1, 38: 1, 39: 1, 40: 1,
            13: 1 /*enter*/
        },
        breakParent: function (node, parent) {
            var tmpNode,
                parentClone = node,
                clone = node,
                leftNodes,
                rightNodes;
            do {
                parentClone = parentClone.parentNode;
                if (leftNodes) {
                    tmpNode = parentClone.cloneNode(false);
                    tmpNode.appendChild(leftNodes);
                    leftNodes = tmpNode;
                    tmpNode = parentClone.cloneNode(false);
                    tmpNode.appendChild(rightNodes);
                    rightNodes = tmpNode;
                } else {
                    leftNodes = parentClone.cloneNode(false);
                    rightNodes = leftNodes.cloneNode(false);
                }
                while (tmpNode = clone.previousSibling) {
                    leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
                }
                while (tmpNode = clone.nextSibling) {
                    rightNodes.appendChild(tmpNode);
                }
                clone = parentClone;
            } while (parent !== parentClone);
            tmpNode = parent.parentNode;
            tmpNode.insertBefore(leftNodes, parent);
            tmpNode.insertBefore(rightNodes, parent);
            tmpNode.insertBefore(node, rightNodes);
            domUtils.remove(parent);
            return node;
        },
        trimWhiteTextNode: function (node) {
            function remove (dir) {
                var child;
                while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
                    node.removeChild(child);
                }
            }

            remove('firstChild');
            remove('lastChild');
        },
        /**
         * 获取节点A相对于节点B的位置关系
         * @name getPosition
         * @grammar UM.dom.domUtils.getPosition(nodeA,nodeB)  =>  Number
         * @example
         *  switch (returnValue) {
     *      case 0: //相等，同一节点
     *      case 1: //无关，节点不相连
     *      case 2: //跟随，即节点A头部位于节点B头部的后面
     *      case 4: //前置，即节点A头部位于节点B头部的前面
     *      case 8: //被包含，即节点A被节点B包含
     *      case 10://组合类型，即节点A满足跟随节点B且被节点B包含。实际上，如果被包含，必定跟随，所以returnValue事实上不会存在8的情况。
     *      case 16://包含，即节点A包含节点B
     *      case 20://组合类型，即节点A满足前置节点A且包含节点B。同样，如果包含，必定前置，所以returnValue事实上也不会存在16的情况
     *  }
         */
        getPosition: function (nodeA, nodeB) {
            // 如果两个节点是同一个节点
            if (nodeA === nodeB) {
                // domUtils.POSITION_IDENTICAL
                return 0;
            }
            var node,
                parentsA = [nodeA],
                parentsB = [nodeB];
            node = nodeA;
            while (node = node.parentNode) {
                // 如果nodeB是nodeA的祖先节点
                if (node === nodeB) {
                    // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                    return 10;
                }
                parentsA.push(node);
            }
            node = nodeB;
            while (node = node.parentNode) {
                // 如果nodeA是nodeB的祖先节点
                if (node === nodeA) {
                    // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                    return 20;
                }
                parentsB.push(node);
            }
            parentsA.reverse();
            parentsB.reverse();
            if (parentsA[0] !== parentsB[0]) {
                // domUtils.POSITION_DISCONNECTED
                return 1;
            }
            var i = -1;
            while (i++, parentsA[i] === parentsB[i]) {
            }
            nodeA = parentsA[i];
            nodeB = parentsB[i];
            while (nodeA = nodeA.nextSibling) {
                if (nodeA === nodeB) {
                    // domUtils.POSITION_PRECEDING
                    return 4
                }
            }
            // domUtils.POSITION_FOLLOWING
            return 2;
        },

        /**
         * 返回节点node在父节点中的索引位置
         * @name getNodeIndex
         * @grammar UM.dom.domUtils.getNodeIndex(node)  => Number  //索引值从0开始
         */
        getNodeIndex: function (node, ignoreTextNode) {
            var preNode = node,
                i = 0;
            while (preNode = preNode.previousSibling) {
                if (ignoreTextNode && preNode.nodeType == 3) {
                    if (preNode.nodeType != preNode.nextSibling.nodeType) {
                        i++;
                    }
                    continue;
                }
                i++;
            }
            return i;
        },

        /**
         * 检测节点node是否在节点doc的树上，实质上是检测是否被doc包含
         * @name inDoc
         * @grammar UM.dom.domUtils.inDoc(node,doc)   =>  true|false
         */
        inDoc: function (node, doc) {
            return domUtils.getPosition(node, doc) == 10;
        },
        /**
         * 查找node节点的祖先节点
         * @name findParent
         * @grammar UM.dom.domUtils.findParent(node)  => Element  // 直接返回node节点的父节点
         * @grammar UM.dom.domUtils.findParent(node,filterFn)  => Element  //filterFn为过滤函数，node作为参数，返回true时才会将node作为符合要求的节点返回
         * @grammar UM.dom.domUtils.findParent(node,filterFn,includeSelf)  => Element  //includeSelf指定是否包含自身
         */
        findParent: function (node, filterFn, includeSelf) {
            if (node && !domUtils.isBody(node)) {
                node = includeSelf ? node : node.parentNode;
                while (node) {
                    if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
                        return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
                    }
                    node = node.parentNode;
                }
            }
            return null;
        },
        /**
         * 通过tagName查找node节点的祖先节点
         * @name findParentByTagName
         * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames)   =>  Element  //tagNames支持数组，区分大小写
         * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames,includeSelf)   =>  Element  //includeSelf指定是否包含自身
         * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames,includeSelf,excludeFn)   =>  Element  //excludeFn指定例外过滤条件，返回true时忽略该节点
         */
        findParentByTagName: function (node, tagNames, includeSelf, excludeFn) {
            tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
            return domUtils.findParent(node, function (node) {
                return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
            }, includeSelf);
        },
        /**
         * 查找节点node的祖先节点集合
         * @name findParents
         * @grammar UM.dom.domUtils.findParents(node)  => Array  //返回一个祖先节点数组集合，不包含自身
         * @grammar UM.dom.domUtils.findParents(node,includeSelf)  => Array  //返回一个祖先节点数组集合，includeSelf指定是否包含自身
         * @grammar UM.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //返回一个祖先节点数组集合，filterFn指定过滤条件，返回true的node将被选取
         * @grammar UM.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //返回一个祖先节点数组集合，closerFirst为true的话，node的直接父亲节点是数组的第0个
         */
        findParents: function (node, includeSelf, filterFn, closerFirst) {
            var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
            while (node = domUtils.findParent(node, filterFn)) {
                parents.push(node);
            }
            return closerFirst ? parents : parents.reverse();
        },

        /**
         * 在节点node后面插入新节点newNode
         * @name insertAfter
         * @grammar UM.dom.domUtils.insertAfter(node,newNode)  => newNode
         */
        insertAfter: function (node, newNode) {
            return node.parentNode.insertBefore(newNode, node.nextSibling);
        },

        /**
         * 删除节点node，并根据keepChildren指定是否保留子节点
         * @name remove
         * @grammar UM.dom.domUtils.remove(node)  =>  node
         * @grammar UM.dom.domUtils.remove(node,keepChildren)  =>  node
         */
        remove: function (node, keepChildren) {

            var parent = node.parentNode,
                child;
            if (parent) {
                if (keepChildren && node.hasChildNodes()) {
                    while (child = node.firstChild) {
                        parent.insertBefore(child, node);
                    }
                }
                parent.removeChild(node);
            }
            return node;
        },


        /**
         * 取得node节点的下一个兄弟节点， 如果该节点其后没有兄弟节点， 则递归查找其父节点之后的第一个兄弟节点，
         * 直到找到满足条件的节点或者递归到BODY节点之后才会结束。
         * @method getNextDomNode
         * @param { Node } node 需要获取其后的兄弟节点的节点对象
         * @return { Node | NULL } 如果找满足条件的节点， 则返回该节点， 否则返回NULL
         * @example
         * ```html
         *     <body>
         *      <div id="test">
         *          <span></span>
         *      </div>
         *      <i>xxx</i>
         * </body>
         * <script>
         *
         *     //output: i节点
         *     console.log( UE.dom.domUtils.getNextDomNode( document.getElementById( "test" ) ) );
         *
         * </script>
         * ```
         * @example
         * ```html
         * <body>
         *      <div>
         *          <span></span>
         *          <i id="test">xxx</i>
         *      </div>
         *      <b>xxx</b>
         * </body>
         * <script>
         *
         *     //由于id为test的i节点之后没有兄弟节点， 则查找其父节点（div）后面的兄弟节点
         *     //output: b节点
         *     console.log( UE.dom.domUtils.getNextDomNode( document.getElementById( "test" ) ) );
         *
         * </script>
         * ```
         */

        /**
         * 取得node节点的下一个兄弟节点， 如果startFromChild的值为ture，则先获取其子节点，
         * 如果有子节点则直接返回第一个子节点；如果没有子节点或者startFromChild的值为false，
         * 则执行<a href="#UE.dom.domUtils.getNextDomNode(Node)">getNextDomNode(Node node)</a>的查找过程。
         * @method getNextDomNode
         * @param { Node } node 需要获取其后的兄弟节点的节点对象
         * @param { Boolean } startFromChild 查找过程是否从其子节点开始
         * @return { Node | NULL } 如果找满足条件的节点， 则返回该节点， 否则返回NULL
         * @see UE.dom.domUtils.getNextDomNode(Node)
         */
        getNextDomNode: function (node, startFromChild, filterFn, guard) {
            return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filterFn, guard);
        },
        getPreDomNode: function (node, startFromChild, filterFn, guard) {
            return getDomNode(node, 'lastChild', 'previousSibling', startFromChild, filterFn, guard);
        },

        /**
         * 检测节点node是否属于bookmark节点
         * @name isBookmarkNode
         * @grammar UM.dom.domUtils.isBookmarkNode(node)  => true|false
         */
        isBookmarkNode: function (node) {
            return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
        },
        /**
         * 获取节点node所在的window对象
         * @name  getWindow
         * @grammar UM.dom.domUtils.getWindow(node)  => window对象
         */
        getWindow: function (node) {
            var doc = node.ownerDocument || node;
            return doc.defaultView || doc.parentWindow;
        },

        /**
         * 获取离nodeA与nodeB最近的公共的祖先节点
         * @method  getCommonAncestor
         * @param { Node } nodeA 第一个节点
         * @param { Node } nodeB 第二个节点
         * @remind 如果给定的两个节点是同一个节点， 将直接返回该节点。
         * @return { Node | NULL } 如果未找到公共节点， 返回NULL， 否则返回最近的公共祖先节点。
         * @example
         * ```javascript
         * var commonAncestor = UE.dom.domUtils.getCommonAncestor( document.body, document.body.firstChild );
         * //output: true
         * console.log( commonAncestor.tagName.toLowerCase() === 'body' );
         * ```
         */
        getCommonAncestor: function (nodeA, nodeB) {
            if (nodeA === nodeB)
                return nodeA;
            var parentsA = [nodeA], parentsB = [nodeB], parent = nodeA, i = -1;
            while (parent = parent.parentNode) {
                if (parent === nodeB) {
                    return parent;
                }
                parentsA.push(parent);
            }
            parent = nodeB;
            while (parent = parent.parentNode) {
                if (parent === nodeA)
                    return parent;
                parentsB.push(parent);
            }
            parentsA.reverse();
            parentsB.reverse();
            while (i++, parentsA[i] === parentsB[i]) {
            }
            return i == 0 ? null : parentsA[i - 1];

        },
        /**
         * 清除node节点左右连续为空的兄弟inline节点
         * @method clearEmptySibling
         * @param { Node } node 执行的节点对象， 如果该节点的左右连续的兄弟节点是空的inline节点，
         * 则这些兄弟节点将被删除
         * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext)  //ignoreNext指定是否忽略右边空节点
         * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext,ignorePre)  //ignorePre指定是否忽略左边空节点
         * @example
         * ```html
         * <body>
         *     <div></div>
         *     <span id="test"></span>
         *     <i></i>
         *     <b></b>
         *     <em>xxx</em>
         *     <span></span>
         * </body>
         * <script>
         *
         *      UE.dom.domUtils.clearEmptySibling( document.getElementById( "test" ) );
         *
         *      //output: <div></div><span id="test"></span><em>xxx</em><span></span>
         *      console.log( document.body.innerHTML );
         *
         * </script>
         * ```
         */

        /**
         * 清除node节点左右连续为空的兄弟inline节点， 如果ignoreNext的值为true，
         * 则忽略对右边兄弟节点的操作。
         * @method clearEmptySibling
         * @param { Node } node 执行的节点对象， 如果该节点的左右连续的兄弟节点是空的inline节点，
         * @param { Boolean } ignoreNext 是否忽略忽略对右边的兄弟节点的操作
         * 则这些兄弟节点将被删除
         * @see UE.dom.domUtils.clearEmptySibling(Node)
         */

        /**
         * 清除node节点左右连续为空的兄弟inline节点， 如果ignoreNext的值为true，
         * 则忽略对右边兄弟节点的操作， 如果ignorePre的值为true，则忽略对左边兄弟节点的操作。
         * @method clearEmptySibling
         * @param { Node } node 执行的节点对象， 如果该节点的左右连续的兄弟节点是空的inline节点，
         * @param { Boolean } ignoreNext 是否忽略忽略对右边的兄弟节点的操作
         * @param { Boolean } ignorePre 是否忽略忽略对左边的兄弟节点的操作
         * 则这些兄弟节点将被删除
         * @see UE.dom.domUtils.clearEmptySibling(Node)
         */
        clearEmptySibling: function (node, ignoreNext, ignorePre) {
            function clear (next, dir) {
                var tmpNode;
                while (next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next)
                //这里不能把空格算进来会吧空格干掉，出现文字间的空格丢掉了
                || !new RegExp('[^\t\n\r' + domUtils.fillChar + ']').test(next.nodeValue) )) {
                    tmpNode = next[dir];
                    domUtils.remove(next);
                    next = tmpNode;
                }
            }

            !ignoreNext && clear(node.nextSibling, 'nextSibling');
            !ignorePre && clear(node.previousSibling, 'previousSibling');
        },

        /**
         * 将一个文本节点node拆分成两个文本节点，offset指定拆分位置
         * @name split
         * @grammar UM.dom.domUtils.split(node,offset)  =>  TextNode  //返回从切分位置开始的后一个文本节点
         */
        split: function (node, offset) {
            var doc = node.ownerDocument;
            if (browser.ie && offset == node.nodeValue.length) {
                var next = doc.createTextNode('');
                return domUtils.insertAfter(node, next);
            }
            var retval = node.splitText(offset);
            //ie8下splitText不会跟新childNodes,我们手动触发他的更新
            if (browser.ie8) {
                var tmpNode = doc.createTextNode('');
                domUtils.insertAfter(retval, tmpNode);
                domUtils.remove(tmpNode);
            }
            return retval;
        },

        /**
         * 检测节点node是否为空节点（包括空格、换行、占位符等字符）
         * @name  isWhitespace
         * @grammar  UM.dom.domUtils.isWhitespace(node)  => true|false
         */
        isWhitespace: function (node) {
            return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
        },
        /**
         * 获取元素element相对于viewport的位置坐标
         * @name getXY
         * @grammar UM.dom.domUtils.getXY(element)  => Object //返回坐标对象{x:left,y:top}
         */
        getXY: function (element) {
            var x = 0, y = 0;
            while (element.offsetParent) {
                y += element.offsetTop;
                x += element.offsetLeft;
                element = element.offsetParent;
            }
            return {'x': x, 'y': y};
        },
        /**
         * 检查节点node是否是空inline节点
         * @name  isEmptyInlineElement
         * @grammar   UM.dom.domUtils.isEmptyInlineElement(node)  => 1|0
         * @example
         * <b><i></i></b> => 1
         * <b><i></i><u></u></b> => 1
         * <b></b> => 1
         * <b>xx<i></i></b> => 0
         */
        isEmptyInlineElement: function (node) {
            if (node.nodeType != 1 || !dtd.$removeEmpty[node.tagName]) {
                return 0;
            }
            node = node.firstChild;
            while (node) {
                //如果是创建的bookmark就跳过
                if (domUtils.isBookmarkNode(node)) {
                    return 0;
                }
                if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                    node.nodeType == 3 && !domUtils.isWhitespace(node)
                ) {
                    return 0;
                }
                node = node.nextSibling;
            }
            return 1;

        },


        /**
         * 检查节点node是否为块元素
         * @name isBlockElm
         * @grammar UM.dom.domUtils.isBlockElm(node)  => true|false
         */
        isBlockElm: function (node) {
            return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
        },


        /**
         * 原生方法getElementsByTagName的封装
         * @name getElementsByTagName
         * @grammar UM.dom.domUtils.getElementsByTagName(node,tagName)  => Array  //节点集合数组
         */
        getElementsByTagName: function (node, name, filter) {
            if (filter && utils.isString(filter)) {
                var className = filter;
                filter = function (node) {
                    var result = false;
                    $.each(utils.trim(className).replace(/[ ]{2,}/g, ' ').split(' '), function (i, v) {
                        if ($(node).hasClass(v)) {
                            result = true;
                            return false;
                        }
                    })
                    return result;
                }
            }
            name = utils.trim(name).replace(/[ ]{2,}/g, ' ').split(' ');
            var arr = [];
            for (var n = 0, ni; ni = name[n++];) {
                var list = node.getElementsByTagName(ni);
                for (var i = 0, ci; ci = list[i++];) {
                    if (!filter || filter(ci))
                        arr.push(ci);
                }
            }
            return arr;
        },


        /**
         * 设置节点node及其子节点不会被选中
         * @name unSelectable
         * @grammar UM.dom.domUtils.unSelectable(node)
         */
        unSelectable: ie && browser.ie9below || browser.opera ? function (node) {
            //for ie9
            node.onselectstart = function () {
                return false;
            };
            node.onclick = node.onkeyup = node.onkeydown = function () {
                return false;
            };
            node.unselectable = 'on';
            node.setAttribute("unselectable", "on");
            for (var i = 0, ci; ci = node.all[i++];) {
                switch (ci.tagName.toLowerCase()) {
                    case 'iframe' :
                    case 'textarea' :
                    case 'input' :
                    case 'select' :
                        break;
                    default :
                        ci.unselectable = 'on';
                        node.setAttribute("unselectable", "on");
                }
            }
        } : function (node) {
            node.style.MozUserSelect =
                node.style.webkitUserSelect =
                    node.style.msUserSelect =
                        node.style.KhtmlUserSelect = 'none';
        },
        /**
         * 删除节点node上的属性attrNames，attrNames为属性名称数组
         * @name  removeAttributes
         * @grammar UM.dom.domUtils.removeAttributes(node,attrNames)
         * @example
         * //Before remove
         * <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
         * //Remove
         * UM.dom.domUtils.removeAttributes(node,["id","name"]);
         * //After remove
         * <span style="font-size:14px;">xxxxx</span>
         */
        removeAttributes: function (node, attrNames) {
            attrNames = utils.isArray(attrNames) ? attrNames : utils.trim(attrNames).replace(/[ ]{2,}/g, ' ').split(' ');
            for (var i = 0, ci; ci = attrNames[i++];) {
                ci = attrFix[ci] || ci;
                switch (ci) {
                    case 'className':
                        node[ci] = '';
                        break;
                    case 'style':
                        node.style.cssText = '';
                        !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
                }
                node.removeAttribute(ci);
            }
        },
        /**
         * 在doc下创建一个标签名为tag，属性为attrs的元素
         * @name createElement
         * @grammar UM.dom.domUtils.createElement(doc,tag,attrs)  =>  Node  //返回创建的节点
         */
        createElement: function (doc, tag, attrs) {
            return domUtils.setAttributes(doc.createElement(tag), attrs)
        },
        /**
         * 为节点node添加属性attrs，attrs为属性键值对
         * @name setAttributes
         * @grammar UM.dom.domUtils.setAttributes(node,attrs)  => node
         */
        setAttributes: function (node, attrs) {
            for (var attr in attrs) {
                if (attrs.hasOwnProperty(attr)) {
                    var value = attrs[attr];
                    switch (attr) {
                        case 'class':
                            //ie下要这样赋值，setAttribute不起作用
                            node.className = value;
                            break;
                        case 'style' :
                            node.style.cssText = node.style.cssText + ";" + value;
                            break;
                        case 'innerHTML':
                            node[attr] = value;
                            break;
                        case 'value':
                            node.value = value;
                            break;
                        default:
                            node.setAttribute(attrFix[attr] || attr, value);
                    }
                }
            }
            return node;
        },

        /**
         * 获取元素element的计算样式
         * @name getComputedStyle
         * @grammar UM.dom.domUtils.getComputedStyle(element,styleName)  => String //返回对应样式名称的样式值
         * @example
         * getComputedStyle(document.body,"font-size")  =>  "15px"
         * getComputedStyle(form,"color")  =>  "#ffccdd"
         */
        getComputedStyle: function (element, styleName) {
            return utils.transUnitToPx(utils.fixColor(styleName, $(element).css(styleName)));
        },

        /**
         * 阻止事件默认行为
         * @param {Event} evt    需要组织的事件对象
         */
        preventDefault: function (evt) {
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        },

        /**
         * 删除元素element指定的样式
         * @method removeStyle
         * @param { Element } element 需要删除样式的元素
         * @param { String } styleName 需要删除的样式名
         * @example
         * ```html
         * <span id="test" style="color: red; background: blue;"></span>
         *
         * <script>
         *
         *     var testNode = document.getElementById("test");
         *
         *     UE.dom.domUtils.removeStyle( testNode, 'color' );
         *
         *     //output: background: blue;
         *     console.log( testNode.style.cssText );
         *
         * </script>
         * ```
         */
        removeStyle: function (element, name) {
            if (browser.ie) {
                //针对color先单独处理一下
                if (name == 'color') {
                    name = '(^|;)' + name;
                }
                element.style.cssText = element.style.cssText.replace(new RegExp(name + '[^:]*:[^;]+;?', 'ig'), '')
            } else {
                if (element.style.removeProperty) {
                    element.style.removeProperty(name);
                } else {
                    element.style.removeAttribute(utils.cssStyleToDomStyle(name));
                }
            }


            if (!element.style.cssText) {
                domUtils.removeAttributes(element, ['style']);
            }
        },

        /**
         * 获取元素element的某个样式值
         * @name getStyle
         * @grammar UM.dom.domUtils.getStyle(element,name)  => String
         */
        getStyle: function (element, name) {
            var value = element.style[utils.cssStyleToDomStyle(name)];
            return utils.fixColor(name, value);
        },
        /**
         * 为元素element设置样式属性值
         * @name setStyle
         * @grammar UM.dom.domUtils.setStyle(element,name,value)
         */
        setStyle: function (element, name, value) {
            element.style[utils.cssStyleToDomStyle(name)] = value;
            if (!utils.trim(element.style.cssText)) {
                this.removeAttributes(element, 'style')
            }
        },

        /**
         * 删除_moz_dirty属性
         * @function
         */
        removeDirtyAttr: function (node) {
            for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
                ci.removeAttribute('_moz_dirty');
            }
            node.removeAttribute('_moz_dirty');
        },
        /**
         * 返回子节点的数量
         * @function
         * @param {Node}    node    父节点
         * @param  {Function}    fn    过滤子节点的规则，若为空，则得到所有子节点的数量
         * @return {Number}    符合条件子节点的数量
         */
        getChildCount: function (node, fn) {
            var count = 0, first = node.firstChild;
            fn = fn || function () {
                    return 1;
                };
            while (first) {
                if (fn(first)) {
                    count++;
                }
                first = first.nextSibling;
            }
            return count;
        },

        /**
         * 判断是否为空节点
         * @function
         * @param {Node}    node    节点
         * @return {Boolean}    是否为空节点
         */
        isEmptyNode: function (node) {
            return !node.firstChild || domUtils.getChildCount(node, function (node) {
                    return !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
                }) == 0
        },

        /**
         * 判断节点是否为br
         * @function
         * @param {Node}    node   节点
         */
        isBr: function (node) {
            return node.nodeType == 1 && node.tagName == 'BR';
        },
        isFillChar: function (node, isInStart) {
            return node.nodeType == 3 && !node.nodeValue.replace(new RegExp((isInStart ? '^' : '' ) + domUtils.fillChar), '').length
        },

        isEmptyBlock: function (node, reg) {
            if (node.nodeType != 1)
                return 0;
            reg = reg || new RegExp('[ \t\r\n' + domUtils.fillChar + ']', 'g');
            if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
                return 0;
            }
            for (var n in dtd.$isNotEmpty) {
                if (node.getElementsByTagName(n).length) {
                    return 0;
                }
            }
            return 1;
        },

        //判断是否是编辑器自定义的参数
        isCustomeNode: function (node) {
            return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
        },
        fillNode: function (doc, node) {
            var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
            node.innerHTML = '';
            node.appendChild(tmpNode);
        },
        isBoundaryNode: function (node, dir) {
            var tmp;
            while (!domUtils.isBody(node)) {
                tmp = node;
                node = node.parentNode;
                if (tmp !== node[dir]) {
                    return false;
                }
            }
            return true;
        },
        isFillChar: function (node, isInStart) {
            return node.nodeType == 3 && !node.nodeValue.replace(new RegExp((isInStart ? '^' : '' ) + domUtils.fillChar), '').length
        },
        isBody: function (node) {
            return $(node).hasClass('edui-body-container');
        }
    };
    var fillCharReg = new RegExp(domUtils.fillChar, 'g');
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
    /**
     * @file
     * @name UM.dom.Range
     * @anthor zhanyi
     * @short Range
     * @import editor.js,core/utils.js,core/browser.js,core/dom/domUtils.js,core/dom/dtd.js
     * @desc Range范围实现类，本类是UEditor底层核心类，统一w3cRange和ieRange之间的差异，包括接口和属性
     */
    (function () {
        var guid = 0,
            fillChar = domUtils.fillChar,
            fillData;

        /**
         * 更新range的collapse状态
         * @param  {Range}   range    range对象
         */
        function updateCollapse (range) {
            range.collapsed =
                range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
        }

        function selectOneNode (rng) {
            return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
        }

        function setEndPoint (toStart, node, offset, range) {
            //如果node是自闭合标签要处理
            if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
                offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
                node = node.parentNode;
            }
            if (toStart) {
                range.startContainer = node;
                range.startOffset = offset;
                if (!range.endContainer) {
                    range.collapse(true);
                }
            } else {
                range.endContainer = node;
                range.endOffset = offset;
                if (!range.startContainer) {
                    range.collapse(false);
                }
            }
            updateCollapse(range);
            return range;
        }


        /**
         * @name Range
         * @grammar new UM.dom.Range(document)  => Range 实例
         * @desc 创建一个跟document绑定的空的Range实例
         * - ***startContainer*** 开始边界的容器节点,可以是elementNode或者是textNode
         * - ***startOffset*** 容器节点中的偏移量，如果是elementNode就是childNodes中的第几个，如果是textNode就是nodeValue的第几个字符
         * - ***endContainer*** 结束边界的容器节点,可以是elementNode或者是textNode
         * - ***endOffset*** 容器节点中的偏移量，如果是elementNode就是childNodes中的第几个，如果是textNode就是nodeValue的第几个字符
         * - ***document*** 跟range关联的document对象
         * - ***collapsed*** 是否是闭合状态
         */
        var Range = dom.Range = function (document, body) {
            var me = this;
            me.startContainer =
                me.startOffset =
                    me.endContainer =
                        me.endOffset = null;
            me.document = document;
            me.collapsed = true;
            me.body = body;
        };

        /**
         * 删除fillData
         * @param doc
         * @param excludeNode
         */
        function removeFillData (doc, excludeNode) {
            try {
                if (fillData && domUtils.inDoc(fillData, doc)) {
                    if (!fillData.nodeValue.replace(fillCharReg, '').length) {
                        var tmpNode = fillData.parentNode;
                        domUtils.remove(fillData);
                        while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
                        //safari的contains有bug
                        (browser.safari ? !(domUtils.getPosition(tmpNode, excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
                            ) {
                            fillData = tmpNode.parentNode;
                            domUtils.remove(tmpNode);
                            tmpNode = fillData;
                        }
                    } else {
                        fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
                    }
                }
            } catch (e) {
            }
        }

        /**
         *
         * @param node
         * @param dir
         */
        function mergeSibling (node, dir) {
            var tmpNode;
            node = node[dir];
            while (node && domUtils.isFillChar(node)) {
                tmpNode = node[dir];
                domUtils.remove(node);
                node = tmpNode;
            }
        }

        function execContentsAction (range, action) {
            //调整边界
            //range.includeBookmark();
            var start = range.startContainer,
                end = range.endContainer,
                startOffset = range.startOffset,
                endOffset = range.endOffset,
                doc = range.document,
                frag = doc.createDocumentFragment(),
                tmpStart, tmpEnd;
            if (start.nodeType == 1) {
                start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
            }
            if (end.nodeType == 1) {
                end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
            }
            if (start === end && start.nodeType == 3) {
                frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
                //is not clone
                if (action) {
                    start.deleteData(startOffset, endOffset - startOffset);
                    range.collapse(true);
                }
                return frag;
            }
            var current, currentLevel, clone = frag,
                startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
            for (var i = 0; startParents[i] == endParents[i];) {
                i++;
            }
            for (var j = i, si; si = startParents[j]; j++) {
                current = si.nextSibling;
                if (si == start) {
                    if (!tmpStart) {
                        if (range.startContainer.nodeType == 3) {
                            clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
                            //is not clone
                            if (action) {
                                start.deleteData(startOffset, start.nodeValue.length - startOffset);
                            }
                        } else {
                            clone.appendChild(!action ? start.cloneNode(true) : start);
                        }
                    }
                } else {
                    currentLevel = si.cloneNode(false);
                    clone.appendChild(currentLevel);
                }
                while (current) {
                    if (current === end || current === endParents[j]) {
                        break;
                    }
                    si = current.nextSibling;
                    clone.appendChild(!action ? current.cloneNode(true) : current);
                    current = si;
                }
                clone = currentLevel;
            }
            clone = frag;
            if (!startParents[i]) {
                clone.appendChild(startParents[i - 1].cloneNode(false));
                clone = clone.firstChild;
            }
            for (var j = i, ei; ei = endParents[j]; j++) {
                current = ei.previousSibling;
                if (ei == end) {
                    if (!tmpEnd && range.endContainer.nodeType == 3) {
                        clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
                        //is not clone
                        if (action) {
                            end.deleteData(0, endOffset);
                        }
                    }
                } else {
                    currentLevel = ei.cloneNode(false);
                    clone.appendChild(currentLevel);
                }
                //如果两端同级，右边第一次已经被开始做了
                if (j != i || !startParents[i]) {
                    while (current) {
                        if (current === start) {
                            break;
                        }
                        ei = current.previousSibling;
                        clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
                        current = ei;
                    }
                }
                clone = currentLevel;
            }
            if (action) {
                range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
            }
            tmpStart && domUtils.remove(tmpStart);
            tmpEnd && domUtils.remove(tmpEnd);
            return frag;
        }

        Range.prototype = {
            /**
             * @name deleteContents
             * @grammar range.deleteContents()  => Range
             * @desc 删除当前选区范围中的所有内容并返回range实例，这时的range已经变成了闭合状态
             * @example
             * DOM Element :
             * <b>x<i>x[x<i>xx]x</b>
             * //执行方法后
             * <b>x<i>x<i>|x</b>
             * 注意range改变了
             * range.startContainer => b
             * range.startOffset  => 2
             * range.endContainer => b
             * range.endOffset => 2
             * range.collapsed => true
             */
            deleteContents: function () {
                var txt;
                if (!this.collapsed) {
                    execContentsAction(this, 1);
                }
                if (browser.webkit) {
                    txt = this.startContainer;
                    if (txt.nodeType == 3 && !txt.nodeValue.length) {
                        this.setStartBefore(txt).collapse(true);
                        domUtils.remove(txt);
                    }
                }
                return this;
            },
            inFillChar: function () {
                var start = this.startContainer;
                if (this.collapsed && start.nodeType == 3
                    && start.nodeValue.replace(new RegExp('^' + domUtils.fillChar), '').length + 1 == start.nodeValue.length
                ) {
                    return true;
                }
                return false;
            },
            /**
             * @name  setStart
             * @grammar range.setStart(node,offset)  => Range
             * @desc    设置range的开始位置位于node节点内，偏移量为offset
             * 如果node是elementNode那offset指的是childNodes中的第几个，如果是textNode那offset指的是nodeValue的第几个字符
             */
            setStart: function (node, offset) {
                return setEndPoint(true, node, offset, this);
            },
            /**
             * 设置range的结束位置位于node节点，偏移量为offset
             * 如果node是elementNode那offset指的是childNodes中的第几个，如果是textNode那offset指的是nodeValue的第几个字符
             * @name  setEnd
             * @grammar range.setEnd(node,offset)  => Range
             */
            setEnd: function (node, offset) {
                return setEndPoint(false, node, offset, this);
            },
            /**
             * 将Range开始位置设置到node节点之后
             * @name  setStartAfter
             * @grammar range.setStartAfter(node)  => Range
             * @example
             * <b>xx<i>x|x</i>x</b>
             * 执行setStartAfter(i)后
             * range.startContainer =>b
             * range.startOffset =>2
             */
            setStartAfter: function (node) {
                return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
            },
            /**
             * 将Range开始位置设置到node节点之前
             * @name  setStartBefore
             * @grammar range.setStartBefore(node)  => Range
             * @example
             * <b>xx<i>x|x</i>x</b>
             * 执行setStartBefore(i)后
             * range.startContainer =>b
             * range.startOffset =>1
             */
            setStartBefore: function (node) {
                return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
            },
            /**
             * 将Range结束位置设置到node节点之后
             * @name  setEndAfter
             * @grammar range.setEndAfter(node)  => Range
             * @example
             * <b>xx<i>x|x</i>x</b>
             * setEndAfter(i)后
             * range.endContainer =>b
             * range.endtOffset =>2
             */
            setEndAfter: function (node) {
                return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
            },
            /**
             * 将Range结束位置设置到node节点之前
             * @name  setEndBefore
             * @grammar range.setEndBefore(node)  => Range
             * @example
             * <b>xx<i>x|x</i>x</b>
             * 执行setEndBefore(i)后
             * range.endContainer =>b
             * range.endtOffset =>1
             */
            setEndBefore: function (node) {
                return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
            },
            /**
             * 将Range开始位置设置到node节点内的开始位置
             * @name  setStartAtFirst
             * @grammar range.setStartAtFirst(node)  => Range
             */
            setStartAtFirst: function (node) {
                return this.setStart(node, 0);
            },
            /**
             * 将Range开始位置设置到node节点内的结束位置
             * @name  setStartAtLast
             * @grammar range.setStartAtLast(node)  => Range
             */
            setStartAtLast: function (node) {
                return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
            },
            /**
             * 将Range结束位置设置到node节点内的开始位置
             * @name  setEndAtFirst
             * @grammar range.setEndAtFirst(node)  => Range
             */
            setEndAtFirst: function (node) {
                return this.setEnd(node, 0);
            },
            /**
             * 将Range结束位置设置到node节点内的结束位置
             * @name  setEndAtLast
             * @grammar range.setEndAtLast(node)  => Range
             */
            setEndAtLast: function (node) {
                return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
            },

            /**
             * 选中完整的指定节点,并返回包含该节点的range
             * @name  selectNode
             * @grammar range.selectNode(node)  => Range
             */
            selectNode: function (node) {
                return this.setStartBefore(node).setEndAfter(node);
            },
            /**
             * 选中node内部的所有节点，并返回对应的range
             * @name selectNodeContents
             * @grammar range.selectNodeContents(node)  => Range
             * @example
             * <b>xx[x<i>xxx</i>]xxx</b>
             * 执行后
             * <b>[xxx<i>xxx</i>xxx]</b>
             * range.startContainer =>b
             * range.startOffset =>0
             * range.endContainer =>b
             * range.endOffset =>3
             */
            selectNodeContents: function (node) {
                return this.setStart(node, 0).setEndAtLast(node);
            },

            /**
             * 克隆一个新的range对象
             * @name  cloneRange
             * @grammar range.cloneRange() => Range
             */
            cloneRange: function () {
                var me = this;
                return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

            },

            /**
             * 让选区闭合到尾部，若toStart为真，则闭合到头部
             * @name  collapse
             * @grammar range.collapse() => Range
             * @grammar range.collapse(true) => Range   //闭合选区到头部
             */
            collapse: function (toStart) {
                var me = this;
                if (toStart) {
                    me.endContainer = me.startContainer;
                    me.endOffset = me.startOffset;
                } else {
                    me.startContainer = me.endContainer;
                    me.startOffset = me.endOffset;
                }
                me.collapsed = true;
                return me;
            },

            /**
             * 调整range的边界，使其"收缩"到最小的位置
             * @name  shrinkBoundary
             * @grammar range.shrinkBoundary()  => Range  //range开始位置和结束位置都调整，参见<code><a href="#adjustmentboundary">adjustmentBoundary</a></code>
             * @grammar range.shrinkBoundary(true)  => Range  //仅调整开始位置，忽略结束位置
             * @example
             * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
             * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx]</b><i>xxx</i>
             * [<b><i>xxxx</i>xxxxxxx</b>] ==> <b><i>[xxxx</i>xxxxxxx]</b>
             */
            shrinkBoundary: function (ignoreEnd) {
                var me = this, child,
                    collapsed = me.collapsed;

                function check (node) {
                    return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
                }

                while (me.startContainer.nodeType == 1 //是element
                && (child = me.startContainer.childNodes[me.startOffset]) //子节点也是element
                && check(child)) {
                    me.setStart(child, 0);
                }
                if (collapsed) {
                    return me.collapse(true);
                }
                if (!ignoreEnd) {
                    while (me.endContainer.nodeType == 1//是element
                    && me.endOffset > 0 //如果是空元素就退出 endOffset=0那么endOffst-1为负值，childNodes[endOffset]报错
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //子节点也是element
                    && check(child)) {
                        me.setEnd(child, child.childNodes.length);
                    }
                }
                return me;
            },

            /**
             * 调整边界容器，如果是textNode,就调整到elementNode上
             * @name trimBoundary
             * @grammar range.trimBoundary([ignoreEnd])  => Range //true忽略结束边界
             * @example
             * DOM Element :
             * <b>|xxx</b>
             * startContainer = xxx; startOffset = 0
             * //执行后本方法后
             * startContainer = <b>;  startOffset = 0
             * @example
             * Dom Element :
             * <b>xx|x</b>
             * startContainer = xxx;  startOffset = 2
             * //执行本方法后，xxx被实实在在地切分成两个TextNode
             * startContainer = <b>; startOffset = 1
             */
            trimBoundary: function (ignoreEnd) {
                this.txtToElmBoundary();
                var start = this.startContainer,
                    offset = this.startOffset,
                    collapsed = this.collapsed,
                    end = this.endContainer;
                if (start.nodeType == 3) {
                    if (offset == 0) {
                        this.setStartBefore(start);
                    } else {
                        if (offset >= start.nodeValue.length) {
                            this.setStartAfter(start);
                        } else {
                            var textNode = domUtils.split(start, offset);
                            //跟新结束边界
                            if (start === end) {
                                this.setEnd(textNode, this.endOffset - offset);
                            } else if (start.parentNode === end) {
                                this.endOffset += 1;
                            }
                            this.setStartBefore(textNode);
                        }
                    }
                    if (collapsed) {
                        return this.collapse(true);
                    }
                }
                if (!ignoreEnd) {
                    offset = this.endOffset;
                    end = this.endContainer;
                    if (end.nodeType == 3) {
                        if (offset == 0) {
                            this.setEndBefore(end);
                        } else {
                            offset < end.nodeValue.length && domUtils.split(end, offset);
                            this.setEndAfter(end);
                        }
                    }
                }
                return this;
            },
            /**
             * 如果选区在文本的边界上，就扩展选区到文本的父节点上
             * @name  txtToElmBoundary
             * @example
             * Dom Element :
             * <b> |xxx</b>
             * startContainer = xxx;  startOffset = 0
             * //本方法执行后
             * startContainer = <b>; startOffset = 0
             * @example
             * Dom Element :
             * <b> xxx| </b>
             * startContainer = xxx; startOffset = 3
             * //本方法执行后
             * startContainer = <b>; startOffset = 1
             */
            txtToElmBoundary: function (ignoreCollapsed) {
                function adjust (r, c) {
                    var container = r[c + 'Container'],
                        offset = r[c + 'Offset'];
                    if (container.nodeType == 3) {
                        if (!offset) {
                            r['set' + c.replace(/(\w)/, function (a) {
                                return a.toUpperCase();
                            }) + 'Before'](container);
                        } else if (offset >= container.nodeValue.length) {
                            r['set' + c.replace(/(\w)/, function (a) {
                                return a.toUpperCase();
                            }) + 'After'](container);
                        }
                    }
                }

                if (ignoreCollapsed || !this.collapsed) {
                    adjust(this, 'start');
                    adjust(this, 'end');
                }
                return this;
            },

            /**
             * 在当前选区的开始位置前插入一个节点或者fragment，range的开始位置会在插入节点的前边
             * @name  insertNode
             * @grammar range.insertNode(node)  => Range //node可以是textNode,elementNode,fragment
             * @example
             * Range :
             * xxx[x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
             * 待插入Node :
             * <p>ssss</p>
             * 执行本方法后的Range :
             * xxx[<p>ssss</p>x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
             */
            insertNode: function (node) {
                var first = node, length = 1;
                if (node.nodeType == 11) {
                    first = node.firstChild;
                    length = node.childNodes.length;
                }
                this.trimBoundary(true);
                var start = this.startContainer,
                    offset = this.startOffset;
                var nextNode = start.childNodes[offset];
                if (nextNode) {
                    start.insertBefore(node, nextNode);
                } else {
                    start.appendChild(node);
                }
                if (first.parentNode === this.endContainer) {
                    this.endOffset = this.endOffset + length;
                }
                return this.setStartBefore(first);
            },
            /**
             * 设置光标闭合位置,toEnd设置为true时光标将闭合到选区的结尾
             * @name  setCursor
             * @grammar range.setCursor([toEnd])  =>  Range   //toEnd为true时，光标闭合到选区的末尾
             */
            setCursor: function (toEnd, noFillData) {
                return this.collapse(!toEnd).select(noFillData);
            },
            /**
             * 创建当前range的一个书签，记录下当前range的位置，方便当dom树改变时，还能找回原来的选区位置
             * @name createBookmark
             * @grammar range.createBookmark([serialize])  => Object  //{start:开始标记,end:结束标记,id:serialize} serialize为真时，开始结束标记是插入节点的id，否则是插入节点的引用
             */
            createBookmark: function (serialize, same) {
                var endNode,
                    startNode = this.document.createElement('span');
                startNode.style.cssText = 'display:none;line-height:0px;';
                startNode.appendChild(this.document.createTextNode('\u200D'));
                startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

                if (!this.collapsed) {
                    endNode = startNode.cloneNode(true);
                    endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
                }
                this.insertNode(startNode);
                if (endNode) {
                    this.collapse().insertNode(endNode).setEndBefore(endNode);
                }
                this.setStartAfter(startNode);
                return {
                    start: serialize ? startNode.id : startNode,
                    end: endNode ? serialize ? endNode.id : endNode : null,
                    id: serialize
                }
            },
            /**
             *  移动边界到书签位置，并删除插入的书签节点
             *  @name  moveToBookmark
             *  @grammar range.moveToBookmark(bookmark)  => Range //让当前的range选到给定bookmark的位置,bookmark对象是由range.createBookmark创建的
             */
            moveToBookmark: function (bookmark) {
                var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
                    end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
                this.setStartBefore(start);
                domUtils.remove(start);
                if (end) {
                    this.setEndBefore(end);
                    domUtils.remove(end);
                } else {
                    this.collapse(true);
                }
                return this;
            },

            /**
             * 调整Range的边界，使其"缩小"到最合适的位置
             * @name adjustmentBoundary
             * @grammar range.adjustmentBoundary() => Range   //参见<code><a href="#shrinkboundary">shrinkBoundary</a></code>
             * @example
             * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
             * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx</b>]<i>xxx</i>
             */
            adjustmentBoundary: function () {
                if (!this.collapsed) {
                    while (!domUtils.isBody(this.startContainer) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length &&
                    this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                        ) {

                        this.setStartAfter(this.startContainer);
                    }
                    while (!domUtils.isBody(this.endContainer) && !this.endOffset &&
                    this.endContainer[this.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                        ) {
                        this.setEndBefore(this.endContainer);
                    }
                }
                return this;
            },

            /**
             * 得到一个自闭合的节点,常用于获取自闭和的节点，例如图片节点
             * @name  getClosedNode
             * @grammar range.getClosedNode()  => node|null
             * @example
             * <b>xxxx[<img />]xxx</b>
             */
            getClosedNode: function () {
                var node;
                if (!this.collapsed) {
                    var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                    if (selectOneNode(range)) {
                        var child = range.startContainer.childNodes[range.startOffset];
                        if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                            node = child;
                        }
                    }
                }
                return node;
            },
            /**
             * 根据当前range选中内容节点（在页面上表现为反白显示）
             * @name select
             * @grammar range.select();  => Range
             */
            select: browser.ie ? function (noFillData, textRange) {
                var nativeRange;
                if (!this.collapsed)
                    this.shrinkBoundary();
                var node = this.getClosedNode();
                if (node && !textRange) {
                    try {
                        nativeRange = this.document.body.createControlRange();
                        nativeRange.addElement(node);
                        nativeRange.select();
                    } catch (e) {
                    }
                    return this;
                }
                var bookmark = this.createBookmark(),
                    start = bookmark.start,
                    end;
                nativeRange = this.document.body.createTextRange();
                nativeRange.moveToElementText(start);
                nativeRange.moveStart('character', 1);
                if (!this.collapsed) {
                    var nativeRangeEnd = this.document.body.createTextRange();
                    end = bookmark.end;
                    nativeRangeEnd.moveToElementText(end);
                    nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
                } else {
                    if (!noFillData && this.startContainer.nodeType != 3) {
                        //使用<span>|x<span>固定住光标
                        var tmpText = this.document.createTextNode(fillChar),
                            tmp = this.document.createElement('span');
                        tmp.appendChild(this.document.createTextNode(fillChar));
                        start.parentNode.insertBefore(tmp, start);
                        start.parentNode.insertBefore(tmpText, start);
                        //当点b,i,u时，不能清除i上边的b
                        removeFillData(this.document, tmpText);
                        fillData = tmpText;
                        mergeSibling(tmp, 'previousSibling');
                        mergeSibling(start, 'nextSibling');
                        nativeRange.moveStart('character', -1);
                        nativeRange.collapse(true);
                    }
                }
                this.moveToBookmark(bookmark);
                tmp && domUtils.remove(tmp);
                //IE在隐藏状态下不支持range操作，catch一下
                try {
                    nativeRange.select();
                } catch (e) {
                }
                return this;
            } : function (notInsertFillData) {
                function checkOffset (rng) {

                    function check (node, offset, dir) {
                        if (node.nodeType == 3 && node.nodeValue.length < offset) {
                            rng[dir + 'Offset'] = node.nodeValue.length
                        }
                    }

                    check(rng.startContainer, rng.startOffset, 'start');
                    check(rng.endContainer, rng.endOffset, 'end');
                }

                var win = domUtils.getWindow(this.document),
                    sel = win.getSelection(),
                    txtNode;
                //FF下关闭自动长高时滚动条在关闭dialog时会跳
                //ff下如果不body.focus将不能定位闭合光标到编辑器内
                browser.gecko ? this.body.focus() : win.focus();
                if (sel) {
                    sel.removeAllRanges();
                    // trace:870 chrome/safari后边是br对于闭合得range不能定位 所以去掉了判断
                    // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                    if (this.collapsed && !notInsertFillData) {
//                    //opear如果没有节点接着，原生的不能够定位,不能在body的第一级插入空白节点
//                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
//                        var tmp = this.document.createTextNode('');
//                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
//                    }
//
                        //处理光标落在文本节点的情况
                        //处理以下的情况
                        //<b>|xxxx</b>
                        //<b>xxxx</b>|xxxx
                        //xxxx<b>|</b>
                        var start = this.startContainer, child = start;
                        if (start.nodeType == 1) {
                            child = start.childNodes[this.startOffset];

                        }
                        if (!(start.nodeType == 3 && this.startOffset) &&
                            (child ?
                                    (!child.previousSibling || child.previousSibling.nodeType != 3)
                                    :
                                    (!start.lastChild || start.lastChild.nodeType != 3)
                            )
                        ) {
                            txtNode = this.document.createTextNode(fillChar);
                            //跟着前边走
                            this.insertNode(txtNode);
                            removeFillData(this.document, txtNode);
                            mergeSibling(txtNode, 'previousSibling');
                            mergeSibling(txtNode, 'nextSibling');
                            fillData = txtNode;
                            this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
                        }
                    }
                    var nativeRange = this.document.createRange();
                    if (this.collapsed && browser.opera && this.startContainer.nodeType == 1) {
                        var child = this.startContainer.childNodes[this.startOffset];
                        if (!child) {
                            //往前靠拢
                            child = this.startContainer.lastChild;
                            if (child && domUtils.isBr(child)) {
                                this.setStartBefore(child).collapse(true);
                            }
                        } else {
                            //向后靠拢
                            while (child && domUtils.isBlockElm(child)) {
                                if (child.nodeType == 1 && child.childNodes[0]) {
                                    child = child.childNodes[0]
                                } else {
                                    break;
                                }
                            }
                            child && this.setStartBefore(child).collapse(true)
                        }

                    }
                    //是createAddress最后一位算的不准，现在这里进行微调
                    checkOffset(this);
                    nativeRange.setStart(this.startContainer, this.startOffset);
                    nativeRange.setEnd(this.endContainer, this.endOffset);
                    sel.addRange(nativeRange);
                }
                return this;
            },


            createAddress: function (ignoreEnd, ignoreTxt) {
                var addr = {}, me = this;

                function getAddress (isStart) {
                    var node = isStart ? me.startContainer : me.endContainer;
                    var parents = domUtils.findParents(node, true, function (node) {
                            return !domUtils.isBody(node)
                        }),
                        addrs = [];
                    for (var i = 0, ci; ci = parents[i++];) {
                        addrs.push(domUtils.getNodeIndex(ci, ignoreTxt));
                    }
                    var firstIndex = 0;

                    if (ignoreTxt) {
                        if (node.nodeType == 3) {
                            var tmpNode = node.previousSibling;
                            while (tmpNode && tmpNode.nodeType == 3) {
                                firstIndex += tmpNode.nodeValue.replace(fillCharReg, '').length;
                                tmpNode = tmpNode.previousSibling;
                            }
                            firstIndex += (isStart ? me.startOffset : me.endOffset)// - (fillCharReg.test(node.nodeValue) ? 1 : 0 )
                        } else {
                            node = node.childNodes[isStart ? me.startOffset : me.endOffset];
                            if (node) {
                                firstIndex = domUtils.getNodeIndex(node, ignoreTxt);
                            } else {
                                node = isStart ? me.startContainer : me.endContainer;
                                var first = node.firstChild;
                                while (first) {
                                    if (domUtils.isFillChar(first)) {
                                        first = first.nextSibling;
                                        continue;
                                    }
                                    firstIndex++;
                                    if (first.nodeType == 3) {
                                        while (first && first.nodeType == 3) {
                                            first = first.nextSibling;
                                        }
                                    } else {
                                        first = first.nextSibling;
                                    }
                                }
                            }
                        }

                    } else {
                        firstIndex = isStart ? domUtils.isFillChar(node) ? 0 : me.startOffset : me.endOffset
                    }
                    if (firstIndex < 0) {
                        firstIndex = 0;
                    }
                    addrs.push(firstIndex);
                    return addrs;
                }

                addr.startAddress = getAddress(true);
                if (!ignoreEnd) {
                    addr.endAddress = me.collapsed ? [].concat(addr.startAddress) : getAddress();
                }
                return addr;
            },
            moveToAddress: function (addr, ignoreEnd) {
                var me = this;

                function getNode (address, isStart) {
                    var tmpNode = me.body,
                        parentNode, offset;
                    for (var i = 0, ci, l = address.length; i < l; i++) {
                        ci = address[i];
                        parentNode = tmpNode;
                        tmpNode = tmpNode.childNodes[ci];
                        if (!tmpNode) {
                            offset = ci;
                            break;
                        }
                    }
                    if (isStart) {
                        if (tmpNode) {
                            me.setStartBefore(tmpNode)
                        } else {
                            me.setStart(parentNode, offset)
                        }
                    } else {
                        if (tmpNode) {
                            me.setEndBefore(tmpNode)
                        } else {
                            me.setEnd(parentNode, offset)
                        }
                    }
                }

                getNode(addr.startAddress, true);
                !ignoreEnd && addr.endAddress && getNode(addr.endAddress);
                return me;
            },
            equals: function (rng) {
                for (var p in this) {
                    if (this.hasOwnProperty(p)) {
                        if (this[p] !== rng[p])
                            return false
                    }
                }
                return true;

            },
            scrollIntoView: function () {
                var $span = $('<span style="padding:0;margin:0;display:block;border:0">&nbsp;</span>');
                this.cloneRange().insertNode($span.get(0));
                var winScrollTop = $(window).scrollTop(),
                    winHeight = $(window).height(),
                    spanTop = $span.offset().top;
                if (spanTop < winScrollTop - winHeight || spanTop > winScrollTop + winHeight) {
                    if (spanTop > winScrollTop + winHeight) {
                        window.scrollTo(0, spanTop - winHeight + $span.height())
                    } else {
                        window.scrollTo(0, winScrollTop - spanTop)
                    }

                }
                $span.remove();
            },
            getOffset: function () {
                var bk = this.createBookmark();
                var offset = $(bk.start).css('display', 'inline-block').offset();
                this.moveToBookmark(bk);
                return offset
            }
        };
    })();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
    /**
     * @class UM.dom.Selection    Selection类
     */
    (function () {

        function getBoundaryInformation (range, start) {
            var getIndex = domUtils.getNodeIndex;
            range = range.duplicate();
            range.collapse(start);
            var parent = range.parentElement();
            //如果节点里没有子节点，直接退出
            if (!parent.hasChildNodes()) {
                return {container: parent, offset: 0};
            }
            var siblings = parent.children,
                child,
                testRange = range.duplicate(),
                startIndex = 0, endIndex = siblings.length - 1, index = -1,
                distance;
            while (startIndex <= endIndex) {
                index = Math.floor((startIndex + endIndex) / 2);
                child = siblings[index];
                testRange.moveToElementText(child);
                var position = testRange.compareEndPoints('StartToStart', range);
                if (position > 0) {
                    endIndex = index - 1;
                } else if (position < 0) {
                    startIndex = index + 1;
                } else {
                    //trace:1043
                    return {container: parent, offset: getIndex(child)};
                }
            }
            if (index == -1) {
                testRange.moveToElementText(parent);
                testRange.setEndPoint('StartToStart', range);
                distance = testRange.text.replace(/(\r\n|\r)/g, '\n').length;
                siblings = parent.childNodes;
                if (!distance) {
                    child = siblings[siblings.length - 1];
                    return {container: child, offset: child.nodeValue.length};
                }

                var i = siblings.length;
                while (distance > 0) {
                    distance -= siblings[--i].nodeValue.length;
                }
                return {container: siblings[i], offset: -distance};
            }
            testRange.collapse(position > 0);
            testRange.setEndPoint(position > 0 ? 'StartToStart' : 'EndToStart', range);
            distance = testRange.text.replace(/(\r\n|\r)/g, '\n').length;
            if (!distance) {
                return dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
                {container: parent, offset: getIndex(child) + (position > 0 ? 0 : 1)} :
                {container: child, offset: position > 0 ? 0 : child.childNodes.length}
            }
            while (distance > 0) {
                try {
                    var pre = child;
                    child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                    distance -= child.nodeValue.length;
                } catch (e) {
                    return {container: parent, offset: getIndex(pre)};
                }
            }
            return {container: child, offset: position > 0 ? -distance : child.nodeValue.length + distance}
        }

        /**
         * 将ieRange转换为Range对象
         * @param {Range}   ieRange    ieRange对象
         * @param {Range}   range      Range对象
         * @return  {Range}  range       返回转换后的Range对象
         */
        function transformIERangeToRange (ieRange, range) {
            if (ieRange.item) {
                range.selectNode(ieRange.item(0));
            } else {
                var bi = getBoundaryInformation(ieRange, true);
                range.setStart(bi.container, bi.offset);
                if (ieRange.compareEndPoints('StartToEnd', ieRange) != 0) {
                    bi = getBoundaryInformation(ieRange, false);
                    range.setEnd(bi.container, bi.offset);
                }
            }
            return range;
        }

        /**
         * 获得ieRange
         * @param {Selection} sel    Selection对象
         * @return {ieRange}    得到ieRange
         */
        function _getIERange (sel, txtRange) {
            var ieRange;
            //ie下有可能报错
            try {
                ieRange = sel.getNative(txtRange).createRange();
            } catch (e) {
                return null;
            }
            var el = ieRange.item ? ieRange.item(0) : ieRange.parentElement();
            if (( el.ownerDocument || el ) === sel.document) {
                return ieRange;
            }
            return null;
        }

        var Selection = dom.Selection = function (doc, body) {
            var me = this;
            me.document = doc;
            me.body = body;
            if (browser.ie9below) {
                $(body).on('beforedeactivate', function () {
                    me._bakIERange = me.getIERange();
                }).on('activate', function () {
                    try {
                        var ieNativRng = _getIERange(me);
                        if ((!ieNativRng || !me.rangeInBody(ieNativRng)) && me._bakIERange) {
                            me._bakIERange.select();
                        }
                    } catch (ex) {
                    }
                    me._bakIERange = null;
                });
            }
        };

        Selection.prototype = {
            hasNativeRange: function () {
                var rng;
                if (!browser.ie || browser.ie9above) {
                    var nativeSel = this.getNative();
                    if (!nativeSel.rangeCount) {
                        return false;
                    }
                    rng = nativeSel.getRangeAt(0);
                } else {
                    rng = _getIERange(this);
                }
                return this.rangeInBody(rng);
            },
            /**
             * 获取原生seleciton对象
             * @public
             * @function
             * @name    UM.dom.Selection.getNative
             * @return {Selection}    获得selection对象
             */
            getNative: function (txtRange) {
                var doc = this.document;
                try {
                    return !doc ? null : browser.ie9below || txtRange ? doc.selection : domUtils.getWindow(doc).getSelection();
                } catch (e) {
                    return null;
                }
            },
            /**
             * 获得ieRange
             * @public
             * @function
             * @name    UM.dom.Selection.getIERange
             * @return {ieRange}    返回ie原生的Range
             */
            getIERange: function (txtRange) {
                var ieRange = _getIERange(this, txtRange);
                if (!ieRange || !this.rangeInBody(ieRange, txtRange)) {
                    if (this._bakIERange) {
                        return this._bakIERange;
                    }
                }
                return ieRange;
            },
            rangeInBody: function (rng, txtRange) {
                var node = browser.ie9below || txtRange ? rng.item ? rng.item() : rng.parentElement() : rng.startContainer;

                return node === this.body || domUtils.inDoc(node, this.body);
            },
            /**
             * 缓存当前选区的range和选区的开始节点
             * @public
             * @function
             * @name    UM.dom.Selection.cache
             */
            cache: function () {
                this.clear();
                this._cachedRange = this.getRange();
                this._cachedStartElement = this.getStart();
                this._cachedStartElementPath = this.getStartElementPath();
            },

            getStartElementPath: function () {
                if (this._cachedStartElementPath) {
                    return this._cachedStartElementPath;
                }
                var start = this.getStart();
                if (start) {
                    return domUtils.findParents(start, true, null, true)
                }
                return [];
            },
            /**
             * 清空缓存
             * @public
             * @function
             * @name    UM.dom.Selection.clear
             */
            clear: function () {
                this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
            },
            /**
             * 编辑器是否得到了选区
             */
            isFocus: function () {
                return this.hasNativeRange()

            },
            /**
             * 获取选区对应的Range
             * @public
             * @function
             * @name    UM.dom.Selection.getRange
             * @returns {UM.dom.Range}    得到Range对象
             */
            getRange: function () {
                var me = this;

                function optimze (range) {
                    var child = me.body.firstChild,
                        collapsed = range.collapsed;
                    while (child && child.firstChild) {
                        range.setStart(child, 0);
                        child = child.firstChild;
                    }
                    if (!range.startContainer) {
                        range.setStart(me.body, 0)
                    }
                    if (collapsed) {
                        range.collapse(true);
                    }
                }

                if (me._cachedRange != null) {
                    return this._cachedRange;
                }
                var range = new dom.Range(me.document, me.body);
                if (browser.ie9below) {
                    var nativeRange = me.getIERange();
                    if (nativeRange && this.rangeInBody(nativeRange)) {

                        try {
                            transformIERangeToRange(nativeRange, range);
                        } catch (e) {
                            optimze(range);
                        }

                    } else {
                        optimze(range);
                    }
                } else {
                    var sel = me.getNative();
                    if (sel && sel.rangeCount && me.rangeInBody(sel.getRangeAt(0))) {
                        var firstRange = sel.getRangeAt(0);
                        var lastRange = sel.getRangeAt(sel.rangeCount - 1);
                        range.setStart(firstRange.startContainer, firstRange.startOffset).setEnd(lastRange.endContainer, lastRange.endOffset);
                        if (range.collapsed && domUtils.isBody(range.startContainer) && !range.startOffset) {
                            optimze(range);
                        }
                    } else {
                        //trace:1734 有可能已经不在dom树上了，标识的节点
                        if (this._bakRange && (this._bakRange.startContainer === this.body || domUtils.inDoc(this._bakRange.startContainer, this.body))) {
                            return this._bakRange;
                        }
                        optimze(range);
                    }
                }

                return this._bakRange = range;
            },

            /**
             * 获取开始元素，用于状态反射
             * @public
             * @function
             * @name    UM.dom.Selection.getStart
             * @return {Element}     获得开始元素
             */
            getStart: function () {
                if (this._cachedStartElement) {
                    return this._cachedStartElement;
                }
                var range = browser.ie9below ? this.getIERange() : this.getRange(),
                    tmpRange,
                    start, tmp, parent;
                if (browser.ie9below) {
                    if (!range) {
                        //todo 给第一个值可能会有问题
                        return this.document.body.firstChild;
                    }
                    //control元素
                    if (range.item) {
                        return range.item(0);
                    }
                    tmpRange = range.duplicate();
                    //修正ie下<b>x</b>[xx] 闭合后 <b>x|</b>xx
                    tmpRange.text.length > 0 && tmpRange.moveStart('character', 1);
                    tmpRange.collapse(1);
                    start = tmpRange.parentElement();
                    parent = tmp = range.parentElement();
                    while (tmp = tmp.parentNode) {
                        if (tmp == start) {
                            start = parent;
                            break;
                        }
                    }
                } else {
                    start = range.startContainer;
                    if (start.nodeType == 1 && start.hasChildNodes()) {
                        start = start.childNodes[Math.min(start.childNodes.length - 1, range.startOffset)];
                    }
                    if (start.nodeType == 3) {
                        return start.parentNode;
                    }
                }
                return start;
            },
            /**
             * 得到选区中的文本
             * @public
             * @function
             * @name    UM.dom.Selection.getText
             * @return  {String}    选区中包含的文本
             */
            getText: function () {
                var nativeSel, nativeRange;
                if (this.isFocus() && (nativeSel = this.getNative())) {
                    nativeRange = browser.ie9below ? nativeSel.createRange() : nativeSel.getRangeAt(0);
                    return browser.ie9below ? nativeRange.text : nativeRange.toString();
                }
                return '';
            }
        };
    })();
    /**
     * @file
     * @name UM.Editor
     * @short Editor
     * @import editor.js,core/utils.js,core/EventBase.js,core/browser.js,core/dom/dtd.js,core/dom/domUtils.js,core/dom/Range.js,core/dom/Selection.js,plugins/serialize.js
     * @desc 编辑器主类，包含编辑器提供的大部分公用接口
     */
    (function () {
        var uid = 0, _selectionChangeTimer;

        /**
         * @private
         * @ignore
         * @param form  编辑器所在的form元素
         * @param editor  编辑器实例对象
         */
        function setValue (form, editor) {
            var textarea;
            if (editor.textarea) {
                if (utils.isString(editor.textarea)) {
                    for (var i = 0, ti, tis = domUtils.getElementsByTagName(form, 'textarea'); ti = tis[i++];) {
                        if (ti.id == 'umeditor_textarea_' + editor.options.textarea) {
                            textarea = ti;
                            break;
                        }
                    }
                } else {
                    textarea = editor.textarea;
                }
            }
            if (!textarea) {
                form.appendChild(textarea = domUtils.createElement(document, 'textarea', {
                    'name': editor.options.textarea,
                    'id': 'umeditor_textarea_' + editor.options.textarea,
                    'style': "display:none"
                }));
                //不要产生多个textarea
                editor.textarea = textarea;
            }
            textarea.value = editor.hasContents() ?
                (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null, null, true)) :
                ''
        }

        function loadPlugins (me) {
            //初始化插件
            for (var pi in UM.plugins) {
                if (me.options.excludePlugins.indexOf(pi) == -1) {
                    UM.plugins[pi].call(me);
                    me.plugins[pi] = 1;
                }
            }
            me.langIsReady = true;

            me.fireEvent("langReady");
        }

        function checkCurLang (I18N) {
            for (var lang in I18N) {
                return lang
            }
        }

        /**
         * UEditor编辑器类
         * @name Editor
         * @desc 创建一个跟编辑器实例
         * - ***container*** 编辑器容器对象
         * - ***iframe*** 编辑区域所在的iframe对象
         * - ***window*** 编辑区域所在的window
         * - ***document*** 编辑区域所在的document对象
         * - ***body*** 编辑区域所在的body对象
         * - ***selection*** 编辑区域的选区对象
         */
        var Editor = UM.Editor = function (options) {
            var me = this;
            me.uid = uid++;
            EventBase.call(me);
            me.commands = {};
            me.options = utils.extend(utils.clone(options || {}), UMEDITOR_CONFIG, true);
            me.shortcutkeys = {};
            me.inputRules = [];
            me.outputRules = [];
            //设置默认的常用属性
            me.setOpt({
                isShow: true,
                initialContent: '',
                initialStyle: '',
                autoClearinitialContent: false,
                textarea: 'editorValue',
                focus: false,
                focusInEnd: true,
                autoClearEmptyNode: true,
                fullscreen: false,
                readonly: false,
                zIndex: 999,
                enterTag: 'p',
                lang: 'zh-cn',
                langPath: me.options.UMEDITOR_HOME_URL + 'lang/',
                theme: 'default',
                themePath: me.options.UMEDITOR_HOME_URL + 'themes/',
                allHtmlEnabled: false,
                autoSyncData: true,
                autoHeightEnabled: true,
                excludePlugins: ''
            });
            me.plugins = {};
            if (!utils.isEmptyObject(UM.I18N)) {
                //修改默认的语言类型
                me.options.lang = checkCurLang(UM.I18N);
                loadPlugins(me)
            } else {
                utils.loadFile(document, {
                    src: me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
                    tag: "script",
                    type: "text/javascript",
                    defer: "defer"
                }, function () {
                    loadPlugins(me)
                });
            }

        };
        Editor.prototype = {
            /**
             * 当编辑器ready后执行传入的fn,如果编辑器已经完成ready，就马上执行fn，fn的中的this是编辑器实例。
             * 大部分的实例接口都需要放在该方法内部执行，否则在IE下可能会报错。
             * @name ready
             * @grammar editor.ready(fn) fn是当编辑器渲染好后执行的function
             * @example
             * var editor = new UM.ui.Editor();
             * editor.render("myEditor");
             * editor.ready(function(){
         *     editor.setContent("欢迎使用UEditor！");
         * })
             */
            ready: function (fn) {
                var me = this;
                if (fn) {
                    me.isReady ? fn.apply(me) : me.addListener('ready', fn);
                }
            },
            /**
             * 为编辑器设置默认参数值。若用户配置为空，则以默认配置为准
             * @grammar editor.setOpt(key,value);      //传入一个键、值对
             * @grammar editor.setOpt({ key:value});   //传入一个json对象
             */
            setOpt: function (key, val) {
                var obj = {};
                if (utils.isString(key)) {
                    obj[key] = val
                } else {
                    obj = key;
                }
                utils.extend(this.options, obj, true);
            },
            getOpt: function (key) {
                return this.options[key] || ''
            },
            /**
             * 销毁编辑器实例对象
             * @name destroy
             * @grammar editor.destroy();
             */
            destroy: function () {

                var me = this;
                me.fireEvent('destroy');
                var container = me.container.parentNode;
                if (container === document.body) {
                    container = me.container;
                }
                var textarea = me.textarea;
                if (!textarea) {
                    textarea = document.createElement('textarea');
                    container.parentNode.insertBefore(textarea, container);
                } else {
                    textarea.style.display = ''
                }

                textarea.style.width = me.body.offsetWidth + 'px';
                textarea.style.height = me.body.offsetHeight + 'px';
                textarea.value = me.getContent();
                textarea.id = me.key;
                if (container.contains(textarea)) {
                    $(textarea).insertBefore(container);
                }
                container.innerHTML = '';

                domUtils.remove(container);
                UM.clearCache(me.id);
                //trace:2004
                for (var p in me) {
                    if (me.hasOwnProperty(p)) {
                        delete this[p];
                    }
                }

            },
            initialCont: function (holder) {

                if (holder) {
                    holder.getAttribute('name') && ( this.options.textarea = holder.getAttribute('name'));
                    if (holder && /script|textarea/ig.test(holder.tagName)) {
                        var newDiv = document.createElement('div');
                        holder.parentNode.insertBefore(newDiv, holder);
                        this.options.initialContent = UM.htmlparser(holder.value || holder.innerHTML || this.options.initialContent).toHtml();
                        holder.className && (newDiv.className = holder.className);
                        holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);

                        if (/textarea/i.test(holder.tagName)) {
                            this.textarea = holder;
                            this.textarea.style.display = 'none';

                        } else {
                            holder.parentNode.removeChild(holder);
                            holder.id && (newDiv.id = holder.id);
                        }
                        holder = newDiv;
                        holder.innerHTML = '';
                    }
                    return holder;
                } else {
                    return null;
                }

            },
            /**
             * 渲染编辑器的DOM到指定容器，必须且只能调用一次
             * @name render
             * @grammar editor.render(containerId);    //可以指定一个容器ID
             * @grammar editor.render(containerDom);   //也可以直接指定容器对象
             */
            render: function (container) {
                var me = this,
                    options = me.options,
                    getStyleValue = function (attr) {
                        return parseInt($(container).css(attr));
                    };

                if (utils.isString(container)) {
                    container = document.getElementById(container);
                }
                if (container) {
                    this.id = container.getAttribute('id');
                    UM.setEditor(this);
                    utils.cssRule('edui-style-body', me.options.initialStyle, document);

                    container = this.initialCont(container);

                    container.className += ' edui-body-container';

                    if (options.initialFrameWidth) {
                        options.minFrameWidth = options.initialFrameWidth
                    } else {
                        //都没给值，先写死了
                        options.minFrameWidth = options.initialFrameWidth = $(container).width() || UM.defaultWidth;
                    }
                    if (options.initialFrameHeight) {
                        options.minFrameHeight = options.initialFrameHeight
                    } else {

                        options.initialFrameHeight = options.minFrameHeight = $(container).height() || UM.defaultHeight;
                    }

                    container.style.width = /%$/.test(options.initialFrameWidth) ? '100%' : options.initialFrameWidth -
                    getStyleValue("padding-left") -
                    getStyleValue("padding-right") + 'px';

                    var height = /%$/.test(options.initialFrameHeight) ? '100%' : (options.initialFrameHeight - getStyleValue("padding-top") - getStyleValue("padding-bottom") );
                    if (this.options.autoHeightEnabled) {
                        container.style.minHeight = height + 'px';
                        container.style.height = '';
                        if (browser.ie && browser.version <= 6) {
                            container.style.height = height;
                            container.style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');
                        }
                    } else {
                        $(container).height(height)
                    }
                    container.style.zIndex = options.zIndex;
                    this._setup(container);

                }
            },
            /**
             * 编辑器初始化
             * @private
             * @ignore
             * @param {Element} doc 编辑器Iframe中的文档对象
             */
            _setup: function (cont) {
                var me = this,
                    options = me.options;

                cont.contentEditable = true;
                document.body.spellcheck = false;

                me.document = document;
                me.window = document.defaultView || document.parentWindow;
                me.body = cont;
                me.$body = $(cont);
                me.selection = new dom.Selection(document, me.body);
                me._isEnabled = false;
                //gecko初始化就能得到range,无法判断isFocus了
                var geckoSel;
                if (browser.gecko && (geckoSel = this.selection.getNative())) {
                    geckoSel.removeAllRanges();
                }
                this._initEvents();
                //为form提交提供一个隐藏的textarea
                for (var form = cont.parentNode; form && !domUtils.isBody(form); form = form.parentNode) {
                    if (form.tagName == 'FORM') {
                        me.form = form;
                        if (me.options.autoSyncData) {
                            $(cont).on('blur', function () {
                                setValue(form, me);
                            })
                        } else {
                            $(form).on('submit', function () {
                                setValue(this, me);
                            })
                        }
                        break;
                    }
                }
                if (options.initialContent) {
                    if (options.autoClearinitialContent) {
                        var oldExecCommand = me.execCommand;
                        me.execCommand = function () {
                            me.fireEvent('firstBeforeExecCommand');
                            return oldExecCommand.apply(me, arguments);
                        };
                        this._setDefaultContent(options.initialContent);
                    } else
                        this.setContent(options.initialContent, false, true);
                }

                //编辑器不能为空内容

                if (domUtils.isEmptyNode(me.body)) {
                    me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                }
                //如果要求focus, 就把光标定位到内容开始
                if (options.focus) {
                    setTimeout(function () {
                        me.focus(me.options.focusInEnd);
                        //如果自动清除开着，就不需要做selectionchange;
                        !me.options.autoClearinitialContent && me._selectionChange();
                    }, 0);
                }
                if (!me.container) {
                    me.container = cont.parentNode;
                }

                me._bindshortcutKeys();
                me.isReady = 1;
                me.fireEvent('ready');
                options.onready && options.onready.call(me);
                if (!browser.ie || browser.ie9above) {

                    $(me.body).on('blur focus', function (e) {
                        var nSel = me.selection.getNative();
                        //chrome下会出现alt+tab切换时，导致选区位置不对
                        if (e.type == 'blur') {
                            if (nSel.rangeCount > 0) {
                                me._bakRange = nSel.getRangeAt(0);
                            }
                        } else {
                            try {
                                me._bakRange && nSel.addRange(me._bakRange)
                            } catch (e) {
                            }
                            me._bakRange = null;
                        }
                    });
                }

                !options.isShow && me.setHide();
                options.readonly && me.setDisabled();
            },
            /**
             * 同步编辑器的数据，为提交数据做准备，主要用于你是手动提交的情况
             * @name sync
             * @grammar editor.sync(); //从编辑器的容器向上查找，如果找到就同步数据
             * @grammar editor.sync(formID); //formID制定一个要同步数据的form的id,编辑器的数据会同步到你指定form下
             * @desc
             * 后台取得数据得键值使用你容器上得''name''属性，如果没有就使用参数传入的''textarea''
             * @example
             * editor.sync();
             * form.sumbit(); //form变量已经指向了form元素
             *
             */
            sync: function (formId) {
                var me = this,
                    form = formId ? document.getElementById(formId) :
                        domUtils.findParent(me.body.parentNode, function (node) {
                            return node.tagName == 'FORM'
                        }, true);
                form && setValue(form, me);
            },
            /**
             * 设置编辑器高度
             * @name setHeight
             * @grammar editor.setHeight(number);  //纯数值，不带单位
             */
            setHeight: function (height, notSetHeight) {
                !notSetHeight && (this.options.initialFrameHeight = height);
                if (this.options.autoHeightEnabled) {
                    $(this.body).css({
                        'min-height': height + 'px'
                    });
                    if (browser.ie && browser.version <= 6 && this.container) {
                        this.container.style.height = height;
                        this.container.style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');
                    }
                } else {
                    $(this.body).height(height)
                }
                this.fireEvent('resize');
            },
            /**
             * 设置编辑器宽度
             * @name setWidth
             * @grammar editor.setWidth(number);  //纯数值，不带单位
             */
            setWidth: function (width) {
                this.$container && this.$container.width(width);
                $(this.body).width(width - $(this.body).css('padding-left').replace('px', '') * 1 - $(this.body).css('padding-right').replace('px', '') * 1);
                this.fireEvent('resize');
            },
            addshortcutkey: function (cmd, keys) {
                var obj = {};
                if (keys) {
                    obj[cmd] = keys
                } else {
                    obj = cmd;
                }
                utils.extend(this.shortcutkeys, obj)
            },
            _bindshortcutKeys: function () {
                var me = this, shortcutkeys = this.shortcutkeys;
                me.addListener('keydown', function (type, e) {
                    var keyCode = e.keyCode || e.which;
                    for (var i in shortcutkeys) {
                        var tmp = shortcutkeys[i].split(',');
                        for (var t = 0, ti; ti = tmp[t++];) {
                            ti = ti.split(':');
                            var key = ti[0], param = ti[1];
                            if (/^(ctrl)(\+shift)?\+(\d+)$/.test(key.toLowerCase()) || /^(\d+)$/.test(key)) {
                                if (( (RegExp.$1 == 'ctrl' ? (e.ctrlKey || e.metaKey) : 0)
                                        && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                                        && keyCode == RegExp.$3
                                    ) ||
                                    keyCode == RegExp.$1
                                ) {
                                    if (me.queryCommandState(i, param) != -1)
                                        me.execCommand(i, param);
                                    domUtils.preventDefault(e);
                                }
                            }
                        }

                    }
                });
            },
            /**
             * 获取编辑器内容
             * @name getContent
             * @grammar editor.getContent()  => String //若编辑器中只包含字符"&lt;p&gt;&lt;br /&gt;&lt;/p/&gt;"会返回空。
             * @grammar editor.getContent(fn)  => String
             * @example
             * getContent默认是会现调用hasContents来判断编辑器是否为空，如果是，就直接返回空字符串
             * 你也可以传入一个fn来接替hasContents的工作，定制判断的规则
             * editor.getContent(function(){
         *     return false //编辑器没有内容 ，getContent直接返回空
         * })
             */
            getContent: function (cmd, fn, notSetCursor, ignoreBlank, formatter) {
                var me = this;
                if (cmd && utils.isFunction(cmd)) {
                    fn = cmd;
                    cmd = '';
                }
                if (fn ? !fn() : !this.hasContents()) {
                    return '';
                }
                me.fireEvent('beforegetcontent');
                var root = UM.htmlparser(me.body.innerHTML, ignoreBlank);
                me.filterOutputRule(root);
                me.fireEvent('aftergetcontent', root);
                return root.toHtml(formatter);
            },
            /**
             * 取得完整的html代码，可以直接显示成完整的html文档
             * @name getAllHtml
             * @grammar editor.getAllHtml()  => String
             */
            getAllHtml: function () {
                var me = this,
                    headHtml = [],
                    html = '';
                me.fireEvent('getAllHtml', headHtml);
                if (browser.ie && browser.version > 8) {
                    var headHtmlForIE9 = '';
                    utils.each(me.document.styleSheets, function (si) {
                        headHtmlForIE9 += ( si.href ? '<link rel="stylesheet" type="text/css" href="' + si.href + '" />' : '<style>' + si.cssText + '</style>');
                    });
                    utils.each(me.document.getElementsByTagName('script'), function (si) {
                        headHtmlForIE9 += si.outerHTML;
                    });
                }
                return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '')
                    + (headHtmlForIE9 || me.document.getElementsByTagName('head')[0].innerHTML) + headHtml.join('\n') + '</head>'
                    + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent(null, null, true) + '</body></html>';
            },
            /**
             * 得到编辑器的纯文本内容，但会保留段落格式
             * @name getPlainTxt
             * @grammar editor.getPlainTxt()  => String
             */
            getPlainTxt: function () {
                var reg = new RegExp(domUtils.fillChar, 'g'),
                    html = this.body.innerHTML.replace(/[\n\r]/g, '');//ie要先去了\n在处理
                html = html.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
                    .replace(/<br\/?>/gi, '\n')
                    .replace(/<[^>/]+>/g, '')
                    .replace(/(\n)?<\/([^>]+)>/g, function (a, b, c) {
                        return dtd.$block[c] ? '\n' : b ? b : '';
                    });
                //取出来的空格会有c2a0会变成乱码，处理这种情况\u00a0
                return html.replace(reg, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
            },

            /**
             * 获取编辑器中的纯文本内容,没有段落格式
             * @name getContentTxt
             * @grammar editor.getContentTxt()  => String
             */
            getContentTxt: function () {
                var reg = new RegExp(domUtils.fillChar, 'g');
                //取出来的空格会有c2a0会变成乱码，处理这种情况\u00a0
                return this.body[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').replace(/\u00a0/g, ' ');
            },

            /**
             * 将html设置到编辑器中, 如果是用于初始化时给编辑器赋初值，则必须放在ready方法内部执行
             * @name setContent
             * @grammar editor.setContent(html)
             * @example
             * var editor = new UM.ui.Editor()
             * editor.ready(function(){
         *     //需要ready后执行，否则可能报错
         *     editor.setContent("欢迎使用UEditor！");
         * })
             */
            setContent: function (html, isAppendTo, notFireSelectionchange) {
                var me = this;

                me.fireEvent('beforesetcontent', html);
                var root = UM.htmlparser(html);
                me.filterInputRule(root);
                html = root.toHtml();


                me.body.innerHTML = (isAppendTo ? me.body.innerHTML : '') + html;


                function isCdataDiv (node) {
                    return node.tagName == 'DIV' && node.getAttribute('cdata_tag');
                }

                //给文本或者inline节点套p标签
                if (me.options.enterTag == 'p') {

                    var child = this.body.firstChild, tmpNode;
                    if (!child || child.nodeType == 1 &&
                        (dtd.$cdata[child.tagName] || isCdataDiv(child) ||
                            domUtils.isCustomeNode(child)
                        )
                        && child === this.body.lastChild) {
                        this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

                    } else {
                        var p = me.document.createElement('p');
                        while (child) {
                            while (child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName])) {
                                tmpNode = child.nextSibling;
                                p.appendChild(child);
                                child = tmpNode;
                            }
                            if (p.firstChild) {
                                if (!child) {
                                    me.body.appendChild(p);
                                    break;
                                } else {
                                    child.parentNode.insertBefore(p, child);
                                    p = me.document.createElement('p');
                                }
                            }
                            child = child.nextSibling;
                        }
                    }
                }
                me.fireEvent('aftersetcontent');
                me.fireEvent('contentchange');

                !notFireSelectionchange && me._selectionChange();
                //清除保存的选区
                me._bakRange = me._bakIERange = me._bakNativeRange = null;
                //trace:1742 setContent后gecko能得到焦点问题
                var geckoSel;
                if (browser.gecko && (geckoSel = this.selection.getNative())) {
                    geckoSel.removeAllRanges();
                }
                if (me.options.autoSyncData) {
                    me.form && setValue(me.form, me);
                }
            },

            /**
             * 让编辑器获得焦点，toEnd确定focus位置
             * @name focus
             * @grammar editor.focus([toEnd])   //默认focus到编辑器头部，toEnd为true时focus到内容尾部
             */
            focus: function (toEnd) {
                try {
                    var me = this,
                        rng = me.selection.getRange();
                    if (toEnd) {
                        rng.setStartAtLast(me.body.lastChild).setCursor(false, true);
                    } else {
                        rng.select(true);
                    }
                    this.fireEvent('focus');
                } catch (e) {
                }
            },
            /**
             * 使编辑区域失去焦点
             */
            blur: function () {
                var sel = this.selection.getNative();
                sel.empty ? sel.empty() : sel.removeAllRanges();
                this.fireEvent('blur')
            },
            /**
             * 判断编辑器当前是否获得了焦点
             */
            isFocus: function () {
                if (this.fireEvent('isfocus') === true) {
                    return true;
                }
                return this.selection.isFocus();
            },

            /**
             * 初始化UE事件及部分事件代理
             * @private
             * @ignore
             */
            _initEvents: function () {
                var me = this,
                    cont = me.body,
                    _proxyDomEvent = function () {
                        me._proxyDomEvent.apply(me, arguments);
                    };

                $(cont)
                    .on('click contextmenu mousedown keydown keyup keypress mouseup mouseover mouseout selectstart', _proxyDomEvent)
                    .on('focus blur', _proxyDomEvent)
                    .on('mouseup keydown', function (evt) {
                        //特殊键不触发selectionchange
                        if (evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)) {
                            return;
                        }
                        if (evt.button == 2)return;
                        me._selectionChange(250, evt);
                    });
            },
            /**
             * 触发事件代理
             * @private
             * @ignore
             */
            _proxyDomEvent: function (evt) {
                return this.fireEvent(evt.type.replace(/^on/, ''), evt);
            },
            /**
             * 变化选区
             * @private
             * @ignore
             */
            _selectionChange: function (delay, evt) {
                var me = this;
                //有光标才做selectionchange 为了解决未focus时点击source不能触发更改工具栏状态的问题（source命令notNeedUndo=1）
//            if ( !me.selection.isFocus() ){
//                return;
//            }


                var hackForMouseUp = false;
                var mouseX, mouseY;
                if (browser.ie && browser.version < 9 && evt && evt.type == 'mouseup') {
                    var range = this.selection.getRange();
                    if (!range.collapsed) {
                        hackForMouseUp = true;
                        mouseX = evt.clientX;
                        mouseY = evt.clientY;
                    }
                }
                clearTimeout(_selectionChangeTimer);
                _selectionChangeTimer = setTimeout(function () {
                    if (!me.selection.getNative()) {
                        return;
                    }
                    //修复一个IE下的bug: 鼠标点击一段已选择的文本中间时，可能在mouseup后的一段时间内取到的range是在selection的type为None下的错误值.
                    //IE下如果用户是拖拽一段已选择文本，则不会触发mouseup事件，所以这里的特殊处理不会对其有影响
                    var ieRange;
                    if (hackForMouseUp && me.selection.getNative().type == 'None') {
                        ieRange = me.document.body.createTextRange();
                        try {
                            ieRange.moveToPoint(mouseX, mouseY);
                        } catch (ex) {
                            ieRange = null;
                        }
                    }
                    var bakGetIERange;
                    if (ieRange) {
                        bakGetIERange = me.selection.getIERange;
                        me.selection.getIERange = function () {
                            return ieRange;
                        };
                    }
                    me.selection.cache();
                    if (bakGetIERange) {
                        me.selection.getIERange = bakGetIERange;
                    }
                    if (me.selection._cachedRange && me.selection._cachedStartElement) {
                        me.fireEvent('beforeselectionchange');
                        // 第二个参数causeByUi为true代表由用户交互造成的selectionchange.
                        me.fireEvent('selectionchange', !!evt);
                        me.fireEvent('afterselectionchange');
                        me.selection.clear();
                    }
                }, delay || 50);
            },
            _callCmdFn: function (fnName, args) {
                args = Array.prototype.slice.call(args, 0);
                var cmdName = args.shift().toLowerCase(),
                    cmd, cmdFn;
                cmd = this.commands[cmdName] || UM.commands[cmdName];
                cmdFn = cmd && cmd[fnName];
                //没有querycommandstate或者没有command的都默认返回0
                if ((!cmd || !cmdFn) && fnName == 'queryCommandState') {
                    return 0;
                } else if (cmdFn) {
                    return cmdFn.apply(this, [cmdName].concat(args));
                }
            },

            /**
             * 执行编辑命令cmdName，完成富文本编辑效果
             * @name execCommand
             * @grammar editor.execCommand(cmdName)   => {*}
             */
            execCommand: function (cmdName) {
                if (!this.isFocus()) {
                    var bakRange = this.selection._bakRange;
                    if (bakRange) {
                        bakRange.select()
                    } else {
                        this.focus(true)
                    }

                }
                cmdName = cmdName.toLowerCase();
                var me = this,
                    result,
                    cmd = me.commands[cmdName] || UM.commands[cmdName];
                if (!cmd || !cmd.execCommand) {
                    return null;
                }
                if (!cmd.notNeedUndo && !me.__hasEnterExecCommand) {
                    me.__hasEnterExecCommand = true;
                    if (me.queryCommandState.apply(me, arguments) != -1) {
                        me.fireEvent('saveScene');
                        me.fireEvent('beforeexeccommand', cmdName);
                        result = this._callCmdFn('execCommand', arguments);
                        (!cmd.ignoreContentChange && !me._ignoreContentChange) && me.fireEvent('contentchange');
                        me.fireEvent('afterexeccommand', cmdName);
                        me.fireEvent('saveScene');
                    }
                    me.__hasEnterExecCommand = false;
                } else {
                    result = this._callCmdFn('execCommand', arguments);
                    (!me.__hasEnterExecCommand && !cmd.ignoreContentChange && !me._ignoreContentChange) && me.fireEvent('contentchange')
                }
                (!me.__hasEnterExecCommand && !cmd.ignoreContentChange && !me._ignoreContentChange) && me._selectionChange();
                return result;
            },
            /**
             * 根据传入的command命令，查选编辑器当前的选区，返回命令的状态
             * @name  queryCommandState
             * @grammar editor.queryCommandState(cmdName)  => (-1|0|1)
             * @desc
             * * ''-1'' 当前命令不可用
             * * ''0'' 当前命令可用
             * * ''1'' 当前命令已经执行过了
             */
            queryCommandState: function (cmdName) {
                try {
                    return this._callCmdFn('queryCommandState', arguments);
                } catch (e) {
                    return 0
                }

            },

            /**
             * 根据传入的command命令，查选编辑器当前的选区，根据命令返回相关的值
             * @name  queryCommandValue
             * @grammar editor.queryCommandValue(cmdName)  =>  {*}
             */
            queryCommandValue: function (cmdName) {
                try {
                    return this._callCmdFn('queryCommandValue', arguments);
                } catch (e) {
                    return null
                }
            },
            /**
             * 检查编辑区域中是否有内容，若包含tags中的节点类型，直接返回true
             * @name  hasContents
             * @desc
             * 默认有文本内容，或者有以下节点都不认为是空
             * <code>{table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}</code>
             * @grammar editor.hasContents()  => (true|false)
             * @grammar editor.hasContents(tags)  =>  (true|false)  //若文档中包含tags数组里对应的tag，直接返回true
             * @example
             * editor.hasContents(['span']) //如果编辑器里有这些，不认为是空
             */
            hasContents: function (tags) {
                if (tags) {
                    for (var i = 0, ci; ci = tags[i++];) {
                        if (this.body.getElementsByTagName(ci).length > 0) {
                            return true;
                        }
                    }
                }
                if (!domUtils.isEmptyBlock(this.body)) {
                    return true
                }
                //随时添加,定义的特殊标签如果存在，不能认为是空
                tags = ['div'];
                for (i = 0; ci = tags[i++];) {
                    var nodes = domUtils.getElementsByTagName(this.body, ci);
                    for (var n = 0, cn; cn = nodes[n++];) {
                        if (domUtils.isCustomeNode(cn)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            /**
             * 重置编辑器，可用来做多个tab使用同一个编辑器实例
             * @name  reset
             * @desc
             * * 清空编辑器内容
             * * 清空回退列表
             * @grammar editor.reset()
             */
            reset: function () {
                this.fireEvent('reset');
            },
            isEnabled: function () {
                return this._isEnabled != true;
            },

            setEnabled: function () {
                var me = this, range;

                me.body.contentEditable = true;

                /* 恢复选区 */
                if (me.lastBk) {
                    range = me.selection.getRange();
                    try {
                        range.moveToBookmark(me.lastBk);
                        delete me.lastBk
                    } catch (e) {
                        range.setStartAtFirst(me.body).collapse(true)
                    }
                    range.select(true);
                }

                /* 恢复query函数 */
                if (me.bkqueryCommandState) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }

                /* 恢复原生事件 */
                if (me._bkproxyDomEvent) {
                    me._proxyDomEvent = me._bkproxyDomEvent;
                    delete me._bkproxyDomEvent;
                }

                /* 触发事件 */
                me.fireEvent('setEnabled');
            },
            /**
             * 设置当前编辑区域可以编辑
             * @name enable
             * @grammar editor.enable()
             */
            enable: function () {
                return this.setEnabled();
            },
            setDisabled: function (except, keepDomEvent) {
                var me = this;

                me.body.contentEditable = false;
                me._except = except ? utils.isArray(except) ? except : [except] : [];

                /* 备份最后的选区 */
                if (!me.lastBk) {
                    me.lastBk = me.selection.getRange().createBookmark(true);
                }

                /* 备份并重置query函数 */
                if (!me.bkqueryCommandState) {
                    me.bkqueryCommandState = me.queryCommandState;
                    me.queryCommandState = function (type) {
                        if (utils.indexOf(me._except, type) != -1) {
                            return me.bkqueryCommandState.apply(me, arguments);
                        }
                        return -1;
                    };
                }

                /* 备份并墙原生事件 */
                if (!keepDomEvent && !me._bkproxyDomEvent) {
                    me._bkproxyDomEvent = me._proxyDomEvent;
                    me._proxyDomEvent = function () {
                        return false;
                    };
                }

                /* 触发事件 */
                me.fireEvent('selectionchange');
                me.fireEvent('setDisabled', me._except);
            },
            /** 设置当前编辑区域不可编辑,except中的命令除外
             * @name disable
             * @grammar editor.disable()
             * @grammar editor.disable(except)  //例外的命令，也即即使设置了disable，此处配置的命令仍然可以执行
             * @example
             * //禁用工具栏中除加粗和插入图片之外的所有功能
             * editor.disable(['bold','insertimage']);//可以是单一的String,也可以是Array
             */
            disable: function (except) {
                return this.setDisabled(except);
            },
            /**
             * 设置默认内容
             * @ignore
             * @private
             * @param  {String} cont 要存入的内容
             */
            _setDefaultContent: function () {
                function clear () {
                    var me = this;
                    if (me.document.getElementById('initContent')) {
                        me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
                        me.removeListener('firstBeforeExecCommand focus', clear);
                        setTimeout(function () {
                            me.focus();
                            me._selectionChange();
                        }, 0)
                    }
                }

                return function (cont) {
                    var me = this;
                    me.body.innerHTML = '<p id="initContent">' + cont + '</p>';

                    me.addListener('firstBeforeExecCommand focus', clear);
                }
            }(),
            /**
             * show方法的兼容版本
             * @private
             * @ignore
             */
            setShow: function () {
                var me = this, range = me.selection.getRange();
                if (me.container.style.display == 'none') {
                    //有可能内容丢失了
                    try {
                        range.moveToBookmark(me.lastBk);
                        delete me.lastBk
                    } catch (e) {
                        range.setStartAtFirst(me.body).collapse(true)
                    }
                    //ie下focus实效，所以做了个延迟
                    setTimeout(function () {
                        range.select(true);
                    }, 100);
                    me.container.style.display = '';
                }

            },
            /**
             * 显示编辑器
             * @name show
             * @grammar editor.show()
             */
            show: function () {
                return this.setShow();
            },
            /**
             * hide方法的兼容版本
             * @private
             * @ignore
             */
            setHide: function () {
                var me = this;
                if (!me.lastBk) {
                    me.lastBk = me.selection.getRange().createBookmark(true);
                }
                me.container.style.display = 'none'
            },
            /**
             * 隐藏编辑器
             * @name hide
             * @grammar editor.hide()
             */
            hide: function () {
                return this.setHide();
            },
            /**
             * 根据制定的路径，获取对应的语言资源
             * @name  getLang
             * @grammar editor.getLang(path)  =>  （JSON|String) 路径根据的是lang目录下的语言文件的路径结构
             * @example
             * editor.getLang('contextMenu.delete') //如果当前是中文，那返回是的是删除
             */
            getLang: function (path) {
                var lang = UM.I18N[this.options.lang];
                if (!lang) {
                    throw Error("not import language file");
                }
                path = (path || "").split(".");
                for (var i = 0, ci; ci = path[i++];) {
                    lang = lang[ci];
                    if (!lang)break;
                }
                return lang;
            },
            /**
             * 计算编辑器当前内容的长度
             * @name  getContentLength
             * @grammar editor.getContentLength(ingoneHtml,tagNames)  =>
             * @example
             * editor.getLang(true)
             */
            getContentLength: function (ingoneHtml, tagNames) {
                var count = this.getContent(false, false, true).length;
                if (ingoneHtml) {
                    tagNames = (tagNames || []).concat(['hr', 'img', 'iframe']);
                    count = this.getContentTxt().replace(/[\t\r\n]+/g, '').length;
                    for (var i = 0, ci; ci = tagNames[i++];) {
                        count += this.body.getElementsByTagName(ci).length;
                    }
                }
                return count;
            },
            addInputRule: function (rule, ignoreUndo) {
                rule.ignoreUndo = ignoreUndo;
                this.inputRules.push(rule);
            },
            filterInputRule: function (root, isUndoLoad) {
                for (var i = 0, ci; ci = this.inputRules[i++];) {
                    if (isUndoLoad && ci.ignoreUndo) {
                        continue;
                    }
                    ci.call(this, root)
                }
            },
            addOutputRule: function (rule, ignoreUndo) {
                rule.ignoreUndo = ignoreUndo;
                this.outputRules.push(rule)
            },
            filterOutputRule: function (root, isUndoLoad) {
                for (var i = 0, ci; ci = this.outputRules[i++];) {
                    if (isUndoLoad && ci.ignoreUndo) {
                        continue;
                    }
                    ci.call(this, root)
                }
            }
        };
        utils.inherits(Editor, EventBase);
    })();

    /**
     * @file
     * @name UM.filterWord
     * @short filterWord
     * @desc 用来过滤word粘贴过来的字符串
     * @import editor.js,core/utils.js
     * @anthor zhanyi
     */
    var filterWord = UM.filterWord = function () {

        //是否是word过来的内容
        function isWordDocument (str) {
            return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/ig.test(str);
        }

        //去掉小数
        function transUnit (v) {
            v = v.replace(/[\d.]+\w+/g, function (m) {
                return utils.transUnitToPx(m);
            });
            return v;
        }

        function filterPasteWord (str) {
            return str.replace(/[\t\r\n]+/g, ' ')
                .replace(/<!--[\s\S]*?-->/ig, "")
                //转换图片
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi, function (str) {
                    //opera能自己解析出image所这里直接返回空
                    if (browser.opera) {
                        return '';
                    }
                    try {
                        //有可能是bitmap占为图，无用，直接过滤掉，主要体现在粘贴excel表格中
                        if (/Bitmap/i.test(str)) {
                            return '';
                        }
                        var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                            height = str.match(/height:([ \d.]*p[tx])/i)[1],
                            src = str.match(/src=\s*"([^"]*)"/i)[1];
                        return '<img width="' + transUnit(width) + '" height="' + transUnit(height) + '" src="' + src + '" />';
                    } catch (e) {
                        return '';
                    }
                })
                //针对wps添加的多余标签处理
                .replace(/<\/?div[^>]*>/g, '')
                //去掉多余的属性
                .replace(/v:\w+=(["']?)[^'"]+\1/g, '')
                .replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "")
                .replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>")
                //去掉多余的属性
                .replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig, function (str, name, marks, val) {
                    //保留list的标示
                    return name == 'class' && val == 'MsoListParagraph' ? str : ''
                })
                //清除多余的font/span不能匹配&nbsp;有可能是空格
                .replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi, function (a, b, c) {
                    return c.replace(/[\t\r\n ]+/g, ' ')
                })
                //处理style的问题
                .replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function (str, tag, tmp, style) {
                    var n = [],
                        s = style.replace(/^\s+|\s+$/, '')
                            .replace(/&#39;/g, '\'')
                            .replace(/&quot;/gi, "'")
                            .split(/;\s*/g);

                    for (var i = 0, v; v = s[i]; i++) {

                        var name, value,
                            parts = v.split(":");

                        if (parts.length == 2) {
                            name = parts[0].toLowerCase();
                            value = parts[1].toLowerCase();
                            if (/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g, '').length == 0
                                ||
                                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
                            ) {
                                continue;
                            }

                            switch (name) {
                                case "mso-padding-alt":
                                case "mso-padding-top-alt":
                                case "mso-padding-right-alt":
                                case "mso-padding-bottom-alt":
                                case "mso-padding-left-alt":
                                case "mso-margin-alt":
                                case "mso-margin-top-alt":
                                case "mso-margin-right-alt":
                                case "mso-margin-bottom-alt":
                                case "mso-margin-left-alt":
                                //ie下会出现挤到一起的情况
                                //case "mso-table-layout-alt":
                                case "mso-height":
                                case "mso-width":
                                case "mso-vertical-align-alt":
                                    //trace:1819 ff下会解析出padding在table上
                                    if (!/<table/.test(tag))
                                        n[i] = name.replace(/^mso-|-alt$/g, "") + ":" + transUnit(value);
                                    continue;
                                case "horiz-align":
                                    n[i] = "text-align:" + value;
                                    continue;

                                case "vert-align":
                                    n[i] = "vertical-align:" + value;
                                    continue;

                                case "font-color":
                                case "mso-foreground":
                                    n[i] = "color:" + value;
                                    continue;

                                case "mso-background":
                                case "mso-highlight":
                                    n[i] = "background:" + value;
                                    continue;

                                case "mso-default-height":
                                    n[i] = "min-height:" + transUnit(value);
                                    continue;

                                case "mso-default-width":
                                    n[i] = "min-width:" + transUnit(value);
                                    continue;

                                case "mso-padding-between-alt":
                                    n[i] = "border-collapse:separate;border-spacing:" + transUnit(value);
                                    continue;

                                case "text-line-through":
                                    if ((value == "single") || (value == "double")) {
                                        n[i] = "text-decoration:line-through";
                                    }
                                    continue;
                                case "mso-zero-height":
                                    if (value == "yes") {
                                        n[i] = "display:none";
                                    }
                                    continue;
//                                case 'background':
//                                    break;
                                case 'margin':
                                    if (!/[1-9]/.test(value)) {
                                        continue;
                                    }

                            }

                            if (/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(name)
                                ||
                                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
                            ) {
                                continue;
                            }

                            n[i] = name + ":" + parts[1];
                        }
                    }
                    return tag + (n.length ? ' style="' + n.join(';').replace(/;{2,}/g, ';') + '"' : '');
                })
                .replace(/[\d.]+(cm|pt)/g, function (str) {
                    return utils.transUnitToPx(str)
                })

        }

        return function (html) {
            return (isWordDocument(html) ? filterPasteWord(html) : html);
        };
    }();
///import editor.js
///import core/utils.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/htmlparser.js
//模拟的节点类
//by zhanyi
    (function () {
        var uNode = UM.uNode = function (obj) {
            this.type = obj.type;
            this.data = obj.data;
            this.tagName = obj.tagName;
            this.parentNode = obj.parentNode;
            this.attrs = obj.attrs || {};
            this.children = obj.children;
        };
        var notTransAttrs = {
            'href': 1,
            'src': 1,
            '_src': 1,
            '_href': 1,
            'cdata_data': 1
        };

        var notTransTagName = {
            style: 1,
            script: 1
        };

        var indentChar = '    ',
            breakChar = '\n';

        function insertLine (arr, current, begin) {
            arr.push(breakChar);
            return current + (begin ? 1 : -1);
        }

        function insertIndent (arr, current) {
            //插入缩进
            for (var i = 0; i < current; i++) {
                arr.push(indentChar);
            }
        }

        //创建uNode的静态方法
        //支持标签和html
        uNode.createElement = function (html) {
            if (/[<>]/.test(html)) {
                return UM.htmlparser(html).children[0]
            } else {
                return new uNode({
                    type: 'element',
                    children: [],
                    tagName: html
                })
            }
        };
        uNode.createText = function (data, noTrans) {
            return new UM.uNode({
                type: 'text',
                'data': noTrans ? data : utils.unhtml(data || '')
            })
        };
        function nodeToHtml (node, arr, formatter, current) {
            switch (node.type) {
                case 'root':
                    for (var i = 0, ci; ci = node.children[i++];) {
                        //插入新行
                        if (formatter && ci.type == 'element' && !dtd.$inlineWithA[ci.tagName] && i > 1) {
                            insertLine(arr, current, true);
                            insertIndent(arr, current)
                        }
                        nodeToHtml(ci, arr, formatter, current)
                    }
                    break;
                case 'text':
                    isText(node, arr);
                    break;
                case 'element':
                    isElement(node, arr, formatter, current);
                    break;
                case 'comment':
                    isComment(node, arr, formatter);
            }
            return arr;
        }

        function isText (node, arr) {
            if (node.parentNode.tagName == 'pre') {
                //源码模式下输入html标签，不能做转换处理，直接输出
                arr.push(node.data)
            } else {
                arr.push(notTransTagName[node.parentNode.tagName] ? utils.html(node.data) : node.data.replace(/[ ]{2}/g, ' &nbsp;'))
            }

        }

        function isElement (node, arr, formatter, current) {
            var attrhtml = '';
            if (node.attrs) {
                attrhtml = [];
                var attrs = node.attrs;
                for (var a in attrs) {
                    //这里就针对
                    //<p>'<img src='http://nsclick.baidu.com/u.gif?&asdf=\"sdf&asdfasdfs;asdf'></p>
                    //这里边的\"做转换，要不用innerHTML直接被截断了，属性src
                    //有可能做的不够
                    attrhtml.push(a + (attrs[a] !== undefined ? '="' + (notTransAttrs[a] ? utils.html(attrs[a]).replace(/["]/g, function (a) {
                            return '&quot;'
                        }) : utils.unhtml(attrs[a])) + '"' : ''))
                }
                attrhtml = attrhtml.join(' ');
            }
            arr.push('<' + node.tagName +
                (attrhtml ? ' ' + attrhtml : '') +
                (dtd.$empty[node.tagName] ? '\/' : '' ) + '>'
            );
            //插入新行
            if (formatter && !dtd.$inlineWithA[node.tagName] && node.tagName != 'pre') {
                if (node.children && node.children.length) {
                    current = insertLine(arr, current, true);
                    insertIndent(arr, current)
                }

            }
            if (node.children && node.children.length) {
                for (var i = 0, ci; ci = node.children[i++];) {
                    if (formatter && ci.type == 'element' && !dtd.$inlineWithA[ci.tagName] && i > 1) {
                        insertLine(arr, current);
                        insertIndent(arr, current)
                    }
                    nodeToHtml(ci, arr, formatter, current)
                }
            }
            if (!dtd.$empty[node.tagName]) {
                if (formatter && !dtd.$inlineWithA[node.tagName] && node.tagName != 'pre') {

                    if (node.children && node.children.length) {
                        current = insertLine(arr, current);
                        insertIndent(arr, current)
                    }
                }
                arr.push('<\/' + node.tagName + '>');
            }

        }

        function isComment (node, arr) {
            arr.push('<!--' + node.data + '-->');
        }

        function getNodeById (root, id) {
            var node;
            if (root.type == 'element' && root.getAttr('id') == id) {
                return root;
            }
            if (root.children && root.children.length) {
                for (var i = 0, ci; ci = root.children[i++];) {
                    if (node = getNodeById(ci, id)) {
                        return node;
                    }
                }
            }
        }

        function getNodesByTagName (node, tagName, arr) {
            if (node.type == 'element' && node.tagName == tagName) {
                arr.push(node);
            }
            if (node.children && node.children.length) {
                for (var i = 0, ci; ci = node.children[i++];) {
                    getNodesByTagName(ci, tagName, arr)
                }
            }
        }

        function nodeTraversal (root, fn) {
            if (root.children && root.children.length) {
                for (var i = 0, ci; ci = root.children[i];) {
                    nodeTraversal(ci, fn);
                    //ci被替换的情况，这里就不再走 fn了
                    if (ci.parentNode) {
                        if (ci.children && ci.children.length) {
                            fn(ci)
                        }
                        if (ci.parentNode) i++
                    }
                }
            } else {
                fn(root)
            }

        }

        uNode.prototype = {

            /**
             * 当前节点对象，转换成html文本
             * @method toHtml
             * @return { String } 返回转换后的html字符串
             * @example
             * ```javascript
             * node.toHtml();
             * ```
             */

            /**
             * 当前节点对象，转换成html文本
             * @method toHtml
             * @param { Boolean } formatter 是否格式化返回值
             * @return { String } 返回转换后的html字符串
             * @example
             * ```javascript
             * node.toHtml( true );
             * ```
             */
            toHtml: function (formatter) {
                var arr = [];
                nodeToHtml(this, arr, formatter, 0);
                return arr.join('')
            },

            /**
             * 获取节点的html内容
             * @method innerHTML
             * @warning 假如节点的type不是'element'，或节点的标签名称不在dtd列表里，直接返回当前节点
             * @return { String } 返回节点的html内容
             * @example
             * ```javascript
             * var htmlstr = node.innerHTML();
             * ```
             */

            /**
             * 设置节点的html内容
             * @method innerHTML
             * @warning 假如节点的type不是'element'，或节点的标签名称不在dtd列表里，直接返回当前节点
             * @param { String } htmlstr 传入要设置的html内容
             * @return { UM.uNode } 返回节点本身
             * @example
             * ```javascript
             * node.innerHTML('<span>text</span>');
             * ```
             */
            innerHTML: function (htmlstr) {
                if (this.type != 'element' || dtd.$empty[this.tagName]) {
                    return this;
                }
                if (utils.isString(htmlstr)) {
                    if (this.children) {
                        for (var i = 0, ci; ci = this.children[i++];) {
                            ci.parentNode = null;
                        }
                    }
                    this.children = [];
                    var tmpRoot = UM.htmlparser(htmlstr);
                    for (var i = 0, ci; ci = tmpRoot.children[i++];) {
                        this.children.push(ci);
                        ci.parentNode = this;
                    }
                    return this;
                } else {
                    var tmpRoot = new UM.uNode({
                        type: 'root',
                        children: this.children
                    });
                    return tmpRoot.toHtml();
                }
            },

            /**
             * 获取节点的纯文本内容
             * @method innerText
             * @warning 假如节点的type不是'element'，或节点的标签名称不在dtd列表里，直接返回当前节点
             * @return { String } 返回节点的存文本内容
             * @example
             * ```javascript
             * var textStr = node.innerText();
             * ```
             */

            /**
             * 设置节点的纯文本内容
             * @method innerText
             * @warning 假如节点的type不是'element'，或节点的标签名称不在dtd列表里，直接返回当前节点
             * @param { String } textStr 传入要设置的文本内容
             * @return { UM.uNode } 返回节点本身
             * @example
             * ```javascript
             * node.innerText('<span>text</span>');
             * ```
             */
            innerText: function (textStr, noTrans) {
                if (this.type != 'element' || dtd.$empty[this.tagName]) {
                    return this;
                }
                if (textStr) {
                    if (this.children) {
                        for (var i = 0, ci; ci = this.children[i++];) {
                            ci.parentNode = null;
                        }
                    }
                    this.children = [];
                    this.appendChild(uNode.createText(textStr, noTrans));
                    return this;
                } else {
                    return this.toHtml().replace(/<[^>]+>/g, '');
                }
            },

            /**
             * 获取当前对象的data属性
             * @method getData
             * @return { Object } 若节点的type值是elemenet，返回空字符串，否则返回节点的data属性
             * @example
             * ```javascript
             * node.getData();
             * ```
             */
            getData: function () {
                if (this.type == 'element')
                    return '';
                return this.data
            },

            /**
             * 获取当前节点下的第一个子节点
             * @method firstChild
             * @return { UM.uNode } 返回第一个子节点
             * @example
             * ```javascript
             * node.firstChild(); //返回第一个子节点
             * ```
             */
            firstChild: function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName]) {
//                return this;
//            }
                return this.children ? this.children[0] : null;
            },

            /**
             * 获取当前节点下的最后一个子节点
             * @method lastChild
             * @return { UM.uNode } 返回最后一个子节点
             * @example
             * ```javascript
             * node.lastChild(); //返回最后一个子节点
             * ```
             */
            lastChild: function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName] ) {
//                return this;
//            }
                return this.children ? this.children[this.children.length - 1] : null;
            },

            /**
             * 获取和当前节点有相同父亲节点的前一个节点
             * @method previousSibling
             * @return { UM.uNode } 返回前一个节点
             * @example
             * ```javascript
             * node.children[2].previousSibling(); //返回子节点node.children[1]
             * ```
             */
            previousSibling: function () {
                var parent = this.parentNode;
                for (var i = 0, ci; ci = parent.children[i]; i++) {
                    if (ci === this) {
                        return i == 0 ? null : parent.children[i - 1];
                    }
                }

            },

            /**
             * 获取和当前节点有相同父亲节点的后一个节点
             * @method nextSibling
             * @return { UM.uNode } 返回后一个节点,找不到返回null
             * @example
             * ```javascript
             * node.children[2].nextSibling(); //如果有，返回子节点node.children[3]
             * ```
             */
            nextSibling: function () {
                var parent = this.parentNode;
                for (var i = 0, ci; ci = parent.children[i++];) {
                    if (ci === this) {
                        return parent.children[i];
                    }
                }
            },

            /**
             * 用新的节点替换当前节点
             * @method replaceChild
             * @param { UM.uNode } target 要替换成该节点参数
             * @param { UM.uNode } source 要被替换掉的节点
             * @return { UM.uNode } 返回替换之后的节点对象
             * @example
             * ```javascript
             * node.replaceChild(newNode, childNode); //用newNode替换childNode,childNode是node的子节点
             * ```
             */
            replaceChild: function (target, source) {
                if (this.children) {
                    if (target.parentNode) {
                        target.parentNode.removeChild(target);
                    }
                    for (var i = 0, ci; ci = this.children[i]; i++) {
                        if (ci === source) {
                            this.children.splice(i, 1, target);
                            source.parentNode = null;
                            target.parentNode = this;
                            return target;
                        }
                    }
                }
            },

            /**
             * 在节点的子节点列表最后位置插入一个节点
             * @method appendChild
             * @param { UM.uNode } node 要插入的节点
             * @return { UM.uNode } 返回刚插入的子节点
             * @example
             * ```javascript
             * node.appendChild( newNode ); //在node内插入子节点newNode
             * ```
             */
            appendChild: function (node) {
                if (this.type == 'root' || (this.type == 'element' && !dtd.$empty[this.tagName])) {
                    if (!this.children) {
                        this.children = []
                    }
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                    for (var i = 0, ci; ci = this.children[i]; i++) {
                        if (ci === node) {
                            this.children.splice(i, 1);
                            break;
                        }
                    }
                    this.children.push(node);
                    node.parentNode = this;
                    return node;
                }


            },

            /**
             * 在传入节点的前面插入一个节点
             * @method insertBefore
             * @param { UM.uNode } target 要插入的节点
             * @param { UM.uNode } source 在该参数节点前面插入
             * @return { UM.uNode } 返回刚插入的子节点
             * @example
             * ```javascript
             * node.parentNode.insertBefore(newNode, node); //在node节点后面插入newNode
             * ```
             */
            insertBefore: function (target, source) {
                if (this.children) {
                    if (target.parentNode) {
                        target.parentNode.removeChild(target);
                    }
                    for (var i = 0, ci; ci = this.children[i]; i++) {
                        if (ci === source) {
                            this.children.splice(i, 0, target);
                            target.parentNode = this;
                            return target;
                        }
                    }

                }
            },

            /**
             * 在传入节点的后面插入一个节点
             * @method insertAfter
             * @param { UM.uNode } target 要插入的节点
             * @param { UM.uNode } source 在该参数节点后面插入
             * @return { UM.uNode } 返回刚插入的子节点
             * @example
             * ```javascript
             * node.parentNode.insertAfter(newNode, node); //在node节点后面插入newNode
             * ```
             */
            insertAfter: function (target, source) {
                if (this.children) {
                    if (target.parentNode) {
                        target.parentNode.removeChild(target);
                    }
                    for (var i = 0, ci; ci = this.children[i]; i++) {
                        if (ci === source) {
                            this.children.splice(i + 1, 0, target);
                            target.parentNode = this;
                            return target;
                        }

                    }
                }
            },

            /**
             * 从当前节点的子节点列表中，移除节点
             * @method removeChild
             * @param { UM.uNode } node 要移除的节点引用
             * @param { Boolean } keepChildren 是否保留移除节点的子节点，若传入true，自动把移除节点的子节点插入到移除的位置
             * @return { * } 返回刚移除的子节点
             * @example
             * ```javascript
             * node.removeChild(childNode,true); //在node的子节点列表中移除child节点，并且吧child的子节点插入到移除的位置
             * ```
             */
            removeChild: function (node, keepChildren) {
                if (this.children) {
                    for (var i = 0, ci; ci = this.children[i]; i++) {
                        if (ci === node) {
                            this.children.splice(i, 1);
                            ci.parentNode = null;
                            if (keepChildren && ci.children && ci.children.length) {
                                for (var j = 0, cj; cj = ci.children[j]; j++) {
                                    this.children.splice(i + j, 0, cj);
                                    cj.parentNode = this;

                                }
                            }
                            return ci;
                        }
                    }
                }
            },

            /**
             * 获取当前节点所代表的元素属性，即获取attrs对象下的属性值
             * @method getAttr
             * @param { String } attrName 要获取的属性名称
             * @return { * } 返回attrs对象下的属性值
             * @example
             * ```javascript
             * node.getAttr('title');
             * ```
             */
            getAttr: function (attrName) {
                return this.attrs && this.attrs[attrName.toLowerCase()]
            },

            /**
             * 设置当前节点所代表的元素属性，即设置attrs对象下的属性值
             * @method setAttr
             * @param { String } attrName 要设置的属性名称
             * @param { * } attrVal 要设置的属性值，类型视设置的属性而定
             * @return { * } 返回attrs对象下的属性值
             * @example
             * ```javascript
             * node.setAttr('title','标题');
             * ```
             */
            setAttr: function (attrName, attrVal) {
                if (!attrName) {
                    delete this.attrs;
                    return;
                }
                if (!this.attrs) {
                    this.attrs = {};
                }
                if (utils.isObject(attrName)) {
                    for (var a in attrName) {
                        if (!attrName[a]) {
                            delete this.attrs[a]
                        } else {
                            this.attrs[a.toLowerCase()] = attrName[a];
                        }
                    }
                } else {
                    if (!attrVal) {
                        delete this.attrs[attrName]
                    } else {
                        this.attrs[attrName.toLowerCase()] = attrVal;
                    }

                }
            },
            hasAttr: function (attrName) {
                var attrVal = this.getAttr(attrName);
                return ( attrVal !== null ) && ( attrVal !== undefined );
            },
            /**
             * 获取当前节点在父节点下的位置索引
             * @method getIndex
             * @return { Number } 返回索引数值，如果没有父节点，返回-1
             * @example
             * ```javascript
             * node.getIndex();
             * ```
             */
            getIndex: function () {
                var parent = this.parentNode;
                for (var i = 0, ci; ci = parent.children[i]; i++) {
                    if (ci === this) {
                        return i;
                    }
                }
                return -1;
            },

            /**
             * 在当前节点下，根据id查找节点
             * @method getNodeById
             * @param { String } id 要查找的id
             * @return { UM.uNode } 返回找到的节点
             * @example
             * ```javascript
             * node.getNodeById('textId');
             * ```
             */
            getNodeById: function (id) {
                var node;
                if (this.children && this.children.length) {
                    for (var i = 0, ci; ci = this.children[i++];) {
                        if (node = getNodeById(ci, id)) {
                            return node;
                        }
                    }
                }
            },

            /**
             * 在当前节点下，根据元素名称查找节点列表
             * @method getNodesByTagName
             * @param { String } tagNames 要查找的元素名称
             * @return { Array } 返回找到的节点列表
             * @example
             * ```javascript
             * node.getNodesByTagName('span');
             * ```
             */
            getNodesByTagName: function (tagNames) {
                tagNames = utils.trim(tagNames).replace(/[ ]{2,}/g, ' ').split(' ');
                var arr = [], me = this;
                utils.each(tagNames, function (tagName) {
                    if (me.children && me.children.length) {
                        for (var i = 0, ci; ci = me.children[i++];) {
                            getNodesByTagName(ci, tagName, arr)
                        }
                    }
                });
                return arr;
            },

            /**
             * 根据样式名称，获取节点的样式值
             * @method getStyle
             * @param { String } name 要获取的样式名称
             * @return { String } 返回样式值
             * @example
             * ```javascript
             * node.getStyle('font-size');
             * ```
             */
            getStyle: function (name) {
                var cssStyle = this.getAttr('style');
                if (!cssStyle) {
                    return ''
                }
                var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+)', 'i');
                var match = cssStyle.match(reg);
                if (match && match[0]) {
                    return match[2]
                }
                return '';
            },

            /**
             * 给节点设置样式
             * @method setStyle
             * @param { String } name 要设置的的样式名称
             * @param { String } val 要设置的的样值
             * @example
             * ```javascript
             * node.setStyle('font-size', '12px');
             * ```
             */
            setStyle: function (name, val) {
                function exec (name, val) {
                    var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+;?)', 'gi');
                    cssStyle = cssStyle.replace(reg, '$1');
                    if (val) {
                        cssStyle = name + ':' + utils.unhtml(val) + ';' + cssStyle
                    }

                }

                var cssStyle = this.getAttr('style');
                if (!cssStyle) {
                    cssStyle = '';
                }
                if (utils.isObject(name)) {
                    for (var a in name) {
                        exec(a, name[a])
                    }
                } else {
                    exec(name, val)
                }
                this.setAttr('style', utils.trim(cssStyle))
            },
            hasClass: function (className) {
                if (this.hasAttr('class')) {
                    var classNames = this.getAttr('class').split(/\s+/),
                        hasClass = false;
                    $.each(classNames, function (key, item) {
                        if (item === className) {
                            hasClass = true;
                        }
                    });
                    return hasClass;
                } else {
                    return false;
                }
            },
            addClass: function (className) {

                var classes = null,
                    hasClass = false;

                if (this.hasAttr('class')) {

                    classes = this.getAttr('class');
                    classes = classes.split(/\s+/);

                    classes.forEach(function (item) {

                        if (item === className) {
                            hasClass = true;
                            return;
                        }

                    });

                    !hasClass && classes.push(className);

                    this.setAttr('class', classes.join(" "));

                } else {
                    this.setAttr('class', className);
                }

            },
            removeClass: function (className) {
                if (this.hasAttr('class')) {
                    var cl = this.getAttr('class');
                    cl = cl.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
                    this.setAttr('class', utils.trim(cl).replace(/[ ]{2,}/g, ' '));
                }
            },
            /**
             * 传入一个函数，递归遍历当前节点下的所有节点
             * @method traversal
             * @param { Function } fn 遍历到节点的时，传入节点作为参数，运行此函数
             * @example
             * ```javascript
             * traversal(node, function(){
         *     console.log(node.type);
         * });
             * ```
             */
            traversal: function (fn) {
                if (this.children && this.children.length) {
                    nodeTraversal(this, fn);
                }
                return this;
            }
        }
    })();

//html字符串转换成uNode节点
//by zhanyi
    var htmlparser = UM.htmlparser = function (htmlstr, ignoreBlank) {
        //todo 原来的方式  [^"'<>\/] 有\/就不能配对上 <TD vAlign=top background=../AAA.JPG> 这样的标签了
        //先去掉了，加上的原因忘了，这里先记录
        var re_tag = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
            re_attr = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g;

        //ie下取得的html可能会有\n存在，要去掉，在处理replace(/[\t\r\n]*/g,'');代码高量的\n不能去除
        var allowEmptyTags = {
            b: 1, code: 1, i: 1, u: 1, strike: 1, s: 1, tt: 1, strong: 1, q: 1, samp: 1, em: 1, span: 1,
            sub: 1, img: 1, sup: 1, font: 1, big: 1, small: 1, iframe: 1, a: 1, br: 1, pre: 1
        };
        htmlstr = htmlstr.replace(new RegExp(domUtils.fillChar, 'g'), '');
        if (!ignoreBlank) {
            htmlstr = htmlstr.replace(new RegExp('[\\r\\t\\n' + (ignoreBlank ? '' : ' ') + ']*<\/?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n' + (ignoreBlank ? '' : ' ') + ']*', 'g'), function (a, b) {
                //br暂时单独处理
                if (b && allowEmptyTags[b.toLowerCase()]) {
                    return a.replace(/(^[\n\r]+)|([\n\r]+$)/g, '');
                }
                return a.replace(new RegExp('^[\\r\\n' + (ignoreBlank ? '' : ' ') + ']+'), '').replace(new RegExp('[\\r\\n' + (ignoreBlank ? '' : ' ') + ']+$'), '');
            });
        }

        var notTransAttrs = {
            'href': 1,
            'src': 1
        };

        var uNode = UM.uNode,
            needParentNode = {
                'td': 'tr',
                'tr': ['tbody', 'thead', 'tfoot'],
                'tbody': 'table',
                'th': 'tr',
                'thead': 'table',
                'tfoot': 'table',
                'caption': 'table',
                'li': ['ul', 'ol'],
                'dt': 'dl',
                'dd': 'dl',
                'option': 'select'
            },
            needChild = {
                'ol': 'li',
                'ul': 'li'
            };

        function text (parent, data) {

            if (needChild[parent.tagName]) {
                var tmpNode = uNode.createElement(needChild[parent.tagName]);
                parent.appendChild(tmpNode);
                tmpNode.appendChild(uNode.createText(data));
                parent = tmpNode;
            } else {

                parent.appendChild(uNode.createText(data));
            }
        }

        function element (parent, tagName, htmlattr) {
            var needParentTag;
            if (needParentTag = needParentNode[tagName]) {
                var tmpParent = parent, hasParent;
                while (tmpParent.type != 'root') {
                    if (utils.isArray(needParentTag) ? utils.indexOf(needParentTag, tmpParent.tagName) != -1 : needParentTag == tmpParent.tagName) {
                        parent = tmpParent;
                        hasParent = true;
                        break;
                    }
                    tmpParent = tmpParent.parentNode;
                }
                if (!hasParent) {
                    parent = element(parent, utils.isArray(needParentTag) ? needParentTag[0] : needParentTag)
                }
            }
            //按dtd处理嵌套
//        if(parent.type != 'root' && !dtd[parent.tagName][tagName])
//            parent = parent.parentNode;
            var elm = new uNode({
                parentNode: parent,
                type: 'element',
                tagName: tagName.toLowerCase(),
                //是自闭合的处理一下
                children: dtd.$empty[tagName] ? null : []
            });
            //如果属性存在，处理属性
            if (htmlattr) {
                var attrs = {}, match;
                while (match = re_attr.exec(htmlattr)) {
                    attrs[match[1].toLowerCase()] = notTransAttrs[match[1].toLowerCase()] ? (match[2] || match[3] || match[4]) : utils.unhtml(match[2] || match[3] || match[4])
                }
                elm.attrs = attrs;
            }

            parent.children.push(elm);
            //如果是自闭合节点返回父亲节点
            return dtd.$empty[tagName] ? parent : elm
        }

        function comment (parent, data) {
            parent.children.push(new uNode({
                type: 'comment',
                data: data,
                parentNode: parent
            }));
        }

        var match, currentIndex = 0, nextIndex = 0;
        //设置根节点
        var root = new uNode({
            type: 'root',
            children: []
        });
        var currentParent = root;

        while (match = re_tag.exec(htmlstr)) {
            currentIndex = match.index;
            try {
                if (currentIndex > nextIndex) {
                    //text node
                    text(currentParent, htmlstr.slice(nextIndex, currentIndex));
                }
                if (match[3]) {

                    if (dtd.$cdata[currentParent.tagName]) {
                        text(currentParent, match[0]);
                    } else {
                        //start tag
                        currentParent = element(currentParent, match[3].toLowerCase(), match[4]);
                    }


                } else if (match[1]) {
                    if (currentParent.type != 'root') {
                        if (dtd.$cdata[currentParent.tagName] && !dtd.$cdata[match[1]]) {
                            text(currentParent, match[0]);
                        } else {
                            var tmpParent = currentParent;
                            while (currentParent.type == 'element' && currentParent.tagName != match[1].toLowerCase()) {
                                currentParent = currentParent.parentNode;
                                if (currentParent.type == 'root') {
                                    currentParent = tmpParent;
                                    throw 'break'
                                }
                            }
                            //end tag
                            currentParent = currentParent.parentNode;
                        }

                    }

                } else if (match[2]) {
                    //comment
                    comment(currentParent, match[2])
                }
            } catch (e) {
            }

            nextIndex = re_tag.lastIndex;

        }
        //如果结束是文本，就有可能丢掉，所以这里手动判断一下
        //例如 <li>sdfsdfsdf<li>sdfsdfsdfsdf
        if (nextIndex < htmlstr.length) {
            text(currentParent, htmlstr.slice(nextIndex));
        }
        return root;
    };
    /**
     * @file
     * @name UM.filterNode
     * @short filterNode
     * @desc 根据给定的规则过滤节点
     * @import editor.js,core/utils.js
     * @anthor zhanyi
     */
    var filterNode = UM.filterNode = function () {
        function filterNode (node, rules) {
            switch (node.type) {
                case 'text':
                    break;
                case 'element':
                    var val;
                    if (val = rules[node.tagName]) {
                        if (val === '-') {
                            node.parentNode.removeChild(node)
                        } else if (utils.isFunction(val)) {
                            var parentNode = node.parentNode,
                                index = node.getIndex();
                            val(node);
                            if (node.parentNode) {
                                if (node.children) {
                                    for (var i = 0, ci; ci = node.children[i];) {
                                        filterNode(ci, rules);
                                        if (ci.parentNode) {
                                            i++;
                                        }
                                    }
                                }
                            } else {
                                for (var i = index, ci; ci = parentNode.children[i];) {
                                    filterNode(ci, rules);
                                    if (ci.parentNode) {
                                        i++;
                                    }
                                }
                            }


                        } else {
                            var attrs = val['$'];
                            if (attrs && node.attrs) {
                                var tmpAttrs = {}, tmpVal;
                                for (var a in attrs) {
                                    tmpVal = node.getAttr(a);
                                    //todo 只先对style单独处理
                                    if (a == 'style' && utils.isArray(attrs[a])) {
                                        var tmpCssStyle = [];
                                        utils.each(attrs[a], function (v) {
                                            var tmp;
                                            if (tmp = node.getStyle(v)) {
                                                tmpCssStyle.push(v + ':' + tmp);
                                            }
                                        });
                                        tmpVal = tmpCssStyle.join(';')
                                    }
                                    if (tmpVal) {
                                        tmpAttrs[a] = tmpVal;
                                    }

                                }
                                node.attrs = tmpAttrs;
                            }
                            if (node.children) {
                                for (var i = 0, ci; ci = node.children[i];) {
                                    filterNode(ci, rules);
                                    if (ci.parentNode) {
                                        i++;
                                    }
                                }
                            }
                        }
                    } else {
                        //如果不在名单里扣出子节点并删除该节点,cdata除外
                        if (dtd.$cdata[node.tagName]) {
                            node.parentNode.removeChild(node)
                        } else {
                            var parentNode = node.parentNode,
                                index = node.getIndex();
                            node.parentNode.removeChild(node, true);
                            for (var i = index, ci; ci = parentNode.children[i];) {
                                filterNode(ci, rules);
                                if (ci.parentNode) {
                                    i++;
                                }
                            }
                        }
                    }
                    break;
                case 'comment':
                    node.parentNode.removeChild(node)
            }

        }

        return function (root, rules) {
            if (utils.isEmptyObject(rules)) {
                return root;
            }
            var val;
            if (val = rules['-']) {
                utils.each(val.split(' '), function (k) {
                    rules[k] = '-'
                })
            }
            for (var i = 0, ci; ci = root.children[i];) {
                filterNode(ci, rules);
                if (ci.parentNode) {
                    i++;
                }
            }
            return root;
        }
    }();
///import core
    /**
     * @description 插入内容
     * @name baidu.editor.execCommand
     * @param   {String}   cmdName     inserthtml插入内容的命令
     * @param   {String}   html                要插入的内容
     * @author zhanyi
     */
    UM.commands['inserthtml'] = {
        execCommand: function (command, html, notNeedFilter) {
            var me = this,
                range,
                div;
            if (!html) {
                return;
            }
            if (me.fireEvent('beforeinserthtml', html) === true) {
                return;
            }
            range = me.selection.getRange();
            div = range.document.createElement('div');
            div.style.display = 'inline';

            if (!notNeedFilter) {
                var root = UM.htmlparser(html);
                //如果给了过滤规则就先进行过滤
                if (me.options.filterRules) {
                    UM.filterNode(root, me.options.filterRules);
                }
                //执行默认的处理
                me.filterInputRule(root);
                html = root.toHtml()
            }
            div.innerHTML = utils.trim(html);

            if (!range.collapsed) {
                var tmpNode = range.startContainer;
                if (domUtils.isFillChar(tmpNode)) {
                    range.setStartBefore(tmpNode)
                }
                tmpNode = range.endContainer;
                if (domUtils.isFillChar(tmpNode)) {
                    range.setEndAfter(tmpNode)
                }
                range.txtToElmBoundary();
                //结束边界可能放到了br的前边，要把br包含进来
                // x[xxx]<br/>
                if (range.endContainer && range.endContainer.nodeType == 1) {
                    tmpNode = range.endContainer.childNodes[range.endOffset];
                    if (tmpNode && domUtils.isBr(tmpNode)) {
                        range.setEndAfter(tmpNode);
                    }
                }
                if (range.startOffset == 0) {
                    tmpNode = range.startContainer;
                    if (domUtils.isBoundaryNode(tmpNode, 'firstChild')) {
                        tmpNode = range.endContainer;
                        if (range.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode, 'lastChild')) {
                            me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                            range.setStart(me.body.firstChild, 0).collapse(true)

                        }
                    }
                }
                !range.collapsed && range.deleteContents();
                if (range.startContainer.nodeType == 1) {
                    var child = range.startContainer.childNodes[range.startOffset], pre;
                    if (child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)) {
                        range.setEnd(pre, pre.childNodes.length).collapse();
                        while (child.firstChild) {
                            pre.appendChild(child.firstChild);
                        }
                        domUtils.remove(child);
                    }
                }

            }


            var child, parent, pre, tmp, hadBreak = 0, nextNode;
            //如果当前位置选中了fillchar要干掉，要不会产生空行
            if (range.inFillChar()) {
                child = range.startContainer;
                if (domUtils.isFillChar(child)) {
                    range.setStartBefore(child).collapse(true);
                    domUtils.remove(child);
                } else if (domUtils.isFillChar(child, true)) {
                    child.nodeValue = child.nodeValue.replace(fillCharReg, '');
                    range.startOffset--;
                    range.collapsed && range.collapse(true)
                }
            }
            while (child = div.firstChild) {
                if (hadBreak) {
                    var p = me.document.createElement('p');
                    while (child && (child.nodeType == 3 || !dtd.$block[child.tagName])) {
                        nextNode = child.nextSibling;
                        p.appendChild(child);
                        child = nextNode;
                    }
                    if (p.firstChild) {

                        child = p
                    }
                }
                range.insertNode(child);
                nextNode = child.nextSibling;
                if (!hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm(child)) {

                    parent = domUtils.findParent(child, function (node) {
                        return domUtils.isBlockElm(node);
                    });
                    if (parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)) {
                        if (!dtd[parent.tagName][child.nodeName]) {
                            pre = parent;
                        } else {
                            tmp = child.parentNode;
                            while (tmp !== parent) {
                                pre = tmp;
                                tmp = tmp.parentNode;

                            }
                        }


                        domUtils.breakParent(child, pre || tmp);
                        //去掉break后前一个多余的节点  <p>|<[p> ==> <p></p><div></div><p>|</p>
                        var pre = child.previousSibling;
                        domUtils.trimWhiteTextNode(pre);
                        if (!pre.childNodes.length) {
                            domUtils.remove(pre);
                        }
                        //trace:2012,在非ie的情况，切开后剩下的节点有可能不能点入光标添加br占位

                        if (!browser.ie &&
                            (next = child.nextSibling) &&
                            domUtils.isBlockElm(next) &&
                            next.lastChild && !domUtils.isBr(next.lastChild)) {
                            next.appendChild(me.document.createElement('br'));
                        }
                        hadBreak = 1;
                    }
                }
                var next = child.nextSibling;
                if (!div.firstChild && next && domUtils.isBlockElm(next)) {

                    range.setStart(next, 0).collapse(true);
                    break;
                }
                range.setEndAfter(child).collapse();

            }

            child = range.startContainer;

            if (nextNode && domUtils.isBr(nextNode)) {
                domUtils.remove(nextNode)
            }
            //用chrome可能有空白展位符
            if (domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)) {
                if (nextNode = child.nextSibling) {
                    domUtils.remove(child);
                    if (nextNode.nodeType == 1 && dtd.$block[nextNode.tagName]) {

                        range.setStart(nextNode, 0).collapse(true).shrinkBoundary()
                    }
                } else {

                    try {
                        child.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                    } catch (e) {
                        range.setStartBefore(child);
                        domUtils.remove(child)
                    }

                }

            }
            //加上true因为在删除表情等时会删两次，第一次是删的fillData
            try {
                if (browser.ie9below && range.startContainer.nodeType == 1 && !range.startContainer.childNodes[range.startOffset]) {
                    var start = range.startContainer, pre = start.childNodes[range.startOffset - 1];
                    if (pre && pre.nodeType == 1 && dtd.$empty[pre.tagName]) {
                        var txt = this.document.createTextNode(domUtils.fillChar);
                        range.insertNode(txt).setStart(txt, 0).collapse(true);
                    }
                }
                setTimeout(function () {
                    range.select(true);
                })

            } catch (e) {
            }


            setTimeout(function () {
                range = me.selection.getRange();
                range.scrollIntoView();
                me.fireEvent('afterinserthtml');
            }, 200);
        }
    };

///import core
///import plugins\inserthtml.js
///commands 插入图片，操作图片的对齐方式
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  图片,默认,居左,居右,居中
///commandsDialog  dialogs\image
    /**
     * Created by .
     * User: zhanyi
     * for image
     */
    UM.commands['insertimage'] = {
        execCommand: function (cmd, opt) {
            opt = utils.isArray(opt) ? opt : [opt];
            if (!opt.length) {
                return;
            }
            var me = this;
            var html = [], str = '', ci;
            ci = opt[0];
            if (opt.length == 1) {
                str = '<img src="' + ci.src + '" ' + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                    (ci.width ? 'width="' + ci.width + '" ' : '') +
                    (ci.height ? ' height="' + ci.height + '" ' : '') +
                    (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
                    (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
                    (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
                    (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
                    (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
                    (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
                if (ci['floatStyle'] == 'center') {
                    str = '<p style="text-align: center">' + str + '</p>';
                }
                html.push(str);

            } else {
                for (var i = 0; ci = opt[i++];) {
                    str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
                        (ci.width ? 'width="' + ci.width + '" ' : '') + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                        (ci.height ? ' height="' + ci.height + '" ' : '') +
                        ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
                        (ci.border || '') + '" ' +
                        (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
                    html.push(str);
                }
            }

            me.execCommand('insertHtml', html.join(''), true);
        }
    };
///import core
///commands 段落格式,居左,居右,居中,两端对齐
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  居左对齐,居中对齐,居右对齐,两端对齐
    /**
     * @description 居左右中
     * @name UM.execCommand
     * @param   {String}   cmdName     justify执行对齐方式的命令
     * @param   {String}   align               对齐方式：left居左，right居右，center居中，justify两端对齐
     * @author zhanyi
     */
    UM.plugins['justify'] = function () {
        var me = this;
        $.each('justifyleft justifyright justifycenter justifyfull'.split(' '), function (i, cmdName) {
            me.commands[cmdName] = {
                execCommand: function (cmdName) {
                    return this.document.execCommand(cmdName);
                },
                queryCommandValue: function (cmdName) {
                    var val = this.document.queryCommandValue(cmdName);
                    return val === true || val === 'true' ? cmdName.replace(/justify/, '') : '';
                },
                queryCommandState: function (cmdName) {
                    return this.document.queryCommandState(cmdName) ? 1 : 0
                }
            };
        })
    };

///import core
///import plugins\removeformat.js
///commands 字体颜色,背景色,字号,字体,下划线,删除线
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  字体颜色,背景色,字号,字体,下划线,删除线
    /**
     * @description 字体
     * @name UM.execCommand
     * @param {String}     cmdName    执行的功能名称
     * @param {String}    value             传入的值
     */
    UM.plugins['font'] = function () {
        var me = this,
            fonts = {
                'forecolor': 'forecolor',
                'backcolor': 'backcolor',
                'fontsize': 'fontsize',
                'fontfamily': 'fontname'
            },
            cmdNameToStyle = {
                'forecolor': 'color',
                'backcolor': 'background-color',
                'fontsize': 'font-size',
                'fontfamily': 'font-family'
            },
            cmdNameToAttr = {
                'forecolor': 'color',
                'fontsize': 'size',
                'fontfamily': 'face'
            };
        me.setOpt({
            'fontfamily': [
                {name: 'songti', val: '宋体,SimSun'},
                {name: 'yahei', val: '微软雅黑,Microsoft YaHei'},
                {name: 'kaiti', val: '楷体,楷体_GB2312, SimKai'},
                {name: 'heiti', val: '黑体, SimHei'},
                {name: 'lishu', val: '隶书, SimLi'},
                {name: 'andaleMono', val: 'andale mono'},
                {name: 'arial', val: 'arial, helvetica,sans-serif'},
                {name: 'arialBlack', val: 'arial black,avant garde'},
                {name: 'comicSansMs', val: 'comic sans ms'},
                {name: 'impact', val: 'impact,chicago'},
                {name: 'timesNewRoman', val: 'times new roman'},
                {name: 'sans-serif', val: 'sans-serif'}
            ],
            'fontsize': [10, 12, 16, 18, 24, 32, 48]
        });

        me.addOutputRule(function (root) {
            utils.each(root.getNodesByTagName('font'), function (node) {
                if (node.tagName == 'font') {
                    var cssStyle = [];
                    for (var p in node.attrs) {
                        switch (p) {
                            case 'size':
                                var val = node.attrs[p];
                                $.each({
                                    '10': '1',
                                    '12': '2',
                                    '16': '3',
                                    '18': '4',
                                    '24': '5',
                                    '32': '6',
                                    '48': '7'
                                }, function (k, v) {
                                    if (v == val) {
                                        val = k;
                                        return false;
                                    }
                                });
                                cssStyle.push('font-size:' + val + 'px');
                                break;
                            case 'color':
                                cssStyle.push('color:' + node.attrs[p]);
                                break;
                            case 'face':
                                cssStyle.push('font-family:' + node.attrs[p]);
                                break;
                            case 'style':
                                cssStyle.push(node.attrs[p]);
                        }
                    }
                    node.attrs = {
                        'style': cssStyle.join(';')
                    };
                }
                node.tagName = 'span';
                if (node.parentNode.tagName == 'span' && node.parentNode.children.length == 1) {
                    $.each(node.attrs, function (k, v) {

                        node.parentNode.attrs[k] = k == 'style' ? node.parentNode.attrs[k] + v : v;
                    })
                    node.parentNode.removeChild(node, true);
                }
            });
        });
        for (var p in fonts) {
            (function (cmd) {
                me.commands[cmd] = {
                    execCommand: function (cmdName, value) {
                        if (value == 'transparent') {
                            return;
                        }
                        var rng = this.selection.getRange();
                        if (rng.collapsed) {
                            var span = $('<span></span>').css(cmdNameToStyle[cmdName], value)[0];
                            rng.insertNode(span).setStart(span, 0).setCursor();
                        } else {
                            if (cmdName == 'fontsize') {
                                value = {
                                    '10': '1',
                                    '12': '2',
                                    '16': '3',
                                    '18': '4',
                                    '24': '5',
                                    '32': '6',
                                    '48': '7'
                                }[(value + "").replace(/px/, '')]
                            }
                            this.document.execCommand(fonts[cmdName], false, value);
                            if (browser.gecko) {
                                $.each(this.$body.find('a'), function (i, a) {
                                    var parent = a.parentNode;
                                    if (parent.lastChild === parent.firstChild && /FONT|SPAN/.test(parent.tagName)) {
                                        var cloneNode = parent.cloneNode(false);
                                        cloneNode.innerHTML = a.innerHTML;
                                        $(a).html('').append(cloneNode).insertBefore(parent);

                                        $(parent).remove();
                                    }
                                });
                            }
                            if (!browser.ie) {
                                var nativeRange = this.selection.getNative().getRangeAt(0);
                                var common = nativeRange.commonAncestorContainer;
                                var rng = this.selection.getRange(),
                                    bk = rng.createBookmark(true);

                                $(common).find('a').each(function (i, n) {
                                    var parent = n.parentNode;
                                    if (parent.nodeName == 'FONT') {
                                        var font = parent.cloneNode(false);
                                        font.innerHTML = n.innerHTML;
                                        $(n).html('').append(font);
                                    }
                                });
                                rng.moveToBookmark(bk).select()
                            }
                            return true
                        }

                    },
                    queryCommandValue: function (cmdName) {
                        var start = me.selection.getStart();
                        var val = $(start).css(cmdNameToStyle[cmdName]);
                        if (val === undefined) {
                            val = $(start).attr(cmdNameToAttr[cmdName])
                        }
                        return val ? utils.fixColor(cmdName, val).replace(/px/, '') : '';
                    },
                    queryCommandState: function (cmdName) {
                        return this.queryCommandValue(cmdName)
                    }
                };
            })(p);
        }
    };
///import core
///commands 超链接,取消链接
///commandsName  Link,Unlink
///commandsTitle  超链接,取消链接
///commandsDialog  dialogs\link
    /**
     * 超链接
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     link插入超链接
     * @param   {Object}  options         url地址，title标题，target是否打开新页
     * @author zhanyi
     */
    /**
     * 取消链接
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     unlink取消链接
     * @author zhanyi
     */

    UM.plugins['link'] = function () {
        var me = this;

        me.setOpt('autourldetectinie', false);
        //在ie下禁用autolink
        if (browser.ie && this.options.autourldetectinie === false) {
            this.addListener('keyup', function (cmd, evt) {
                var me = this, keyCode = evt.keyCode;
                if (keyCode == 13 || keyCode == 32) {
                    var rng = me.selection.getRange();
                    var start = rng.startContainer;
                    if (keyCode == 13) {
                        if (start.nodeName == 'P') {
                            var pre = start.previousSibling;
                            if (pre && pre.nodeType == 1) {
                                var pre = pre.lastChild;
                                if (pre && pre.nodeName == 'A' && !pre.getAttribute('_href')) {
                                    domUtils.remove(pre, true);
                                }
                            }
                        }
                    } else if (keyCode == 32) {
                        if (start.nodeType == 3 && /^\s$/.test(start.nodeValue)) {
                            start = start.previousSibling;
                            if (start && start.nodeName == 'A' && !start.getAttribute('_href')) {
                                domUtils.remove(start, true);
                            }
                        }
                    }

                }


            });
        }

        this.addOutputRule(function (root) {
            $.each(root.getNodesByTagName('a'), function (i, a) {
                var _href = utils.html(a.getAttr('_href'));
                if (!/^(ftp|https?|\/|file)/.test(_href)) {
                    _href = 'http://' + _href;
                }
                a.setAttr('href', _href);
                a.setAttr('_href')
                if (a.getAttr('title') == '') {
                    a.setAttr('title')
                }
            })
        });
        this.addInputRule(function (root) {
            $.each(root.getNodesByTagName('a'), function (i, a) {
                a.setAttr('_href', utils.html(a.getAttr('href')));
            })
        });
        me.commands['link'] = {
            execCommand: function (cmdName, opt) {

                var me = this;
                var rng = me.selection.getRange();
                if (rng.collapsed) {
                    var start = rng.startContainer;
                    if (start = domUtils.findParentByTagName(start, 'a', true)) {
                        $(start).attr(opt);
                        rng.selectNode(start).select()
                    } else {
                        rng.insertNode($('<a>' + opt.href + '</a>').attr(opt)[0]).select()

                    }

                } else {
                    me.document.execCommand('createlink', false, '_umeditor_link');
                    utils.each(domUtils.getElementsByTagName(me.body, 'a', function (n) {

                        return n.getAttribute('href') == '_umeditor_link'
                    }), function (l) {
                        if ($(l).text() == '_umeditor_link') {
                            $(l).text(opt.href);
                        }
                        domUtils.setAttributes(l, opt);
                        rng.selectNode(l).select()
                    })
                }

            },
            queryCommandState: function () {
                return this.queryCommandValue('link') ? 1 : 0;
            },
            queryCommandValue: function () {
                var path = this.selection.getStartElementPath();
                var result;
                $.each(path, function (i, n) {
                    if (n.nodeName == "A") {
                        result = n;
                        return false;
                    }
                })
                return result;
            }
        };
        me.commands['unlink'] = {
            execCommand: function () {
                this.document.execCommand('unlink');
            }
        };
    };
///import core
///commands 打印
///commandsName  Print
///commandsTitle  打印
    /**
     * @description 打印
     * @name baidu.editor.execCommand
     * @param   {String}   cmdName     print打印编辑器内容
     * @author zhanyi
     */
    UM.commands['print'] = {
        execCommand: function () {
            var me = this,
                id = 'editor_print_' + +new Date();

            $('<iframe src="" id="' + id + '" name="' + id + '" frameborder="0"></iframe>').attr('id', id)
                .css({
                    width: '0px',
                    height: '0px',
                    'overflow': 'hidden',
                    'float': 'left',
                    'position': 'absolute',
                    top: '-10000px',
                    left: '-10000px'
                })
                .appendTo(me.$container.find('.edui-dialog-container'));

            var w = window.open('', id, ''),
                d = w.document;
            d.open();
            d.write('<html><head></head><body><div>' + this.getContent(null, null, true) + '</div><script>' +
                "setTimeout(function(){" +
                "window.print();" +
                "setTimeout(function(){" +
                "window.parent.$('#" + id + "').remove();" +
                "},100);" +
                "},200);" +
                '</script></body></html>');
            d.close();
        },
        notNeedUndo: 1
    };
///import core
///commands 格式
///commandsName  Paragraph
///commandsTitle  段落格式
    /**
     * 段落样式
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     paragraph插入段落执行命令
     * @param   {String}   style               标签值为：'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
     * @param   {String}   attrs               标签的属性
     * @author zhanyi
     */
    UM.plugins['paragraph'] = function () {
        var me = this;
        me.setOpt('paragraph', {'p': '', 'h1': '', 'h2': '', 'h3': '', 'h4': '', 'h5': '', 'h6': ''});
        me.commands['paragraph'] = {
            execCommand: function (cmdName, style) {
                return this.document.execCommand('formatBlock', false, '<' + style + '>');
            },
            queryCommandValue: function () {
                try {
                    var val = this.document.queryCommandValue('formatBlock')
                } catch (e) {
                }
                return val;
            }
        };
    };

///import core
///import plugins\inserthtml.js
///commands 分割线
///commandsName  Horizontal
///commandsTitle  分隔线
    /**
     * 分割线
     * @function
     * @name UM.execCommand
     * @param {String}     cmdName    horizontal插入分割线
     */
    UM.plugins['horizontal'] = function () {
        var me = this;
        me.commands['horizontal'] = {
            execCommand: function () {
                this.document.execCommand('insertHorizontalRule');
                var rng = me.selection.getRange().txtToElmBoundary(true),
                    start = rng.startContainer;
                if (domUtils.isBody(rng.startContainer)) {
                    var next = rng.startContainer.childNodes[rng.startOffset];
                    if (!next) {
                        next = $('<p></p>').appendTo(rng.startContainer).html(browser.ie ? '&nbsp;' : '<br/>')[0]
                    }
                    rng.setStart(next, 0).setCursor()
                } else {

                    while (dtd.$inline[start.tagName] && start.lastChild === start.firstChild) {

                        var parent = start.parentNode;
                        parent.appendChild(start.firstChild);
                        parent.removeChild(start);
                        start = parent;
                    }
                    while (dtd.$inline[start.tagName]) {
                        start = start.parentNode;
                    }
                    if (start.childNodes.length == 1 && start.lastChild.nodeName == 'HR') {
                        var hr = start.lastChild;
                        $(hr).insertBefore(start);
                        rng.setStart(start, 0).setCursor();
                    } else {
                        hr = $('hr', start)[0];
                        domUtils.breakParent(hr, start);
                        var pre = hr.previousSibling;
                        if (pre && domUtils.isEmptyBlock(pre)) {
                            $(pre).remove()
                        }
                        rng.setStart(hr.nextSibling, 0).setCursor();
                    }

                }
            }
        };

    };


///import core
///commands 清空文档
///commandsName  ClearDoc
///commandsTitle  清空文档
    /**
     *
     * 清空文档
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     cleardoc清空文档
     */

    UM.commands['cleardoc'] = {
        execCommand: function () {
            var me = this,
                range = me.selection.getRange();
            me.body.innerHTML = "<p>" + (ie ? "" : "<br/>") + "</p>";
            range.setStart(me.body.firstChild, 0).setCursor(false, true);
            setTimeout(function () {
                me.fireEvent("clearDoc");
            }, 0);

        }
    };


///import core
///commands 撤销和重做
///commandsName  Undo,Redo
///commandsTitle  撤销,重做
    /**
     * @description 回退
     * @author zhanyi
     */

    UM.plugins['undo'] = function () {
        var saveSceneTimer;
        var me = this,
            maxUndoCount = me.options.maxUndoCount || 20,
            maxInputCount = me.options.maxInputCount || 20,
            fillchar = new RegExp(domUtils.fillChar + '|<\/hr>', 'gi');// ie会产生多余的</hr>
        var noNeedFillCharTags = {
            ol: 1, ul: 1, table: 1, tbody: 1, tr: 1, body: 1
        };
        var orgState = me.options.autoClearEmptyNode;

        function compareAddr (indexA, indexB) {
            if (indexA.length != indexB.length)
                return 0;
            for (var i = 0, l = indexA.length; i < l; i++) {
                if (indexA[i] != indexB[i])
                    return 0
            }
            return 1;
        }

        function compareRangeAddress (rngAddrA, rngAddrB) {
            if (rngAddrA.collapsed != rngAddrB.collapsed) {
                return 0;
            }
            if (!compareAddr(rngAddrA.startAddress, rngAddrB.startAddress) || !compareAddr(rngAddrA.endAddress, rngAddrB.endAddress)) {
                return 0;
            }
            return 1;
        }

        function UndoManager () {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.undo = function () {
                if (this.hasUndo) {
                    if (!this.list[this.index - 1] && this.list.length == 1) {
                        this.reset();
                        return;
                    }
                    while (this.list[this.index].content == this.list[this.index - 1].content) {
                        this.index--;
                        if (this.index == 0) {
                            return this.restore(0);
                        }
                    }
                    this.restore(--this.index);
                }
            };
            this.redo = function () {
                if (this.hasRedo) {
                    while (this.list[this.index].content == this.list[this.index + 1].content) {
                        this.index++;
                        if (this.index == this.list.length - 1) {
                            return this.restore(this.index);
                        }
                    }
                    this.restore(++this.index);
                }
            };

            this.restore = function () {
                var me = this.editor;
                var scene = this.list[this.index];
                var root = UM.htmlparser(scene.content.replace(fillchar, ''));
                me.options.autoClearEmptyNode = false;
                me.filterInputRule(root, true);
                me.options.autoClearEmptyNode = orgState;
                //trace:873
                //去掉展位符
                me.body.innerHTML = root.toHtml();
                me.fireEvent('afterscencerestore');
                //处理undo后空格不展位的问题
                if (browser.ie) {
                    utils.each(domUtils.getElementsByTagName(me.document, 'td th caption p'), function (node) {
                        if (domUtils.isEmptyNode(node)) {
                            domUtils.fillNode(me.document, node);
                        }
                    })
                }

                try {
                    var rng = new dom.Range(me.document, me.body).moveToAddress(scene.address);
                    if (browser.ie && rng.collapsed && rng.startContainer.nodeType == 1) {
                        var tmpNode = rng.startContainer.childNodes[rng.startOffset];
                        if (!tmpNode || tmpNode.nodeType == 1 && dtd.$empty[tmpNode]) {
                            rng.insertNode(me.document.createTextNode(' ')).collapse(true);
                        }
                    }
                    rng.select(noNeedFillCharTags[rng.startContainer.nodeName.toLowerCase()]);
                } catch (e) {
                }

                this.update();
                this.clearKey();
                //不能把自己reset了
                me.fireEvent('reset', true);
            };

            this.getScene = function () {
                var me = this.editor;
                var rng = me.selection.getRange(),
                    rngAddress = rng.createAddress(false, true);
                me.fireEvent('beforegetscene');
                var root = UM.htmlparser(me.body.innerHTML, true);
                me.options.autoClearEmptyNode = false;
                me.filterOutputRule(root, true);
                me.options.autoClearEmptyNode = orgState;
                var cont = root.toHtml();
                browser.ie && (cont = cont.replace(/>&nbsp;</g, '><').replace(/\s*</g, '<').replace(/>\s*/g, '>'));
                me.fireEvent('aftergetscene');
                return {
                    address: rngAddress,
                    content: cont
                }
            };
            this.save = function (notCompareRange, notSetCursor) {
                clearTimeout(saveSceneTimer);
                var currentScene = this.getScene(notSetCursor),
                    lastScene = this.list[this.index];
                //内容相同位置相同不存
                if (lastScene && lastScene.content == currentScene.content &&
                    ( notCompareRange ? 1 : compareRangeAddress(lastScene.address, currentScene.address) )
                ) {
                    return;
                }
                this.list = this.list.slice(0, this.index + 1);
                this.list.push(currentScene);
                //如果大于最大数量了，就把最前的剔除
                if (this.list.length > maxUndoCount) {
                    this.list.shift();
                }
                this.index = this.list.length - 1;
                this.clearKey();
                //跟新undo/redo状态
                this.update();

            };
            this.update = function () {
                this.hasRedo = !!this.list[this.index + 1];
                this.hasUndo = !!this.list[this.index - 1];
            };
            this.reset = function () {
                this.list = [];
                this.index = 0;
                this.hasUndo = false;
                this.hasRedo = false;
                this.clearKey();
            };
            this.clearKey = function () {
                keycont = 0;
                lastKeyCode = null;
            };
        }

        me.undoManger = new UndoManager();
        me.undoManger.editor = me;
        function saveScene () {
            this.undoManger.save();
        }

        me.addListener('saveScene', function () {
            var args = Array.prototype.splice.call(arguments, 1);
            this.undoManger.save.apply(this.undoManger, args);
        });

        me.addListener('beforeexeccommand', saveScene);
        me.addListener('afterexeccommand', saveScene);

        me.addListener('reset', function (type, exclude) {
            if (!exclude) {
                this.undoManger.reset();
            }
        });
        me.commands['redo'] = me.commands['undo'] = {
            execCommand: function (cmdName) {
                this.undoManger[cmdName]();
            },
            queryCommandState: function (cmdName) {
                return this.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
            },
            notNeedUndo: 1
        };

        var keys = {
                //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
                /*Shift*/ 16: 1, /*Ctrl*/ 17: 1, /*Alt*/ 18: 1,
                37: 1, 38: 1, 39: 1, 40: 1

            },
            keycont = 0,
            lastKeyCode;
        //输入法状态下不计算字符数
        var inputType = false;
        me.addListener('ready', function () {
            $(this.body).on('compositionstart', function () {
                inputType = true;
            }).on('compositionend', function () {
                inputType = false;
            })
        });
        //快捷键
        me.addshortcutkey({
            "Undo": "ctrl+90", //undo
            "Redo": "ctrl+89,shift+ctrl+z" //redo

        });
        var isCollapsed = true;
        me.addListener('keydown', function (type, evt) {

            var me = this;
            var keyCode = evt.keyCode || evt.which;
            if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
                if (inputType)
                    return;

                if (!me.selection.getRange().collapsed) {
                    me.undoManger.save(false, true);
                    isCollapsed = false;
                    return;
                }
                if (me.undoManger.list.length == 0) {
                    me.undoManger.save(true);
                }
                clearTimeout(saveSceneTimer);
                function save (cont) {

                    if (cont.selection.getRange().collapsed)
                        cont.fireEvent('contentchange');
                    cont.undoManger.save(false, true);
                    cont.fireEvent('selectionchange');
                }

                saveSceneTimer = setTimeout(function () {
                    if (inputType) {
                        var interalTimer = setInterval(function () {
                            if (!inputType) {
                                save(me);
                                clearInterval(interalTimer)
                            }
                        }, 300)
                        return;
                    }
                    save(me);
                }, 200);

                lastKeyCode = keyCode;
                keycont++;
                if (keycont >= maxInputCount) {
                    save(me)
                }
            }
        });
        me.addListener('keyup', function (type, evt) {
            var keyCode = evt.keyCode || evt.which;
            if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
                if (inputType)
                    return;
                if (!isCollapsed) {
                    this.undoManger.save(false, true);
                    isCollapsed = true;
                }
            }
        });

    };

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands 粘贴
///commandsName  PastePlain
///commandsTitle  纯文本粘贴模式
    /**
     * @description 粘贴
     * @author zhanyi
     */
    UM.plugins['paste'] = function () {
        function getClipboardData (callback) {
            var doc = this.document;
            if (doc.getElementById('baidu_pastebin')) {
                return;
            }
            var range = this.selection.getRange(),
                bk = range.createBookmark(),
            //创建剪贴的容器div
                pastebin = doc.createElement('div');
            pastebin.id = 'baidu_pastebin';
            // Safari 要求div必须有内容，才能粘贴内容进来
            browser.webkit && pastebin.appendChild(doc.createTextNode(domUtils.fillChar + domUtils.fillChar));
            this.body.appendChild(pastebin);
            //trace:717 隐藏的span不能得到top
            //bk.start.innerHTML = '&nbsp;';
            bk.start.style.display = '';

            pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
                //要在现在光标平行的位置加入，否则会出现跳动的问题
                $(bk.start).position().top + 'px';

            range.selectNodeContents(pastebin).select(true);

            setTimeout(function () {
                if (browser.webkit) {
                    for (var i = 0, pastebins = doc.querySelectorAll('#baidu_pastebin'), pi; pi = pastebins[i++];) {
                        if (domUtils.isEmptyNode(pi)) {
                            domUtils.remove(pi);
                        } else {
                            pastebin = pi;
                            break;
                        }
                    }
                }
                try {
                    pastebin.parentNode.removeChild(pastebin);
                } catch (e) {
                }
                range.moveToBookmark(bk).select(true);
                callback(pastebin);
            }, 0);
        }

        var me = this;


        function filter (div) {
            var html;
            if (div.firstChild) {
                //去掉cut中添加的边界值
                var nodes = domUtils.getElementsByTagName(div, 'span');
                for (var i = 0, ni; ni = nodes[i++];) {
                    if (ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end') {
                        domUtils.remove(ni);
                    }
                }

                if (browser.webkit) {

                    var brs = div.querySelectorAll('div br');
                    for (var i = 0, bi; bi = brs[i++];) {
                        var pN = bi.parentNode;
                        if (pN.tagName == 'DIV' && pN.childNodes.length == 1) {
                            pN.innerHTML = '<p><br/></p>';
                            domUtils.remove(pN);
                        }
                    }
                    var divs = div.querySelectorAll('#baidu_pastebin');
                    for (var i = 0, di; di = divs[i++];) {
                        var tmpP = me.document.createElement('p');
                        di.parentNode.insertBefore(tmpP, di);
                        while (di.firstChild) {
                            tmpP.appendChild(di.firstChild);
                        }
                        domUtils.remove(di);
                    }

                    var metas = div.querySelectorAll('meta');
                    for (var i = 0, ci; ci = metas[i++];) {
                        domUtils.remove(ci);
                    }

                    var brs = div.querySelectorAll('br');
                    for (i = 0; ci = brs[i++];) {
                        if (/^apple-/i.test(ci.className)) {
                            domUtils.remove(ci);
                        }
                    }
                }
                if (browser.gecko) {
                    var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
                    for (i = 0; ci = dirtyNodes[i++];) {
                        ci.removeAttribute('_moz_dirty');
                    }
                }
                if (!browser.ie) {
                    var spans = div.querySelectorAll('span.Apple-style-span');
                    for (var i = 0, ci; ci = spans[i++];) {
                        domUtils.remove(ci, true);
                    }
                }

                //ie下使用innerHTML会产生多余的\r\n字符，也会产生&nbsp;这里过滤掉
                html = div.innerHTML;//.replace(/>(?:(\s|&nbsp;)*?)</g,'><');

                //过滤word粘贴过来的冗余属性
                html = UM.filterWord(html);
                //取消了忽略空白的第二个参数，粘贴过来的有些是有空白的，会被套上相关的标签
                var root = UM.htmlparser(html);
                //如果给了过滤规则就先进行过滤
                if (me.options.filterRules) {
                    UM.filterNode(root, me.options.filterRules);
                }
                //执行默认的处理
                me.filterInputRule(root);
                //针对chrome的处理
                if (browser.webkit) {
                    var br = root.lastChild();
                    if (br && br.type == 'element' && br.tagName == 'br') {
                        root.removeChild(br)
                    }
                    utils.each(me.body.querySelectorAll('div'), function (node) {
                        if (domUtils.isEmptyBlock(node)) {
                            domUtils.remove(node)
                        }
                    })
                }
                html = {'html': root.toHtml()};
                me.fireEvent('beforepaste', html, root);
                //抢了默认的粘贴，那后边的内容就不执行了，比如表格粘贴
                if (!html.html) {
                    return;
                }

                me.execCommand('insertHtml', html.html, true);
                me.fireEvent("afterpaste", html);
            }
        }


        me.addListener('ready', function () {
            $(me.body).on('cut', function () {
                var range = me.selection.getRange();
                if (!range.collapsed && me.undoManger) {
                    me.undoManger.save();
                }
            }).on(browser.ie || browser.opera ? 'keydown' : 'paste', function (e) {
                //ie下beforepaste在点击右键时也会触发，所以用监控键盘才处理
                if ((browser.ie || browser.opera) && ((!e.ctrlKey && !e.metaKey) || e.keyCode != '86')) {
                    return;
                }
                getClipboardData.call(me, function (div) {
                    filter(div);
                });
            });

        });
    };


///import core
///commands 有序列表,无序列表
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  有序列表,无序列表
    /**
     * 有序列表
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     insertorderlist插入有序列表
     * @param   {String}   style               值为：decimal,lower-alpha,lower-roman,upper-alpha,upper-roman
     * @author zhanyi
     */
    /**
     * 无序链接
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     insertunorderlist插入无序列表
     * * @param   {String}   style            值为：circle,disc,square
     * @author zhanyi
     */

    UM.plugins['list'] = function () {
        var me = this;

        me.setOpt({
            'insertorderedlist': {
                'decimal': '',
                'lower-alpha': '',
                'lower-roman': '',
                'upper-alpha': '',
                'upper-roman': ''
            },
            'insertunorderedlist': {
                'circle': '',
                'disc': '',
                'square': ''
            }
        });

        this.addInputRule(function (root) {
            utils.each(root.getNodesByTagName('li'), function (node) {
                if (node.children.length == 0) {
                    node.parentNode.removeChild(node);
                }
            })
        });
        me.commands['insertorderedlist'] =
            me.commands['insertunorderedlist'] = {
                execCommand: function (cmdName) {
                    this.document.execCommand(cmdName);
                    var rng = this.selection.getRange(),
                        bk = rng.createBookmark(true);

                    this.$body.find('ol,ul').each(function (i, n) {
                        var parent = n.parentNode;
                        if (parent.tagName == 'P' && parent.lastChild === parent.firstChild) {
                            $(n).children().each(function (j, li) {
                                var p = parent.cloneNode(false);
                                $(p).append(li.innerHTML);
                                $(li).html('').append(p);
                            });
                            $(n).insertBefore(parent);
                            $(parent).remove();
                        }

                        if (dtd.$inline[parent.tagName]) {
                            if (parent.tagName == 'SPAN') {

                                $(n).children().each(function (k, li) {
                                    var span = parent.cloneNode(false);
                                    if (li.firstChild.nodeName != 'P') {

                                        while (li.firstChild) {
                                            span.appendChild(li.firstChild)
                                        }
                                        ;
                                        $('<p></p>').appendTo(li).append(span);
                                    } else {
                                        while (li.firstChild) {
                                            span.appendChild(li.firstChild)
                                        }
                                        ;
                                        $(li.firstChild).append(span);
                                    }
                                })

                            }
                            domUtils.remove(parent, true)
                        }
                    });


                    rng.moveToBookmark(bk).select();
                    return true;
                },
                queryCommandState: function (cmdName) {
                    return this.document.queryCommandState(cmdName);
                }
            };
    };


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands 查看源码
///commandsName  Source
///commandsTitle  查看源码
    (function () {
        var sourceEditors = {
            textarea: function (editor, holder) {
                var textarea = holder.ownerDocument.createElement('textarea');
                textarea.style.cssText = 'resize:none;border:0;padding:0;margin:0;overflow-y:auto;outline:0';
                // todo: IE下只有onresize属性可用... 很纠结
                if (browser.ie && browser.version < 8) {

                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                    holder.onresize = function () {
                        textarea.style.width = holder.offsetWidth + 'px';
                        textarea.style.height = holder.offsetHeight + 'px';
                    };
                }
                holder.appendChild(textarea);
                return {
                    container: textarea,
                    setContent: function (content) {
                        textarea.value = content;
                    },
                    getContent: function () {
                        return textarea.value;
                    },
                    select: function () {
                        var range;
                        if (browser.ie) {
                            range = textarea.createTextRange();
                            range.collapse(true);
                            range.select();
                        } else {
                            //todo: chrome下无法设置焦点
                            textarea.setSelectionRange(0, 0);
                            textarea.focus();
                        }
                    },
                    dispose: function () {
                        holder.removeChild(textarea);
                        // todo
                        holder.onresize = null;
                        textarea = null;
                        holder = null;
                    }
                };
            }
        };

        UM.plugins['source'] = function () {
            var me = this;
            var opt = this.options;
            var sourceMode = false;
            var sourceEditor;

            opt.sourceEditor = 'textarea';

            me.setOpt({
                sourceEditorFirst: false
            });
            function createSourceEditor (holder) {
                return sourceEditors.textarea(me, holder);
            }

            var bakCssText;
            //解决在源码模式下getContent不能得到最新的内容问题
            var oldGetContent = me.getContent,
                bakAddress;

            me.commands['source'] = {
                execCommand: function () {

                    sourceMode = !sourceMode;
                    if (sourceMode) {
                        bakAddress = me.selection.getRange().createAddress(false, true);
                        me.undoManger && me.undoManger.save(true);
                        if (browser.gecko) {
                            me.body.contentEditable = false;
                        }

//                    bakCssText = me.body.style.cssText;
                        me.body.style.cssText += ';position:absolute;left:-32768px;top:-32768px;';


                        me.fireEvent('beforegetcontent');
                        var root = UM.htmlparser(me.body.innerHTML);
                        me.filterOutputRule(root);
                        root.traversal(function (node) {
                            if (node.type == 'element') {
                                switch (node.tagName) {
                                    case 'td':
                                    case 'th':
                                    case 'caption':
                                        if (node.children && node.children.length == 1) {
                                            if (node.firstChild().tagName == 'br') {
                                                node.removeChild(node.firstChild())
                                            }
                                        }
                                        ;
                                        break;
                                    case 'pre':
                                        node.innerText(node.innerText().replace(/&nbsp;/g, ' '))

                                }
                            }
                        });

                        me.fireEvent('aftergetcontent');

                        var content = root.toHtml(true);

                        sourceEditor = createSourceEditor(me.body.parentNode);

                        sourceEditor.setContent(content);

                        var getStyleValue = function (attr) {
                            return parseInt($(me.body).css(attr));
                        };
                        $(sourceEditor.container).width($(me.body).width() + getStyleValue("padding-left") + getStyleValue("padding-right"))
                            .height($(me.body).height());
                        setTimeout(function () {
                            sourceEditor.select();
                        });
                        //重置getContent，源码模式下取值也能是最新的数据
                        me.getContent = function () {
                            return sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                        };
                    } else {
                        me.$body.css({
                            'position': '',
                            'left': '',
                            'top': ''
                        });
//                    me.body.style.cssText = bakCssText;
                        var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                        //处理掉block节点前后的空格,有可能会误命中，暂时不考虑
                        cont = cont.replace(new RegExp('[\\r\\t\\n ]*<\/?(\\w+)\\s*(?:[^>]*)>', 'g'), function (a, b) {
                            if (b && !dtd.$inlineWithA[b.toLowerCase()]) {
                                return a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g, '');
                            }
                            return a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g, '')
                        });
                        me.setContent(cont);
                        sourceEditor.dispose();
                        sourceEditor = null;
                        //还原getContent方法
                        me.getContent = oldGetContent;
                        var first = me.body.firstChild;
                        //trace:1106 都删除空了，下边会报错，所以补充一个p占位
                        if (!first) {
                            me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                        }
                        //要在ifm为显示时ff才能取到selection,否则报错
                        //这里不能比较位置了
                        me.undoManger && me.undoManger.save(true);
                        if (browser.gecko) {
                            me.body.contentEditable = true;
                        }
                        try {
                            me.selection.getRange().moveToAddress(bakAddress).select();
                        } catch (e) {
                        }

                    }
                    this.fireEvent('sourcemodechanged', sourceMode);
                },
                queryCommandState: function () {
                    return sourceMode | 0;
                },
                notNeedUndo: 1
            };
            var oldQueryCommandState = me.queryCommandState;


            me.queryCommandState = function (cmdName) {
                cmdName = cmdName.toLowerCase();
                if (sourceMode) {
                    //源码模式下可以开启的命令
                    return cmdName in {
                        'source': 1,
                        'fullscreen': 1
                    } ? oldQueryCommandState.apply(this, arguments) : -1
                }
                return oldQueryCommandState.apply(this, arguments);
            };

        };

    })();
///import core
///import plugins/undo.js
///commands 设置回车标签p或br
///commandsName  EnterKey
///commandsTitle  设置回车标签p或br
    /**
     * @description 处理回车
     * @author zhanyi
     */
    UM.plugins['enterkey'] = function () {
        var hTag,
            me = this,
            tag = me.options.enterTag;
        me.addListener('keyup', function (type, evt) {

            var keyCode = evt.keyCode || evt.which;
            if (keyCode == 13) {
                var range = me.selection.getRange(),
                    start = range.startContainer,
                    doSave;

                //修正在h1-h6里边回车后不能嵌套p的问题
                if (!browser.ie) {

                    if (/h\d/i.test(hTag)) {
                        if (browser.gecko) {
                            var h = domUtils.findParentByTagName(start, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'caption', 'table'], true);
                            if (!h) {
                                me.document.execCommand('formatBlock', false, '<p>');
                                doSave = 1;
                            }
                        } else {
                            //chrome remove div
                            if (start.nodeType == 1) {
                                var tmp = me.document.createTextNode(''), div;
                                range.insertNode(tmp);
                                div = domUtils.findParentByTagName(tmp, 'div', true);
                                if (div) {
                                    var p = me.document.createElement('p');
                                    while (div.firstChild) {
                                        p.appendChild(div.firstChild);
                                    }
                                    div.parentNode.insertBefore(p, div);
                                    domUtils.remove(div);
                                    range.setStartBefore(tmp).setCursor();
                                    doSave = 1;
                                }
                                domUtils.remove(tmp);

                            }
                        }

                        if (me.undoManger && doSave) {
                            me.undoManger.save();
                        }
                    }
                    //没有站位符，会出现多行的问题
                    browser.opera && range.select();
                } else {
                    me.fireEvent('saveScene', true, true)
                }
            }
        });

        me.addListener('keydown', function (type, evt) {
            var keyCode = evt.keyCode || evt.which;
            if (keyCode == 13) {//回车
                if (me.fireEvent('beforeenterkeydown')) {
                    domUtils.preventDefault(evt);
                    return;
                }
                me.fireEvent('saveScene', true, true);
                hTag = '';


                var range = me.selection.getRange();

                if (!range.collapsed) {
                    //跨td不能删
                    var start = range.startContainer,
                        end = range.endContainer,
                        startTd = domUtils.findParentByTagName(start, 'td', true),
                        endTd = domUtils.findParentByTagName(end, 'td', true);
                    if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                        evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                        return;
                    }
                }
                if (tag == 'p') {


                    if (!browser.ie) {

                        start = domUtils.findParentByTagName(range.startContainer, ['ol', 'ul', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'caption'], true);

                        //opera下执行formatblock会在table的场景下有问题，回车在opera原生支持很好，所以暂时在opera去掉调用这个原生的command
                        //trace:2431
                        if (!start && !browser.opera) {

                            me.document.execCommand('formatBlock', false, '<p>');

                            if (browser.gecko) {
                                range = me.selection.getRange();
                                start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                                start && domUtils.removeDirtyAttr(start);
                            }


                        } else {
                            hTag = start.tagName;
                            start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                        }

                    }

                }

            }
        });

        browser.ie && me.addListener('setDisabled', function () {
            $(me.body).find('p').each(function (i, p) {
                if (domUtils.isEmptyBlock(p)) {
                    p.innerHTML = '&nbsp;'
                }
            })
        })
    };

///import core
///commands 预览
///commandsName  Preview
///commandsTitle  预览
    /**
     * 预览
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName     preview预览编辑器内容
     */
    UM.commands['preview'] = {
        execCommand: function () {
            var w = window.open('', '_blank', ''),
                d = w.document,
                c = this.getContent(null, null, true),
                path = this.getOpt('UMEDITOR_HOME_URL'),
                formula = c.indexOf('mathquill-embedded-latex') != -1 ?
                '<link rel="stylesheet" href="' + path + 'third-party/mathquill/mathquill.css"/>' +
                '<script src="' + path + 'third-party/jquery.min.js"></script>' +
                '<script src="' + path + 'third-party/mathquill/mathquill.min.js"></script>' : '';
            d.open();
            d.write('<html><head>' + formula + '</head><body><div>' + c + '</div></body></html>');
            d.close();
        },
        notNeedUndo: 1
    };

///import core
///commands 加粗,斜体,上标,下标
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  加粗,加斜,下标,上标
    /**
     * b u i等基础功能实现
     * @function
     * @name UM.execCommands
     * @param    {String}    cmdName    bold加粗。italic斜体。subscript上标。superscript下标。
     */
    UM.plugins['basestyle'] = function () {
        var basestyles = ['bold', 'underline', 'superscript', 'subscript', 'italic', 'strikethrough'],
            me = this;
        //添加快捷键
        me.addshortcutkey({
            "Bold": "ctrl+66",//^B
            "Italic": "ctrl+73", //^I
            "Underline": "ctrl+shift+85",//^U
            "strikeThrough": 'ctrl+shift+83' //^s
        });
        //过滤最后的产出数据
        me.addOutputRule(function (root) {
            $.each(root.getNodesByTagName('b i u strike s'), function (i, node) {
                switch (node.tagName) {
                    case 'b':
                        node.tagName = 'strong';
                        break;
                    case 'i':
                        node.tagName = 'em';
                        break;
                    case 'u':
                        node.tagName = 'span';
                        node.setStyle('text-decoration', 'underline');
                        break;
                    case 's':
                    case 'strike':
                        node.tagName = 'span';
                        node.setStyle('text-decoration', 'line-through')
                }
            });
        });
        $.each(basestyles, function (i, cmd) {
            me.commands[cmd] = {
                execCommand: function (cmdName) {
                    var rng = this.selection.getRange();
                    if (rng.collapsed && this.queryCommandState(cmdName) != 1) {
                        var node = this.document.createElement({
                            'bold': 'strong',
                            'underline': 'u',
                            'superscript': 'sup',
                            'subscript': 'sub',
                            'italic': 'em',
                            'strikethrough': 'strike'
                        }[cmdName]);
                        rng.insertNode(node).setStart(node, 0).setCursor(false);
                        return true;
                    } else {
                        return this.document.execCommand(cmdName)
                    }

                },
                queryCommandState: function (cmdName) {
                    if (browser.gecko) {
                        return this.document.queryCommandState(cmdName)
                    }
                    var path = this.selection.getStartElementPath(), result = false;
                    $.each(path, function (i, n) {
                        switch (cmdName) {
                            case 'bold':
                                if (n.nodeName == 'STRONG' || n.nodeName == 'B') {
                                    result = 1;
                                    return false;
                                }
                                break;
                            case 'underline':
                                if (n.nodeName == 'U' || n.nodeName == 'SPAN' && $(n).css('text-decoration') == 'underline') {
                                    result = 1;
                                    return false;
                                }
                                break;
                            case 'superscript':
                                if (n.nodeName == 'SUP') {
                                    result = 1;
                                    return false;
                                }
                                break;
                            case 'subscript':
                                if (n.nodeName == 'SUB') {
                                    result = 1;
                                    return false;
                                }
                                break;
                            case 'italic':
                                if (n.nodeName == 'EM' || n.nodeName == 'I') {
                                    result = 1;
                                    return false;
                                }
                                break;
                            case 'strikethrough':
                                if (n.nodeName == 'S' || n.nodeName == 'STRIKE' || n.nodeName == 'SPAN' && $(n).css('text-decoration') == 'line-through') {
                                    result = 1;
                                    return false;
                                }
                                break;
                        }
                    })
                    return result
                }
            };
        })
    };

///import core
///commands 全选
///commandsName  SelectAll
///commandsTitle  全选
    /**
     * 选中所有
     * @function
     * @name UM.execCommand
     * @param   {String}   cmdName    selectall选中编辑器里的所有内容
     * @author zhanyi
     */
    UM.plugins['selectall'] = function () {
        var me = this;
        me.commands['selectall'] = {
            execCommand: function () {
                //去掉了原生的selectAll,因为会出现报错和当内容为空时，不能出现闭合状态的光标
                var me = this, body = me.body,
                    range = me.selection.getRange();
                range.selectNodeContents(body);
                if (domUtils.isEmptyBlock(body)) {
                    //opera不能自动合并到元素的里边，要手动处理一下
                    if (browser.opera && body.firstChild && body.firstChild.nodeType == 1) {
                        range.setStartAtFirst(body.firstChild);
                    }
                    range.collapse(true);
                }
                range.select(true);
            },
            notNeedUndo: 1
        };


        //快捷键
        me.addshortcutkey({
            "selectAll": "ctrl+65"
        });
    };

//UM.plugins['removeformat'] = function () {
//    var me = this;
//    me.commands['removeformat'] = {
//        execCommand: function () {
//            me.document.execCommand('removeformat');
//
//            /* 处理ie8和firefox选区有链接时,清除格式的bug */
//            if (browser.gecko || browser.ie8 || browser.webkit) {
//                var nativeRange = this.selection.getNative().getRangeAt(0),
//                    common = nativeRange.commonAncestorContainer,
//                    rng = me.selection.getRange(),
//                    bk = rng.createBookmark();
//
//                function isEleInBookmark(node, bk){
//                    if ( (domUtils.getPosition(node, bk.start) & domUtils.POSITION_FOLLOWING) &&
//                        (domUtils.getPosition(bk.end, node) & domUtils.POSITION_FOLLOWING) ) {
//                        return true;
//                    } else if ( (domUtils.getPosition(node, bk.start) & domUtils.POSITION_CONTAINS) ||
//                        (domUtils.getPosition(node, bk.end) & domUtils.POSITION_CONTAINS) ) {
//                        return true;
//                    }
//                    return false;
//                }
//
//                $(common).find('a').each(function (k, a) {
//                    if ( isEleInBookmark(a, bk) ) {
//                        a.removeAttribute('style');
//                    }
//                });
//
//            }
//        }
//    };
//
//};
//


    UM.plugins['removeformat'] = function () {
        var me = this;
        me.setOpt({
            'removeFormatTags': 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',
            'removeFormatAttributes': 'class,style,lang,width,height,align,hspace,valign'
        });
        me.commands['removeformat'] = {
            execCommand: function (cmdName, tags, style, attrs, notIncludeA) {

                var tagReg = new RegExp('^(?:' + (tags || this.options.removeFormatTags).replace(/,/g, '|') + ')$', 'i'),
                    removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split(','),
                    range = new dom.Range(this.document),
                    bookmark, node, parent,
                    filter = function (node) {
                        return node.nodeType == 1;
                    };

                function isRedundantSpan (node) {
                    if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span') {
                        return 0;
                    }
                    if (browser.ie) {
                        //ie 下判断实效，所以只能简单用style来判断
                        //return node.style.cssText == '' ? 1 : 0;
                        var attrs = node.attributes;
                        if (attrs.length) {
                            for (var i = 0, l = attrs.length; i < l; i++) {
                                if (attrs[i].specified) {
                                    return 0;
                                }
                            }
                            return 1;
                        }
                    }
                    return !node.attributes.length;
                }

                function doRemove (range) {

                    var bookmark1 = range.createBookmark();
                    if (range.collapsed) {
                        range.enlarge(true);
                    }

                    //不能把a标签切了
                    if (!notIncludeA) {
                        var aNode = domUtils.findParentByTagName(range.startContainer, 'a', true);
                        if (aNode) {
                            range.setStartBefore(aNode);
                        }

                        aNode = domUtils.findParentByTagName(range.endContainer, 'a', true);
                        if (aNode) {
                            range.setEndAfter(aNode);
                        }

                    }


                    bookmark = range.createBookmark();

                    node = bookmark.start;

                    //切开始
                    while ((parent = node.parentNode) && !domUtils.isBlockElm(parent)) {
                        domUtils.breakParent(node, parent);
                        domUtils.clearEmptySibling(node);
                    }
                    if (bookmark.end) {
                        //切结束
                        node = bookmark.end;
                        while ((parent = node.parentNode) && !domUtils.isBlockElm(parent)) {
                            domUtils.breakParent(node, parent);
                            domUtils.clearEmptySibling(node);
                        }

                        //开始去除样式
                        var current = domUtils.getNextDomNode(bookmark.start, false, filter),
                            next;
                        while (current) {
                            if (current == bookmark.end) {
                                break;
                            }

                            next = domUtils.getNextDomNode(current, true, filter);

                            if (!dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode(current)) {
                                if (tagReg.test(current.tagName)) {
                                    if (style) {
                                        domUtils.removeStyle(current, style);
                                        if (isRedundantSpan(current) && style != 'text-decoration') {
                                            domUtils.remove(current, true);
                                        }
                                    } else {
                                        domUtils.remove(current, true);
                                    }
                                } else {
                                    //trace:939  不能把list上的样式去掉
                                    if (!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]) {
                                        domUtils.removeAttributes(current, removeFormatAttributes);
                                        if (isRedundantSpan(current)) {
                                            domUtils.remove(current, true);
                                        }
                                    }

                                }
                            }
                            current = next;
                        }
                    }
                    //trace:1035
                    //trace:1096 不能把td上的样式去掉，比如边框
                    var pN = bookmark.start.parentNode;
                    if (domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]) {
                        domUtils.removeAttributes(pN, removeFormatAttributes);
                    }
                    pN = bookmark.end.parentNode;
                    if (bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]) {
                        domUtils.removeAttributes(pN, removeFormatAttributes);
                    }
                    range.moveToBookmark(bookmark).moveToBookmark(bookmark1);
                    //清除冗余的代码 <b><bookmark></b>
                    var node = range.startContainer,
                        tmp,
                        collapsed = range.collapsed;
                    while (node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]) {
                        tmp = node.parentNode;
                        range.setStartBefore(node);
                        //trace:937
                        //更新结束边界
                        if (range.startContainer === range.endContainer) {
                            range.endOffset--;
                        }
                        domUtils.remove(node);
                        node = tmp;
                    }

                    if (!collapsed) {
                        node = range.endContainer;
                        while (node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]) {
                            tmp = node.parentNode;
                            range.setEndBefore(node);
                            domUtils.remove(node);

                            node = tmp;
                        }


                    }
                }


                range = this.selection.getRange();
                if (!range.collapsed) {
                    doRemove(range);
                    range.select();
                }

            }

        };

    };
    /*
     *   处理特殊键的兼容性问题
     */
    UM.plugins['keystrokes'] = function () {
        var me = this;
        var collapsed = true;
        me.addListener('keydown', function (type, evt) {
            var keyCode = evt.keyCode || evt.which,
                rng = me.selection.getRange();

            //处理全选的情况
            if (!rng.collapsed && !(evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) && (keyCode >= 65 && keyCode <= 90
                || keyCode >= 48 && keyCode <= 57 ||
                keyCode >= 96 && keyCode <= 111 || {
                    13: 1,
                    8: 1,
                    46: 1
                }[keyCode])
            ) {

                var tmpNode = rng.startContainer;
                if (domUtils.isFillChar(tmpNode)) {
                    rng.setStartBefore(tmpNode)
                }
                tmpNode = rng.endContainer;
                if (domUtils.isFillChar(tmpNode)) {
                    rng.setEndAfter(tmpNode)
                }
                rng.txtToElmBoundary();
                //结束边界可能放到了br的前边，要把br包含进来
                // x[xxx]<br/>
                if (rng.endContainer && rng.endContainer.nodeType == 1) {
                    tmpNode = rng.endContainer.childNodes[rng.endOffset];
                    if (tmpNode && domUtils.isBr(tmpNode)) {
                        rng.setEndAfter(tmpNode);
                    }
                }
                if (rng.startOffset == 0) {
                    tmpNode = rng.startContainer;
                    if (domUtils.isBoundaryNode(tmpNode, 'firstChild')) {
                        tmpNode = rng.endContainer;
                        if (rng.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode, 'lastChild')) {
                            me.fireEvent('saveScene');
                            me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
                            rng.setStart(me.body.firstChild, 0).setCursor(false, true);
                            me._selectionChange();
                            return;
                        }
                    }
                }
            }

            //处理backspace
            if (keyCode == 8) {
                rng = me.selection.getRange();
                collapsed = rng.collapsed;
                if (me.fireEvent('delkeydown', evt)) {
                    return;
                }
                var start, end;
                //避免按两次删除才能生效的问题
                if (rng.collapsed && rng.inFillChar()) {
                    start = rng.startContainer;

                    if (domUtils.isFillChar(start)) {
                        rng.setStartBefore(start).shrinkBoundary(true).collapse(true);
                        domUtils.remove(start)
                    } else {
                        start.nodeValue = start.nodeValue.replace(new RegExp('^' + domUtils.fillChar), '');
                        rng.startOffset--;
                        rng.collapse(true).select(true)
                    }
                }
                //解决选中control元素不能删除的问题
                if (start = rng.getClosedNode()) {
                    me.fireEvent('saveScene');
                    rng.setStartBefore(start);
                    domUtils.remove(start);
                    rng.setCursor();
                    me.fireEvent('saveScene');
                    domUtils.preventDefault(evt);
                    return;
                }
                //阻止在table上的删除
                if (!browser.ie) {
                    start = domUtils.findParentByTagName(rng.startContainer, 'table', true);
                    end = domUtils.findParentByTagName(rng.endContainer, 'table', true);
                    if (start && !end || !start && end || start !== end) {
                        evt.preventDefault();
                        return;
                    }
                }
                start = rng.startContainer;
                if (rng.collapsed && start.nodeType == 1) {
                    var currentNode = start.childNodes[rng.startOffset - 1];
                    if (currentNode && currentNode.nodeType == 1 && currentNode.tagName == 'BR') {
                        me.fireEvent('saveScene');
                        rng.setStartBefore(currentNode).collapse(true);
                        domUtils.remove(currentNode);
                        rng.select();
                        me.fireEvent('saveScene');
                    }
                }

                //trace:3613
                if (browser.chrome) {
                    if (rng.collapsed) {

                        while (rng.startOffset == 0 && !domUtils.isEmptyBlock(rng.startContainer)) {
                            rng.setStartBefore(rng.startContainer)
                        }
                        var pre = rng.startContainer.childNodes[rng.startOffset - 1];
                        if (pre && pre.nodeName == 'BR') {
                            rng.setStartBefore(pre);
                            me.fireEvent('saveScene');
                            $(pre).remove();
                            rng.setCursor();
                            me.fireEvent('saveScene');
                        }

                    }
                }
            }
            //trace:1634
            //ff的del键在容器空的时候，也会删除
            if (browser.gecko && keyCode == 46) {
                var range = me.selection.getRange();
                if (range.collapsed) {
                    start = range.startContainer;
                    if (domUtils.isEmptyBlock(start)) {
                        var parent = start.parentNode;
                        while (domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)) {
                            start = parent;
                            parent = parent.parentNode;
                        }
                        if (start === parent.lastChild)
                            evt.preventDefault();
                        return;
                    }
                }
            }
        });
        me.addListener('keyup', function (type, evt) {
            var keyCode = evt.keyCode || evt.which,
                rng, me = this;
            if (keyCode == 8) {
                if (me.fireEvent('delkeyup')) {
                    return;
                }
                rng = me.selection.getRange();
                if (rng.collapsed) {
                    var tmpNode,
                        autoClearTagName = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
                    if (tmpNode = domUtils.findParentByTagName(rng.startContainer, autoClearTagName, true)) {
                        if (domUtils.isEmptyBlock(tmpNode)) {
                            var pre = tmpNode.previousSibling;
                            if (pre && pre.nodeName != 'TABLE') {
                                domUtils.remove(tmpNode);
                                rng.setStartAtLast(pre).setCursor(false, true);
                                return;
                            } else {
                                var next = tmpNode.nextSibling;
                                if (next && next.nodeName != 'TABLE') {
                                    domUtils.remove(tmpNode);
                                    rng.setStartAtFirst(next).setCursor(false, true);
                                    return;
                                }
                            }
                        }
                    }
                    //处理当删除到body时，要重新给p标签展位
                    if (domUtils.isBody(rng.startContainer)) {
                        var tmpNode = domUtils.createElement(me.document, 'p', {
                            'innerHTML': browser.ie ? domUtils.fillChar : '<br/>'
                        });
                        rng.insertNode(tmpNode).setStart(tmpNode, 0).setCursor(false, true);
                    }
                }


                //chrome下如果删除了inline标签，浏览器会有记忆，在输入文字还是会套上刚才删除的标签，所以这里再选一次就不会了
                if (!collapsed && (rng.startContainer.nodeType == 3 || rng.startContainer.nodeType == 1 && domUtils.isEmptyBlock(rng.startContainer))) {
                    if (browser.ie) {
                        var span = rng.document.createElement('span');
                        rng.insertNode(span).setStartBefore(span).collapse(true);
                        rng.select();
                        domUtils.remove(span)
                    } else {
                        rng.select()
                    }

                }
            }

        })
    };
    /**
     * 自动保存草稿
     */
    UM.plugins['autosave'] = function () {


        var me = this,
        //无限循环保护
            lastSaveTime = new Date(),
        //最小保存间隔时间
            MIN_TIME = 20,
        //auto save key
            saveKey = null;


        //默认间隔时间
        me.setOpt('saveInterval', 500);

        //存储媒介封装
        var LocalStorage = UM.LocalStorage = (function () {

            var storage = window.localStorage || getUserData() || null,
                LOCAL_FILE = "localStorage";

            return {

                saveLocalData: function (key, data) {

                    if (storage && data) {
                        storage.setItem(key, data);
                        return true;
                    }

                    return false;

                },

                getLocalData: function (key) {

                    if (storage) {
                        return storage.getItem(key);
                    }

                    return null;

                },

                removeItem: function (key) {

                    storage && storage.removeItem(key);

                }

            };

            function getUserData () {

                var container = document.createElement("div");
                container.style.display = "none";

                if (!container.addBehavior) {
                    return null;
                }

                container.addBehavior("#default#userdata");

                return {

                    getItem: function (key) {

                        var result = null;

                        try {
                            document.body.appendChild(container);
                            container.load(LOCAL_FILE);
                            result = container.getAttribute(key);
                            document.body.removeChild(container);
                        } catch (e) {
                        }

                        return result;

                    },

                    setItem: function (key, value) {

                        document.body.appendChild(container);
                        container.setAttribute(key, value);
                        container.save(LOCAL_FILE);
                        document.body.removeChild(container);

                    },
//               暂时没有用到
//                clear: function () {
//
//                    var expiresTime = new Date();
//                    expiresTime.setFullYear( expiresTime.getFullYear() - 1 );
//                    document.body.appendChild( container );
//                    container.expires = expiresTime.toUTCString();
//                    container.save( LOCAL_FILE );
//                    document.body.removeChild( container );
//
//                },

                    removeItem: function (key) {

                        document.body.appendChild(container);
                        container.removeAttribute(key);
                        container.save(LOCAL_FILE);
                        document.body.removeChild(container);

                    }

                };

            }

        })();

        function save (editor) {

            var saveData = null;

            if (new Date() - lastSaveTime < MIN_TIME) {
                return;
            }

            if (!editor.hasContents()) {
                //这里不能调用命令来删除， 会造成事件死循环
                saveKey && LocalStorage.removeItem(saveKey);
                return;
            }

            lastSaveTime = new Date();

            editor._saveFlag = null;

            saveData = me.body.innerHTML;

            if (editor.fireEvent("beforeautosave", {
                    content: saveData
                }) === false) {
                return;
            }

            LocalStorage.saveLocalData(saveKey, saveData);

            editor.fireEvent("afterautosave", {
                content: saveData
            });

        }

        me.addListener('ready', function () {
            var _suffix = "-drafts-data",
                key = null;

            if (me.key) {
                key = me.key + _suffix;
            } else {
                key = ( me.container.parentNode.id || 'ue-common' ) + _suffix;
            }

            //页面地址+编辑器ID 保持唯一
            saveKey = ( location.protocol + location.host + location.pathname ).replace(/[.:\/]/g, '_') + key;
        });

        me.addListener('contentchange', function () {

            if (!saveKey) {
                return;
            }

            if (me._saveFlag) {
                window.clearTimeout(me._saveFlag);
            }

            if (me.options.saveInterval > 0) {

                me._saveFlag = window.setTimeout(function () {

                    save(me);

                }, me.options.saveInterval);

            } else {

                save(me);

            }

        })


        me.commands['clearlocaldata'] = {
            execCommand: function (cmd, name) {
                if (saveKey && LocalStorage.getLocalData(saveKey)) {
                    LocalStorage.removeItem(saveKey)
                }
            },
            notNeedUndo: true,
            ignoreContentChange: true
        };

        me.commands['getlocaldata'] = {
            execCommand: function (cmd, name) {
                return saveKey ? LocalStorage.getLocalData(saveKey) || '' : '';
            },
            notNeedUndo: true,
            ignoreContentChange: true
        };

        me.commands['drafts'] = {
            execCommand: function (cmd, name) {
                if (saveKey) {
                    me.body.innerHTML = LocalStorage.getLocalData(saveKey) || '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>';
                    me.focus(true);
                }
            },
            queryCommandState: function () {
                return saveKey ? ( LocalStorage.getLocalData(saveKey) === null ? -1 : 0 ) : -1;
            },
            notNeedUndo: true,
            ignoreContentChange: true
        }

    };

    /**
     * @description
     * 1.拖放文件到编辑区域，自动上传并插入到选区
     * 2.插入粘贴板的图片，自动上传并插入到选区
     * @author Jinqn
     * @date 2013-10-14
     */
    UM.plugins['autoupload'] = function () {

        var me = this;

        me.setOpt('pasteImageEnabled', true);
        me.setOpt('dropFileEnabled', true);
        var sendAndInsertImage = function (file, editor) {
            //模拟数据
            var fd = new FormData();
            fd.append(editor.options.imageFieldName || 'upfile', file, file.name || ('blob.' + file.type.substr('image/'.length)));
            fd.append('type', 'ajax');
            var xhr = new XMLHttpRequest();
            xhr.open("post", me.options.imageUrl, true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.addEventListener('load', function (e) {
                try {
                    var json = eval('(' + e.target.response + ')'),
                        link = json.url,
                        picLink = me.options.imagePath + link;
                    editor.execCommand('insertimage', {
                        src: picLink,
                        _src: picLink
                    });
                } catch (er) {
                }
            });
            xhr.send(fd);
        };

        function getPasteImage (e) {
            return e.clipboardData && e.clipboardData.items && e.clipboardData.items.length == 1 && /^image\//.test(e.clipboardData.items[0].type) ? e.clipboardData.items : null;
        }

        function getDropImage (e) {
            return e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : null;
        }

        me.addListener('ready', function () {
            if (window.FormData && window.FileReader) {
                var autoUploadHandler = function (e) {
                    var hasImg = false,
                        items;
                    //获取粘贴板文件列表或者拖放文件列表
                    items = e.type == 'paste' ? getPasteImage(e.originalEvent) : getDropImage(e.originalEvent);
                    if (items) {
                        var len = items.length,
                            file;
                        while (len--) {
                            file = items[len];
                            if (file.getAsFile) file = file.getAsFile();
                            if (file && file.size > 0 && /image\/\w+/i.test(file.type)) {
                                sendAndInsertImage(file, me);
                                hasImg = true;
                            }
                        }
                        if (hasImg) return false;
                    }

                };
                me.getOpt('pasteImageEnabled') && me.$body.on('paste', autoUploadHandler);
                me.getOpt('dropFileEnabled') && me.$body.on('drop', autoUploadHandler);

                //取消拖放图片时出现的文字光标位置提示
                me.$body.on('dragover', function (e) {
                    if (e.originalEvent.dataTransfer.types[0] == 'Files') {
                        return false;
                    }
                });
            }
        });

    };

    (function ($) {
        //对jquery的扩展
        $.parseTmpl = function parse (str, data) {
            var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' + 'with(obj||{}){__p.push(\'' + str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g, function (match, code) {
                    return "'," + code.replace(/\\'/g, "'") + ",'";
                }).replace(/<%([\s\S]+?)%>/g, function (match, code) {
                    return "');" + code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, ' ') + "__p.push('";
                }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "');}return __p.join('');";
            var func = new Function('obj', tmpl);
            return data ? func(data) : func;
        };
        $.extend2 = function (t, s) {
            var a = arguments,
                notCover = $.type(a[a.length - 1]) == 'boolean' ? a[a.length - 1] : false,
                len = $.type(a[a.length - 1]) == 'boolean' ? a.length - 1 : a.length;
            for (var i = 1; i < len; i++) {
                var x = a[i];
                for (var k in x) {
                    if (!notCover || !t.hasOwnProperty(k)) {
                        t[k] = x[k];
                    }
                }
            }
            return t;
        };

        $.IE6 = !!window.ActiveXObject && parseFloat(navigator.userAgent.match(/msie (\d+)/i)[1]) == 6;

        //所有ui的基类
        var _eventHandler = [];
        var _widget = function () {
        };
        var _prefix = 'edui';
        _widget.prototype = {
            on: function (ev, cb) {
                this.root().on(ev, $.proxy(cb, this));
                return this;
            },
            off: function (ev, cb) {
                this.root().off(ev, $.proxy(cb, this));
                return this;
            },
            trigger: function (ev, data) {
                return this.root().trigger(ev, data) === false ? false : this;
            },
            root: function ($el) {
                return this._$el || (this._$el = $el);
            },
            destroy: function () {

            },
            data: function (key, val) {
                if (val !== undefined) {
                    this.root().data(_prefix + key, val);
                    return this;
                } else {
                    return this.root().data(_prefix + key)
                }
            },
            register: function (eventName, $el, fn) {
                _eventHandler.push({
                    'evtname': eventName,
                    '$els': $.isArray($el) ? $el : [$el],
                    handler: $.proxy(fn, $el)
                })
            }
        };

        //从jq实例上拿到绑定的widget实例
        $.fn.edui = function (obj) {
            return obj ? this.data('eduiwidget', obj) : this.data('eduiwidget');
        };

        function _createClass (ClassObj, properties, supperClass) {
            ClassObj.prototype = $.extend2(
                $.extend({}, properties),
                (UM.ui[supperClass] || _widget).prototype,
                true
            );
            ClassObj.prototype.supper = (UM.ui[supperClass] || _widget).prototype;
            //父class的defaultOpt 合并
            if (UM.ui[supperClass] && UM.ui[supperClass].prototype.defaultOpt) {

                var parentDefaultOptions = UM.ui[supperClass].prototype.defaultOpt,
                    subDefaultOptions = ClassObj.prototype.defaultOpt;

                ClassObj.prototype.defaultOpt = $.extend({}, parentDefaultOptions, subDefaultOptions || {});

            }
            return ClassObj
        }

        var _guid = 1;

        function mergeToJQ (ClassObj, className) {
            $[_prefix + className] = ClassObj;
            $.fn[_prefix + className] = function (opt) {
                var result, args = Array.prototype.slice.call(arguments, 1);

                this.each(function (i, el) {
                    var $this = $(el);
                    var obj = $this.edui();
                    if (!obj) {
                        ClassObj(!opt || !$.isPlainObject(opt) ? {} : opt, $this);
                        $this.edui(obj)
                    }
                    if ($.type(opt) == 'string') {
                        if (opt == 'this') {
                            result = obj;
                        } else {
                            result = obj[opt].apply(obj, args);
                            if (result !== obj && result !== undefined) {
                                return false;
                            }
                            result = null;
                        }

                    }
                });

                return result !== null ? result : this;
            }
        }

        UM.ui = {
            define: function (className, properties, supperClass) {
                var ClassObj = UM.ui[className] = _createClass(function (options, $el) {
                    var _obj = function () {
                    };
                    $.extend(_obj.prototype, ClassObj.prototype, {
                            guid: className + _guid++,
                            widgetName: className
                        }
                    );
                    var obj = new _obj;
                    if ($.type(options) == 'string') {
                        obj.init && obj.init({});
                        obj.root().edui(obj);
                        obj.root().find('a').click(function (evt) {
                            evt.preventDefault()
                        });
                        return obj.root()[_prefix + className].apply(obj.root(), arguments)
                    } else {
                        $el && obj.root($el);
                        obj.init && obj.init(!options || $.isPlainObject(options) ? $.extend2(options || {}, obj.defaultOpt || {}, true) : options);
                        try {
                            obj.root().find('a').click(function (evt) {
                                evt.preventDefault()
                            });
                        } catch (e) {
                        }

                        return obj.root().edui(obj);
                    }

                }, properties, supperClass);

                mergeToJQ(ClassObj, className);
            }
        };

        $(function () {
            $(document).on('click mouseup mousedown dblclick mouseover', function (evt) {
                $.each(_eventHandler, function (i, obj) {
                    if (obj.evtname == evt.type) {
                        $.each(obj.$els, function (i, $el) {
                            if ($el[0] !== evt.target && !$.contains($el[0], evt.target)) {
                                obj.handler(evt);
                            }
                        })
                    }
                })
            })
        })
    })(jQuery);
//button 类
    UM.ui.define('button', {
        tpl: '<<%if(!texttype){%>div class="edui-btn edui-btn-<%=icon%> <%if(name){%>edui-btn-name-<%=name%><%}%>" unselectable="on" onmousedown="return false" <%}else{%>a class="edui-text-btn"<%}%><% if(title) {%> data-original-title="<%=title%>" <%};%>> ' +
        '<% if(icon) {%><div unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><% }; %><%if(text) {%><span unselectable="on" onmousedown="return false" class="edui-button-label"><%=text%></span><%}%>' +
        '<%if(caret && text){%><span class="edui-button-spacing"></span><%}%>' +
        '<% if(caret) {%><span unselectable="on" onmousedown="return false" class="edui-caret"></span><% };%></<%if(!texttype){%>div<%}else{%>a<%}%>>',
        defaultOpt: {
            text: '',
            title: '',
            icon: '',
            width: '',
            caret: false,
            texttype: false,
            click: function () {
            }
        },
        init: function (options) {
            var me = this;

            me.root($($.parseTmpl(me.tpl, options)))
                .click(function (evt) {
                    me.wrapclick(options.click, evt)
                });

            me.root().hover(function () {
                if (!me.root().hasClass("edui-disabled")) {
                    me.root().toggleClass('edui-hover')
                }
            })

            return me;
        },
        wrapclick: function (fn, evt) {
            if (!this.disabled()) {
                this.root().trigger('wrapclick');
                $.proxy(fn, this, evt)()
            }
            return this;
        },
        label: function (text) {
            if (text === undefined) {
                return this.root().find('.edui-button-label').text();
            } else {
                this.root().find('.edui-button-label').text(text);
                return this;
            }
        },
        disabled: function (state) {
            if (state === undefined) {
                return this.root().hasClass('edui-disabled')
            }
            this.root().toggleClass('edui-disabled', state);
            if (this.root().hasClass('edui-disabled')) {
                this.root().removeClass('edui-hover')
            }
            return this;
        },
        active: function (state) {
            if (state === undefined) {
                return this.root().hasClass('edui-active')
            }
            this.root().toggleClass('edui-active', state)

            return this;
        },
        mergeWith: function ($obj) {
            var me = this;
            me.data('$mergeObj', $obj);
            $obj.edui().data('$mergeObj', me.root());
            if (!$.contains(document.body, $obj[0])) {
                $obj.appendTo(me.root());
            }
            me.on('click', function () {
                me.wrapclick(function () {
                    $obj.edui().show();
                })
            }).register('click', me.root(), function (evt) {
                $obj.hide()
            });
        }
    });
//toolbar 类
    (function () {
        UM.ui.define('toolbar', {
            tpl: '<div class="edui-toolbar"  ><div class="edui-btn-toolbar" unselectable="on" onmousedown="return false"  ></div></div>'
            ,
            init: function () {
                var $root = this.root($(this.tpl));
                this.data('$btnToolbar', $root.find('.edui-btn-toolbar'))
            },
            appendToBtnmenu: function (data) {
                var $cont = this.data('$btnToolbar');
                data = $.isArray(data) ? data : [data];
                $.each(data, function (i, $item) {
                    $cont.append($item)
                })
            }
        });
    })();

//menu 类
    UM.ui.define('menu', {
        show: function ($obj, dir, fnname, topOffset, leftOffset) {

            fnname = fnname || 'position';
            if (this.trigger('beforeshow') === false) {
                return;
            } else {
                this.root().css($.extend({display: 'block'}, $obj ? {
                    top: $obj[fnname]().top + ( dir == 'right' ? 0 : $obj.outerHeight()) - (topOffset || 0),
                    left: $obj[fnname]().left + (dir == 'right' ? $obj.outerWidth() : 0) - (leftOffset || 0)
                } : {}))
                this.trigger('aftershow');
            }
        },
        hide: function (all) {
            var $parentmenu;
            if (this.trigger('beforehide') === false) {
                return;
            } else {

                if ($parentmenu = this.root().data('parentmenu')) {
                    if ($parentmenu.data('parentmenu') || all)
                        $parentmenu.edui().hide();
                }
                this.root().css('display', 'none');
                this.trigger('afterhide');
            }
        },
        attachTo: function ($obj) {
            var me = this;
            if (!$obj.data('$mergeObj')) {
                $obj.data('$mergeObj', me.root());
                $obj.on('wrapclick', function (evt) {
                    me.show()
                });
                me.register('click', $obj, function (evt) {
                    me.hide()
                });
                me.data('$mergeObj', $obj)
            }
        }
    });
//dropmenu 类
    UM.ui.define('dropmenu', {
        tmpl: '<ul class="edui-dropdown-menu" aria-labelledby="dropdownMenu" >' +
        '<%for(var i=0,ci;ci=data[i++];){%>' +
        '<%if(ci.divider){%><li class="edui-divider"></li><%}else{%>' +
        '<li <%if(ci.active||ci.disabled){%>class="<%= ci.active|| \'\' %> <%=ci.disabled||\'\' %>" <%}%> data-value="<%= ci.value%>">' +
        '<a href="#" tabindex="-1"><em class="edui-dropmenu-checkbox"><i class="edui-icon-ok"></i></em><%= ci.label%></a>' +
        '</li><%}%>' +
        '<%}%>' +
        '</ul>',
        defaultOpt: {
            data: [],
            click: function () {

            }
        },
        init: function (options) {
            var me = this;
            var eventName = {
                click: 1,
                mouseover: 1,
                mouseout: 1
            };

            this.root($($.parseTmpl(this.tmpl, options))).on('click', 'li[class!="edui-disabled edui-divider edui-dropdown-submenu"]', function (evt) {
                $.proxy(options.click, me, evt, $(this).data('value'), $(this))()
            }).find('li').each(function (i, el) {
                var $this = $(this);
                if (!$this.hasClass("edui-disabled edui-divider edui-dropdown-submenu")) {
                    var data = options.data[i];
                    $.each(eventName, function (k) {
                        data[k] && $this[k](function (evt) {
                            $.proxy(data[k], el)(evt, data, me.root)
                        })
                    })
                }
            })

        },
        disabled: function (cb) {
            $('li[class!=edui-divider]', this.root()).each(function () {
                var $el = $(this);
                if (cb === true) {
                    $el.addClass('edui-disabled')
                } else if ($.isFunction(cb)) {
                    $el.toggleClass('edui-disabled', cb(li))
                } else {
                    $el.removeClass('edui-disabled')
                }

            });
        },
        val: function (val) {
            var currentVal;
            $('li[class!="edui-divider edui-disabled edui-dropdown-submenu"]', this.root()).each(function () {
                var $el = $(this);
                if (val === undefined) {
                    if ($el.find('em.edui-dropmenu-checked').length) {
                        currentVal = $el.data('value');
                        return false
                    }
                } else {
                    $el.find('em').toggleClass('edui-dropmenu-checked', $el.data('value') == val)
                }
            });
            if (val === undefined) {
                return currentVal
            }
        },
        addSubmenu: function (label, menu, index) {
            index = index || 0;

            var $list = $('li[class!=edui-divider]', this.root());
            var $node = $('<li class="edui-dropdown-submenu"><a tabindex="-1" href="#">' + label + '</a></li>').append(menu);

            if (index >= 0 && index < $list.length) {
                $node.insertBefore($list[index]);
            } else if (index < 0) {
                $node.insertBefore($list[0]);
            } else if (index >= $list.length) {
                $node.appendTo($list);
            }
        }
    }, 'menu');
//splitbutton 类
///import button
    UM.ui.define('splitbutton', {
        tpl: '<div class="edui-splitbutton <%if (name){%>edui-splitbutton-<%= name %><%}%>"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><%if(text){%><%=text%><%}%></div>' +
        '<div  unselectable="on" class="edui-btn edui-dropdown-toggle" >' +
        '<div  unselectable="on" class="edui-caret"><\/div>' +
        '</div>' +
        '</div>',
        defaultOpt: {
            text: '',
            title: '',
            click: function () {
            }
        },
        init: function (options) {
            var me = this;
            me.root($($.parseTmpl(me.tpl, options)));
            me.root().find('.edui-btn:first').click(function (evt) {
                if (!me.disabled()) {
                    $.proxy(options.click, me)();
                }
            });
            me.root().find('.edui-dropdown-toggle').click(function () {
                if (!me.disabled()) {
                    me.trigger('arrowclick')
                }
            });
            me.root().hover(function () {
                if (!me.root().hasClass("edui-disabled")) {
                    me.root().toggleClass('edui-hover')
                }
            });

            return me;
        },
        wrapclick: function (fn, evt) {
            if (!this.disabled()) {
                $.proxy(fn, this, evt)()
            }
            return this;
        },
        disabled: function (state) {
            if (state === undefined) {
                return this.root().hasClass('edui-disabled')
            }
            this.root().toggleClass('edui-disabled', state).find('.edui-btn').toggleClass('edui-disabled', state);
            return this;
        },
        active: function (state) {
            if (state === undefined) {
                return this.root().hasClass('edui-active')
            }
            this.root().toggleClass('edui-active', state).find('.edui-btn:first').toggleClass('edui-active', state);
            return this;
        },
        mergeWith: function ($obj) {
            var me = this;
            me.data('$mergeObj', $obj);
            $obj.edui().data('$mergeObj', me.root());
            if (!$.contains(document.body, $obj[0])) {
                $obj.appendTo(me.root());
            }
            me.root().delegate('.edui-dropdown-toggle', 'click', function () {
                me.wrapclick(function () {
                    $obj.edui().show();
                })
            });
            me.register('click', me.root().find('.edui-dropdown-toggle'), function (evt) {
                $obj.hide()
            });
        }
    });
    /**
     * Created with JetBrains PhpStorm.
     * User: hn
     * Date: 13-7-10
     * Time: 下午3:07
     * To change this template use File | Settings | File Templates.
     */
    UM.ui.define('colorsplitbutton', {

        tpl: '<div class="edui-splitbutton <%if (name){%>edui-splitbutton-<%= name %><%}%>"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><div class="edui-splitbutton-color-label" <%if (color) {%>style="background: <%=color%>"<%}%>></div><%if(text){%><%=text%><%}%></div>' +
        '<div  unselectable="on" class="edui-btn edui-dropdown-toggle" >' +
        '<div  unselectable="on" class="edui-caret"><\/div>' +
        '</div>' +
        '</div>',
        defaultOpt: {
            color: ''
        },
        init: function (options) {

            var me = this;

            me.supper.init.call(me, options);

        },
        colorLabel: function () {
            return this.root().find('.edui-splitbutton-color-label');
        }

    }, 'splitbutton');
//popup 类
    UM.ui.define('popup', {
        tpl: '<div class="edui-dropdown-menu edui-popup"' +
        '<%if(!<%=stopprop%>){%>onmousedown="return false"<%}%>' +
        '><div class="edui-popup-body" unselectable="on" onmousedown="return false"><%=subtpl%></div>' +
        '<div class="edui-popup-caret"></div>' +
        '</div>',
        defaultOpt: {
            stopprop: false,
            subtpl: '',
            width: '',
            height: ''
        },
        init: function (options) {
            this.root($($.parseTmpl(this.tpl, options)));
            return this;
        },
        mergeTpl: function (data) {
            return $.parseTmpl(this.tpl, {subtpl: data});
        },
        show: function ($obj, posObj) {
            if (!posObj) posObj = {};

            var fnname = posObj.fnname || 'position';
            if (this.trigger('beforeshow') === false) {
                return;
            } else {
                this.root().css($.extend({display: 'block'}, $obj ? {
                    top: $obj[fnname]().top + ( posObj.dir == 'right' ? 0 : $obj.outerHeight()) - (posObj.offsetTop || 0),
                    left: $obj[fnname]().left + (posObj.dir == 'right' ? $obj.outerWidth() : 0) - (posObj.offsetLeft || 0),
                    position: 'absolute'
                } : {}));

                this.root().find('.edui-popup-caret').css({
                    top: posObj.caretTop || 0,
                    left: posObj.caretLeft || 0,
                    position: 'absolute'
                }).addClass(posObj.caretDir || "up")

            }
            this.trigger("aftershow");
        },
        hide: function () {
            this.root().css('display', 'none');
            this.trigger('afterhide')
        },
        attachTo: function ($obj, posObj) {
            var me = this
            if (!$obj.data('$mergeObj')) {
                $obj.data('$mergeObj', me.root());
                $obj.on('wrapclick', function (evt) {
                    me.show($obj, posObj)
                });
                me.register('click', $obj, function (evt) {
                    me.hide()
                });
                me.data('$mergeObj', $obj)
            }
        },
        getBodyContainer: function () {
            return this.root().find(".edui-popup-body");
        }
    });
//scale 类
    UM.ui.define('scale', {
        tpl: '<div class="edui-scale" unselectable="on">' +
        '<span class="edui-scale-hand0"></span>' +
        '<span class="edui-scale-hand1"></span>' +
        '<span class="edui-scale-hand2"></span>' +
        '<span class="edui-scale-hand3"></span>' +
        '<span class="edui-scale-hand4"></span>' +
        '<span class="edui-scale-hand5"></span>' +
        '<span class="edui-scale-hand6"></span>' +
        '<span class="edui-scale-hand7"></span>' +
        '</div>',
        defaultOpt: {
            $doc: $(document),
            $wrap: $(document)
        },
        init: function (options) {
            if (options.$doc) this.defaultOpt.$doc = options.$doc;
            if (options.$wrap) this.defaultOpt.$wrap = options.$wrap;
            this.root($($.parseTmpl(this.tpl, options)));
            this.initStyle();
            this.startPos = this.prePos = {x: 0, y: 0};
            this.dragId = -1;
            return this;
        },
        initStyle: function () {
            utils.cssRule('edui-style-scale', '.edui-scale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;}' +
                '.edui-scale span{position:absolute;left:0;top:0;width:7px;height:7px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}'
                + '.edui-scale .edui-scale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}'
                + '.edui-scale .edui-scale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}'
                + '.edui-scale .edui-scale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}'
                + '.edui-scale .edui-scale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}'
                + '.edui-scale .edui-scale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}'
                + '.edui-scale .edui-scale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}'
                + '.edui-scale .edui-scale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}'
                + '.edui-scale .edui-scale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}');
        },
        _eventHandler: function (e) {
            var me = this,
                $doc = me.defaultOpt.$doc;
            switch (e.type) {
                case 'mousedown':
                    var hand = e.target || e.srcElement, hand;
                    if (hand.className.indexOf('edui-scale-hand') != -1) {
                        me.dragId = hand.className.slice(-1);
                        me.startPos.x = me.prePos.x = e.clientX;
                        me.startPos.y = me.prePos.y = e.clientY;
                        $doc.bind('mousemove', $.proxy(me._eventHandler, me));
                    }
                    break;
                case 'mousemove':
                    if (me.dragId != -1) {
                        me.updateContainerStyle(me.dragId, {x: e.clientX - me.prePos.x, y: e.clientY - me.prePos.y});
                        me.prePos.x = e.clientX;
                        me.prePos.y = e.clientY;
                        me.updateTargetElement();
                    }
                    break;
                case 'mouseup':
                    if (me.dragId != -1) {
                        me.dragId = -1;
                        me.updateTargetElement();
                        var $target = me.data('$scaleTarget');
                        if ($target.parent()) me.attachTo(me.data('$scaleTarget'));
                    }
                    $doc.unbind('mousemove', $.proxy(me._eventHandler, me));
                    break;
                default:
                    break;
            }
        },
        updateTargetElement: function () {
            var me = this,
                $root = me.root(),
                $target = me.data('$scaleTarget');
            $target.css({width: $root.width(), height: $root.height()});
            me.attachTo($target);
        },
        updateContainerStyle: function (dir, offset) {
            var me = this,
                $dom = me.root(),
                tmp,
                rect = [
                    //[left, top, width, height]
                    [0, 0, -1, -1],
                    [0, 0, 0, -1],
                    [0, 0, 1, -1],
                    [0, 0, -1, 0],
                    [0, 0, 1, 0],
                    [0, 0, -1, 1],
                    [0, 0, 0, 1],
                    [0, 0, 1, 1]
                ];

            if (rect[dir][0] != 0) {
                tmp = parseInt($dom.offset().left) + offset.x;
                $dom.css('left', me._validScaledProp('left', tmp));
            }
            if (rect[dir][1] != 0) {
                tmp = parseInt($dom.offset().top) + offset.y;
                $dom.css('top', me._validScaledProp('top', tmp));
            }
            if (rect[dir][2] != 0) {
                tmp = $dom.width() + rect[dir][2] * offset.x;
                $dom.css('width', me._validScaledProp('width', tmp));
            }
            if (rect[dir][3] != 0) {
                tmp = $dom.height() + rect[dir][3] * offset.y;
                $dom.css('height', me._validScaledProp('height', tmp));
            }
        },
        _validScaledProp: function (prop, value) {
            var $ele = this.root(),
                $wrap = this.defaultOpt.$doc,
                calc = function (val, a, b) {
                    return (val + a) > b ? b - a : value;
                };

            value = isNaN(value) ? 0 : value;
            switch (prop) {
                case 'left':
                    return value < 0 ? 0 : calc(value, $ele.width(), $wrap.width());
                case 'top':
                    return value < 0 ? 0 : calc(value, $ele.height(), $wrap.height());
                case 'width':
                    return value <= 0 ? 1 : calc(value, $ele.offset().left, $wrap.width());
                case 'height':
                    return value <= 0 ? 1 : calc(value, $ele.offset().top, $wrap.height());
            }
        },
        show: function ($obj) {
            var me = this;
            if ($obj) me.attachTo($obj);
            me.root().bind('mousedown', $.proxy(me._eventHandler, me));
            me.defaultOpt.$doc.bind('mouseup', $.proxy(me._eventHandler, me));
            me.root().show();
            me.trigger("aftershow");
        },
        hide: function () {
            var me = this;
            me.root().unbind('mousedown', $.proxy(me._eventHandler, me));
            me.defaultOpt.$doc.unbind('mouseup', $.proxy(me._eventHandler, me));
            me.root().hide();
            me.trigger('afterhide')
        },
        attachTo: function ($obj) {
            var me = this,
                imgPos = $obj.offset(),
                $root = me.root(),
                $wrap = me.defaultOpt.$wrap,
                posObj = $wrap.offset();

            me.data('$scaleTarget', $obj);
            me.root().css({
                position: 'absolute',
                width: $obj.width(),
                height: $obj.height(),
                left: imgPos.left - posObj.left - parseInt($wrap.css('border-left-width')) - parseInt($root.css('border-left-width')),
                top: imgPos.top - posObj.top - parseInt($wrap.css('border-top-width')) - parseInt($root.css('border-top-width'))
            });
        },
        getScaleTarget: function () {
            return this.data('$scaleTarget')[0];
        }
    });
//colorpicker 类
    UM.ui.define('colorpicker', {
        tpl: function (opt) {
            var COLORS = (
            'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
            'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
            'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
            'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
            'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
            '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
            'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

            var html = '<div unselectable="on" onmousedown="return false" class="edui-colorpicker<%if (name){%> edui-colorpicker-<%=name%><%}%>" >' +
                '<table unselectable="on" onmousedown="return false">' +
                '<tr><td colspan="10">' + opt.lang_themeColor + '</td> </tr>' +
                '<tr class="edui-colorpicker-firstrow" >';

            for (var i = 0; i < COLORS.length; i++) {
                if (i && i % 10 === 0) {
                    html += '</tr>' + (i == 60 ? '<tr><td colspan="10">' + opt.lang_standardColor + '</td></tr>' : '') + '<tr' + (i == 60 ? ' class="edui-colorpicker-firstrow"' : '') + '>';
                }
                html += i < 70 ? '<td><a unselectable="on" onmousedown="return false" title="' + COLORS[i] + '" class="edui-colorpicker-colorcell"' +
                ' data-color="#' + COLORS[i] + '"' +
                ' style="background-color:#' + COLORS[i] + ';border:solid #ccc;' +
                (i < 10 || i >= 60 ? 'border-width:1px;' :
                    i >= 10 && i < 20 ? 'border-width:1px 1px 0 1px;' :
                        'border-width:0 1px 0 1px;') +
                '"' +
                '></a></td>' : '';
            }
            html += '</tr></table></div>';
            return html;
        },
        init: function (options) {
            var me = this;
            me.root($($.parseTmpl(me.supper.mergeTpl(me.tpl(options)), options)));

            me.root().on("click", function (e) {
                me.trigger('pickcolor', $(e.target).data('color'));
            });
        }
    }, 'popup');
    /**
     * Created with JetBrains PhpStorm.
     * User: hn
     * Date: 13-5-29
     * Time: 下午8:01
     * To change this template use File | Settings | File Templates.
     */

    (function () {

        var widgetName = 'combobox',
            itemClassName = 'edui-combobox-item',
            HOVER_CLASS = 'edui-combobox-item-hover',
            ICON_CLASS = 'edui-combobox-checked-icon',
            labelClassName = 'edui-combobox-item-label';

        UM.ui.define(widgetName, (function () {

            return {
                tpl: "<ul class=\"dropdown-menu edui-combobox-menu<%if (comboboxName!=='') {%> edui-combobox-<%=comboboxName%><%}%>\" unselectable=\"on\" onmousedown=\"return false\" role=\"menu\" aria-labelledby=\"dropdownMenu\">" +
                "<%if(autoRecord) {%>" +
                "<%for( var i=0, len = recordStack.length; i<len; i++ ) {%>" +
                "<%var index = recordStack[i];%>" +
                "<li class=\"<%=itemClassName%><%if( selected == index ) {%> edui-combobox-checked<%}%>\" data-item-index=\"<%=index%>\" unselectable=\"on\" onmousedown=\"return false\">" +
                "<span class=\"edui-combobox-icon\" unselectable=\"on\" onmousedown=\"return false\"></span>" +
                "<label class=\"<%=labelClassName%>\" style=\"<%=itemStyles[ index ]%>\" unselectable=\"on\" onmousedown=\"return false\"><%=items[index]%></label>" +
                "</li>" +
                "<%}%>" +
                "<%if( i ) {%>" +
                "<li class=\"edui-combobox-item-separator\"></li>" +
                "<%}%>" +
                "<%}%>" +
                "<%for( var i=0, label; label = items[i]; i++ ) {%>" +
                "<li class=\"<%=itemClassName%><%if( selected == i ) {%> edui-combobox-checked<%}%> edui-combobox-item-<%=i%>\" data-item-index=\"<%=i%>\" unselectable=\"on\" onmousedown=\"return false\">" +
                "<span class=\"edui-combobox-icon\" unselectable=\"on\" onmousedown=\"return false\"></span>" +
                "<label class=\"<%=labelClassName%>\" style=\"<%=itemStyles[ i ]%>\" unselectable=\"on\" onmousedown=\"return false\"><%=label%></label>" +
                "</li>" +
                "<%}%>" +
                "</ul>",
                defaultOpt: {
                    //记录栈初始列表
                    recordStack: [],
                    //可用项列表
                    items: [],
                    //item对应的值列表
                    value: [],
                    comboboxName: '',
                    selected: '',
                    //自动记录
                    autoRecord: true,
                    //最多记录条数
                    recordCount: 5
                },
                init: function (options) {

                    var me = this;

                    $.extend(me._optionAdaptation(options), me._createItemMapping(options.recordStack, options.items), {
                        itemClassName: itemClassName,
                        iconClass: ICON_CLASS,
                        labelClassName: labelClassName
                    });

                    this._transStack(options);

                    me.root($($.parseTmpl(me.tpl, options)));

                    this.data('options', options).initEvent();

                },
                initEvent: function () {

                    var me = this;

                    me.initSelectItem();

                    this.initItemActive();

                },
                /**
                 * 初始化选择项
                 */
                initSelectItem: function () {

                    var me = this,
                        labelClass = "." + labelClassName;

                    me.root().delegate('.' + itemClassName, 'click', function () {

                        var $li = $(this),
                            index = $li.attr('data-item-index');

                        me.trigger('comboboxselect', {
                            index: index,
                            label: $li.find(labelClass).text(),
                            value: me.data('options').value[index]
                        }).select(index);

                        me.hide();

                        return false;

                    });

                },
                initItemActive: function () {
                    var fn = {
                        mouseenter: 'addClass',
                        mouseleave: 'removeClass'
                    };
                    if ($.IE6) {
                        this.root().delegate('.' + itemClassName, 'mouseenter mouseleave', function (evt) {
                            $(this)[fn[evt.type]](HOVER_CLASS);
                        }).one('afterhide', function () {
                        });
                    }
                },
                /**
                 * 选择给定索引的项
                 * @param index 项索引
                 * @returns {*} 如果存在对应索引的项，则返回该项；否则返回null
                 */
                select: function (index) {

                    var itemCount = this.data('options').itemCount,
                        items = this.data('options').autowidthitem;

                    if (items && !items.length) {
                        items = this.data('options').items;
                    }

                    if (itemCount == 0) {
                        return null;
                    }

                    if (index < 0) {

                        index = itemCount + index % itemCount;

                    } else if (index >= itemCount) {

                        index = itemCount - 1;

                    }

                    this.trigger('changebefore', items[index]);

                    this._update(index);

                    this.trigger('changeafter', items[index]);

                    return null;

                },
                selectItemByLabel: function (label) {

                    var itemMapping = this.data('options').itemMapping,
                        me = this,
                        index = null;

                    !$.isArray(label) && ( label = [label] );

                    $.each(label, function (i, item) {

                        index = itemMapping[item];

                        if (index !== undefined) {

                            me.select(index);
                            return false;

                        }

                    });

                },
                /**
                 * 转换记录栈
                 */
                _transStack: function (options) {

                    var temp = [],
                        itemIndex = -1,
                        selected = -1;

                    $.each(options.recordStack, function (index, item) {

                        itemIndex = options.itemMapping[item];

                        if ($.isNumeric(itemIndex)) {

                            temp.push(itemIndex);

                            //selected的合法性检测
                            if (item == options.selected) {
                                selected = itemIndex;
                            }

                        }

                    });

                    options.recordStack = temp;
                    options.selected = selected;
                    temp = null;

                },
                _optionAdaptation: function (options) {

                    if (!( 'itemStyles' in options )) {

                        options.itemStyles = [];

                        for (var i = 0, len = options.items.length; i < len; i++) {
                            options.itemStyles.push('');
                        }

                    }

                    options.autowidthitem = options.autowidthitem || options.items;
                    options.itemCount = options.items.length;

                    return options;

                },
                _createItemMapping: function (stackItem, items) {

                    var temp = {},
                        result = {
                            recordStack: [],
                            mapping: {}
                        };

                    $.each(items, function (index, item) {
                        temp[item] = index;
                    });

                    result.itemMapping = temp;

                    $.each(stackItem, function (index, item) {

                        if (temp[item] !== undefined) {
                            result.recordStack.push(temp[item]);
                            result.mapping[item] = temp[item];
                        }

                    });

                    return result;

                },
                _update: function (index) {

                    var options = this.data("options"),
                        newStack = [],
                        newChilds = null;

                    $.each(options.recordStack, function (i, item) {

                        if (item != index) {
                            newStack.push(item);
                        }

                    });

                    //压入最新的记录
                    newStack.unshift(index);

                    if (newStack.length > options.recordCount) {
                        newStack.length = options.recordCount;
                    }

                    options.recordStack = newStack;
                    options.selected = index;

                    newChilds = $($.parseTmpl(this.tpl, options));

                    //重新渲染
                    this.root().html(newChilds.html());

                    newChilds = null;
                    newStack = null;

                }
            };

        })(), 'menu');

    })();

    /**
     * Combox 抽象基类
     * User: hn
     * Date: 13-5-29
     * Time: 下午8:01
     * To change this template use File | Settings | File Templates.
     */

    (function () {

        var widgetName = 'buttoncombobox';

        UM.ui.define(widgetName, (function () {

            return {
                defaultOpt: {
                    //按钮初始文字
                    label: '',
                    title: ''
                },
                init: function (options) {

                    var me = this;

                    var btnWidget = $.eduibutton({
                        caret: true,
                        name: options.comboboxName,
                        title: options.title,
                        text: options.label,
                        click: function () {
                            me.show(this.root());
                        }
                    });

                    me.supper.init.call(me, options);

                    //监听change， 改变button显示内容
                    me.on('changebefore', function (e, label) {
                        btnWidget.eduibutton('label', label);
                    });

                    me.data('button', btnWidget);

                    me.attachTo(btnWidget)

                },
                button: function () {
                    return this.data('button');
                }
            }

        })(), 'combobox');

    })();

    /*modal 类*/
    UM.ui.define('modal', {
        tpl: '<div class="edui-modal" tabindex="-1" >' +
        '<div class="edui-modal-header">' +
        '<div class="edui-close" data-hide="modal"></div>' +
        '<h3 class="edui-title"><%=title%></h3>' +
        '</div>' +
        '<div class="edui-modal-body"  style="<%if(width){%>width:<%=width%>px;<%}%>' +
        '<%if(height){%>height:<%=height%>px;<%}%>">' +
        ' </div>' +
        '<% if(cancellabel || oklabel) {%>' +
        '<div class="edui-modal-footer">' +
        '<div class="edui-modal-tip"></div>' +
        '<%if(oklabel){%><div class="edui-btn edui-btn-primary" data-ok="modal"><%=oklabel%></div><%}%>' +
        '<%if(cancellabel){%><div class="edui-btn" data-hide="modal"><%=cancellabel%></div><%}%>' +
        '</div>' +
        '<%}%></div>',
        defaultOpt: {
            title: "",
            cancellabel: "",
            oklabel: "",
            width: '',
            height: '',
            backdrop: true,
            keyboard: true
        },
        init: function (options) {
            var me = this;

            me.root($($.parseTmpl(me.tpl, options || {})));

            me.data("options", options);
            if (options.okFn) {
                me.on('ok', $.proxy(options.okFn, me))
            }
            if (options.cancelFn) {
                me.on('beforehide', $.proxy(options.cancelFn, me))
            }

            me.root().delegate('[data-hide="modal"]', 'click', $.proxy(me.hide, me))
                .delegate('[data-ok="modal"]', 'click', $.proxy(me.ok, me));

            $('[data-hide="modal"],[data-ok="modal"]', me.root()).hover(function () {
                $(this).toggleClass('edui-hover')
            });
        },
        toggle: function () {
            var me = this;
            return me[!me.data("isShown") ? 'show' : 'hide']();
        },
        show: function () {

            var me = this;

            me.trigger("beforeshow");

            if (me.data("isShown")) return;

            me.data("isShown", true);

            me.escape();

            me.backdrop(function () {
                me.autoCenter();
                me.root()
                    .show()
                    .focus()
                    .trigger('aftershow');
            })
        },
        showTip: function (text) {
            $('.edui-modal-tip', this.root()).html(text).fadeIn();
        },
        hideTip: function (text) {
            $('.edui-modal-tip', this.root()).fadeOut(function () {
                $(this).html('');
            });
        },
        autoCenter: function () {
            //ie6下不用处理了
            !$.IE6 && this.root().css("margin-left", -(this.root().width() / 2));
        },
        hide: function () {
            var me = this;

            me.trigger("beforehide");

            if (!me.data("isShown")) return;

            me.data("isShown", false);

            me.escape();

            me.hideModal();
        },
        escape: function () {
            var me = this;
            if (me.data("isShown") && me.data("options").keyboard) {
                me.root().on('keyup', function (e) {
                    e.which == 27 && me.hide();
                })
            }
            else if (!me.data("isShown")) {
                me.root().off('keyup');
            }
        },
        hideModal: function () {
            var me = this;
            me.root().hide();
            me.backdrop(function () {
                me.removeBackdrop();
                me.trigger('afterhide');
            })
        },
        removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null;
        },
        backdrop: function (callback) {
            var me = this;
            if (me.data("isShown") && me.data("options").backdrop) {
                me.$backdrop = $('<div class="edui-modal-backdrop" />').click(
                    me.data("options").backdrop == 'static' ?
                        $.proxy(me.root()[0].focus, me.root()[0])
                        : $.proxy(me.hide, me)
                )
            }
            me.trigger('afterbackdrop');
            callback && callback();

        },
        attachTo: function ($obj) {
            var me = this
            if (!$obj.data('$mergeObj')) {

                $obj.data('$mergeObj', me.root());
                $obj.on('click', function () {
                    me.toggle($obj)
                });
                me.data('$mergeObj', $obj)
            }
        },
        ok: function () {
            var me = this;
            me.trigger('beforeok');
            if (me.trigger("ok", me) === false) {
                return;
            }
            me.hide();
        },
        getBodyContainer: function () {
            return this.root().find('.edui-modal-body')
        }
    });


    /*tooltip 类*/
    UM.ui.define('tooltip', {
        tpl: '<div class="edui-tooltip" unselectable="on" onmousedown="return false">' +
        '<div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>' +
        '<div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>' +
        '</div>',
        init: function (options) {
            var me = this;
            me.root($($.parseTmpl(me.tpl, options || {})));
        },
        content: function (e) {
            var me = this,
                title = $(e.currentTarget).attr("data-original-title");

            me.root().find('.edui-tooltip-inner')['text'](title);
        },
        position: function (e) {
            var me = this,
                $obj = $(e.currentTarget);

            me.root().css($.extend({display: 'block'}, $obj ? {
                top: $obj.outerHeight(),
                left: (($obj.outerWidth() - me.root().outerWidth()) / 2)
            } : {}))
        },
        show: function (e) {
            if ($(e.currentTarget).hasClass('edui-disabled')) return;

            var me = this;
            me.content(e);
            me.root().appendTo($(e.currentTarget));
            me.position(e);
            me.root().css('display', 'block');
        },
        hide: function () {
            var me = this;
            me.root().css('display', 'none')
        },
        attachTo: function ($obj) {
            var me = this;

            function tmp ($obj) {
                var me = this;

                if (!$.contains(document.body, me.root()[0])) {
                    me.root().appendTo($obj);
                }

                me.data('tooltip', me.root());

                $obj.each(function () {
                    if ($(this).attr("data-original-title")) {
                        $(this).on('mouseenter', $.proxy(me.show, me))
                            .on('mouseleave click', $.proxy(me.hide, me))

                    }
                });

            }

            if ($.type($obj) === "undefined") {
                $("[data-original-title]").each(function (i, el) {
                    tmp.call(me, $(el));
                })

            } else {
                if (!$obj.data('tooltip')) {
                    tmp.call(me, $obj);
                }
            }
        }
    });

    /*tab 类*/
    UM.ui.define('tab', {
        init: function (options) {
            var me = this,
                slr = options.selector;

            if ($.type(slr)) {
                me.root($(slr, options.context));
                me.data("context", options.context);

                $(slr, me.data("context")).on('click', function (e) {
                    me.show(e);
                });
            }
        },
        show: function (e) {

            var me = this,
                $cur = $(e.target),
                $ul = $cur.closest('ul'),
                selector,
                previous,
                $target,
                e;

            selector = $cur.attr('data-context');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');

            var $tmp = $cur.parent('li');

            if (!$tmp.length || $tmp.hasClass('edui-active')) return;

            previous = $ul.find('.edui-active:last a')[0];

            e = $.Event('beforeshow', {
                target: $cur[0],
                relatedTarget: previous
            });

            me.trigger(e);

            if (e.isDefaultPrevented()) return;

            $target = $(selector, me.data("context"));

            me.activate($cur.parent('li'), $ul);
            me.activate($target, $target.parent(), function () {
                me.trigger({
                    type: 'aftershow', relatedTarget: previous
                })
            });
        },
        activate: function (element, container, callback) {
            if (element === undefined) {
                return $(".edui-tab-item.edui-active", this.root()).index();
            }

            var $active = container.find('> .edui-active');

            $active.removeClass('edui-active');

            element.addClass('edui-active');

            callback && callback();
        }
    });


//button 类
    UM.ui.define('separator', {
        tpl: '<div class="edui-separator" unselectable="on" onmousedown="return false" ></div>',
        init: function (options) {
            var me = this;
            me.root($($.parseTmpl(me.tpl, options)));
            return me;
        }
    });
    /**
     * @file adapter.js
     * @desc adapt ui to editor
     * @import core/Editor.js, core/utils.js
     */

    (function () {
        var _editorUI = {},
            _editors = {},
            _readyFn = [],
            _activeWidget = null,
            _widgetData = {},
            _widgetCallBack = {},
            _cacheUI = {},
            _maxZIndex = null;

        utils.extend(UM, {
            defaultWidth: 500,
            defaultHeight: 500,
            registerUI: function (name, fn) {
                utils.each(name.split(/\s+/), function (uiname) {
                    _editorUI[uiname] = fn;
                })
            },

            setEditor: function (editor) {
                !_editors[editor.id] && (_editors[editor.id] = editor);
            },
            registerWidget: function (name, pro, cb) {
                _widgetData[name] = $.extend2(pro, {
                    $root: '',
                    _preventDefault: false,
                    root: function ($el) {
                        return this.$root || (this.$root = $el);
                    },
                    preventDefault: function () {
                        this._preventDefault = true;
                    },
                    clear: false
                });
                if (cb) {
                    _widgetCallBack[name] = cb;
                }
            },
            getWidgetData: function (name) {
                return _widgetData[name]
            },
            setWidgetBody: function (name, $widget, editor) {
                if (!editor._widgetData) {

                    utils.extend(editor, {
                        _widgetData: {},
                        getWidgetData: function (name) {
                            return this._widgetData[name];
                        },
                        getWidgetCallback: function (widgetName) {
                            var me = this;
                            return function () {
                                return _widgetCallBack[widgetName].apply(me, [me, $widget].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                    })

                }
                var pro = _widgetData[name];
                if (!pro) {
                    return null;
                }
                pro = editor._widgetData[name];
                if (!pro) {
                    pro = _widgetData[name];
                    pro = editor._widgetData[name] = $.type(pro) == 'function' ? pro : utils.clone(pro);
                }

                pro.root($widget.edui().getBodyContainer());

                pro.initContent(editor, $widget);
                if (!pro._preventDefault) {
                    pro.initEvent(editor, $widget);
                }

                pro.width && $widget.width(pro.width);


            },
            setActiveWidget: function ($widget) {
                _activeWidget = $widget;
            },
            getEditor: function (id, options) {
                var editor = _editors[id] || (_editors[id] = this.createEditor(id, options));
                _maxZIndex = _maxZIndex ? Math.max(editor.getOpt('zIndex'), _maxZIndex) : editor.getOpt('zIndex');
                return editor;
            },
            setTopEditor: function (editor) {
                $.each(_editors, function (i, o) {
                    if (editor == o) {
                        editor.$container && editor.$container.css('zIndex', _maxZIndex + 1);
                    } else {
                        o.$container && o.$container.css('zIndex', o.getOpt('zIndex'));
                    }
                });
            },
            clearCache: function (id) {
                if (_editors[id]) {
                    delete  _editors[id]
                }
            },
            delEditor: function (id) {
                var editor;
                if (editor = _editors[id]) {
                    editor.destroy();
                }
            },
            ready: function (fn) {
                _readyFn.push(fn);
            },
            createEditor: function (id, opt) {
                var editor = new UM.Editor(opt);
                var T = this;

                editor.langIsReady ? $.proxy(renderUI, T)() : editor.addListener("langReady", $.proxy(renderUI, T));
                function renderUI () {


                    var $container = this.createUI('#' + id, editor);
                    editor.key = id;
                    editor.ready(function () {
                        $.each(_readyFn, function (index, fn) {
                            $.proxy(fn, editor)();
                        });
                    });
                    var options = editor.options;
                    if (options.initialFrameWidth) {
                        options.minFrameWidth = options.initialFrameWidth
                    } else {
                        options.minFrameWidth = options.initialFrameWidth = editor.$body.width() || UM.defaultWidth;
                    }

                    $container.css({
                        width: options.initialFrameWidth,
                        zIndex: editor.getOpt('zIndex')
                    });

                    //ie6下缓存图片
                    UM.browser.ie && UM.browser.version === 6 && document.execCommand("BackgroundImageCache", false, true);

                    editor.render(id);


                    //添加tooltip;
                    $.eduitooltip && $.eduitooltip('attachTo', $("[data-original-title]", $container)).css('z-index', editor.getOpt('zIndex') + 1);

                    $container.find('a').click(function (evt) {
                        evt.preventDefault()
                    });

                    editor.fireEvent("afteruiready");
                }

                return editor;

            },
            createUI: function (id, editor) {
                var $editorCont = $(id),
                    $container = $('<div class="edui-container"><div class="edui-editor-body"></div></div>').insertBefore($editorCont);
                editor.$container = $container;
                editor.container = $container[0];

                editor.$body = $editorCont;

                //修正在ie9+以上的版本中，自动长高收起时的，残影问题
                if (browser.ie && browser.ie9above) {
                    var $span = $('<span style="padding:0;margin:0;height:0;width:0"></span>');
                    $span.insertAfter($container);
                }
                //初始化注册的ui组件
                $.each(_editorUI, function (n, v) {
                    var widget = v.call(editor, n);
                    if (widget) {
                        _cacheUI[n] = widget;
                    }

                });

                $container.find('.edui-editor-body').append($editorCont).before(this.createToolbar(editor.options, editor));

                $container.find('.edui-toolbar').append($('<div class="edui-dialog-container"></div>'));


                return $container;
            },
            createToolbar: function (options, editor) {
                var $toolbar = $.eduitoolbar(), toolbar = $toolbar.edui();
                //创建下来菜单列表

                if (options.toolbar && options.toolbar.length) {
                    var btns = [];
                    $.each(options.toolbar, function (i, uiNames) {
                        $.each(uiNames.split(/\s+/), function (index, name) {
                            if (name == '|') {
                                $.eduiseparator && btns.push($.eduiseparator());
                            } else {
                                var ui = _cacheUI[name];
                                if (name == "fullscreen") {
                                    ui && btns.unshift(ui);
                                } else {
                                    ui && btns.push(ui);
                                }
                            }

                        });
                        btns.length && toolbar.appendToBtnmenu(btns);
                    });
                } else {
                    $toolbar.find('.edui-btn-toolbar').remove()
                }
                return $toolbar;
            }

        })


    })();


    UM.registerUI('bold italic redo undo underline strikethrough superscript subscript insertorderedlist insertunorderedlist ' +
        'cleardoc selectall link unlink print preview justifyleft justifycenter justifyright justifyfull removeformat horizontal drafts',
        function (name) {
            var me = this;
            var $btn = $.eduibutton({
                icon: name,
                click: function () {
                    me.execCommand(name);
                },
                title: this.getLang('labelMap')[name] || ''
            });

            this.addListener('selectionchange', function () {
                var state = this.queryCommandState(name);
                $btn.edui().disabled(state == -1).active(state == 1)
            });
            return $btn;
        }
    );


    /**
     * 全屏组件
     */

    (function () {

        //状态缓存
        var STATUS_CACHE = {},
        //状态值列表
            STATUS_LIST = ['width', 'height', 'position', 'top', 'left', 'margin', 'padding', 'overflowX', 'overflowY'],
            CONTENT_AREA_STATUS = {},
        //页面状态
            DOCUMENT_STATUS = {},
            DOCUMENT_ELEMENT_STATUS = {},

            FULLSCREENS = {};


        UM.registerUI('fullscreen', function (name) {

            var me = this,
                $button = $.eduibutton({
                    'icon': 'fullscreen',
                    'title': (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
                    'click': function () {
                        //切换
                        me.execCommand(name);
                        UM.setTopEditor(me);
                    }
                });

            me.addListener("selectionchange", function () {

                var state = this.queryCommandState(name);
                $button.edui().disabled(state == -1).active(state == 1);

            });

            //切换至全屏
            me.addListener('ready', function () {

                me.options.fullscreen && Fullscreen.getInstance(me).toggle();

            });

            return $button;

        });

        UM.commands['fullscreen'] = {

            execCommand: function (cmdName) {

                Fullscreen.getInstance(this).toggle();

            },
            queryCommandState: function (cmdName) {

                return this._edui_fullscreen_status;
            },
            notNeedUndo: 1

        };

        function Fullscreen (editor) {

            var me = this;

            if (!editor) {
                throw new Error('invalid params, notfound editor');
            }

            me.editor = editor;

            //记录初始化的全屏组件
            FULLSCREENS[editor.uid] = this;

            editor.addListener('destroy', function () {
                delete FULLSCREENS[editor.uid];
                me.editor = null;
            });

        }

        Fullscreen.prototype = {

            /**
             * 全屏状态切换
             */
            toggle: function () {

                var editor = this.editor,
                //当前编辑器的缩放状态
                    _edui_fullscreen_status = this.isFullState();
                editor.fireEvent('beforefullscreenchange', !_edui_fullscreen_status);

                //更新状态
                this.update(!_edui_fullscreen_status);

                !_edui_fullscreen_status ? this.enlarge() : this.revert();

                editor.fireEvent('afterfullscreenchange', !_edui_fullscreen_status);
                if (editor.body.contentEditable === 'true') {
                    editor.fireEvent('fullscreenchanged', !_edui_fullscreen_status);
                }

                editor.fireEvent('selectionchange');

            },
            /**
             * 执行放大
             */
            enlarge: function () {

                this.saveSataus();

                this.setDocumentStatus();

                this.resize();

            },
            /**
             * 全屏还原
             */
            revert: function () {

                //还原CSS表达式
                var options = this.editor.options,
                    height = /%$/.test(options.initialFrameHeight) ? '100%' : (options.initialFrameHeight - this.getStyleValue("padding-top") - this.getStyleValue("padding-bottom") - this.getStyleValue('border-width'));

                $.IE6 && this.getEditorHolder().style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');

                //还原容器状态
                this.revertContainerStatus();

                this.revertContentAreaStatus();

                this.revertDocumentStatus();

            },
            /**
             * 更新状态
             * @param isFull 当前状态是否是全屏状态
             */
            update: function (isFull) {
                this.editor._edui_fullscreen_status = isFull;
            },
            /**
             * 调整当前编辑器的大小, 如果当前编辑器不处于全屏状态， 则不做调整
             */
            resize: function () {

                var $win = null,
                    height = 0,
                    width = 0,
                    borderWidth = 0,
                    paddingWidth = 0,
                    editor = this.editor,
                    me = this,
                    bound = null,
                    editorBody = null;

                if (!this.isFullState()) {
                    return;
                }

                $win = $(window);
                width = $win.width();
                height = $win.height();
                editorBody = this.getEditorHolder();
                //文本编辑区border宽度
                borderWidth = parseInt(domUtils.getComputedStyle(editorBody, 'border-width'), 10) || 0;
                //容器border宽度
                borderWidth += parseInt(domUtils.getComputedStyle(editor.container, 'border-width'), 10) || 0;
                //容器padding
                paddingWidth += parseInt(domUtils.getComputedStyle(editorBody, 'padding-left'), 10) + parseInt(domUtils.getComputedStyle(editorBody, 'padding-right'), 10) || 0;

                //干掉css表达式
                $.IE6 && editorBody.style.setExpression('height', null);

                bound = this.getBound();

                $(editor.container).css({
                    width: width + 'px',
                    height: height + 'px',
                    position: !$.IE6 ? 'fixed' : 'absolute',
                    top: bound.top,
                    left: bound.left,
                    margin: 0,
                    padding: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                });

                $(editorBody).css({
                    width: width - 2 * borderWidth - paddingWidth + 'px',
                    height: height - 2 * borderWidth - ( editor.options.withoutToolbar ? 0 : $('.edui-toolbar', editor.container).outerHeight() ) - $('.edui-bottombar', editor.container).outerHeight() + 'px',
                    overflowX: 'hidden',
                    overflowY: 'auto'
                });

            },
            /**
             * 保存状态
             */
            saveSataus: function () {

                var styles = this.editor.container.style,
                    tmp = null,
                    cache = {};

                for (var i = 0, len = STATUS_LIST.length; i < len; i++) {

                    tmp = STATUS_LIST[i];
                    cache[tmp] = styles[tmp];

                }

                STATUS_CACHE[this.editor.uid] = cache;

                this.saveContentAreaStatus();
                this.saveDocumentStatus();

            },
            saveContentAreaStatus: function () {

                var $holder = $(this.getEditorHolder());

                CONTENT_AREA_STATUS[this.editor.uid] = {
                    width: $holder.css("width"),
                    overflowX: $holder.css("overflowX"),
                    overflowY: $holder.css("overflowY"),
                    height: $holder.css("height")
                };

            },
            /**
             * 保存与指定editor相关的页面的状态
             */
            saveDocumentStatus: function () {

                var $doc = $(this.getEditorDocumentBody());

                DOCUMENT_STATUS[this.editor.uid] = {
                    overflowX: $doc.css('overflowX'),
                    overflowY: $doc.css('overflowY')
                };
                DOCUMENT_ELEMENT_STATUS[this.editor.uid] = {
                    overflowX: $(this.getEditorDocumentElement()).css('overflowX'),
                    overflowY: $(this.getEditorDocumentElement()).css('overflowY')
                };

            },
            /**
             * 恢复容器状态
             */
            revertContainerStatus: function () {
                $(this.editor.container).css(this.getEditorStatus());
            },
            /**
             * 恢复编辑区状态
             */
            revertContentAreaStatus: function () {
                var holder = this.getEditorHolder(),
                    state = this.getContentAreaStatus();

                if (this.supportMin()) {
                    delete state.height;
                    holder.style.height = null;
                }

                $(holder).css(state);
            },
            /**
             * 恢复页面状态
             */
            revertDocumentStatus: function () {

                var status = this.getDocumentStatus();
                $(this.getEditorDocumentBody()).css('overflowX', status.body.overflowX);
                $(this.getEditorDocumentElement()).css('overflowY', status.html.overflowY);

            },
            setDocumentStatus: function () {
                $(this.getEditorDocumentBody()).css({
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                });
                $(this.getEditorDocumentElement()).css({
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                });
            },
            /**
             * 检测当前编辑器是否处于全屏状态全屏状态
             * @returns {boolean} 是否处于全屏状态
             */
            isFullState: function () {
                return !!this.editor._edui_fullscreen_status;
            },
            /**
             * 获取编辑器状态
             */
            getEditorStatus: function () {
                return STATUS_CACHE[this.editor.uid];
            },
            getContentAreaStatus: function () {
                return CONTENT_AREA_STATUS[this.editor.uid];
            },
            getEditorDocumentElement: function () {
                return this.editor.container.ownerDocument.documentElement;
            },
            getEditorDocumentBody: function () {
                return this.editor.container.ownerDocument.body;
            },
            /**
             * 获取编辑区包裹对象
             */
            getEditorHolder: function () {
                return this.editor.body;
            },
            /**
             * 获取编辑器状态
             * @returns {*}
             */
            getDocumentStatus: function () {
                return {
                    'body': DOCUMENT_STATUS[this.editor.uid],
                    'html': DOCUMENT_ELEMENT_STATUS[this.editor.uid]
                };
            },
            supportMin: function () {

                var node = null;

                if (!this._support) {

                    node = document.createElement("div");

                    this._support = "minWidth" in node.style;

                    node = null;

                }

                return this._support;

            },
            getBound: function () {

                var tags = {
                        html: true,
                        body: true
                    },
                    result = {
                        top: 0,
                        left: 0
                    },
                    offsetParent = null;

                if (!$.IE6) {
                    return result;
                }

                offsetParent = this.editor.container.offsetParent;

                if (offsetParent && !tags[offsetParent.nodeName.toLowerCase()]) {
                    tags = offsetParent.getBoundingClientRect();
                    result.top = -tags.top;
                    result.left = -tags.left;
                }

                return result;

            },
            getStyleValue: function (attr) {
                return parseInt(domUtils.getComputedStyle(this.getEditorHolder(), attr));
            }
        };


        $.extend(Fullscreen, {
            /**
             * 监听resize
             */
            listen: function () {

                var timer = null;

                if (Fullscreen._hasFullscreenListener) {
                    return;
                }

                Fullscreen._hasFullscreenListener = true;

                $(window).on('resize', function () {

                    if (timer !== null) {
                        window.clearTimeout(timer);
                        timer = null;
                    }

                    timer = window.setTimeout(function () {

                        for (var key in FULLSCREENS) {
                            FULLSCREENS[key].resize();
                        }

                        timer = null;

                    }, 50);

                });

            },

            getInstance: function (editor) {

                if (!FULLSCREENS[editor.uid]) {
                    new Fullscreen(editor);
                }

                return FULLSCREENS[editor.uid];

            }

        });

        //开始监听
        Fullscreen.listen();

    })();
    UM.registerUI('link image', function (name) {

        var me = this, currentRange, $dialog,
            opt = {
                title: (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
                url: me.options.UMEDITOR_HOME_URL + 'dialogs/' + name + '/' + name + '.js'
            };

        var $btn = $.eduibutton({
            icon: name,
            title: this.getLang('labelMap')[name] || ''
        });
        //加载模版数据
        utils.loadFile(document, {
            src: opt.url,
            tag: "script",
            type: "text/javascript",
            defer: "defer"
        }, function () {
            //调整数据
            var data = UM.getWidgetData(name);
            if (!data) return;
            if (data.buttons) {
                var ok = data.buttons.ok;
                if (ok) {
                    opt.oklabel = ok.label || me.getLang('ok');
                    if (ok.exec) {
                        opt.okFn = function () {
                            return $.proxy(ok.exec, null, me, $dialog)()
                        }
                    }
                }
                var cancel = data.buttons.cancel;
                if (cancel) {
                    opt.cancellabel = cancel.label || me.getLang('cancel');
                    if (cancel.exec) {
                        opt.cancelFn = function () {
                            return $.proxy(cancel.exec, null, me, $dialog)()
                        }
                    }
                }
            }
            data.width && (opt.width = data.width);
            data.height && (opt.height = data.height);

            $dialog = $.eduimodal(opt);

            $dialog.attr('id', 'edui-dialog-' + name).addClass('edui-dialog-' + name)
                .find('.edui-modal-body').addClass('edui-dialog-' + name + '-body');

            $dialog.edui().on('beforehide', function () {
                var rng = me.selection.getRange();
                if (rng.equals(currentRange)) {
                    rng.select()
                }
            }).on('beforeshow', function () {
                var $root = this.root(),
                    win = null,
                    offset = null;
                currentRange = me.selection.getRange();
                if (!$root.parent()[0]) {
                    me.$container.find('.edui-dialog-container').append($root);
                }

                //IE6下 特殊处理, 通过计算进行定位
                if ($.IE6) {

                    win = {
                        width: $(window).width(),
                        height: $(window).height()
                    };
                    offset = $root.parents(".edui-toolbar")[0].getBoundingClientRect();
                    $root.css({
                        position: 'absolute',
                        margin: 0,
                        left: ( win.width - $root.width() ) / 2 - offset.left,
                        top: 100 - offset.top
                    });

                }
                UM.setWidgetBody(name, $dialog, me);
                UM.setTopEditor(me);
            }).on('afterbackdrop', function () {
                this.$backdrop.css('zIndex', me.getOpt('zIndex') + 1).appendTo(me.$container.find('.edui-dialog-container'))
                $dialog.css('zIndex', me.getOpt('zIndex') + 2)
            }).on('beforeok', function () {
                try {
                    currentRange.select()
                } catch (e) {
                }
            }).attachTo($btn)
        });


        me.addListener('selectionchange', function () {
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
        });
        return $btn;
    });
    UM.registerUI('imagescale', function () {
        var me = this,
            $imagescale;

        me.setOpt('imageScaleEnabled', true);

        if (browser.webkit && me.getOpt('imageScaleEnabled')) {

            me.addListener('click', function (type, e) {
                var range = me.selection.getRange(),
                    img = range.getClosedNode(),
                    target = e.target;

                /* 点击第一个图片的后面,八个角不消失 fix:3652 */
                if (img && img.tagName == 'IMG' && target == img) {

                    if (!$imagescale) {
                        $imagescale = $.eduiscale({'$wrap': me.$container}).css('zIndex', me.options.zIndex);
                        me.$container.append($imagescale);

                        var _keyDownHandler = function () {
                            $imagescale.edui().hide();
                        }, _mouseDownHandler = function (e) {
                            var ele = e.target || e.srcElement;
                            if (ele && ele.className.indexOf('edui-scale') == -1) {
                                _keyDownHandler(e);
                            }
                        }, timer;

                        $imagescale.edui()
                            .on('aftershow', function () {
                                $(document).bind('keydown', _keyDownHandler);
                                $(document).bind('mousedown', _mouseDownHandler);
                                me.selection.getNative().removeAllRanges();
                            })
                            .on('afterhide', function () {
                                $(document).unbind('keydown', _keyDownHandler);
                                $(document).unbind('mousedown', _mouseDownHandler);
                                var target = $imagescale.edui().getScaleTarget();
                                if (target.parentNode) {
                                    me.selection.getRange().selectNode(target).select();
                                }
                            })
                            .on('mousedown', function (e) {
                                me.selection.getNative().removeAllRanges();
                                var ele = e.target || e.srcElement;
                                if (ele && ele.className.indexOf('edui-scale-hand') == -1) {
                                    timer = setTimeout(function () {
                                        $imagescale.edui().hide();
                                    }, 200);
                                }
                            })
                            .on('mouseup', function (e) {
                                var ele = e.target || e.srcElement;
                                if (ele && ele.className.indexOf('edui-scale-hand') == -1) {
                                    clearTimeout(timer);
                                }
                            });
                    }
                    $imagescale.edui().show($(img));

                } else {
                    if ($imagescale && $imagescale.css('display') != 'none') $imagescale.edui().hide();

                }
            });

            me.addListener('click', function (type, e) {
                if (e.target.tagName == 'IMG') {
                    var range = new dom.Range(me.document, me.body);
                    range.selectNode(e.target).select();
                }
            });

        }
    });
    UM.registerUI('autofloat', function () {
        var me = this,
            lang = me.getLang();
        me.setOpt({
            autoFloatEnabled: true,
            topOffset: 0
        });
        var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
            topOffset = me.options.topOffset;


        //如果不固定toolbar的位置，则直接退出
        if (!optsAutoFloatEnabled) {
            return;
        }
        me.ready(function () {
            var LteIE6 = browser.ie && browser.version <= 6,
                quirks = browser.quirks;

            function checkHasUI () {
                if (!UM.ui) {
                    alert(lang.autofloatMsg);
                    return 0;
                }
                return 1;
            }

            function fixIE6FixedPos () {
                var docStyle = document.body.style;
                docStyle.backgroundImage = 'url("about:blank")';
                docStyle.backgroundAttachment = 'fixed';
            }

            var bakCssText,
                placeHolder = document.createElement('div'),
                toolbarBox, orgTop,
                getPosition = function (element) {
                    var bcr;
                    //trace  IE6下在控制编辑器显隐时可能会报错，catch一下
                    try {
                        bcr = element.getBoundingClientRect();
                    } catch (e) {
                        bcr = {left: 0, top: 0, height: 0, width: 0}
                    }
                    var rect = {
                        left: Math.round(bcr.left),
                        top: Math.round(bcr.top),
                        height: Math.round(bcr.bottom - bcr.top),
                        width: Math.round(bcr.right - bcr.left)
                    };
                    var doc;
                    while ((doc = element.ownerDocument) !== document &&
                    (element = domUtils.getWindow(doc).frameElement)) {
                        bcr = element.getBoundingClientRect();
                        rect.left += bcr.left;
                        rect.top += bcr.top;
                    }
                    rect.bottom = rect.top + rect.height;
                    rect.right = rect.left + rect.width;
                    return rect;
                };
            var isFullScreening = false;

            function setFloating () {
                if (isFullScreening) {
                    return;
                }
                var toobarBoxPos = domUtils.getXY(toolbarBox),
                    origalFloat = domUtils.getComputedStyle(toolbarBox, 'position'),
                    origalLeft = domUtils.getComputedStyle(toolbarBox, 'left');
                toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
                toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
                toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
                if (LteIE6 || (quirks && browser.ie)) {
                    if (toolbarBox.style.position != 'absolute') {
                        toolbarBox.style.position = 'absolute';
                    }
                    toolbarBox.style.top = (document.body.scrollTop || document.documentElement.scrollTop) - orgTop + topOffset + 'px';
                } else {
                    if (toolbarBox.style.position != 'fixed') {
                        toolbarBox.style.position = 'fixed';
                        toolbarBox.style.top = topOffset + "px";
                        ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                    }
                }
            }

            function unsetFloating () {

                if (placeHolder.parentNode) {
                    placeHolder.parentNode.removeChild(placeHolder);
                }
                toolbarBox.style.cssText = bakCssText;
            }

            function updateFloating () {
                var rect3 = getPosition(me.container);
                var offset = me.options.toolbarTopOffset || 0;
                if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > offset) {
                    setFloating();
                } else {
                    unsetFloating();
                }
            }

            var defer_updateFloating = utils.defer(function () {
                updateFloating();
            }, browser.ie ? 200 : 100, true);

            me.addListener('destroy', function () {
                $(window).off('scroll resize', updateFloating);
                me.removeListener('keydown', defer_updateFloating);
            });

            if (checkHasUI(me)) {
                toolbarBox = $('.edui-toolbar', me.container)[0];
                me.addListener("afteruiready", function () {
                    setTimeout(function () {
                        orgTop = $(toolbarBox).offset().top;
                    }, 100);
                });
                bakCssText = toolbarBox.style.cssText;
                placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                if (LteIE6) {
                    fixIE6FixedPos();
                }

                $(window).on('scroll resize', updateFloating);
                me.addListener('keydown', defer_updateFloating);
                me.addListener('resize', function () {
                    unsetFloating();
                    placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                    updateFloating();
                });

                me.addListener('beforefullscreenchange', function (t, enabled) {
                    if (enabled) {
                        unsetFloating();
                        isFullScreening = enabled;
                    }
                });
                me.addListener('fullscreenchanged', function (t, enabled) {
                    if (!enabled) {
                        updateFloating();
                    }
                    isFullScreening = enabled;
                });
                me.addListener('sourcemodechanged', function (t, enabled) {
                    setTimeout(function () {
                        updateFloating();
                    }, 0);
                });
                me.addListener("clearDoc", function () {
                    setTimeout(function () {
                        updateFloating();
                    }, 0);

                })
            }
        })


    });
    UM.registerUI('source', function (name) {
        var me = this;
        me.addListener('fullscreenchanged', function () {
            me.$container.find('textarea').width(me.$body.width() - 10).height(me.$body.height())

        });
        var $btn = $.eduibutton({
            icon: name,
            click: function () {
                me.execCommand(name);
                UM.setTopEditor(me);
            },
            title: this.getLang('labelMap')[name] || ''
        });

        this.addListener('selectionchange', function () {
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
        });
        return $btn;
    });

    UM.registerUI('paragraph fontfamily fontsize', function (name) {

        var me = this,
            label = (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
            options = {
                label: label,
                title: label,
                comboboxName: name,
                items: me.options[name] || [],
                itemStyles: [],
                value: [],
                autowidthitem: []
            },
            $combox = null,
            comboboxWidget = null;
        if (options.items.length == 0) {
            return null;
        }
        switch (name) {

            case 'paragraph':
                options = transForParagraph(options);
                break;

            case 'fontfamily':
                options = transForFontfamily(options);
                break;

            case 'fontsize':
                options = transForFontsize(options);
                break;

        }

        //实例化
        $combox = $.eduibuttoncombobox(options).css('zIndex', me.getOpt('zIndex') + 1);
        comboboxWidget = $combox.edui();

        comboboxWidget.on('comboboxselect', function (evt, res) {
            me.execCommand(name, res.value);
        }).on("beforeshow", function () {
            if ($combox.parent().length === 0) {
                $combox.appendTo(me.$container.find('.edui-dialog-container'));
            }
            UM.setTopEditor(me);
        });


        //状态反射
        this.addListener('selectionchange', function (evt) {

            var state = this.queryCommandState(name),
                value = this.queryCommandValue(name);

            //设置按钮状态
            comboboxWidget.button().edui().disabled(state == -1).active(state == 1);
            if (value) {
                //设置label
                value = value.replace(/['"]/g, '').toLowerCase().split(/['|"]?\s*,\s*[\1]?/);

                comboboxWidget.selectItemByLabel(value);
            }


        });

        return comboboxWidget.button().addClass('edui-combobox');

        /**
         * 宽度自适应工具函数
         * @param word 单词内容
         * @param hasSuffix 是否含有后缀
         */
        function wordCountAdaptive (word, hasSuffix) {

            var $tmpNode = $('<span>').html(word).css({
                    display: 'inline',
                    position: 'absolute',
                    top: -10000000,
                    left: -100000
                }).appendTo(document.body),
                width = $tmpNode.width();

            $tmpNode.remove();
            $tmpNode = null;

            if (width < 50) {

                return word;

            } else {

                word = word.slice(0, hasSuffix ? -4 : -1);

                if (!word.length) {
                    return '...';
                }

                return wordCountAdaptive(word + '...', true);

            }

        }


        //段落参数转换
        function transForParagraph (options) {

            var tempItems = [];

            for (var key in options.items) {

                options.value.push(key);
                tempItems.push(key);
                options.autowidthitem.push(wordCountAdaptive(key));

            }

            options.items = tempItems;
            options.autoRecord = false;

            return options;

        }

        //字体参数转换
        function transForFontfamily (options) {

            var temp = null,
                tempItems = [];

            for (var i = 0, len = options.items.length; i < len; i++) {

                temp = options.items[i].val;
                tempItems.push(temp.split(/\s*,\s*/)[0]);
                options.itemStyles.push('font-family: ' + temp);
                options.value.push(temp);
                options.autowidthitem.push(wordCountAdaptive(tempItems[i]));

            }

            options.items = tempItems;

            return options;

        }

        //字体大小参数转换
        function transForFontsize (options) {

            var temp = null,
                tempItems = [];

            options.itemStyles = [];
            options.value = [];

            for (var i = 0, len = options.items.length; i < len; i++) {

                temp = options.items[i];
                tempItems.push(temp);
                options.itemStyles.push('font-size: ' + temp + 'px');

            }

            options.value = options.items;
            options.items = tempItems;
            options.autoRecord = false;

            return options;

        }

    });


    UM.registerUI('forecolor backcolor', function (name) {
        function getCurrentColor () {
            return domUtils.getComputedStyle($colorLabel[0], 'background-color');
        }

        var me = this,
            $colorPickerWidget = null,
            $colorLabel = null,
            $btn = null;

        //querycommand
        this.addListener('selectionchange', function () {

            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1);

        });

        $btn = $.eduicolorsplitbutton({
            icon: name,
            caret: true,
            name: name,
            title: me.getLang("labelMap")[name],
            click: function () {
                me.execCommand(name, getCurrentColor());
            }
        });

        $colorLabel = $btn.edui().colorLabel();

        $colorPickerWidget = $.eduicolorpicker({
            name: name,
            lang_clearColor: me.getLang('clearColor') || '',
            lang_themeColor: me.getLang('themeColor') || '',
            lang_standardColor: me.getLang('standardColor') || ''
        })
            .on('pickcolor', function (evt, color) {
                window.setTimeout(function () {
                    $colorLabel.css("backgroundColor", color);
                    me.execCommand(name, color);
                }, 0);
            })
            .on('show', function () {
                UM.setActiveWidget(colorPickerWidget.root());
            }).css('zIndex', me.getOpt('zIndex') + 1);

        $btn.edui().on('arrowclick', function () {
            if (!$colorPickerWidget.parent().length) {
                me.$container.find('.edui-dialog-container').append($colorPickerWidget);
            }
            $colorPickerWidget.edui().show($btn, {
                caretDir: "down",
                offsetTop: -5,
                offsetLeft: 8,
                caretLeft: 11,
                caretTop: -8
            });
            UM.setTopEditor(me);
        }).register('click', $btn, function () {
            $colorPickerWidget.edui().hide()
        });

        return $btn;

    });

})(jQuery);
/**
 * 中文语言包
 */
UM.I18N['zh-cn'] = {
    'labelMap':{
        'anchor':'锚点', 'undo':'撤销', 'redo':'重做', 'bold':'加粗', 'indent':'首行缩进', 'snapscreen':'截图',
        'italic':'斜体', 'underline':'下划线', 'strikethrough':'删除线', 'subscript':'下标','fontborder':'字符边框',
        'superscript':'上标', 'formatmatch':'格式刷', 'source':'源代码', 'blockquote':'引用',
        'pasteplain':'纯文本粘贴模式', 'selectall':'全选', 'print':'打印', 'preview':'预览',
        'horizontal':'分隔线', 'removeformat':'清除格式', 'time':'时间', 'date':'日期',
        'unlink':'取消链接', 'insertrow':'前插入行', 'insertcol':'前插入列', 'mergeright':'右合并单元格', 'mergedown':'下合并单元格',
        'deleterow':'删除行', 'deletecol':'删除列', 'splittorows':'拆分成行', 'splittocols':'拆分成列', 'splittocells':'完全拆分单元格',
        'mergecells':'合并多个单元格', 'deletetable':'删除表格', 'cleardoc':'清空文档','insertparagraphbeforetable':"表格前插入行",'insertcode':'代码语言','fontfamily':'字体', 'fontsize':'字号', 'paragraph':'段落格式', 'image':'图片',
        'edittable':'表格属性','edittd':'单元格属性', 'link':'超链接','emotion':'表情', 'spechars':'特殊字符', 'searchreplace':'查询替换', 'map':'百度地图', 'gmap':'Google地图',
        'video':'视频', 'help':'帮助', 'justifyleft':'居左对齐', 'justifyright':'居右对齐', 'justifycenter':'居中对齐',
        'justifyjustify':'两端对齐', 'forecolor':'字体颜色', 'backcolor':'背景色', 'insertorderedlist':'有序列表',
        'insertunorderedlist':'无序列表', 'fullscreen':'全屏', 'directionalityltr':'从左向右输入', 'directionalityrtl':'从右向左输入',
        'rowspacingtop':'段前距', 'rowspacingbottom':'段后距', 'highlightcode':'插入代码', 'pagebreak':'分页', 'insertframe':'插入Iframe', 'imagenone':'默认',
        'imageleft':'左浮动', 'imageright':'右浮动', 'attachment':'附件', 'imagecenter':'居中', 'wordimage':'图片转存',
        'lineheight':'行间距','edittip' :'编辑提示','customstyle':'自定义标题', 'autotypeset':'自动排版', 'webapp':'百度应用',
        'touppercase':'字母大写', 'tolowercase':'字母小写','background':'背景','template':'模板','scrawl':'涂鸦','music':'音乐','inserttable':'插入表格',
        'drafts': '草稿箱', 'formula':'数学公式'


    },
    'paragraph':{'p':'段落', 'h1':'标题 1', 'h2':'标题 2', 'h3':'标题 3', 'h4':'标题 4', 'h5':'标题 5', 'h6':'标题 6'},
    'fontfamily':{
        'songti':'宋体',
        'kaiti':'楷体',
        'heiti':'黑体',
        'lishu':'隶书',
        'yahei':'微软雅黑',
        'andaleMono':'andale mono',
        'arial': 'arial',
        'arialBlack':'arial black',
        'comicSansMs':'comic sans ms',
        'impact':'impact',
        'timesNewRoman':'times new roman'
    },
    'ok':"确认",
    'cancel':"取消",
    'closeDialog':"关闭对话框",
    'tableDrag':"表格拖动必须引入uiUtils.js文件！",
    'autofloatMsg':"工具栏浮动依赖编辑器UI，您首先需要引入UI文件!",
    'anthorMsg':"链接",
    'clearColor':'清空颜色',
    'standardColor':'标准颜色',
    'themeColor':'主题颜色',
    'property':'属性',
    'default':'默认',
    'modify':'修改',
    'justifyleft':'左对齐',
    'justifyright':'右对齐',
    'justifycenter':'居中',
    'justify':'默认',
    'clear':'清除',
    'anchorMsg':'锚点',
    'delete':'删除',
    'clickToUpload':"点击上传",
    'unset':'尚未设置语言文件',
    't_row':'行',
    't_col':'列',
    'more':'更多',
    'pasteOpt':'粘贴选项',
    'pasteSourceFormat':"保留源格式",
    'tagFormat':'只保留标签',
    'pasteTextFormat':'只保留文本',

    //===============dialog i18N=======================
    'image':{
        'static':{
            'lang_tab_local':"本地上传",
            'lang_tab_imgSearch':"网络图片",
            'lang_input_dragTip':"支持图片拖拽上传",
            'lang_btn_add':"添加"
        },
        'uploadError': '上传出错'
    },
    'emotion':{
        'static':{
            'lang_input_choice':'精选',
            'lang_input_Tuzki':'兔斯基',
            'lang_input_BOBO':'BOBO',
            'lang_input_lvdouwa':'绿豆蛙',
            'lang_input_babyCat':'baby猫',
            'lang_input_bubble':'泡泡',
            'lang_input_youa':'有啊'
        }
    },
    'gmap':{
        'static':{
            'lang_input_address':'地址',
            'lang_input_search':'搜索',
            'address':{'value':"北京"}
        },
        'searchError':'无法定位到该地址!'
    },
    'link':{
        'static':{
            'lang_input_text':'文本内容：',
            'lang_input_url':'链接地址：',
            'lang_input_title':'标题：',
            'lang_input_target':'是否在新窗口打开：'
        },
        'validLink':'只支持选中一个链接时生效',
        'httpPrompt':'您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀'
    },
    'map':{
        'static':{
            'lang_city':"城市",
            'lang_address':"地址",
            'city':{'value':"北京"},
            'lang_search':"搜索",
            'lang_dynamicmap':"插入动态地图"
        },
        'cityMsg':"请选择城市",
        'errorMsg':"抱歉，找不到该位置！"
    },
    'video':{
        'static':{
            'lang_tab_insertV':"插入视频",
            'lang_video_url':"视频网址",
            'lang_video_size':"视频尺寸",
            'lang_videoW':"宽度",
            'lang_videoH':"高度",
            'lang_alignment':"对齐方式",
            'videoSearchTxt':{'value':"请输入搜索关键字！"},
            'videoType':{'options':["全部", "热门", "娱乐", "搞笑", "体育", "科技", "综艺"]},
            'videoSearchBtn':{'value':"百度一下"},
            'videoSearchReset':{'value':"清空结果"}
        },
        'numError':"请输入正确的数值，如123,400",
        'floatLeft':"左浮动",
        'floatRight':"右浮动",
        'default':"默认",
        'block':"独占一行",
        'urlError':"输入的视频地址有误，请检查后再试！",
        'loading':" &nbsp;视频加载中，请等待……",
        'clickToSelect':"点击选中",
        'goToSource':'访问源视频',
        'noVideo':" &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！"
    },
    'formula':{
        'static':{
            'lang_tab_common':'常用公式',
            'lang_tab_symbol':'符号',
            'lang_tab_letter':'字母'
        }
    }
};
/**
 * Build Date: 07-17-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
(function () {
/**
 * Build Date: 07-09-2016
 * Copyright (c): Naver China Co.,LTD
 * Author: nhn
 */
var LHSBasicPage = {
    el: '#main_panel',
    run: $.noop,
    reset: $.noop,
    events: {},
    initDependencies: function () {
        var self = this;

        this.$el = $(this.el);

        this.$ = function (selector) {
            return this.$el.find(selector);
        };

        $.each(this.events, function (name, handler) {
            var evtkey = name.split(/\s+/)[0];

            $(self.el).on(evtkey, $.trim(name.replace(evtkey, '')), function (evt) {
                self[handler].call(self, $(this), evt);
            });
        });

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

        bootbox.setDefaults({size: 'small', locale: 'zh_CN'});

        return this;
    },

    /**
     * Send request to given server path.
     * @param options { type, url, data/validator, done }
     * @returns {LHSBasicPage}
     */
    _sendRequest: function (options) {
        var self = this;

        if (options.validator && !(options.data = options.validator())) {
            return;
        }

        $.ajax({
            type: options.type,
            url: options.url,
            data: options.data,
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                self._showLoading();
            }
        }).then(function (rs) {
            if (rs.success) {
                options.done(rs.data);
            } else {
                self._showXHRMessage(rs.message, 'danger');
            }
        }).fail(function (xhr) {
            self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
        }).always(function () {
            self._removeLoading();
        });

        return this;
    },

    _showLoading: function () {

        return this;
    },
    _removeLoading: function () {

        return this;
    },

    _showXHRMessage: function (msg, type) {
        var pid = 'lhs' + type + 'panel';
        var panel = $('#' + pid);

        if (!panel.length) {
            panel = $('<div id="' + pid + '" class="alert alert-' + type + '" data-dismiss="alert">' +
                '<button type="button" class="close">' +
                '<span>&times;</span>' +
                '</button></div>').prependTo(this.$el);
            panel.alert();
            panel.on('closed.bs.alert', function () {
                panel.remove();
            });
        }

        panel.append($('<span></span>').text(err));

        return this;
    },

    _getFormControlValues: function (jqform) {
        var values = {};
        var value, name;

        $.each(jqform.serializeArray(), function () {
            name = this.name;
            value = values[name];

            if (!value) {
                values[name] = this.value;
            } else if ($.isArray(value)) {
                values[name].push(this.value);
            } else {
                values[name] = [value, this.value];
            }
        });

        return values;
    },
    _clearFormControlValues: function (jqform) {
        $.each(jqform.serializeArray(), function () {
            $('[name="' + this.name + '"]', jqform).each(function (elem) {
                elem = $(this);

                if (elem.is('input[type="text"]') || elem.is('input[type="password"]') || elem.is('textarea')) {
                    elem.val('');
                } else if (elem.is('input[type="checkbox"]')) {
                    elem.removeAttr('checked');
                } else if (elem.is('input[type="radio"]')) {
                    if (0 == index) {
                        elem.attr('checked', 'checked');
                    } else {
                        elem.removeAttr('checked');
                    }
                } else if (elem.is('select')) {
                    elem
                        .children('option:eq(0)').attr('selected', 'selected')
                        .siblings().removeAttr('selected');
                }
            });
        });

        return this;
    },
    _setFormControlValues: function (jqform, values) {
        $.each(values, function (name, val) {
            $('[name="' + name + '"]', jqform).each(function (jqElem) {
                jqElem = $(this);

                if (jqElem.is('input[type="radio"]')) {
                    jqElem.find('[value="' + val + '"]').attr('checked', 'checked');
                } else if (jqElem.is('input[type="checkbox"]')) {
                    $.each(val, function (i, v) {
                        jqElem.find('[value="' + v + '"]').attr('checked', 'checked');
                    });
                } else {
                    jqElem.val(val);
                }
            });
        });

        return this;
    }
};
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAlertPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-alert-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="pull-right"> <button id="btnAdd" class="btn btn-sm btn-default">新增</button> <button id="btnDel" class="btn btn-sm btn-default">清除预警</button></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="alertModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">舆情预警</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button> <button type="button" class="btn btn-primary">保存</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">预警标题：</label><div class="col-sm-10"> <input type="text" name="id" class="form-control hide"> <input type="text" name="title" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">涉舆部门：</label><div class="col-sm-4"> <input type="text" name="department" class="form-control"></div> <label class="col-sm-2 control-label">预警人：</label><div class="col-sm-4"> <input type="text" name="sender" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">预警方式：</label><div class="col-sm-4"> <input type="text" name="type" class="form-control"></div> <label class="col-sm-2 control-label">接警人：</label><div class="col-sm-4"> <input type="text" name="receiver" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">预警开始时间：</label><div class="col-sm-4"> <input type="text" name="starttime" class="form-control" id="startTimepicker"></div> <label class="col-sm-2 control-label">预警结束时间：</label><div class="col-sm-4"> <input type="text" name="endtime" class="form-control" id="endTimepicker"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">预警内容：</label><div class="col-sm-10"><textarea name="content" class="form-control" rows="5"></textarea></div></div><script type="text/javascript"> $(function () { $("#startTimepicker").datetimepicker(); $("#endTimepicker").datetimepicker({ useCurrent: false }); $("#startTimepicker").on("dp.change", function (e) { $("#endTimepicker").data("DateTimePicker").minDate(e.date); }); $("#endTimepicker").on("dp.change", function (e) { $("#startTimepicker").data("DateTimePicker").maxDate(e.date); }); });');}return __;};

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showAlertModal',
        'click #btnDel': 'clearSelected',
        'click #alertModal .btn-default': 'closeModal',
        'click #alertModal .btn-primary': 'saveAlert'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/alert/list',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRError('请求失败:' + xhr.responseText);
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '预警标题',
                    field: 'title'
                }, {
                    title: '预警方式',
                    field: 'type'
                }, {
                    title: '涉舆部门',
                    field: 'department'
                }, {
                    title: '预警人',
                    field: 'sender'
                }, {
                    title: '接警人',
                    field: 'receiver'
                }, {
                    title: '预警开始时间',
                    field: 'starttime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '预警结束时间',
                    field: 'endtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '有效预警';
                            default:
                                return '预警结束';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="清除预警">' +
                            '<i class="glyphicon glyphicon-remove"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showAlertModal(arguments[2]);
                        },
                        'click a:last': function () {
                            var uid = arguments[2].id;

                            bootbox.confirm('确认清除预警？', function (rs) {
                                rs && self._ajaxDelete(uid, function () {
                                    self._refreshTable();
                                });
                            });
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'type', 'department', 'sender', 'receiver', 'starttime', 'endtime', 'state', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(["checkbox", "type", "department", "sender", "receiver", "starttime", "endtime", "state", "action"])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _showAlertModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#alertModal form';
                var type = rs;
                self._setFormControlValues(jqform, pubvoice);

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    showAlertModal: function () {
        $('#alertModal').removeClass('hide').siblings().addClass('hide');
        this._clearFormControlValues($('#alertModal form'));

        this._shrinkTable()
            ._showGridWrapper();

    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/feedback/detail',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRError('请求失败:' + xhr.responseText);
            }
        }
    },
    closeModal: function () {
        var self = this;
        this._expandTable()
            ._hideGridWrapper();
    },
    saveAlert: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/alert/save',
            validator: $.proxy(this._alertValidator, this),
            done: function () {
                self._refreshTable().closeModal();
            }
        });
    },
    _alertValidator: function () {
        var jqform = $('#alertModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/alert/clear',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    clearSelected: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定清除？', function (rs) {
                rs && self._ajaxDelete(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要清除的预警');

        return this;
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyCreatePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-dailycreate-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="pull-right"> <button id="btnAdd" class="btn btn-sm btn-default">生成日报</button></div></div></div><div id="pubVoiceWrapper" class="row"><div class="col-md-12 "><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="dataModal" class="modal-content"><div id="dailyModal" class="modal-header"><label><h4 class="modal-title">日报详情</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button> <button type="button" class="btn btn-primary">保存</button></div></div><div id="detailModal" class="modal-header hide"><label><h4 class="modal-title">舆情详情</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button></div></div><div id="contentModal" class="modal-body"><form class="form-horizontal"><div id="issueModal" class="form-group form-group-sm hide"> <label class="col-sm-2 control-label">总期数：</label><div class="col-sm-4"> <input type="text" name="total_id" class="form-control"></div> <label class="col-sm-2 control-label">当季期数：</label><div class="col-sm-4"> <input type="text" name="issue_id" class="form-control"></div></div><div class="form-group form-group-sm"><div class="col-sm-12"><script type="text/plain" id="dailyCreateUE">');}return __;};

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('dailyCreateUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #detailModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveDataModal',
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/daily/unapplied',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-eye-open"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDetailModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#pubVoiceWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#pubVoiceWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/daily/detail',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDataModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    showDataModal: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv);
        });

        $('#detailModal').addClass('hide');
        $('#dailyModal').removeClass('hide');
        $('#issueModal').removeClass('hide');

        mids.length ?
            self.genDaily(mids):
            bootbox.alert('请先选择要编报的舆情');
        return this;
    },
    genDaily: function(pubvoices) {
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/daily/template',
            done: function (rs) {
                var template = rs.template;
                var total_id = 0,
                    issue_id = 0;
                if (rs.issue.length) {
                    total_id = rs.issue[0].id + 1;
                    issue_id = rs.issue[0].issue_id + 1;
                }
                var daily = self.buildDaily(template, total_id, issue_id, pubvoices);
                self.editor.setContent(daily);
                self.editor.setEnabled();

                self._setFormControlValues('#contentModal form',
                    {'total_id':total_id, 'issue_id':issue_id});

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });
        return this;
    },
    buildDaily: function (template, total_id, issue_id, pubvoices) {
        var daily = template;
        daily = daily.replace('%issue_id%', issue_id);
        daily = daily.replace('%id%', total_id);
        daily = daily.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
        var zmyq_title = '', zmyq_content = '',
            fmyq_title = '', fmyq_content = '',
            yqzz_title = '', yqzz_content = '',
            rdht_title = '', rdht_content = ''
        for(idx in pubvoices) {
            var pv = pubvoices[idx];
            var title = '<p><span style="font-size:20px;font-family:仿宋_GB2312">※ ' + pv.title + '</span></p>';
            var content = pv.content;
            if (pv.item == '正面舆情') {
                zmyq_title += title;
                zmyq_content += content;
            } else if (pv.item == '负面舆情') {
                fmyq_title += title;
                fmyq_content += content;
            } else if (pv.item == '舆情追踪') {
                yqzz_title += title;
                yqzz_content += content;
            } else if (pv.item == '热点话题') {
                rdht_title += title;
                rdht_content += content;
            }
        }
        daily = daily.replace('%zmyq_title%', zmyq_title);
        daily = daily.replace('%fmyq_title%', fmyq_title);
        daily = daily.replace('%yqzz_title%', yqzz_title);
        daily = daily.replace('%rdht_title%', rdht_title);
        daily = daily.replace('%zmyq_content%', zmyq_content);
        daily = daily.replace('%fmyq_content%', fmyq_content);
        daily = daily.replace('%yqzz_content%', yqzz_content);
        daily = daily.replace('%rdht_content%', rdht_content);
        return daily;
    },
    showDetailModal: function (pubvoice) {
        this.editor.setContent(pubvoice.content == null? '':pubvoice.content);
        this.editor.setDisabled();
        $('#detailModal').removeClass('hide');
        $('#dailyModal').addClass('hide');
        $('#issueModal').addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
        return this;
    },
    saveDataModal: function () {
        var values= {'content': this.editor.getContent()};
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-dailyreport-page"><div id="dailyReportWrapper" class="row"><div class="col-md-12 "><table id="dailyReportTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="dailyDetailModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">日报详情</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"><div class="col-sm-12"><script type="text/plain" id="dailyDetailUE" name="content">');}return __;};
        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('dailyDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #dailyDetailModal .btn-default': 'closeDailyDetailModal',
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dailyReportTable) {
            (this.dailyReportTable = $('#dailyReportTable')).bootstrapTable({
                method: 'get',
                url: '/daily/list',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '总期数',
                    field: 'id'
                }, {
                    title: '当季期数',
                    field: 'issue_id'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDailyDetailModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dailyReportTable.bootstrapTable('refresh');

        return this;
    },
    showDailyDetailModal: function (arguments) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/daily/detail',
            data: {'id' : arguments.id},
            done: function (rs) {
                var jqform = '#dailyDetailModal form';

                $('input[name="content"]', jqform).prop('readonly', true);
                self._setFormControlValues(jqform, arguments);
                self.editor.setContent(rs[0]['content']);

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox',  'createtime', 'action'])
            .each(function (index, field) {
                self.dailyReportTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'id', 'issue_id', 'createtime', 'action'])
            .each(function (index, field) {
                self.dailyReportTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#dailyReportWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#dailyReportWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/daily/detail',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDailyDetailModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDisposePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-dispose-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="input-group"> <input type="text" placeholder="请输入日报期号" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="disposeDetailModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">处置详情</h4></label><div class="pull-right"> <button type="button" class="btn btn-info">导出</button> <button type="button" class="btn btn-default">关闭</button> <button type="button" class="btn btn-primary">保存</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <input type="text" name="id" class="form-control hide"><div class="col-sm-12"><script type="text/plain" id="disposeDetailUE" name="content">');}return __;};

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('disposeDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #disposeDetailModal .btn-default': 'closeDisposeModal',
        'click #disposeDetailModal .btn-primary': 'saveDispose'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/dispose/list',
                queryParams: function (p) {
                    return { 'id': 10 };
                },
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="处置">' +
                            '<i class="glyphicon glyphicon-comment"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="通报">' +
                            '<i class="glyphicon glyphicon-bullhorn"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showDisposeModal(arguments[2]);
                        },
                        'click a:last': function () {
                            self._showNotifyModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _showDisposeModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/dispose/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#disposeDetailModal form';

                self._setFormControlValues(jqform, pubvoice);
                if (rs[0]['state'] == -1) {
                    self.editor.setContent(rs[0]['content'] + pubvoice.content);
                } else {
                    self.editor.setContent(rs[0]['content']);
                }
                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/dispose/list',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDisposeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveDispose: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/dispose/save',
            validator: $.proxy(this._disposeValidator, this),
            done: function () {
                self._refreshTable().closeDisposeModal();
            }
        });
    },
    _disposeValidator: function () {
        var jqform = $('#disposeDetailModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSExamineAndApprovePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-approve-page"><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="approveModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">舆情审批</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">取消</button> <button type="button" class="btn btn-primary">确定</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">审批结果：</label><div class="col-sm-2"> <select name="approveResult" class="form-control"><option value="0" selected="selected">通过</option><option value="1">未通过</option><option value="2">暂缓通过</option></select></div> <input type="text" name="id" class="form-control hide"> <label class="col-sm-2 control-label">审批意见：</label><div class="col-sm-6"> <input type="text" name="approveContent" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情网址：</label><div class="col-sm-10"> <input type="text" name="url" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情标题：</label><div class="col-sm-4"> <input type="text" name="title" class="form-control"></div> <label class="col-sm-2 control-label">舆情载体：</label><div class="col-sm-4"> <input type="text" name="from_website" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">涉及部门：</label><div class="col-sm-4"> <input type="text" name="relate_department" class="form-control"></div> <label class="col-sm-2 control-label">舆情类别：</label><div class="col-sm-4"> <input type="text" name="type" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">关注人数：</label><div class="col-sm-4"> <input type="text" name="review_count" class="form-control"></div> <label class="col-sm-2 control-label">回帖数量：</label><div class="col-sm-4"> <input type="text" name="fellow_count" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">考核部门：</label><div class="col-sm-4"> <input type="text" name="duty_department" class="form-control"></div> <label class="col-sm-2 control-label">所属栏目：</label><div class="col-sm-4"> <input type="text" name="item" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情详情：</label><div class="col-sm-10"><script type="text/plain" id="approvedUE">');}return __;};

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.editor = UM.getEditor('approvedUE');

        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #approveModal .btn-default': 'closeApproveModal',
        'click #approveModal .btn-primary': 'saveApprobation'
    },

    closeApproveModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveApprobation: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/application/save',
            validator: $.proxy(this._approvedValidator, this),
            done: function () {
                self._refreshTable().closeApproveModal();
            }
        });
    },

    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/application/list',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [
                {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '内容',
                    field: 'content',
                    visible: false
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="审批">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showApproveModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _showApproveModal: function (pubvoice) {
        var jqform = '#approveModal form';

        $(['url', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count',
            'relate_department', 'duty_department'])
            .each(function (index, field) {
                $('input[name="' + field + '"]', jqform).prop('readonly', true);
            });
        this._setFormControlValues(jqform, pubvoice);
        if (pubvoice.content == null) {
            pubvoice.content = '';
        }
        this.editor.setContent(pubvoice.content);
        this._shrinkTable()
            ._showGridWrapper();

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/application/list',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _approvedValidator: function () {
        var jqform = $('#approveModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSFeedbackPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-feedback-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="input-group"> <input type="text" placeholder="请输入日报期号" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="feedbackModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">舆情反馈</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button> <button type="button" class="btn btn-primary">保存</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <input type="text" name="id" class="form-control hide"> <label class="col-sm-2 control-label">反馈类型：</label><div class="col-sm-2"> <select id="feedbackType" name="type" class="form-control"><option value="0" selected="selected">书面反馈</option><option value="1">网络反馈</option></select></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">反馈内容：</label><div class="col-sm-10"><script type="text/plain" id="feedbackUE" name="content">');}return __;};

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('feedbackUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #feedbackModal .btn-default': 'closeModal',
        'click #feedbackModal .btn-primary': 'saveFeedback',
        'change #feedbackType': 'changeFeedbackType'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/dispose/list',
                queryParams: function (p) {
                    return { 'id': 10 };
                },
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRError('请求失败:' + xhr.responseText);
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="反馈">' +
                            '<i class="glyphicon glyphicon-share-alt"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showFeedbackModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _showFeedbackModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#feedbackModal form';
                if (rs.length > 0) {
                    self._setFormControlValues(jqform, {'id': pubvoice.id, 'type': rs[0].type});
                    self.editor.setContent(rs[0].content);
                } else {
                    self._setFormControlValues(jqform, {'id': pubvoice.id})
                    self.editor.setContent('');
                }

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/feedback/detail',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRError('请求失败:' + xhr.responseText);
            }
        }
    },
    closeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },    
    saveFeedback: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/feedback/save',
            validator: $.proxy(this._feedbackValidator, this),
            done: function () {
                self._refreshTable().closeModal();
            }
        });
    },
    _feedbackValidator: function () {
        var jqform = $('#feedbackModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    },
    changeFeedbackType: function () {
        var self = this;
        var jqform = $('#feedbackModal form');
        var values = this._getFormControlValues(jqform);
        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {'id': values.id, 'type': values.type},
            done: function (rs) {
                var jqform = '#feedbackModal form';
                if (rs.length > 0) {
                    self._setFormControlValues(jqform, {'id': values.id, 'type': rs[0].type});
                    self.editor.setContent(rs[0].content);
                } else {
                    self._setFormControlValues(jqform, {'id': values.id})
                    self.editor.setContent('');
                }
            }
        });
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSGuidePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-guide-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="input-group"> <input type="text" placeholder="请输入日报期号" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="guideModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">舆情引导</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button> <button type="button" class="btn btn-primary">保存</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <input type="text" name="id" class="form-control hide"> <label class="col-sm-2 control-label">网评员：</label><div class="col-sm-4"> <input type="text" name="guide_name" class="form-control"></div> <label class="col-sm-2 control-label">引导方式：</label><div class="col-sm-4"> <input type="text" name="guide_type" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">引导效果：</label><div class="col-sm-4"> <input type="text" name="guide_result" class="form-control"></div> <label class="col-sm-2 control-label">引导次数：</label><div class="col-sm-4"> <input type="text" name="guide_count" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">引导内容：</label><div class="col-sm-10"><script type="text/plain" id="guideUE" name="content">');}return __;};

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('guideUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #guideModal .btn-default': 'closeGuideModal',
        'click #guideModal .btn-primary': 'saveGuide'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/dispose/list',
                queryParams: function (p) {
                    return { 'id': 10 };
                },
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRError('请求失败:' + xhr.responseText);
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'guide_state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未引导';
                            case 1:
                                return '已引导';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="引导">' +
                            '<i class="glyphicon glyphicon-tag"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showGuideModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _showGuideModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/guide/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#guideModal form';

                if (rs.length == 1) {
                    self._setFormControlValues(jqform, rs[0]);
                    self.editor.setContent(rs[0].content);
                } else {
                    self._clearFormControlValues($(jqform));
                    self._setFormControlValues(jqform, {'id':pubvoice.id});
                    self.editor.setContent('');
                }

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/dispose/list',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRError('请求失败:' + xhr.responseText);
            }
        }
    },
    closeGuideModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveGuide: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/guide/save',
            validator: $.proxy(this._guideValidator, this),
            done: function () {
                self._refreshTable().closeGuideModal();
            }
        });
    },
    _guideValidator: function () {
        var jqform = $('#guideModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSNotifyPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-notify-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="pull-right"> <button id="btnAdd" class="btn btn-sm btn-default">通报</button></div><div class="input-group"> <input type="text" placeholder="请输入日报期号" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="pvDetailModal" class="modal-content"><div class="modal-header"><label><h4 class="modal-title">舆情详情</h4></label><div class="pull-right"> <button type="button" class="btn btn-default">关闭</button></div></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"><div class="col-sm-10"><script type="text/plain" id="pvDetailUE">');}return __;};

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('pvDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #pvDetailModal .btn-default': 'closeModal',
        'click #btnAdd': 'showNotifyModal'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/notify/list',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRError('请求失败:' + xhr.responseText);
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '舆情详情',
                    field: 'content',
                    visible: false
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="详情">' +
                            '<i class="glyphicon glyphicon-eye-open"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showPVModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'content', 'state', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'relate_department', 'fellow_count', 'createtime', 'state', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _showPVModal: function (pubvoice) {
        var self = this;
        this.editor.setContent(pubvoice.content == null ? '' : pubvoice.content);
        this.editor.setDisabled();
        $('#pvDetailModal').removeClass('hide');
        $('#notifyModal').addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
    },
    showNotifyModal: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定通报？', function (rs) {
                rs && self._showNotifyModal(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要通报的舆情');
    },
    _showNotifyModal: function (pvids) {
        var modal = $('#notifyModal').removeClass('hide');
        var self = this;

        modal.siblings().addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
    },
    closeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    _saveNotify: function (ids, done) {
        this._sendRequest({
            type: 'post', url: '/notify/save',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _notifyValidator: function () {
        var jqform = $('#disposeDetailModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/notify/list',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    }
});
/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var jqtmpl =function (jQuery,$item/**/) {var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="pubvoice-record-page"><div class="row func-btns"><div class="col-md-6 col-xs-offset-6"><div class="pull-right"> <button id="btnAdd" class="btn btn-sm btn-default">新增</button> <button id="btnImport" class="btn btn-sm btn-default">导入</button> <button id="btnDel" class="btn btn-sm btn-default">删除</button> <button id="btnCommit" class="btn btn-sm btn-default">提交审批</button></div></div></div><div id="gridWrapper" class="row"><div class="col-md-12"><table id="dataTable" class="table table-striped table-hover table-condensed"></table></div><div class="col-xs-10 no-padding-left hide"><div id="dataModal" class="modal-content"><div class="modal-header"><h4 class="modal-title">舆情录入</h4></div><div class="modal-body"><form class="form-horizontal"> <input type="text" name="id" class="form-control hide"><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情网址：</label><div class="col-sm-10"> <input type="text" name="url" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情标题：</label><div class="col-sm-4"> <input type="text" name="title" class="form-control"></div> <label class="col-sm-2 control-label">舆情载体：</label><div class="col-sm-4"> <input type="text" name="from_website" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">涉及部门：</label><div class="col-sm-4"> <input type="text" name="relate_department" class="form-control"></div> <label class="col-sm-2 control-label">舆情类别：</label><div class="col-sm-4"> <select name="type" class="form-control"><option value="作风效能">作风效能</option><optgroup label="行业管理"><option value="劳动人事">劳动人事</option><option value="公共安全">公共安全</option><option value="医卫食安">医卫食安</option><option value="教育">教育</option><option value="环保">环保</option><option value="交通">交通</option><option value="城建">城建</option><option value="房产">房产</option><option value="征地">征地</option><option value="其他">其他</option></optgroup><option value="其他类">其他类</option></select></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">关注人数：</label><div class="col-sm-4"> <input type="text" name="review_count" class="form-control"></div> <label class="col-sm-2 control-label">回帖数量：</label><div class="col-sm-4"> <input type="text" name="fellow_count" class="form-control"></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">考核部门：</label><div class="col-sm-4"> <select name="duty_department" class="form-control"></select></div> <label class="col-sm-2 control-label">所属栏目：</label><div class="col-sm-4"> <select name="item" class="form-control"><option value="正面舆情">正面舆情</option><option value="负面舆情">负面舆情</option><option value="舆情追踪">舆情追踪</option><option value="热点话题">热点话题</option></select></div></div><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">舆情详情：</label><div class="col-sm-10" id="editorWrapper" name="content"></div></div></form></div><div class="modal-footer"> <button type="button" class="btn btn-default">取消</button> <button type="button" class="btn btn-primary">保存</button></div></div><div id="importModal" class="modal-content hide"><div class="modal-header"><h4 class="modal-title">舆情导入</h4></div><div class="modal-body"><form class="form-horizontal"><div class="form-group form-group-sm"> <label class="col-sm-2 control-label">文件路径：</label><div class="col-sm-9"> <input type="file" name="datafile" class="form-control"></div></div></form></div><div class="modal-footer"> <a href="sample/publicvoice.xlsx" class="pull-left">模板下载</a> <button type="button" class="btn btn-default" data-dismiss="modal">取消</button></div></div></div></div></div>');}return __;};

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.reset()
            .initDependencies()
            ._drawDataTable();
    },
    reset: function () {
        this.dataTable = null;
        this.editor = null;

        return this;
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #btnCommit': 'applyApprobation',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'savePubVoice',
        'click #importModal .btn-default': 'closeImportModal'
    },
    showDataModal: function (pubvoice) {
        var self = this;
        this._appendEditor()
            ._sendRequest({
                type: 'get',
                url: '/sysmanage/groups',
                done: function (rs) {
                    var jqform = '#dataModal form';
                    var jqSelect = $('select[name="duty_department"]', jqform);

                    $('#dataModal').removeClass('hide').siblings().addClass('hide');

                    jqSelect.find('option:gt(0)').remove();

                    $.each(rs, function (n, gp) {
                        jqSelect.append($('<option></option>')
                            .attr('value', gp.id)
                            .text(gp.name));
                    });

                    if (pubvoice.id) {
                        $('input[name="url"]', jqform).prop('readonly', true);

                        self._setFormControlValues(jqform, pubvoice);
                        if (pubvoice.content == null) {
                            pubvoice.content = '';
                        }
                        self.editor.setContent(pubvoice.content);
                    } else {
                        $('input[name="url"]', jqform).prop('readonly', false);
                        self.editor.ready(function () {
                            self.editor.setContent('');
                         });
                    }

                    self._shrinkTable()
                        ._showGridWrapper();
                }
            });
        return this;
    },
    showImportModal: function () {
        var modal = $('#importModal').removeClass('hide');
        var self = this;

        modal.siblings().addClass('hide');
        modal.find('input[type="file"]').ajaxfileupload({
            action: '/datafile',
            onStart: function () {
                self._showLoading();
            },
            onCancel: function () {
                self._removeLoading();
            },
            onComplete: function () {
                self._removeLoading().closeImportModal();
                self._showXHRMessage('上传成功。', 'info');
            }
        });

        this._shrinkTable()
            ._showGridWrapper();
    },
    applyApprobation: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._ajaxApply(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要提交的舆情');

        return this;
    },
    closeDataModal: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime',
            'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        this._clearFormControlValues($('#dataModal form'))
            .$('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');
    },
    savePubVoice: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/pubvoice/save',
            validator: $.proxy(this._pvValidator, this),
            done: function () {
                self._refreshTable().closeDataModal();
            }
        });
    },
    delSelected: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要删除的舆情');

        return this;
    },
    closeImportModal: function () {
        this._hideGridWrapper()
            ._expandTable()
            .$('#importModal input')
            .val('');
    },

    _appendEditor: function () {
        if (!this.editor) {
            $('#editorWrapper')
                .append('<script type="text/plain" id="lhsRecordUE" style="width:100%;height:300px;"></script>')
                .width(function () {
                    return $(this).parent().width;
                });

            this.editor = UM.getEditor('lhsRecordUE');
        }

        return this;
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/pubvoice/list',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                            case 3:
                                return '审批未通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除">' +
                            '<i class="glyphicon glyphicon-trash"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDataModal(arguments[2]);
                        },
                        'click a:last': function () {
                            var uid = arguments[2].id;

                            bootbox.confirm('确认删除？', function (rs) {
                                rs && self._ajaxDelete(uid, function () {
                                    self._refreshTable();
                                });
                            });
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/pubvoice/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _ajaxApply: function (ids, done) {
        this._sendRequest({
            type: 'post', url: '/pubvoice/apply',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _pvValidator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);
        values['content'] = this.editor.getContent();

        return values;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/pubvoice/list',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    }
});

    $('body').ready(function () {
        $('#lhs_aside_menu > li').bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'record':
                    return LHSRecordPage.run();
                case 'examine&approve':
                    return LHSExamineAndApprovePage.run();
                case 'dailyreport':
                    return LHSDailyReportPage.run();
                case 'dailycreate':
                    return LHSDailyCreatePage.run();
                case 'dispose':
                    return LHSDisposePage.run();
                case 'notify':
                    return LHSNotifyPage.run();
                case 'feedback':
                    return LHSFeedbackPage.run();
                case 'guide':
                    return LHSGuidePage.run();
                case 'analyze':
                    return LHSAnalyzePage.run();
                case 'alert':
                    return LHSAlertPage.run();
            }
        });

        LHSRecordPage.run();
    });
})();