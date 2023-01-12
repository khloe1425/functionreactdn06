// rfc
import React, { useEffect, useState } from 'react'

//nhưng biến không gán lại giá trị ban đầu khi render lại UI thì đặt bên ngoài function
let arrLocation = [
    {
        id: "HCM",
        tenTP: "Hồ Chí Minh",
        danhSachQH: [
            { id: 'Q001', name: "Quận 1" },
            { id: 'Q002', name: "Quận 2" },
            { id: 'Q003', name: "Quận 3" }
        ]
    },
    {
        id: "DN",
        tenTP: "Đà Nẵng",
        danhSachQH: [
            { id: 'HC', name: "Hải Châu" },
            { id: 'LC', name: "Liên Chiểu" },
            { id: 'ST', name: "Sơn Trà" }
        ]
    }
]

//khi render lại UI => tạo lại function => những biến khai báo trong function sẽ được tạo lại
export default function DemoUseEffect() {

    //! Updating => props , state thay đổi 
    let [number, setNumber] = useState(0);
    let [like, setlike] = useState(0);
    let [arrQH, setQH] = useState([])

    //gọi call API, gọi các thư viện slick, counup => sau khi render xong UI
    //componentDidMount, componentDidUpdate (class component)
    //Hook => useEffect (function component) đại diện cho nhiều phương thức của lifecycle
    // useEffect(() => { 
    //     console.log("componentDidMount");
    //     console.log("componentDidUpdate");
    //     //! không nên gọi setState ở componentDidMount và componentDidUpdate
    //     // setlike(like + 1)
    //  })

    //chỉ chạy riêng componentDidMount
    //! useEffect(hàm xử lý code theo lifecycle, mảng rỗng)
    useEffect(() => {
        console.log("componentDidMount");
    }, [])

    /**
     * 2 dropdown : danh sách thành phố, danh sách quận huyện theo thành phố
     * Khi chọn thành phố => tự đông hiển thị danh sách quận huyện tương ứng
     */

    let renderQH = () => {
        if (arrQH.length == 0) {
            //chưa có quận huyên => chưa chọn thành phố
            return <option>Hãy chọn thành phố trước</option>
        } else {
            return arrQH.map((qh) => {
                return <option value={qh.id}>{qh.name}</option>
            })
        }

    }








    console.log("render");
    return (
        <div className='container'>
            <p className='alert alert-danger'>{number}</p>
            <p className='alert alert-danger'>{like}</p>
            <button onClick={() => { setNumber(number + 1) }} className='btn btn-success'>Tăng number</button>

            <h2>Demo chọn thanh phố</h2>
            <div className='row w-50'>
                <div className="col-6">
                    <select className="form-control" id="">
                        <option>Chọn Thành Phố</option>
                        <option value={"HCM"}>Hồ Chí Minh</option>
                        <option value={"DN"}>Đà Nẵng</option>
                    </select>
                </div>
                <div className="col-6">
                    {/* Quận Huyện */}
                    <select className="form-control" id="">
                        {/* hàm giúp render QH theo thành phố */}
                            {renderQH()}
                    </select>
                </div>


            </div>
        </div>
    )


}


//class component => thuộc tính (ở phương thức constructor) sẽ khai báo trong class => thì sẽ không bị ảnh hưởng khi render lại UI
//=> khi render UI => chỉ có phương thức render được gọi lại