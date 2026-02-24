import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import valueReducer from "./valueReducer";

export const reducers =  combineReducers({loginReducer, valueReducer})