import {Component} from "angular2/core";
import {TodoService} from "../services/todo-service";

@Component({
	selector: 'todo-list',
	template: `<div>
		<ul>
			<li *ngFor = "#todo of todoService.todos">
				<span [hidden]="todo.status == 'completed' " > {{todo.title}}</span>
				<button class="btn btn-default" (click)="todo.toggle()">Toggle</button>
			</li>
		</ul>
	</div>`

})

export class TodoList{
	constructor(public todoService:TodoService){}
}