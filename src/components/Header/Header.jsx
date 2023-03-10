import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {
    
   let {userLogin} = useSelector(state => state.quanLyNguoiDungReducer)
    /**
     * B1: tạo hàm đăng xuất
     * B2: xóa local storage
     * B3: dispatch => reducer (null)
     */




    return (
        <header className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registers">Registers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo-router">DemoRouter</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Hooks
                            </a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/use-state">useState</NavLink>
                                <NavLink className="dropdown-item" to="/use-effect">useEffect</NavLink>
                                <NavLink className="dropdown-item" to="/use-call-back">useCallBack</NavLink>
                                <NavLink className="dropdown-item" to="/use-memo">useMemo</NavLink>
                                <NavLink className="dropdown-item" to="/use-ref">useRef</NavLink>
                                <NavLink className="dropdown-item" to="/tang-giam-fs">Tang giam font-size</NavLink>
                                <NavLink className="dropdown-item" to="/fakebook-app">Fakebook App</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                API
                            </a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/shoes-shop-api">ShoesShopAPI</NavLink>
                                <NavLink className="dropdown-item" to="/shoes-shop-await">ShoesShopAwait</NavLink>
                                <NavLink className="dropdown-item" to="/middle-ware">MiddleWare</NavLink>
                            </div>
                        </li>
                    </ul>
                    {/*TODO: binding tên user đã login */}
                   <p className='text-white'>{(userLogin!=null)?userLogin.taiKhoan:""}</p>
                </div>
            </nav>

        </header>
    )
}
