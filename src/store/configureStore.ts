import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";
import checker from "./middlewares/checker";
import logger from "./middlewares/logger";
import {todoReducer} from "./boiler/todos/reducers";
import {goalReducer} from "./boiler/goals/reducers";

// rehydrate state on app start
const initialState = {};

const rootReducer = combineReducers({
    router: routerReducer,
    todos: todoReducer,
    goals: goalReducer
});
const composeEnhancers = composeWithDevTools({
     name: 'POC RXJS-React-Redux-TypeScript ====Store====',
});
// const rootMiddleware = composeWithDevTools(applyMiddleware(thunk, checker, logger));
const rootMiddleware = composeEnhancers(applyMiddleware(thunk, checker, logger));

export default function configureStore() {
    return createStore(rootReducer, initialState,rootMiddleware);
}