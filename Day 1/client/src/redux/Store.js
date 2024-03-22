import rootReducer from "./reducers/Root.reducer";
// import { createStore } from "redux"; 
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer });

export default store;
