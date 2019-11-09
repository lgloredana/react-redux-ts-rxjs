import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";

type GoalsProps = {
    goals: Array<ItemTodoGoal>
}

class ConnectedGoals extends React.Component<GoalsProps> {
    private inputGoal = React.createRef<HTMLInputElement>();
    addGoalItem = () => ({});
    removeGoal = () => ({});

    render (){
        return (<div>
            <h1>Goals List</h1>
            <input
                type="text"
                placeholder="Add Goal"
                ref={this.inputGoal}
            />
            <button onClick={this.addGoalItem}>Add Goal</button>
            <List removeItem = {this.removeGoal} items={this.props.goals} toggle={() => {}}/>
        </div>)
    }
};

const mapStateToProps = (state) => ({goals: []});

export default connect(mapStateToProps)(ConnectedGoals);