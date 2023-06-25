import {combineReducers} from "redux";
import todayData from "./slice/todayData";

const rootReducer = combineReducers({
    todayData
})

export default rootReducer;