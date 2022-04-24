import {combineReducers} from "redux";
import formReducer from "./form-reducers";

const rootReducer = combineReducers({
    form: formReducer
})

export default rootReducer