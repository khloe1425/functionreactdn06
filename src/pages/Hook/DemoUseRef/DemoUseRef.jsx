import React, { useRef, useState } from 'react'

export default function DemoUseRef() {
    //!Khi dùng useState thì sẽ render lại UI khi setState
    // let [userLogin, setUserLogin] = useState({
    //     username: "",
    //     password: ""
    // });

    //khi setState chỉ cần luu ngầm giá trị không cần render lại UI
    let useRefLogin = useRef({
            username: "",
            password: ""
        })

    let inputRef = useRef(null)

    let handleChange = (event) => {
        let { value, id } = event.target;

        // useRefLogin.current.username = value;
        useRefLogin.current[id] = value;
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value
        // })
        console.log(useRefLogin.current);
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        //khi submit thì mới thông kết qua của state
        console.log(useRefLogin.current);
        inputRef.current.style.color = "red";
    }

    console.log("render form")
    // console.log(userLogin);
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form className='w-50'>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input ref={inputRef} type="text" className="form-control" id="username" onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
