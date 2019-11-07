import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import checker from "./middlewares/checker";
import logger from "./middlewares/logger";

const rootReducer = combineReducers({});
const rootMiddleware = applyMiddleware(thunk, checker, logger);

export default function configureStore() {
    return createStore(rootReducer, composeWithDevTools(rootMiddleware));
}