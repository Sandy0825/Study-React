import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props) {
    let { id } = useParams();
    let item = props.shoes.find((shoe) => shoe.id == id);

    //** [1] ** 2초 후 사라지는 박스 함수 만들기
    // const [warning, setWarning] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {setWarning(false)}, 2000)
    // }, []);

    //** [2] ** input에 숫자 아닌 문자 넣으면 알럿뜨게 만들기
    // isNaN('숫자')이면 false isNaN('문자')이면 true 나옴
    // const [type, setType] = useState('');
    // useEffect(() => {
    //     if(isNaN(type) == true){
    //         alert('돈 두댓!')
    //     }
    // }, [type])

    // ** [3] ** 탭 UI 컴포넌트 만들기
    let [tab, setTab] = useState(0);
    
    // ** [4]숙제 ** : detail로드시에 fade 애니메이션 효과 주기
    let [loadfade, setLoadfade] = useState('');
    useEffect(() => {
        setTimeout(() => { setLoadfade('end') }, 100)
        return() => {setLoadfade('')}
    }, [])

    

    return (
        <div className={'container start ' + loadfade}>
            {/* [1] */}
            {/* {warning ? <div className='alert alert-warning'>2초후 사라짐</div> : null} */}
            
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
            
            {/* [2] */}
            {/* <input onChange={(e) => {setType(e.target.value)}} /> */}

            {/* [3] */}
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
            
        </div> 
    )
}

function TabContent({ tab }) {
    // [4] fade 애니메이션 효과 주기
    let [fade, setFade] = useState('');
    //useEffect이용해서 시행순서 적용시키기!!
    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)
        return() => {setFade('')}
    }, [tab])
    
    
    // [3]
    return (
        <div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )  
}

export default Detail;