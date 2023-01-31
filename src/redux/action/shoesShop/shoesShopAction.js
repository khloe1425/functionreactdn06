import axios from "axios";
import { GET_SHOES_LIST } from "../../types/shoesShopType";

//TODO: tạo hàm action

export const getShoesListAction = (id) =>{
    console.log(id)
    
    //trả về 1 hàm chưa gọi
    return async (dispatch2) => {
        
        try {
            //thành công
            let result = await axios({
                method: "GET",
                url: "https://shop.cyberlearn.vn/api/Product"
            });
    
            let action = {
                type: GET_SHOES_LIST,
                mangShoes: result.data.content
            }
            //đẩy dữ liệu lên reducer/store
            dispatch2(action)
    
        } catch (error) {
            console.log(error)
        }
    }
}


























// const getShoesList = async () => {

        

//     try {
//         //thành công
//         let result = await axios({
//             method: "GET",
//             url: "https://shop.cyberlearn.vn/api/Product"
//         });
        
//         let action = {
//             type:GET_SHOES_LIST,
//             mangShoes:result.data.content
//         }
//         dispatch(action)

//     } catch (error) {
//         console.log(error)
//     }

// }