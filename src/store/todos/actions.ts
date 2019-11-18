import {createAsyncAction} from "typesafe-actions";
import {ItemTodoGoal} from "../../components/list/ItemTodoGoal";

export const addTodo = createAsyncAction(
    'ADD_TODO/REQUEST',
    'ADD_TODO/SUCCESS',
    'ADD_TODO/ERROR')<string, ItemTodoGoal,Error>();
export const removeTodo = createAsyncAction(
    'REMOVE_TODO/REQUEST',
    'REMOVE_TODO/SUCCESS',
    'REMOVE_TODO/ERROR')<ItemTodoGoal, any, Error>();
export const toggleTodo = createAsyncAction(
    'TOGGLE_TODO/REQUEST',
    'TOGGLE_TODO/SUCCESS',
    'TOGGLE_TODO/ERROR')<string, any, Error>();
