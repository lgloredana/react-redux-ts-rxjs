import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";
import {AddTodoAction} from "../../store/boiler/todos/addTodo";
import {DeleteTodoAction} from "../../store/boiler/todos/deleteTodo";
import {ToggleTodoAction} from "../../store/boiler/todos/toggleTodo";

type TodosProps = {
    todos: Array<ItemTodoGoal>;
    addTodo: typeof AddTodoAction.handle;
    removeTodo: typeof DeleteTodoAction.handle;
    toggleTodo: typeof ToggleTodoAction.handle;
}

class ConnectedTodos extends React.Component<TodosProps>{
    private inputTodo =  React.createRef<HTMLInputElement>();

    addTodoItem = () => {
        let valueInput = this.inputTodo.current || {value: ''};
        this.props.addTodo(valueInput.value, () => {valueInput.value = 'todo';});
    };
    removeTodo = (todo) => {
        this.props.removeTodo(todo);
    };
    toggleTodo = (id) => {
        this.props.toggleTodo(id);
    };

    render(){
        return ( <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add Todo"
                defaultValue="todo"
                ref={this.inputTodo}
            />
            <button onClick={this.addTodoItem}>Add Todo</button>
            <List items={this.props.todos} removeItem={this.removeTodo} toggle={this.toggleTodo} />
        </div>)
    }
};
const mapStateToProps = (state) => ({todos: state.todos.values});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todoName, cb) => dispatch(AddTodoAction.handle(todoName, cb)),
    removeTodo: (todo) => dispatch(DeleteTodoAction.handle(todo)),
    toggleTodo: (id) => dispatch(ToggleTodoAction.handle(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTodos);