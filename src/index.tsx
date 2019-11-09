import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from "./store/configureStore";
import App from "./components/App";

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
