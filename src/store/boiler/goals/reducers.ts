import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";
import {AddGoalAction} from "./addGoal";
import {RemoveGoalAction} from "./removeGoal";

export interface GoalState{
    values:Array<ItemTodoGoal>
}

/**
 * Initial goal state
 */
const initialState: GoalState = {
    values: []
};

/**
 * Union of goals actions
 */
type GoalsActionsTypes = AddGoalAction | RemoveGoalAction;


/**
 * Reducer for all goals actions
 * @param state
 * @param action
 */
export function goalReducer(
    state = initialState,
    action: GoalsActionsTypes
): GoalState {
    switch (action.type) {
        case AddGoalAction._TYPE:
            return AddGoalAction._reduce(state, action as AddGoalAction);
        case RemoveGoalAction._TYPE:
            return RemoveGoalAction._reduce(state, action as RemoveGoalAction);
        default:
            return state
    }
}


