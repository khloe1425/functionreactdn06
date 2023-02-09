import { DANG_NHAP } from "../types/quanLyNguoiDungType"
import { userMovie } from "../../ulti/setting";

//Check local storage 
let usLogin = null;//chưa có local storage
//!Xử lý đăng nhập => khi load ứng dụng, mở tab mới của ứng dụng
if(localStorage.getItem(userMovie)){
    //có local => đã login
    //JSON => Object 
    usLogin = JSON.parse(localStorage.getItem(userMovie))
}

//giá trị ban đầu của state
const initialState = {
    userLogin: usLogin
}

export const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP:
            //!Chưa đăng nhập hoặc đã đăng xuất và đăng nhập lại
            //!render lại UI sau khi đăng nhập thành công
            state.userLogin = action.userLogin
            return { ...state }

        default:
            return state
    }
}
