import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let { id } = useParams();
    let item = props.shoes.find((shoe) => shoe.id == id);

    //2초 후 사라지는 박스 함수 만들기
    const [warning, setWarning] = useState(true);
    useEffect(() => {
        setTimeout(() => {setWarning(false)}, 2000)
    }, []);

    // input에 숫자 아닌 문자 넣으면 알럿뜨게 만들기
    // isNaN('숫자')이면 false isNaN('문자')이면 true 나옴
    const [type, setType] = useState('');
    useEffect(() => {
        if(isNaN(type) == true){
            alert('돈 두댓!')
        }
    }, [type])
    

    return (
        <div className="container">
            {warning ? <div className='alert alert-warning'>2초후 사라짐</div> : null}
            
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            <input onChange={(e) => {setType(e.target.value)}} />
        </div> 
    )
}
export default Detail;