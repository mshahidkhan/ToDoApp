import {Injectable} from "angular2/core";
import {TodoModel} from "../components/todo-model";


@Injectable()
export class TodoService{
	todos:TodoModel[] = [
		new TodoModel("eat"),
		new TodoModel("sleep"),
		new TodoModel("code"),
		new TodoModel("party", "completed"),
		new TodoModel("dance"),
		new TodoModel("work"),
		new TodoModel("play", "completed"),
		new TodoModel("record", "completed"),
		new TodoModel("earn"),
		new TodoModel("excercise", "completed"),
		new TodoModel("swim"),
		new TodoModel("watching a movie")
	];

	addTodo(todo:TodoModel){
		this.todos = [...this.todos, todo];
	}

	toggleTodo(todo:TodoModel){
		todo.toggle();
		const i = this.todos.indexOf(todo);
		this.todos = [
			...this.todos.slice(0, i),
			todo,
			...this.todos.slice(i + 1)
		];
	}
}