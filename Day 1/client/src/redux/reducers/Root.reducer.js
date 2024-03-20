import counterReducer from "./Counter.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    // theme : themeReducer,
    // auth : authReducer
})

export default rootReducer;