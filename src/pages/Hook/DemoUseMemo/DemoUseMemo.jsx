import React, { useMemo, useState } from 'react'
import Cart from './Cart';

//C1: Đặt biến bên ngoài function sẽ không bị tạo lại
// let cart = [
//     { id: 1, name: 'iphone', price: 1000 },
//     { id: 2, name: 'htc phone', price: 2000 },
//     { id: 3, name: 'lg phone', price: 3000 }
// ];

export default function DemoUseMemo() {
    let [like,setLike] = useState(0)

    //khi render lại UI => tạo lại biến cart (array) => tạo lại dịa chỉ ô nhớ mơi 
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 }
    ];

    //C2: luu cache địa chỉ của biến array/object
    let cartMemo= useMemo(() =>{
        return cart
    },[])
    // let cartMemo= useMemo(() => cart,[])

    return (
        <div className='container'>
            <div className="m-5">
                Like: {like} ♥
                <br />
                <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                    setLike(like + 1);
                }}>♥</span>
                <br />
                <br />
                
                <Cart cart={cartMemo}/>
            </div>


        </div>
    )
}
