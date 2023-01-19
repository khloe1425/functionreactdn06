import { combineReducers, createStore } from "redux";
import { fakebookReducer } from "./reducers/fakebookReducer";
import { tangGiamFSReducer } from "./reducers/tangGiamFSReducer";


const rootReducer = combineReducers({
    //chứa các reducer
    // tangGiamFSReducer:tangGiamFSReducer
    tangGiamFSReducer,
    fakebookReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())