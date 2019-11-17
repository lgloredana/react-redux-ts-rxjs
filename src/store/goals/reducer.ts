import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import * as goalsActions from './actions'

const goalReducer = combineReducers({
    isLoading: createReducer(false)
        .handleAction([goalsActions.addGoal.request, goalsActions.removeGoal.request],
            (state, action) => true)
        .handleAction(
            [goalsActions.addGoal.success, goalsActions.addGoal.failure, goalsActions.removeGoal.success, goalsActions.removeGoal.failure],
            (state, action) => false
        ),
    values: createReducer([{id:"1", name:"goal1", complete:false}])
        .handleAction([goalsActions.addGoal.success],
        (state, action) => {
            return [...state, action.payload]
        })
        .handleAction([goalsActions.removeGoal.success],
            (state, action) => {
                return state.filter( goal => (goal.id !== action.payload))
        })
})

export default goalReducer
export type GoalsState = ReturnType<typeof goalReducer>