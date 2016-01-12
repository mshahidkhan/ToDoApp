import {Component, Inject} from "angular2/core";
import {TodoService} from "../services/todo-service";
import {TodoModel} from "./todo-model";


@Component({
	selector: 'todo-input',
	template: `<div style="margin: 50px;">
		<form (submit)="onSubmit()">
			<input type='text' [(ngModel)]="todoModel.title">
			<button class="btn btn-default" type="submit" >Save</button>
		</form>
	</div>`
})

export class TodoInput{
	todoModel: TodoModel = new TodoModel();
	constructor(public todoService: TodoService){

	}
	onSubmit(){
		/**  NG-2 suggests and encourages IMMUTABILITY. We should not use PUSH elements in the same ARRAY.
		// Instead, use new object every time a and use a separate method to Add elements in an Array.
		**/
		// this.todoService.todos.push(this.todoModel);


		this.todoService.addTodo(this.todoModel);
		console.log(this.todoService.todos);
		this.todoModel = new TodoModel();


		/*if (this.todoModel.title !== ""){
			this.todoService.todos.push(this.todoModel);
			console.log(this.todoService.todos);
			this.todoModel = new TodoModel();
		}else{
			return false;
		}*/
	}
}