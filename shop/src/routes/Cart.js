import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, addCount } from "./../store.js";
import { changeAge, increase } from "./../store/userSlice.js";

function Cart() {
    // let list = useSelector((state) => { return state.basket }) //어떤 state를 쓸지 구별하기 (예- state.stock, state.user)
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => { dispatch(changeAge()) }}>나이변경</button>
            <button onClick={() => { dispatch(changeName()) }}>이름변경</button>
            <button onClick={() => { dispatch(increase(100)) }}>100쁠라스</button>
             {state.user2.age}살 {state.user}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.basket.map((a,i) => 
                            <tr key={i}>
                                <td>{state.basket[i].id}</td>
                                <td>{state.basket[i].name}</td>
                                <td>{state.basket[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                    dispatch(addCount(state.basket[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;