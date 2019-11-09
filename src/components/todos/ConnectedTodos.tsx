import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";

type TodosProps = {
    todos: Array<ItemTodoGoal>
}

class ConnectedTodos extends React.Component<TodosProps>{
    private inputTodo =  React.createRef<HTMLInputElement>();

    addTodoItem = () => ({});
    removeTodo = () => ({});
    toggleTodo = () => ({});

    render(){
        return ( <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add Todo"
                ref={this.inputTodo}
            />
            <button onClick={this.addTodoItem}>Add Todo</button>
            <List items={this.props.todos} removeItem={this.removeTodo} toggle={this.toggleTodo} />
        </div>)
    }
};
const mapStateToProps = (state) => ({todos: new Array<ItemTodoGoal>()});
export default connect(mapStateToProps)(ConnectedTodos);