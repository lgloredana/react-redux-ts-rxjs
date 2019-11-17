import * as React from "react";
import {connect} from "react-redux";
import List from "../list/List";
import {ItemTodoGoal} from "../list/ItemTodoGoal";
import * as todoActions from "../../store/todos/actions";
import * as selectors from "../../store/todos/selectors"
import { RootState } from 'typesafe-actions'

type TodosProps = {
    todos: Array<ItemTodoGoal>;
    addTodo: typeof todoActions.addTodo.request
    removeTodo: typeof todoActions.removeTodo.request;
    toggleTodo: typeof todoActions.toggleTodo.request;
}
const mapStateToProps = (state:RootState) => ({
    todos: selectors.todos(state)
});
const mapDispatchToProps = () => ({
    addTodo: todoActions.addTodo.request,
    removeTodo: todoActions.removeTodo.request,
    toggleTodo: todoActions.toggleTodo.request
});

class TodosView extends React.Component<TodosProps>{
    private inputTodo =  React.createRef<HTMLInputElement>();

    addTodoItem = () => {
        let valueInput = this.inputTodo.current || {value: ''};
        this.props.addTodo(valueInput.value);
    };
    removeTodo = (todo:ItemTodoGoal) => {
        this.props.removeTodo(todo);
    };
    toggleTodo = (id:string) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);