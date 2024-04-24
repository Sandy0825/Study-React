import { configureStore, createSlice } from '@reduxjs/toolkit'
import user2 from './store/userSlice'

//state만들기
let user1 = createSlice({
  name: 'user', //state이름
  initialState: 'Jeong', //초기값,
  reducers: {
    changeName(state) {
      return 'john' + state;
    }
  }
})
export let { changeName } = user1.actions;

//** store/userSlice.js에 보관해놓음 **
// let user2 = createSlice({
//   name: 'user2', 
//   initialState: {name:'kim', age:20}, //초기값이 객체일때
//   reducers: {
//     changeAge(state) {
//       state.age += 1 //array/object의 경우 직접수정해도 state변경됨
//     },
//     increase(state, a) {
//       state.age += a.payload //파라미터입력으로 함수사용 & 파라미터자리에 넣은 자료들은 payload사용
//       // ex) increase(10) : +10
//       // ex) increase(100) : +100
//     }
//   }
// })
// export let { changeAge, increase } = user2.actions;



let stock = createSlice({
  name: 'stock',
  initialState: [10,11,12]
})

let basket = createSlice({
  name: 'basket',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => {return a.id === action.payload}) 
      state[num].count++;
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})
export let { addCount, addItem } = basket.actions;

export default configureStore({
  reducer: { 
    //여기에 등록해야 사용가능, 여기 설정이름으로 밖에서 씀
    user: user1.reducer,
    user2: user2.reducer,
    stock: stock.reducer,
    basket: basket.reducer
  }
}) 