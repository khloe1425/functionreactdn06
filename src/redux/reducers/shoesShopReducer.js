import { GET_SHOES_LIST } from "../types/shoesShopType"

//rxr
const initialState = {
    arrShoes:[],
    user:{},
}
// { type, payload } => action
export const shoesShopReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHOES_LIST:
            state.arrShoes = action.mangShoes
            
            return { ...state }

        default:
            return state
    }
}
