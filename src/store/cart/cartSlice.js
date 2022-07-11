import { createSlice } from '@reduxjs/toolkit'

const initialState = [] // 빈 배열을 초기값으로 줌

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        const equalItem = state.findIndex(ele=> ele.id === action.payload.id); //값이 object로 오기 때문에 [0]을 붙여주지 않음
        if(equalItem >= 0){
          alert('장바구니에 동일한 상품이 있습니다.')
        } else{
          state = state.push(action.payload);//'state =' 이건 없어도 됨 
        }
        action.type="SET_ADD_ITEM"
    },
    deleteCart: (state,action) => {
      console.log(action.payload)
      const num = state.findIndex((ele)=> ele.id === action.payload[0].id) //배열로 오기 때문에 [0]을 붙여줌
      state = state.splice(num,1);
      action.type="SET_DELETE_ITEM"
    },
   
  },
})

export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer