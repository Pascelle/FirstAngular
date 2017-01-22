//this is a custom directive.  A directive is just a class that has the directive decorator.
//to do this we use the HTML tag <input> to render a textbox.  Then we use a directive to extend the input tag such that if it has an attribute "autogrow" it will have the behavior of making the text box bigger.  It looks like: <input autoGrow />

import {Directive, ElementRef, Renderer} from 'angular2/core'
		//ElementRef gives us access to the host element and Renderer is a service that we use to modify that element
@Directive({
	//if angular sees a css element that matches the selectors listed below it will apply this directive to that element
	//use [] to refer to an attribute.  So if an element has an attribute like AutoGrow, this directive will be applied on that element
	selector: '[autoGrow]'
	//we use host to subscribe to events raised from this element.  subscribe to two events here using key/value pairs (event name: value):
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur',
		//the parentheses mean you are binding the onFocus method to the focus event
		//onFocus is a method in our directive class
		//after we put the properties in host, we create the methods in the AutoGrowDirective class

	}
})



//first we start with a class

export class AutoGrowDirective {
	
	
	constructor(private el: ElementRef, private renderer: Renderer){
		//we need this so angular automatically injects instances of elementref and renderer into this class...DEPENDENCY INJECTION
			//el is the parameter of type ElementRef; renderer is the parameter of type Renderer
	}
	//this is the constructor for the directive
	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
		//nativeElement gives us access to the actual DOM element.  The second argument is the name of the style.  The third argument is the value.
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')


		//here we need to access the host element.  To do that we need to import two services from angular (ElementRef, Renderer)
}

//now we need to decorate this class with the directive decorator.  So first we import it (above) then we apply the directive decorator (@Directive) right below where we import it.

//_el: underline indicates it is a private field or you can use "private" keyword before the argument name and the ts compiler will automatically creartr a field and initialize it with the argument 