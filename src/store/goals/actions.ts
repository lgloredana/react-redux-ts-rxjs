import {createAsyncAction} from "typesafe-actions";
import {ItemTodoGoal} from "../../components/list/ItemTodoGoal";

export const addGoal = createAsyncAction(
    'ADD_GOAL/REQUEST',
    'ADD_GOAL/SUCCESS',
    'ADD_GOAL/ERROR',
    'ADD_GOAL/CANCEL'
    )<string, ItemTodoGoal, Error, any>();
export const removeGoal = createAsyncAction(
    'REMOVE_GOAL/REQUEST',
    'REMOVE_GOAL/SUCCESS',
    'REMOVE_GOAL/ERROR',
    'REMOVE_GOAL/CANCEL'
)<ItemTodoGoal, any, Error, any>();
