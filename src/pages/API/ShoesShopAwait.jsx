// rfc
import React, { useEffect, useState } from 'react';
import axios from 'axios';


/**
 * B1: Tao UI (button call api, row-col hiển thị sản phẩm)
 * B2: Tạo function call API (console.log) 
 * B3: render lại UI để hiển thị data lên UI => lưu data vào state để khi setState => render lại UI
 * B4: làm sao để khi load web sẽ hiển thị sẵn dữ liệu từ API lên UI
 * 
 *  1. load ứng dụng lên
 *  2. khởi tạo state , hàm 
 *  3. chạy return => render UI
 *  4. useEffect gọi hàm call API (didmount)
 *  5. setState (trong hàm call API) => render lại UI
 *  6. arrShoes có data mới
 *  7. Binding data lên UI
 */
export default function ShoesShopAwait() {
    let [arrShoes, setArrShoes] = useState([]);


    //mouting (load ứng dụng), didmount (chạy khi render xong UI, khi render lại UI sẽ không chạy lại)
    useEffect(() => { 
        //code chạy trong didmount
        getShoesList();
     }, [])


    //hàm có xử lý bất đồng bộ thì đặt từ khóa async
    const getShoesList = async () => {

        //await giúp trình duyệt chờ xử lý lấy xong dữ liệu rồi mới chạy tiếp code
        //await chỉ dùng trong hàm có khai báo async
        try {
            //xử lý thành công
            let result = await axios({
                method: "GET",
                url: "https://shop.cyberlearn.vn/api/Product"
            });
            // console.log(result.data)
            console.log(result.data.content)

            setArrShoes(result.data.content);

        } catch (error) {
            //thất bại
            console.log(error)
        }

    }

    const renderUI = () => {
        return arrShoes.map((item) => {
            return <div className="col-4" key={item.id}>
                <div className="card">
                    <img className="card-img-top" src={item.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>

            </div>
        })
    }

    return (
        <div className='container'>
            <h2>ShoesShopAwait</h2>
            <button className='btn btn-danger' onClick={getShoesList}>Call API</button>
            <div className="row">
                {renderUI()};
            </div>
        </div>
    )
}


// Promise1.then((r1) => { 
//     Promise2.then((r2) => { 
//         Promise2.then()
//      })
//  })