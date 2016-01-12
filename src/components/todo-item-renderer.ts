import {Component, Input, Output, EventEmitter} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";


@Component({
	//encapsulation: ViewEncapsulation.Native,
	selector: 'todo-item-renderer',

	template: `
	<style>
		.completed{
			text-decoration: line-through;
		}
	</style>
	<div>
		<span [ngClass] = "todo.status" > {{todo.title}}</span>
		<button class="btn btn-default" (click)="toggle.emit(todo)">Toggle</button>
	</div>
	`
})
export class TodoItemRenderer {
	@Input() todo;
	@Output() toggle = new EventEmitter();
}