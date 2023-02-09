import axios from "axios";
import { history } from "../../../App";

import { ACCESS_TOKEN, URL_API, userMovie } from "../../../ulti/setting";
import { TOKEN_CYBER } from "../../../ulti/setting";
import { DANG_NHAP } from "../../types/quanLyNguoiDungType";

//Action file riêng
export const dangkyAction = (thongTinND) => {

    return (dispatch2) => {
        //đăng ký không cần đưa dữ liệu lên reducer nên không cần dùng dispatch2
        let promise = axios({
            method: "POST",
            url: `${URL_API}QuanLyNguoiDung/DangKy`,
            data: thongTinND,
            headers: {
                'TokenCybersoft': TOKEN_CYBER
            }
        });

        promise.then((result) => {
            console.log(result.data)
            alert("Đăng ký thành công");
            //TODO chuyển hướng trang về trang Login
            history.push('/login');
        });

        promise.error((error) => {
            console.log(error.response.data.content)
        });


    }
}


//TODO tạo action đăng nhap

export const dangnhapAction = (thongTinLogin) => {
    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: `${URL_API}QuanLyNguoiDung/DangNhap`,
            data: thongTinLogin,
            headers: {
                'TokenCybersoft': TOKEN_CYBER
            }
        });


        promise.then((result) => {
            console.log(result.data.content);

            //đăng nhập thành công
            alert("Đăng nhập thành công");

            //luu dữ liệu đăng nhập xuống localStorage
            
            localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken);
            
            let userJSON = JSON.stringify(result.data.content)
            localStorage.setItem(userMovie,userJSON);

            history.push('/home');

            let action = {
                type: DANG_NHAP,
                userLogin: result.data.content
            }
            dispatch2(action)


        })

        promise.catch((error) => {
            console.log(error.response.content)
        })
    }
}