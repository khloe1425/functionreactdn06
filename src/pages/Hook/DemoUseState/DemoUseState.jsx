// rfc
import React, { useState } from 'react'


export default function DemoUseState() {

  // this.state = {
  //   fontSize:16
  // }
  //!trả về 1 mảng [state, setState] (giá trị cần đổi, hàm giúp đổi giá trị của state)
  // let [state,setState] = useState(giá trị ban đầu của state);
  let [fontSize, setFontSize] = useState(16);
  let [userInfo, setUserInfo] = useState({
    name: "Nguyễn Thị hoa hậu",
    avatar: "https://i.pravatar.cc/?u=77",
    vote: 0
  })


  //return : trả về UI của function component
  return (
    <div className='container'>
      <div>
        <h2>Demo tăng giảm font size</h2>
        <p style={{ fontSize: `${fontSize}px` }} >Lorem ipsum dolor sit amet.</p>
        <button onClick={() => {
          // let newState = 
          // setFontSize(newState);
          setFontSize(fontSize + 2);
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
          setFontSize(fontSize - 2);
        }} className='btn btn-danger'>-</button>
        <h2 className='py-5'>Demo Vote</h2>
        <div className="card w-25">
          <img style={{ width: "100%" }} className="card-img-top" src={userInfo.avatar} alt="" />
          <div className="card-body">
            <h4 className="card-title">{userInfo.name} </h4>
            <p className="card-text">Vote: {userInfo.vote} </p>
            <button onClick={() => {
              // setUserInfo({
              //   name: "Nguyễn Thị hoa hậu",
              //   avatar: "https://i.pravatar.cc/?u=77",
              //   vote: userInfo.vote + 1
              // })
              //! {copy thuộc tính của đối tượng userInfo ,gán giá trị mới cho thuộc tính vote}
              setUserInfo({...userInfo,vote: userInfo.vote + 1})
            }} className='btn btn-danger'>Vote</button>
          </div>
        </div>

      </div>
    </div>
  )

  console.log("không được chạy tới khi nằm sau lệnh return");


}


/**
 * tăng giảm font size
 * B1: Tạo UI
 * B2: xác định state (fontSize, number)
 * B3: xác định nơi gọi setState (click button + hoặc -)
 */