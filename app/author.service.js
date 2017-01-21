System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    //method getCourses //declares the return type, a string array
                    return ["Author1", "Author2", "Author3"];
                    //this has to do with having a RESTful API
                };
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
        }
    }
});
//this has to do with having a RESTful API
//# sourceMappingURL=author.service.js.map