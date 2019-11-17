/** root reducer **/
import {combineReducers} from "redux";
import goalReducer from "./goals/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = () => combineReducers({
    todos: todoReducer,
    goals: goalReducer
});

export default rootReducer;
