import axios from "axios";


export const dangkyAction = (thongTinND) => {

    return (dispatch2) => { 
        //đăng ký không cần đưa dữ liệu lên reducer nên không cần dùng dispatch2
        let promise = axios({
            method: "POST",
            url:"https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data:thongTinND,
            headers:{
                'TokenCybersoft':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNiIsIkhldEhhblN0cmluZyI6IjE0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTI5MjgwMDAwMCIsIm5iZiI6MTY2MDE1MDgwMCwiZXhwIjoxNjg5NDQwNDAwfQ.nvrySbONO7THMJnLTWgEwiGszUF7VXjBUnn36QUuwsQ"
            }
        });

        promise.then((result) => { 
            console.log(result.data)
            alert("Đăng ký thành công")
         });

         promise.error((error) => { 
            console.log(error.response.data.content)
         });

        
     }
}