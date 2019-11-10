import API from 'goals-todos-api';
import {Action} from "redux";
import {TodoState} from "./reducers";
import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";
import {AddTodoAction} from "./addTodo";

export abstract class DeleteTodoAction implements Action<string> {
    static readonly _TYPE = "DeleteTodo";

    static _reduce(state: TodoState, action: DeleteTodoAction): TodoState {
        return {
            values: state.values.filter( todo => (todo.id !== action.payload))
        }
    }

    static handle(todo:ItemTodoGoal){
        return (dispatch) => {
            dispatch(DeleteTodoAction.dispatch(todo.id));
            return API.deleteTodo(todo.id)
                .catch(() => {
                    alert('Error on deleting. Try again!');
                    dispatch(AddTodoAction.dispatch(todo));
                });
        }
    }

    static dispatch(id: number): DeleteTodoAction {
        return {
            type: DeleteTodoAction._TYPE,
            payload: id
        }
    }

    abstract readonly type: string;
    abstract readonly payload: number;
}


