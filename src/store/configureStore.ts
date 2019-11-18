import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import epicMiddleware from "./middlewares/epicMiddleware";
import rootEpics from './root-epic'
import rootReducer from "./root-reducer";

/** rehydrate state on app start **/
const initialState = {todos:{values:[]}, goals:{values:[]}};

/** root middleware **/
const composeEnhancers = composeWithDevTools({
     name: 'POC RXJS-React-Redux-TypeScript ====Store====',
});
const rootMiddleware = composeEnhancers(applyMiddleware(
    epicMiddleware));



/** configure Store **/
const configureStore =  createStore(
    rootReducer(),
    initialState,
    // composeWithDevTools(applyMiddleware(epicMiddleware))
    rootMiddleware
);
/** run epics alongside the normal Redux dispatch channel **/
epicMiddleware.run(rootEpics);
export default configureStore;