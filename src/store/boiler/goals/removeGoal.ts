import {Action} from "redux";
import API from 'goals-todos-api';
import {GoalState} from "./reducers";
import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";
import {AddGoalAction} from "./addGoal";

export abstract class RemoveGoalAction implements Action<string> {
    static readonly _TYPE = "AddGoal";

    static _reduce(state: GoalState, action: RemoveGoalAction): GoalState {
        return {
            values: state.values.filter( goal => (goal.id !== action.payload))
        }
    }

    static handle(goal:ItemTodoGoal){
        return (dispatch) => {
            dispatch(RemoveGoalAction.dispatch(goal.id));
            API.deleteGoal(goal.id)
                .catch(() => {
                    alert('Error on deleting. Try again!');
                    dispatch(AddGoalAction.dispatch(goal));
                });
        };
    }

    static dispatch(id:number): RemoveGoalAction {
        return {
            type: RemoveGoalAction._TYPE,
            payload: id
        }
    }

    abstract readonly type: string;
    abstract readonly payload: number;
}
