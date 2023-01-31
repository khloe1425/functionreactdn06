import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { fakebookReducer } from "./reducers/fakebookReducer";
import { shoesShopReducer } from "./reducers/shoesShopReducer";
import { tangGiamFSReducer } from "./reducers/tangGiamFSReducer";


const rootReducer = combineReducers({
    //chứa các reducer
    // tangGiamFSReducer:tangGiamFSReducer
    tangGiamFSReducer,
    fakebookReducer,
    shoesShopReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

// createStore(rootReducer,applyMiddleware(thunk))

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()