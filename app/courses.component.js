//this is a decorator called component imported from the module core.  Decorators give the component a "skeleton"
//this statement defines the modules we want to use to write our code.  Here we're importing a component from the core module.  Angular2/core tells our app where to find the dependencies we're looking for.
System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            //decorators are functions so we need to call them using @.  When we call them this is giving the skeleton some meat.
            //There is an object within the function
            CoursesComponent = (function () {
                // courses = ["Course1","Course2","Course3"];
                // this adds a courses property to the component and initializes it with a string array.
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page";
                    //this is passing parameter courseService which is of type CourseService (thing: type)
                    //the job of dependency injection framework is to inject dependencies of your classes when creating them.  When creating a CoursesComponent, it looks at the constructor and sees we need a course service here, it is a dependency.  So first it will create an instance of this service and then inject it into the constructor of this class.
                    this.courses = courseService.getCourses();
                    //now our component is not coupled to the service, it doesn't care where the data is coming from, we have good separation of concerns and the service can be from a RESTful API on the server or local storage in the browser or hardcoded in an array.  The component doesn't care.
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        //everything inside here is known as the component metadata
                        selector: 'courses',
                        //when angular sees an element that matches this css selector, it will create an instance of our component in the host element (i.e. attach the skeleton).
                        //In other words the selector is how this component will be referenced in the DOM
                        template: "\n\t<h2>Courses</h2>\n\t{{title}}\n\t<input type=\"text\" autoGrow />\n\t<ul>\n\t\t<li *ngFor=\"#course of courses\">\n\t\t{{course}}\n\t\t</li>\n\n\t</ul>\n\t",
                        //angular doesnt know what autoGrow is so we need to teach it to apply the autoGrow directive whenever it sees the selector.  To do that we use the directive field
                        //#course of courses: "courses" is the object you're iterating, "of" is just a keyword, and "#course" is a way to declare a local variable in our template (in this case it is the property in our component) and for every iteration it will hold one course at a time.  Similar to a for each loop. We put the {{course}} in order to display the variable.
                        //*ngFor is an example of a directive-- it extends the HTML and adds extra behavior.  In this case it will repeat the <li> based on the expression assigned to it.
                        //whenever you use ` this allows you to break up the template into multiple lines
                        //the template is whatever is inserted into the DOM whenever the view is rendered
                        //to render the title we use {{}}.  This is called interpolation.  
                        //If the value of the property in the component changes, the view will be automatically refreshed.  This is called one-way binding.  (ONE WAY: PROPERTY CHANGED; VIEW UPDATED)
                        //There is also two-way binding.  For example when you type something into an input field that is bound to a property, as you modify the value of the input field the property will be updated automatically. (TWO WAY: VIEW IS MODIFIED, CORRESPONDING PROPERTY IS AS WELL)
                        providers: [course_service_1.CourseService],
                        //in this array we specify the dependencies for this component
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map