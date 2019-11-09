import API from 'goals-todos-api';
import {Action} from "redux";
import {TodoState} from "./reducers";

export abstract class ToggleTodoAction implements Action<string> {
    static readonly _TYPE = "ToggleTodo";

    static _reduce(state: TodoState, action: ToggleTodoAction): TodoState {
        return {
            values: state.values.filter( todo => (todo.id !== action.payload))
        }
    }

    static handle(id:number){
        return (dispatch) => {
            dispatch(ToggleTodoAction.dispatch(id));
            return API.saveTodoToggle(id)
                .catch(() => {
                    dispatch(ToggleTodoAction.dispatch(id));
                    alert("Toggle Error. Try again!");
                });
        }
    }

    static dispatch(id: number): ToggleTodoAction {
        return {
            type: ToggleTodoAction._TYPE,
            payload: id
        }
    }

    abstract readonly type: string;
    abstract readonly payload: number;
}


