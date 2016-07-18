# jqtmpl-compiler

**Compile jQuery templates**


## Installation

<code>npm install -save jqtmpl-compiler</code>


## Usage

```js

    var Compiler = require('jqtmpl-compiler');
    var compiler = new Compiler({ /* options */});
```

### Compile a single template
Given a string that is a valid jQuery template

```js
    var template = compiler.compile(templateString);
```

### Compile templates found in an HTML document
Given a string containing HTML, you can extract and compile templates from all of the <code>&lt;script&gt;</code> tags found in the document.

```js
    var templates = compiler.extractScripts(htmlString);
```


## API

### new Compiler([&lt;object&gt; opts])

Creates a new instance of the compiler with the optional opts object.  

### compile(&lt;string&gt; source, [&lt;object&gt; opts])

Compiles the given source into a template and returns the template function.  The optional <code>opts</code> parameter can be used to override the options passed into the constructor.

### extractScripts(&lt;string&gt; html, [&lt;object&gt; opts])

Extracts and compiles templates found in script tags in the given HTML string.  The optional <code>opts</code> parameter can be used to override the options passed into the constructor.  This function returns an array of objects with the following properties:

* <code>name</code>: the name of the template
* <code>template</code>: the compiled template function


## Options

* <code>cleanSource</code> [boolean] - When true, the template source will be cleaned using [htmlclean](https://github.com/anseki/htmlclean). Default is <code>true</code>.

* <code>scriptFilter</code> [function(object): boolean] - Filters out non-template scripts when extracting templates from HTML.  This function takes an object that represents the script element and returns true or false if the script is a template.  By default, the function examines the script's type attribute and returns true if it is present, non-empty and not equal to "text/javascript".  If this is not a function, no filtering will take place.

* <code>nameResolver</code> [function(object): string] - Resolves the name of the template when extracting templates from HTML.  This function takes an object representing the script element and returns a string that will be the template's name.  By default the function returns the script's id attribute.  If this is not a function or it returns a falsey value, a generic name will be provided.

* <code>nestedResolver</code> [function(string): string] - Takes the name of a nested template and resolves it to a new name or reference.  Use this function to replace selectors with a reference to the compiled template.  By default, this function will return <code>"exports['<name>']"</code> as it assumes you will be compiling all your templates into a single module.  Returning falsey values will be the same as returning the original name, all other values will be converted to a string.

* <code>preProcess</code> [function(string): string] - This function provides a chance to process the template source.  It takes a string containing the template source and must return a string containing the the desired template source. By default no pre-processing is performed.  If this is not a function, no pre-processing will be performed.  If this function returns anything other than a string, an error will be thrown.

* <code>postProcess</code> [function(function): function] - This function provides a chance to process the compiled template function.  It takes a the compiled template and must return a function that is the final template.  By default no post-processing is done.  If this if not a function, no post-processing will be performed.  If this function returns anything other and a string, an error will be thrown.


## License

**jqtmpl-compiler** is Copyright (c) 2015 Ryan Turnquist and licensed under the [MIT license](http://opensource.org/licenses/MIT). All rights not explicitly granted in the MIT license are reserved.
