import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";
import API from 'goals-todos-api';
import {Action} from "redux";
import {TodoState} from "./reducers";

export abstract class AddTodoAction implements Action<string> {
    static readonly _TYPE = "AddTodo";

    static _reduce(state: TodoState, action: AddTodoAction): TodoState {
        return {
            todos: [...state.todos, action.payload]
        }
    }

    static handle(todoName:string, cb: () => void){
        return (dispatch) => {
            API.saveTodo(todoName)
                .then((todo:ItemTodoGoal) => {
                    dispatch(AddTodoAction.dispatch(todo));
                    cb();
                })
                .catch(() => {
                    alert("There was an error on adding a todo. Try again!");
                })
        };
    }

    static dispatch(item: ItemTodoGoal): AddTodoAction {
        return {
            type: AddTodoAction._TYPE,
            payload: item
        }
    }

    abstract readonly type: string;
    abstract readonly payload: ItemTodoGoal;
}


