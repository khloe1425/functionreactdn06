//UI mẫu chứa các thành phần componnet dùng chung cho 1 nhóm UI cụ thể (Home, About, Hook)
//thành phần dùng chung : header, ...

import { Route } from "react-router-dom"
import Header from "../components/Header/Header"

// import React from 'react'

// export default function HomeTemplate() {
//   return (
//     <div>HomeTemplate</div>
//   )
// }


//custome component
export const HomeTemplate = (props) => {
    //props: path, component

    //propsRoute: props được cung cấp sẵn của Route giúp sử dụng các tính năng chuyển hướng trang
    return <Route exact path={props.path} render={(propsRoute) => {
        //trả về UI mới có chứa component muốn hiển thị
        // <></>: fragment
        return <>
            <Header />
            {/* <Home/> */}
            {/* {...propsRoute} : để vừa có props của component và có props của Route */}
            <props.component {...propsRoute} />

            
        </>
    }} />


}