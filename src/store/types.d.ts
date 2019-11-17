import { StateType, ActionType } from 'typesafe-actions'
import { Epic } from 'redux-observable'

declare module 'typesafe-actions' {
    export type Store = StateType<typeof import('./configureStore').default>
    export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>
    export type RootAction = ActionType<typeof import('./root-action').default>
    export type Services = typeof import('../services/index').default
    export type RootEpic = Epic<RootAction, RootAction, RootState, Services>


    interface Types {
        RootAction: ActionType<typeof import('./root-action').default>
    }
}
