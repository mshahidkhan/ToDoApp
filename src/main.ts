import {bootstrap}  	from "angular2/platform/browser";
import {Component}  	from "angular2/core";

import {TodoService} 	from "./services/todo-service";
import {TodoInput}  	from "./components/todo-input";
import {TodoList}  		from "./components/todo-list";
import {StatusSelector} from "./components/status-selector";
import {SearchBox} 		from "./components/search-box";

@Component({
	selector: 'app',
	directives: [TodoInput, TodoList, StatusSelector, SearchBox],
	template: `<div>
		<search-box (update)="term = $event" ></search-box>
		<todo-input></todo-input>
		<status-selector (select)="status = $event"></status-selector>
		<todo-list
			[status]= "status"
			[term]="term"
			></todo-list>
	</div>`
})

class App{}

bootstrap(App, [TodoService]);