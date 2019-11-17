import { RootState } from 'typesafe-actions'

export const todos = (store:RootState) => store.goals.values;