//chứa các thành phần dùng chung cho riêng Login và Register
//phần hình bên trái


import { Route } from "react-router-dom"

export const FormTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src="https://source.unsplash.com/random/?food" alt="" />
                    </div>
                    <div className="col-6">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </div>
        </>
    }} />
}