import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";
import {AddTodoAction} from "./addTodo";
import {DeleteTodoAction} from "./deleteTodo";
import {ToggleTodoAction} from "./toggleTodo";

export interface TodoState{
    todos:Array<ItemTodoGoal>
}

/**
 * Initial chat state
 */
const initialState: TodoState = {
    todos: []
};

/**
* Union of chat actions
*/
type TodoActionTypes = AddTodoAction | DeleteTodoAction | ToggleTodoAction;


/**
 * Reducer for all chat actions
 * @param state
 * @param action
 */
export function todoReducer(
    state = initialState,
    action: TodoActionTypes
): TodoState {
    switch (action.type) {
        case AddTodoAction._TYPE:
            return AddTodoAction._reduce(state, action as AddTodoAction);
        case DeleteTodoAction._TYPE:
            return DeleteTodoAction._reduce(state, action as DeleteTodoAction);
        case ToggleTodoAction._TYPE:
            return ToggleTodoAction._reduce(state, action as ToggleTodoAction);
        default:
            return state
    }
}
