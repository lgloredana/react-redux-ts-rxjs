import {createEpicMiddleware} from "redux-observable";
import services from '../../services'
import {RootAction, RootState, Services} from 'typesafe-actions'

const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
    >({
    dependencies: services
})

export default epicMiddleware;
