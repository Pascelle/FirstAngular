//this is the first file Angular calls when it boots up your application
System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //notice that you do not need the dot slash when you are importing from the node_modules
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//this is bootstrapping the "export class AppComponent" in app.component.ts.  What boostrapping means is prepare or load in your root component.  Every angular application needs a root component.  Since we only have one here, that is this one. 
//# sourceMappingURL=boot.js.map