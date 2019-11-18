import {catchError, filter, map, switchMap, tap} from "rxjs/operators";
import {isActionOf, RootAction, RootState, Services} from "typesafe-actions";
import {from, of} from "rxjs";
import {addTodo, removeTodo, toggleTodo} from "./actions";
import { Epic } from 'redux-observable'

export const addTodoEpic:Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$, state$, {api}) => {
    console.log('--------epic start-----------', action$);
    return action$.pipe(
        tap((k) => console.log('pipe1', k)),
        filter(isActionOf(addTodo.request)),
        tap((k) => console.log('pipe1', k)),
        switchMap(action => {
                console.log('--------epic-----------');

                return from(api.goalsTodos.addTodoApi((action.payload)))
                    .pipe(
                        map(addTodo.success),
                        catchError(err => of(addTodo.failure(new Error(err))))
                    )
            }
        )
    );
    }


export const removeTodoEpic:Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$, state$, {api}) =>  action$.pipe(
    filter(isActionOf(removeTodo.request)),
    switchMap(action =>
            from(api.goalsTodos.deleteTodoApi((action.payload.id)))
                .pipe(
                    map(removeTodo.success),
                    catchError(err => of(removeTodo.failure(new Error(err))))
                )
        )
);

export const toggleTodoEpic:Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$, state$, {api}) =>  action$.pipe(
    filter(isActionOf(toggleTodo.request)),
    switchMap(action =>
            from(api.goalsTodos.toggleToodoApi((action.payload)))
                .pipe(
                    map(toggleTodo.success),
                    catchError(err => of(toggleTodo.failure(new Error(err))))
                )
        )
);

