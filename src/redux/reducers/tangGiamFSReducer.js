// rxr

//giá trị ban đầu của state
const initialState = 16;

export const tangGiamFSReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TANG_GIAM":{
      
        state += action.fs

      return state
    }
  default:
    return state
  }
}
