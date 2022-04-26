import { combineReducers } from "redux";
import { reducer as randomFactReducer } from "./randomFact"

const rootReducer = combineReducers({
    randomFact : randomFactReducer
});

export { rootReducer };