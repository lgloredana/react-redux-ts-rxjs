import {Action} from "redux";
import API from 'goals-todos-api';
import {GoalState} from "./reducers";
import {ItemTodoGoal} from "../../../components/list/ItemTodoGoal";

export abstract class AddGoalAction implements Action<string> {
    static readonly _TYPE = "AddGoal";

    static _reduce(state: GoalState, action: AddGoalAction): GoalState {
        return {
            values: [...state.values, action.payload]
        }
    }

    static handle(goalName:string, cb: () => void){
        return (dispatch) => {
            API.saveGoal(goalName)
                .then((goal:ItemTodoGoal) => {
                    dispatch(AddGoalAction.dispatch(goal));
                    cb();
                })
                .catch(() => {
                    alert("There was an error on adding a goal. Try again!");
                })
        };
    }

    static dispatch(item: ItemTodoGoal): AddGoalAction {
        return {
            type: AddGoalAction._TYPE,
            payload: item
        }
    }

    abstract readonly type: string;
    abstract readonly payload: ItemTodoGoal;
}
