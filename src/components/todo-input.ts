import {Component, Inject} from "angular2/core";
import {TodoService} from "../services/todo-service";

@Component({
	selector: 'todo-input',
	template: `<div style="margin: 50px;">
		<input type='text' #myInput>
		<button (click) = "onClick($event, myInput.value)">Click Me</button>
	</div>`
})

export class TodoInput{
	constructor(public todoService: TodoService){

	}
	onClick(event, value){
		this.todoService.todos.push(value);
		console.log(this.todoService.todos);
	}
}