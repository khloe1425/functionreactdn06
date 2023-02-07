import { DANG_NHAP } from "../types/quanLyNguoiDungType"

const initialState = {}

export const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP:
            console.log(action.userLogin);

            return { ...state }

        default:
            return state
    }
}
