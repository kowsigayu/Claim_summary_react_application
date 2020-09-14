import { combineReducers } from "redux";
import claimReducer from './reducer';

const rootReducer = combineReducers({
    claim: claimReducer
})

export default rootReducer;