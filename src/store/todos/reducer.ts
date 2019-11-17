import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import * as todoActions from './actions'
import {ItemTodoGoal} from "../../components/list/ItemTodoGoal";

const todoReducer = combineReducers({
    isLoading: createReducer(false)
        .handleAction([todoActions.addTodo.request, todoActions.removeTodo.request],
            (state, action) => true)
        .handleAction(
            [todoActions.addTodo.success, todoActions.addTodo.failure, todoActions.removeTodo.success, todoActions.removeTodo.failure],
            (state, action) => false
        ),
    values: createReducer([{id:"1", name:'todo1', complete:false}])
        .handleAction([todoActions.addTodo.success],
            (state, action) => {
                return [...state, action.payload]
            })
        .handleAction([todoActions.removeTodo.success],
            (state, action) => {
                return state.filter( todo => (todo.id !== action.payload))
            })
        .handleAction([todoActions.toggleTodo.success],
            (state, action) => {
                return state.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    }else{
                        let newTodo: ItemTodoGoal = {...todo, complete:!todo.complete};
                        return newTodo
                    }
                })
            })
})

export default todoReducer
