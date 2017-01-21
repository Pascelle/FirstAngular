//this is the first file Angular calls when it boots up your application

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

//notice that you do not need the dot slash when you are importing from the node_modules

bootstrap(AppComponent);
//this is bootstrapping the "export class AppComponent" in app.component.ts.  What boostrapping means is prepare or load in your root component.  Every angular application needs a root component.  Since we only have one here, that is this one.