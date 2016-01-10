import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {TodoInput} from  "./components/todo-input";
import {TodoService} from "./services/todo-service";
import {TodoList} from "./components/todo-list";


@Component({
	selector: 'app',
	directives: [TodoInput, TodoList],
	template: `<div>
		<todo-input></todo-input>
		<todo-list></todo-list>
	</div>`
})

class App{}

bootstrap(App, [TodoService]);