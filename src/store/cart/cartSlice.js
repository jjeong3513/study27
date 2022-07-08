import { createSlice } from '@reduxjs/toolkit'

const initialState = [] // 빈 배열을 초기값으로 줌

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        state = state.push(action.payload) ;
        action.type="SET_ADD_ITEM"
    },
    deleteCart: (state,action) => {
        state.splice(action.payload,1);
        action.type="SET_DELETE_ITEM"
    },
   
  },
})

export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer