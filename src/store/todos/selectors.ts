import { RootState } from 'typesafe-actions'

export const todos = (store:RootState) => {
    return store.todos? store.todos.values:[];
}