//this is a decorator called component imported from module core

import {Component} from 'angular2/core'

//decorators are functions so we need to call them using @
//There is an object within the function
@Component({
	selector:'courses'
	//when angular sees an element that matches this css selector, it will create an instance of our component in the host element 
	template: '<h2>Courses</h2>'
	//the template is whatever is inserted into the DOM whenever the view is rendered
	
})


//this creates a class
export class CoursesComponent {  

}								
 