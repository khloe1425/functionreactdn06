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

let timeout = {};




//khi render lại UI => tạo lại function => những biến khai báo trong function sẽ được tạo lại
export default function DemoUseEffect() {

    //! Updating => props , state thay đổi 
    let [number, setNumber] = useState(0);
    let [like, setlike] = useState(0);
    let [arrQH, setQH] = useState([]);
    let [idTP, setTP] = useState("")

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

    //unmound (componentWillUnmound)
    useEffect(() => {
        //trả về object
        timeout = setInterval(() => {
            console.log("call api")
        }, 1000);

        return () => {
            //thực hiện các code khi rời khỏi hoặc xóa component khỏi UI
            clearInterval(timeout);
        }

    }, []);

    /**
     * 2 dropdown : danh sách thành phố, danh sách quận huyện theo thành phố
     * Khi chọn thành phố => tự đông hiển thị danh sách quận huyện tương ứng
     */

    // Updating
    useEffect(() => {
        //sau khi UI render lại xong khi chọn setTP
        //thì idTP đã đc xét xong
        console.log("didUpdate của idTP")
        getArrQH();
    }, [idTP]); //chỉ chạy khi idTP đổi

    let renderQH = () => {
        if (arrQH.length == 0) {
            //chưa có quận huyên => chưa chọn thành phố
            return <option>Hãy chọn thành phố trước</option>
        } else {
            return arrQH.map((qh) => {
                return <option key={qh.id} value={qh.id}>{qh.name}</option>
            })
        }

    }

    let getArrQH = () => {
        if (idTP !== "") {
            //có chọn TP
            //tìm đối tượng thành theo idTP
            let tp = arrLocation.find(objTP => objTP.id === idTP);
            let newArrQH = tp.danhSachQH;
            setQH(newArrQH);

        }
    }

    // console.log("render");
    // console.log("idTP", idTP);
    // console.log("arrQH", arrQH);
    //chỉ chạy khi load ứng dụng
    // getArrQH()


    return (
        <div className='container'>
            <p className='alert alert-danger'>{number}</p>
            <p className='alert alert-danger'>{like}</p>
            <button onClick={() => { setNumber(number + 1) }} className='btn btn-success'>Tăng number</button>

            <h2>Demo chọn thanh phố</h2>
            <div className='row w-50'>
                <div className="col-6">
                    <select className="form-control" onChange={(event) => {
                        // let value =event.target.value;
                        let { value } = event.target;
                        // console.log("value", value);
                        setTP(value);//bất đồng bộ (chạy cuối)
                        //sẽ bị chạy trước khi xét idTP
                        //getArrQH()
                    }}>
                        <option value={""}>Chọn Thành Phố</option>
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