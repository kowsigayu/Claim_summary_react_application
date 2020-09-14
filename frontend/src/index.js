import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store'
import App from "./App";

ReactDOM.render( <Provider store={store}><App /></Provider>,document.getElementById("root"));
serviceWorker.unregister();