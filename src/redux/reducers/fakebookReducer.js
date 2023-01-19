// rxr

import { ADD_COMMENT } from "../types/fakebookType"

const initialState = {
    arrComment:[
        {username:"user123", comment:"ahihihi", avatar:"https://i.pravatar.cc/?u=77"},
        {username:"user456", comment:"hello", avatar:"https://i.pravatar.cc/?u=77"},
    ]
}

export const fakebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
        // console.log(action.userComment);
        //copy phần tử của mảng cũ , thêm phần tử mới
        state.arrComment = [...state.arrComment,action.userComment ]

    return {...state}
  

  default:
    return state
  }
}
