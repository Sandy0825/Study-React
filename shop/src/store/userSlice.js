import { createSlice } from '@reduxjs/toolkit'


let user2 = createSlice({
  name: 'user2', 
  initialState: {name:'kim', age:20}, //초기값이 객체일때
  reducers: {
    changeAge(state) {
      state.age += 1 //array/object의 경우 직접수정해도 state변경됨
    },
    increase(state, a) {
      state.age += a.payload //파라미터입력으로 함수사용 & 파라미터자리에 넣은 자료들은 payload사용
      // ex) increase(10) : +10
      // ex) increase(100) : +100
    }
  }
})
export let { changeAge, increase } = user2.actions;
export default user2;