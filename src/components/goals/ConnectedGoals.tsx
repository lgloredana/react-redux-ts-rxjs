import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";
import {RemoveGoalAction} from "../../store/boiler/goals/removeGoal";
import {AddGoalAction} from "../../store/boiler/goals/addGoal";

type GoalsProps = {
    goals: Array<ItemTodoGoal>;
    addGoal: typeof AddGoalAction.handle;
    removeGoal: typeof RemoveGoalAction.handle;
}

class ConnectedGoals extends React.Component<GoalsProps> {
    private inputGoal = React.createRef<HTMLInputElement>();
    addGoalItem = () => {
        let valueInput = this.inputGoal.current || {value: ''};
        this.props.addGoal(valueInput.value, () => {valueInput.value = 'goal';});
    };
    removeGoal = () => ({});

    render (){
        return (<div>
            <h1>Goals List</h1>
            <input
                type="text"
                placeholder="Add Goal"
                defaultValue="goal"
                ref={this.inputGoal}
            />
            <button onClick={this.addGoalItem}>Add Goal</button>
            <List removeItem = {this.removeGoal} items={this.props.goals} toggle={() => {}}/>
        </div>)
    }
};

const mapStateToProps = (state) => ({goals: state.goals.values});
const mapDispatchToProps = (dispatch) => ({
    addGoal: (goalName, cb) => dispatch(AddGoalAction.handle(goalName, cb)),
    removeGoal: (goal) => dispatch(RemoveGoalAction.handle(goal)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedGoals);