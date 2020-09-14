import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './component/Reducer/root';

const store = createStore(rootReducer, composeWithDevTools());

export default store;