import { RootState } from 'typesafe-actions'

export const todos = (store:RootState) => {
    return store.goals? store.goals.values:[];
}