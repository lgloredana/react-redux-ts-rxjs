import API from 'goals-todos-api';
import {Action} from "redux";
import {TodoState} from "./reducers";
import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";

export abstract class ToggleTodoAction implements Action<string> {
    static readonly _TYPE = "ToggleTodo";

    static _reduce(state: TodoState, action: ToggleTodoAction): TodoState {
        return {
            values:  state.values.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }else{
                    let newTodo: ItemTodoGoal = {...todo, complete:!todo.complete};
                    return newTodo
                }
            }
        )}
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


