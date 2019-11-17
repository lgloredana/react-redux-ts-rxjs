import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";
import * as goalsActions from "../../store/goals/actions"
import * as selectors from "../../store/goals/selectors"
import { RootState } from 'typesafe-actions'

type GoalsProps = {
    goals: Array<ItemTodoGoal>;
    addGoal: typeof goalsActions.addGoal.request;
    removeGoal: typeof goalsActions.removeGoal.request;
}
type State = {
}

const mapStateToProps = (state:RootState) => ({
    goals: selectors.goals(state)
});
const mapDispatchToProps = () => ({
    addGoal: goalsActions.addGoal.request,
    removeGoal: goalsActions.removeGoal.request,
});

class GoalsView extends React.Component<GoalsProps, State> {
    private inputGoal = React.createRef<HTMLInputElement>();
    addGoalItem = () => {
        let valueInput = this.inputGoal.current || {value: ''};
        this.props.addGoal(valueInput.value);
    };
    removeGoal = (todo:ItemTodoGoal) => {
        this.props.removeGoal(todo);
    };
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


export default connect(
    mapStateToProps,
    mapDispatchToProps)(GoalsView);