// TWO STEP PROCESS TO USE A COMPONENT: First, reference the element name that it goes by (the component's selector) and then Second, tell angular what component you are using by referencing the name it is given when it is exported.

import {Component} from 'angular2/core';
//we're importing the component decorator from angular
//this statement defines the modules we want to use to write our code.  Here we're importing component from the module angular2/core.  Angular2/core tells our app where to find the dependencies we're looking for.
import {CoursesComponent} from './courses.component';
// dot slash means start searching from the current folder
import {AuthorsComponent} from './authors.component';

@Component({
//the @component is what lets the browser know this isn't just a regular typescript class--- this is an Angular component.

//we're calling the component so it's a function that takes an object.  In the object we have two fields: selector (the tag NAME) and a template (the WHAT does it do) .
	
    selector: 'my-app',
    //the selector is just a tag, like a <title> tag or <link> tag.  We can make a custom tag.
    //the selector property indicates which DOM element the component is going to use.  This way if we have any my-app tags within a template, it will be compiled using this component class.
    //whenever Angular sees my-app in the HTML, it is going to put whatever is in the template in the my-app element (here it is the h1 element with the courses element inside of it)
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors>',
    //a template is the actual text that displays inside the component. It is whatever is inserted into the DOM whenever the view is rendered
    //<courses> is a new element but we need to reference the component it belongs to by specifying in directives
    //<courses> is our host element for our courses component
    directives: [CoursesComponent, AuthorsComponent]
    //we are referencing the component that the <courses> element comes from here
    //A directive is a class that allows us to extend or control the DOM.  We can define custom elements or attributes that are not part of standard HTML.
    //every component is technically a directive.  The difference is that a component has a template (elements etc inside of it) and a directive doesn't.
})

export class AppComponent { }
//this piece code is a blueprint for the component.  If for example this were a blog page, there would be a variable for title, the author, content, and this would all be put into this object.  
//when you have the export keyword, it is saying this component is public. It allows us to use components elsewhere.

//IN SUM: To make a component, you make a class, then you give it a selector name so that way whenever we include it in our HTML it knows that these tags reference that component and whatever code you have as your template, this is the code that is going to appear inbetween the body.