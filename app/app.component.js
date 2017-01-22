// TWO STEP PROCESS TO USE A COMPONENT: First, reference the element name that it goes by (the component's selector) and then Second, tell angular what component you are using by referencing the name it is given when it is exported.
System.register(['angular2/core', './courses.component', './authors.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //the @component is what lets the browser know this isn't just a regular typescript class--- this is an Angular component.
                        //we're calling the component so it's a function that takes an object.  In the object we have two fields: selector (the tag NAME) and a template (the WHAT does it do) .
                        selector: 'my-app',
                        //the selector is just a tag, like a <title> tag or <link> tag.  We can make a custom tag.
                        //the selector property indicates which DOM element the component is going to use.  This way if we have any my-app tags within a template, it will be compiled using this component class.
                        //whenever Angular sees my-app in the HTML, it is going to put whatever is in the template in the my-app element (here it is the h1 element with the courses element inside of it)
                        template: '<h1>My First Angular 2 App</h1> <courses></courses> <authors></authors>',
                        //a template is the actual text that displays inside the component. It is whatever is inserted into the DOM whenever the view is rendered
                        //<courses> is a new element but we need to reference the component it belongs to by specifying in directives
                        //<courses> is our host element for our courses component
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//this piece code is a blueprint for the component.  If for example this were a blog page, there would be a variable for title, the author, content, and this would all be put into this object.  
//when you have the export keyword, it is saying this component is public. It allows us to use components elsewhere.
//IN SUM: To make a component, you make a class, then you give it a selector name so that way whenever we include it in our HTML it knows that these tags reference that component and whatever code you have as your template, this is the code that is going to appear inbetween the body. 
//# sourceMappingURL=app.component.js.map