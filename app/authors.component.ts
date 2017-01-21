import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
// first we import component decorator from angular
//then we import authorservice

@Component({
	// we apply our component decorator on our AuthorsComponent class (export class AuthorsComponent)

	selector:'authors',
	
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
	
})

export class AuthorsComponent {

	title: string = "The title of authors page";

	authors;

	

	constructor(authorService: AuthorService){
		
		this.authors = authorService.getAuthors();
		
	}
	
}	
