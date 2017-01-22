//this is a custom directive.  A directive is just a class that has the directive decorator.
//to do this we use the HTML tag <input> to render a textbox.  Then we use a directive to extend the input tag such that if it has an attribute "autogrow" it will have the behavior of making the text box bigger.  It looks like: <input autoGrow />
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //ElementRef gives us access to the host element and Renderer is a service that we use to modify that element
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    //we need this so angular automatically injects instances of elementref and renderer into this class...DEPENDENCY INJECTION
                    //el is the parameter of type ElementRef; renderer is the parameter of type Renderer
                }
                //this is the constructor for the directive
                AutoGrowDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                    //nativeElement gives us access to the actual DOM element.  The second argument is the name of the style.  The third argument is the value.
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                    //here we need to access the host element.  To do that we need to import two services from angular (ElementRef, Renderer)
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        //if angular sees a css element that matches the selectors listed below it will apply this directive to that element
                        //use [] to refer to an attribute.  So if an element has an attribute like AutoGrow, this directive will be applied on that element
                        selector: '[autoGrow]',
                        //we use host to subscribe to events raised from this element.  subscribe to two events here using key/value pairs (event name: value):
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//now we need to decorate this class with the directive decorator.  So first we import it (above) then we apply the directive decorator (@Directive) right below where we import it.
//_el: underline indicates it is a private field or you can use "private" keyword before the argument name and the ts compiler will automatically creartr a field and initialize it with the argument  
//# sourceMappingURL=auto-grow.directive.js.map