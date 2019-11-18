import {ItemTodoGoal} from "../components/list/ItemTodoGoal";
import * as API_CALL from "goals-todos-api"

export function addGoalApi(goalName:string):Promise<ItemTodoGoal> {
    return API_CALL.saveGoal(goalName)
}
export function deleteGoaApi(goalId:string):Promise<String> {
    return API_CALL.deleteGoal(goalId)
}
export function addTodoApi(todoName:string):Promise<ItemTodoGoal> {
    return API_CALL.saveTodo(todoName)
}
export function deleteTodoApi(todoId:string):Promise<number> {
    return API_CALL.deleteTodo(todoId)
}
export function toggleTodoApi(todoId:string):Promise<number> {
    return API_CALL.saveTodoToggle(todoId)
}




