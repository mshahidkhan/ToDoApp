import {Component, Input} from "angular2/core";

@Component({
	selector: 'todo-item-renderer',
	template: `<div>
		<span [hidden]="todo.status == 'completed' " > {{todo.title}}</span>
		<button class="btn btn-default" (click)="todo.toggle()">Toggle</button>
		</div>
	`
})


export class TodoItemRenderer {
	@Input() todo;
}