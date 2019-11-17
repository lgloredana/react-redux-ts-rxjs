import {ItemTodoGoal} from "../components/list/ItemTodoGoal";
import * as API_CALL from "goals-todos-api"

export function addGoalApi(goalName:string):Promise<ItemTodoGoal> {
    return API_CALL.saveGoal(goalName)
        .then((goal: ItemTodoGoal) => {
            return goal
        })
        .catch((err: Error) => {
            return err
        })
}

export function deleteGoaApi(goalId:string):Promise<String> {
    return API_CALL.deleteGoal(goalId)
        .then(() => {
            return goalId
        })
        .catch((err: Error) => {
            return err
        })
}
export function addTodoApi(todoName:string):Promise<ItemTodoGoal> {
    return API_CALL.saveTodo(todoName)
        .then((todo: ItemTodoGoal) => {
            return todo
        })
        .catch((err: Error) => {
            return err
        })
}
export function deleteTodoApi(todoId:string):Promise<number> {
    return API_CALL.deleteTodo(todoId)
        .then(() => {
            return todoId
        })
        .catch((err: Error) => {
            return err
        })
}export function toggleToodoApi(todoId:string):Promise<number> {
    return API_CALL.saveTodoToggle(todoId)
        .then(() => {
            return todoId
        })
        .catch((err: Error) => {
            return err
        })
}




