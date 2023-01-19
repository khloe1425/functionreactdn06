import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

export default function TangGiamFS() {
    //giá trị cần đổi => font-size 

    //lấy state từ reducer xuống component  mapStateToProps
    //state giống rootReducer
    // let fs = useSelector((state) => { 
    //     return state.tangGiamFSReducer
    //  })

     let fs = useSelector(state => state.tangGiamFSReducer);
     let dispatch = useDispatch();


    return (
        <div className='container'>

            <p style={{fontSize: `${fs}px`}} className='alert alert-danger'>TangGiamFS</p> 
            <button onClick={() => { 
                let action = {
                    type:"TANG_GIAM", 
                    fs:2
                }
                dispatch(action)

             }} className='btn btn-info'>Tăng</button>
            <button onClick={() => { 
                let action = {
                    type:"TANG_GIAM", 
                    fs:-2
                }
                dispatch(action)

             }} className='btn btn-danger'>Giảm</button>
        </div>
    )
}

// mapStateToProps
//mapDispatchToProps
//connect
