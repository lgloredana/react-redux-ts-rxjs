import {createAsyncAction} from "typesafe-actions";
import {ItemTodoGoal} from "../../components/list/ItemTodoGoal";

export const addTodo = createAsyncAction(
    'addTodoRequest',
    'addTodoSuccess',
    'addTodoError')<string, ItemTodoGoal,Error>();
export const removeTodo = createAsyncAction(
    'removeTodoRequest',
    'removeTodoSuccess',
    'removeTodoError')<ItemTodoGoal, any, Error>();
export const toggleTodo = createAsyncAction(
    'toggleTodoRequest',
    'toggleTodoSuccess',
    'toggleTodoError')<string, any, Error>();
