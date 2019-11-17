import {catchError, filter, map, switchMap} from "rxjs/operators";
import {isActionOf, RootAction, RootState, Services} from "typesafe-actions";
import {from, of} from "rxjs";
import {addGoal, removeGoal} from "./actions";
import {ActionsObservable, Epic} from 'redux-observable'

export const addGoalEpic:Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$:ActionsObservable<RootAction>, state$, {api}) =>
    action$.pipe(
        filter(isActionOf(addGoal.request)),
        switchMap(action =>
        from(api.goalsTodos.addGoalApi(action.payload)).pipe(
                map(addGoal.success),
                catchError(err => of(addGoal.failure(new Error(err))))
        )
    )
)

export const removeGoalEpic:Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$:ActionsObservable<RootAction>, state$, {api}) =>
    action$.pipe(
        filter(isActionOf(removeGoal.request)),
        switchMap(action =>
        from(api.goalsTodos.deleteGoaApi(action.payload.id)).pipe(
                map(removeGoal.success),
                catchError(err => of(removeGoal.failure(new Error(err))))
        )
    )
)

