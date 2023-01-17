import React, { useCallback, useState } from 'react'
import Comment from './Comment'

export default function DemoUseCallBack() {

    let [like, setLike]= useState(0);
    let [number, setNumber] = useState(0);

    //hàm (tham chiếu: object, array, hàm)
    //các biến và hàm sẽ bị tạo lại => địa chỉ ô nhớ mới
    let notifyMsg = () =>{
        console.log(`bạn đã tăng number ${number}`);
    }
    // lưu cache , lưu lại đia chỉ cũ của hàm
    // let notifyMsgCallBack = useCallback(notifyMsg,[])
    let notifyMsgCallBack = useCallback(notifyMsg,[number])

  return (
    <div className='container'>
        <button className='btn btn-danger' onClick={() => { 
            setLike(like + 1)
         }}>Tăng Like</button>
         <button className='btn btn-info' onClick={() => { 
            setNumber(number + 1)
         }}>Tăng Number</button>
        <div className="card w-25">
          <img style={{ width: "100%" }} className="card-img-top" src="https://i.pravatar.cc/?u=77" alt="" />
          <div className="card-body">
            <p className="card-text">Like: {like} </p>
           
          </div>
        </div>

         {/* => props truyền xuống sẽ đổi dịa chỉ => memo render lại UI do nhầm giá trị thay dổi */}
         {/* number={number}   */}
        <Comment notifyMsg={notifyMsgCallBack}/>
    </div>
  )
}
