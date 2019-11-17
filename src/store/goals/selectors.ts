import { RootState } from 'typesafe-actions'

export const  goals = (state:RootState) => {
    return state.goals ? state.goals.values : [];
}