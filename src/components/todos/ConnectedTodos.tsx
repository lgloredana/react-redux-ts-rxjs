import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";
import {AddTodoAction} from "../../store/boiler/todos/addTodo";

type TodosProps = {
    todos: Array<ItemTodoGoal>;
    addTodo: typeof AddTodoAction.handle;
}

class ConnectedTodos extends React.Component<TodosProps>{
    private inputTodo =  React.createRef<HTMLInputElement>();

    addTodoItem = (e) => {
        console.log('---------------');
        let valueInput = this.inputTodo.current || {value: ''};
        this.props.addTodo(valueInput.value, () => {valueInput.value = '';});
    };
    removeTodo = () => ({});
    toggleTodo = () => ({});

    render(){
        return ( <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add Todo"
                defaultValue="test"
                ref={this.inputTodo}
            />
            <button onClick={this.addTodoItem}>Add Todo</button>
            <List items={this.props.todos} removeItem={this.removeTodo} toggle={this.toggleTodo} />
        </div>)
    }
};
const mapStateToProps = (state) => ({todos: state.todos.values});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todoName, cb) => dispatch(AddTodoAction.handle(todoName, cb))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTodos);