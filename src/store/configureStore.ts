import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import checker from "./middlewares/checker";
import logger from "./middlewares/logger";
import {todoReducer} from "./boiler/todos/reducers";
import {goalReducer} from "./boiler/goals/reducers";

const rootReducer = combineReducers({todos: todoReducer, goals: goalReducer});
const rootMiddleware = applyMiddleware(thunk, checker, logger);

export default function configureStore() {
    return createStore(rootReducer, composeWithDevTools(rootMiddleware));
}