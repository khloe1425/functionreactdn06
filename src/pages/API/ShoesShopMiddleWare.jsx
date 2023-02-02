import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SHOES_LIST } from '../../redux/types/shoesShopType';
import { getShoesListAction } from '../../redux/action/shoesShop/shoesShopAction';




export default function ShoesShopMiddleWare() {

    let { arrShoes } = useSelector(state => state.shoesShopReducer);

    let dispatch = useDispatch()


    useEffect(() => {
        getShoesList();
    }, [])




    const getShoesList = () => {

        /**
             * action:
             * loai 1: đối tượng
             * loai 2: hàm function
             */
        //TODO Gán hàm action của shoesShopAction
        //action creator
        //! khi action loại 2 có xử lý call api và dispatch data lên reducer => middleware => đẩy dữ liệu từ API lên store
        //middleware => tạo 1 hàm dispatch2
        let action = getShoesListAction("sp001");

        //!dispatch 1 sẽ Gọi hàm action
        //chỉ nhận vào hàm chưa đc gọi
        dispatch(action)


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
            <h2>ShoesShopMiddleWare</h2>

            <div className="row">
                {renderUI()}
            </div>
        </div>
    )
}
