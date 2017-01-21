//a service is just a class
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    //method getCourses //declares the return type, a string array
                    return ["Course1", "Course2", "Course3"];
                    //this has to do with having a RESTful API
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
// the point here is that there is no way to get the data from the server.  This task has been delegated to the service. 
//# sourceMappingURL=course.service.js.map