var Compiler = require('../index');
var $ = require('cheerio');

describe('Compiler', () => {
    const compiler = new Compiler();

    describe('_clean ', () => {
        const clean = compiler._clean;
        const source = 'abc';

        it('should return the result of the given function when provided', () => {
            expect(clean((s) => 'xyz', source)).toEqual('xyz');
        });

        it('should pass the source to the given function as the first parameter', () => {
            clean((s) => {
                expect(s).toBe(source);
                return s;
            }, source);
        });

        it('should return the source when no function is provided', () => {
            expect(clean(null, source)).toEqual('abc');
        });

        it('should throw an error when the source is not a string', () => {
            expect(() => clean((s) => 'xyz', null)).toThrowError(TypeError);
        });

        it('should throw an error when the provided function does not return a string', () => {
            expect(() => clean((s) => null, source)).toThrowError(TypeError);
        });
    });

    describe('_filterScripts', () => {
        const filterScripts = compiler._filterScripts;
        const scripts = [1,2,3];

        it('should apply the given function as an array filter when provided', () => {
            expect(filterScripts((script) => script < 3, scripts)).toEqual([1,2]);
        });

        it('should return the original scripts array when no function is provided', () => {
            expect(filterScripts(null, scripts)).toBe(scripts);
        });

        it('should throw an error when scripts is not an Array', () => {
            expect(() => filterScripts((script) => true, null)).toThrowError(TypeError);
        });

        describe('default filter', () => {
            const filter = Compiler.defaults.scriptFilter;

            it('should exclude scripts without a type attribute', () => {
                expect(filter($('<script></script>'))).toBe(false);
                expect(filter($('<script type=""></script>'))).toBe(false);
            });

            it('should exclude scripts with a type "text/javascript"', () => {
                expect(filter($('<script type="text/javascript"></script>'))).toBe(false);
            });

            it('should include scripts with type text/"x-jquery-tmpl"', () => {
                expect(filter($('<script type="text/x-jquery-tmpl"></script>'))).toBe(true);
            });

            it('should include scripts with other type attributes', () => {
                expect(filter($('<script type="text/template"></script>'))).toBe(true);
                expect(filter($('<script type="garbage"></script>'))).toBe(true);
            });
        });
    });

    describe('_postProcess', () => {
        const postProcess = compiler._postProcess;
        const oldTemplate = () => {};
        const newTemplate = () => {};

        it('should return the result of the given function when provided', () => {
            expect(postProcess((template) => newTemplate, oldTemplate)).toBe(newTemplate);
        });

        it('should return the original template when no function is provided', () => {
            expect(postProcess(null, oldTemplate)).toBe(oldTemplate);
        });

        it('should throw an error when the template is not a function', () => {
            expect(() => postProcess((template) => newTemplate, null)).toThrowError(TypeError);
        });

        it('should throw an error when the provided function does not return a function', () => {
            expect(() => postProcess((template) => null, oldTemplate)).toThrowError(TypeError);
        });

        describe('default preProcess', () => {
            const postProcess = Compiler.defaults.postProcess;

            it('should override the toString method of the template function', () => {
                const template = function anonymous(a,b,c) { return 1; };
                const originalToString = template.toString;
                const processed = postProcess(template)

                expect(processed).toBe(template);
                expect(processed.toString).not.toEqual(originalToString);
                expect(processed.toString()).toEqual('function (a,b,c) { return 1; }');
            });
        });
    });

    describe('_preProcess', () => {
        const preProcess = compiler._preProcess;
        const source = 'abc';

        it('should return the result of the given function when provided', () => {
            expect(preProcess((s) => 'xyz', source)).toEqual('xyz');
        });

        it('should pass the source to the given function as the first parameter', () => {
            preProcess((s) => {
                expect(s).toBe(source);
                return s;
            }, source);
        });

        it('should return the original source when no function is provided', () => {
            expect(preProcess(null, source)).toBe(source);
        });

        it('should throw an error when the source is not a string', () => {
            expect(() => preProcess((s) => 'xyz', null)).toThrowError(TypeError);
        });

        it('should throw an error when the provided function does not return a string', () => {
            expect(() => preProcess((s) => null, source)).toThrowError(TypeError);
        });

        describe('default preProcess', () => {
            const preProcess = Compiler.defaults.preProcess;

            it('should return the source unchanged', () => {
                const source = "abc";

                expect(preProcess(source)).toBe(source);
            });
        });
    });

    describe('_resolveNestedTemplates', () => {
        const resolveNested = compiler._resolveNestedTemplates;

        it('should match templates names that are double-quoted', () => {
            resolveNested((name) => {
                expect(name).toEqual('"abc"');
            }, '{{tmpl(data) "abc"}}');
        });

        it('should match templates names that are single-quoted', () => {
            resolveNested((name) => {
                expect(name).toEqual("'abc'");
            }, "{{tmpl(data) 'abc'}}");
        });

        it('should strip a single leading # from quoted templates names', () => {
            resolveNested((name) => {
                expect(name).toEqual('"abc"');
            }, '{{tmpl(data) "#abc"}}');

            resolveNested((name) => {
                expect(name).toEqual('"#abc"');
            }, '{{tmpl(data) "##abc"}}');
        });

        it('should match template names that are not quoted', () => {
            resolveNested((name) => {
                expect(name).toEqual('abc');
            }, '{{tmpl(data) abc}}');
        });

        it('should only match non-quoted template names that start with: _, $, (, A-z', () => {
            const source = '{{tmpl(data) !_abc }}'
            expect(resolveNested((name) => 'abc', source)).toBe(source);
        });

        it('should match any character (after the first) from non-quoted templates names', () => {
            resolveNested((name) => {
                expect(name).toEqual('a-b+c.!@#$ %^&*()');
            }, '{{tmpl(data) a-b+c.!@#$ %^&*() }}');
        });

        it('should trim whitespace from templates names', () => {
            resolveNested((name) => {
                expect(name).toEqual('abc');
            }, '{{tmpl(data)    abc    }}');
        });

        it('should replace nested template names with return value of the given function', () => {
            expect(resolveNested((name) => 'xyz', '{{tmpl(data) "abc"}}')).toEqual('{{tmpl(data) xyz}}');
        });

        it('should use the original name if the given function does not return a string', () => {
            var source = '{{tmpl(data) "abc"}}';
            expect(resolveNested((name) => null, source)).toBe(source);
        });

        it('should return the original source when no function is provided', () => {
            const source = 'abc'
            expect(resolveNested(null, source)).toBe(source);
        });

        it('should throw an error when the source is not a string', () => {

            expect(() => resolveNested((name) => 'xyz', null)).toThrowError(TypeError);
        });

        it('should find all templates and not be greedy', () => {
            const source = '{{tmpl(data) "a"}}<br />{{tmpl(data) \'b\'}}<br />{{tmpl(data) c}}';
            const out = '{{tmpl(data) exports["a"]}}<br />{{tmpl(data) exports[\'b\']}}<br />{{tmpl(data) exports[c]}}';

            var names = [];

            expect(resolveNested((name) => {
                names.push(name);
                return 'exports[' + name + ']';
            }, source)).toEqual(out);

            expect(names).toEqual(['"a"', "'b'", 'c']);
        });

        it('should work for data-less templates', () => {
            const source = '{{tmpl "abc"}}';
            expect(resolveNested((name) => name, source)).toEqual(source)
        });

        describe('default resolver', () => {
            const resolver = Compiler.defaults.nestedResolver;

            it('should return the `name` property of the exports object', () => {
                expect(resolver('"abc"')).toEqual('exports["abc"]');
                expect(resolver("'abc'")).toEqual("exports['abc']");
                expect(resolver('abc')).toEqual('exports[abc]');
            });
        });
    });

    describe('_resolveTemplateName', () => {
        const resolve = compiler._resolveTemplateName;
        const fallback = () => '123';
        const element = {
            type: 'text/javascript',
            id: 'abc'
        };

        it('should return the result of the given function when provided', () => {
            expect(resolve((element) => 'xyz', element, fallback)).toEqual('xyz');
        });

        it('should return the fallback if the function does not return a string', () => {
            expect(resolve((element) => null, element, fallback)).toEqual('123');
        });

        it('should pass the script element to the function as the first parameter', () => {
            expect(resolve((element) => element.id, element, fallback)).toEqual(element.id);
        });

        describe('default resolver', () => {
            const resolver = Compiler.defaults.nameResolver;

            it('should return id attribute in the script object', () => {
                expect(resolver($('<script id="hello"></script>'))).toEqual('hello');
                expect(resolver($('<script id=""></script>'))).toEqual('');
                expect(resolver($('<script></script>'))).toEqual(undefined);
            });
        });
    });

    describe('compile', () => {
        beforeEach(() => {
            spyOn(compiler, '_clean').and.callThrough();
            spyOn(compiler, '_preProcess').and.callThrough();
            spyOn(compiler, '_resolveNestedTemplates').and.callThrough();
            spyOn(compiler, '_postProcess').and.callThrough();
        });

        it('should return a function', () => {
            var ret = compiler.compile('abc');

            expect(typeof ret).toEqual('function');
        });

        it('should throw an error if the source is not a string', () => {
            expect(() => compiler.compile()).toThrowError(TypeError);
            expect(() => compiler.compile(null)).toThrowError(TypeError);
            expect(() => compiler.compile(1)).toThrowError(TypeError);
            expect(() => compiler.compile('')).not.toThrow();
        })

        it('should clean when "cleanSource" option is true', () => {
            const source = 'abc';

            compiler.compile(source, {
                cleanSource: true
            });
            expect(compiler._clean).toHaveBeenCalledWith(jasmine.any(Function), source);
        });

        it('should not clean when "cleanSource" option is false', () => {
            const source = 'abc';

            compiler.compile(source, {
                cleanSource: false
            });
            expect(compiler._clean).toHaveBeenCalledWith(null, source);
        });

        it('should use function set in "preProcess" option', () => {
            const source = 'abc';
            const fn = (s) => s;

            compiler.compile(source, {
                preProcess: fn
            });
            expect(compiler._preProcess).toHaveBeenCalledWith(fn, source);
        });

        it('should use function set in "nestedResolver" option', () => {
            const source = '{{tmpl(data) "abc"}}';
            const fn = (name) => name;

            compiler.compile(source, {
                nestedResolver: fn
            });
            expect(compiler._resolveNestedTemplates).toHaveBeenCalledWith(fn, source);
        });

        it('should use function set in "postProcess" option', () => {
            const source = 'abc';
            const fn = (t) => t;

            compiler.compile(source, {
                postProcess: fn
            });
            expect(compiler._postProcess).toHaveBeenCalledWith(fn, jasmine.any(Function));
        });
    });

    describe('extractScripts', () => {
        beforeEach(() => {
            spyOn(compiler, 'compile').and.callThrough();
            spyOn(compiler, '_filterScripts').and.callThrough();
            spyOn(compiler, '_resolveTemplateName').and.callThrough();
        });

        it('should return an array', () => {
            var ret = compiler.extractScripts('abc');

            expect(Array.isArray(ret)).toEqual(true);
        });

        it('should accept anything that is either a string or has a toString method', () => {
            expect(() => compiler.extractScripts()).toThrowError(TypeError);
            expect(() => compiler.extractScripts(null)).toThrowError(TypeError);
            expect(() => compiler.extractScripts(1)).not.toThrow();
            expect(() => compiler.extractScripts('')).not.toThrow();
            expect(() => compiler.extractScripts({ toString: () => 'hello' })).not.toThrow();
        });

        it('should call filterScripts html has script tags', () => {
            const html = '<script>abc</script>';

            compiler.extractScripts(html);
            expect(compiler._filterScripts).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Array));
        });

        it('should use "scriptFilter" option', () => {
            const html = '<script>abc</script>';
            const fn = (script) => true;

            compiler.extractScripts(html, {
                scriptFilter: fn
            });
            expect(compiler._filterScripts).toHaveBeenCalledWith(fn, jasmine.any(Array));
        });

        it('should pass a script element to the scriptFilter function as the first parameter', () => {
            const html = '<script>abc</script>';

            compiler.extractScripts(html, {
                scriptFilter: (script) => {
                    expect(script).not.toEqual(null);
                    expect(typeof script).toEqual('object');
                    expect(typeof script[0]).toEqual('object');
                    expect(script[0].name).toEqual('script');
                }
            });
        });

        // it('should resolve the nested templates', () => {
        //     const html = '<script>{{tmpl }}</script>';
        //
        //     compiler.extractScripts(html, {
        //         scriptFilter: (script) => {
        //             expect(script).not.toEqual(null);
        //             expect(typeof script).toEqual('object');
        //             expect(typeof script[0]).toEqual('object');
        //             expect(script[0].name).toEqual('script');
        //         }
        //     });
        // })
    });
});
