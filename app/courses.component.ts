//this is a decorator called component imported from the module core.  Decorators give the component a "skeleton"
//this statement defines the modules we want to use to write our code.  Here we're importing a component from the core module.  Angular2/core tells our app where to find the dependencies we're looking for.

import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive'

//decorators are functions so we need to call them using @.  When we call them this is giving the skeleton some meat.
//There is an object within the function
@Component({
//everything inside here is known as the component metadata
	selector:'courses',
	//when angular sees an element that matches this css selector, it will create an instance of our component in the host element (i.e. attach the skeleton).
	//In other words the selector is how this component will be referenced in the DOM
	template: `
	<h2>Courses</h2>
	{{title}}
	<input type="text" autoGrow />
	<ul>
		<li *ngFor="#course of courses">
		{{course}}
		</li>

	</ul>
	`,
	//angular doesnt know what autoGrow is so we need to teach it to apply the autoGrow directive whenever it sees the selector.  To do that we use the directive field
	//#course of courses: "courses" is the object you're iterating, "of" is just a keyword, and "#course" is a way to declare a local variable in our template (in this case it is the property in our component) and for every iteration it will hold one course at a time.  Similar to a for each loop. We put the {{course}} in order to display the variable.
	//*ngFor is an example of a directive-- it extends the HTML and adds extra behavior.  In this case it will repeat the <li> based on the expression assigned to it.
	//whenever you use ` this allows you to break up the template into multiple lines
	//the template is whatever is inserted into the DOM whenever the view is rendered
	//to render the title we use {{}}.  This is called interpolation.  
	//If the value of the property in the component changes, the view will be automatically refreshed.  This is called one-way binding.  (ONE WAY: PROPERTY CHANGED; VIEW UPDATED)
	//There is also two-way binding.  For example when you type something into an input field that is bound to a property, as you modify the value of the input field the property will be updated automatically. (TWO WAY: VIEW IS MODIFIED, CORRESPONDING PROPERTY IS AS WELL)
	providers: [CourseService]
	//in this array we specify the dependencies for this component
	directives: [AutoGrowDirective]
})

//this creates a class
//this is where you put all the info that will change (when users type stuff in, etc)
export class CoursesComponent {

	title = "The title of courses page";
	//This is a variable called title. It defines a string property (in TS you can declare the type of var by using a : but you don't necessarily have to if it can be inferred from the value. the alternative is title = "The title of courses page")

	courses;

	// courses = ["Course1","Course2","Course3"];
	// this adds a courses property to the component and initializes it with a string array.

	constructor(courseService: CourseService){
		//this is passing parameter courseService which is of type CourseService (thing: type)
		//the job of dependency injection framework is to inject dependencies of your classes when creating them.  When creating a CoursesComponent, it looks at the constructor and sees we need a course service here, it is a dependency.  So first it will create an instance of this service and then inject it into the constructor of this class.
		this.courses = courseService.getCourses();
		//now our component is not coupled to the service, it doesn't care where the data is coming from, we have good separation of concerns and the service can be from a RESTful API on the server or local storage in the browser or hardcoded in an array.  The component doesn't care.

	}
	//	new CourseService(1,2) is one way to reference the CourseService component, to create it in the constructor of CoursesComponent.  But we don't use it because of testing and other issues.[]
}	
