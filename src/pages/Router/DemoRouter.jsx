import React, { useState } from 'react'

//react-router-dom v5
/**
 * 
 * lấy thông tin tk từ form
 * check tài khoản => đang nhập thành công => chuyển user về trang home
 * ngược lại => thông báo lỗi
 */
export default function DemoRouter(props) {

    console.log(props);

    let [userAcc, setUserAcc] = useState({
        taiKhoan:"",
        matKhau:""
    })
    

   let handleChange = (event) =>{
        let {name,value} = event.target;

        setUserAcc({
            ...userAcc,
            [name]: value
        });

   }

   
   let handleSubmit =(event) =>{
        event.preventDefault();
        if(userAcc.taiKhoan === "cybersoft"){
            //thành công
            //chuyển người dùng về trang home
            alert("Đăng nhập thành công");
            //push
            //?Home -> DemoRouter -> Home

            props.history.push('/home');

            //replace
            //?Home -> DemoRouter(bị thay thế thành Home)
            // props.history.replace('/home');

        }else{
            // thât bại
            alert("Tài khoản hoặc mật khẩu không đúng");
        }
   }


    return (
        <div className='container'>
            <form className='w-50' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input onChange={handleChange}  type="text" className="form-control" name="taiKhoan"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input onChange={handleChange}  type="password" className="form-control" name="matKhau" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={() => { 
                    // props.history.goBack('/home');
                    props.history.goBack();
                 }} type='button' className="btn btn-primary">Go back Home</button>
            </form>

        </div>
    )
}
