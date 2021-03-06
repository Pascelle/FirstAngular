System.register(['angular2/core', './author.service'], function(exports_1, context_1) {
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
    var core_1, author_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            // first we import component decorator from angular
            //then we import authorservice
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    //two properties here: authors, which uses an array of strings and title
                    this.title = "The title of authors page";
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        // we apply our component decorator on our AuthorsComponent class (export class AuthorsComponent)
                        selector: 'authors',
                        //anywhere in the html where we have authors element, this component is going to be rendered
                        template: "\n\t<h2>Authors</h2>\n\t{{title}}\n\t<ul>\n\t\t<li *ngFor=\"#author of authors\">\n\t\t{{author}}\n\t\t</li>\n\t</ul>\n\t",
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map