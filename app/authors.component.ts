import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
// first we import component decorator from angular
//then we import authorservice

@Component({
	// we apply our component decorator on our AuthorsComponent class (export class AuthorsComponent)

	selector:'authors',
	//anywhere in the html where we have authors element, this component is going to be rendered
	template: `
	<h2>Authors</h2>
	{{title}}
	<ul>
		<li *ngFor="#author of authors">
		{{author}}
		</li>
	</ul>
	`,
	providers: [AuthorService]
	//bc we're using dependency injection to inject author servers into this component, we need to teach angular how to create an author service.  we do that using the providers field here.
	
})

export class AuthorsComponent {

	//two properties here: authors, which uses an array of strings and title
	title: string = "The title of authors page";
	authors: string[];

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
		
	}
	
}	
