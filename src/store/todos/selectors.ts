import { RootState } from 'typesafe-actions'

export const todos = (store:RootState) => {
    console.log('---- selector----');
    return store.todos? store.todos.values:[];
}