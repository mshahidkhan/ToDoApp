import {Injectable} from "angular2/core";
import {TodoModel} from "../components/todo-model";


@Injectable()
export class TodoService{
	todos:[TodoModel] = [
		new TodoModel("eat"),
		new TodoModel("sleep"),
		new TodoModel("code")
	];
}