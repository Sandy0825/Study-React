import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [list, setList] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [good, setGood] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [intxt, setIntxt] = useState('');

  function Change(){
    let copy = [...list];
    copy[0] = '여자코트 추천';
    setList(copy);
  }
  function Textorder(){
    let text = [...list];
    text.sort();
    setList(text);
  }


  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React StudyBlog</h4>
      </div>
      {/* <button onClick={Textorder}>가나다 순</button>
      <button onClick={Change}>글바뀜</button> */}
      {
        list.map(function(a, i){
          return(
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i)}}>{ list[i] } 
                <span onClick={(e) => {
                  e.stopPropagation();
                  let thumb = [...good];
                  thumb[i] += 1;
                  setGood(thumb);
                }}>👍</span>{good[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                //**배열 항목삭제하기
                //spread와 splice 이용하여 해당 항목 삭제해서 setList재설정
                let del = [...list];
                del.splice(i,1); //인덱스 i번째의 것을 하나 삭제한다 라는 뜻
                setList(del);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input type="text" onChange={(e) => { setIntxt(e.target.value); }}></input>
      <button onClick={() => {
        // **삭제추가하기**

        // - 내가 한 것
        let add = [intxt, ...list]; //unshift 대신에 바로 spread와 배열붙힘
        setList(add);
        let addcount = [0, ...good];
        setGood(addcount);
        
        // -강의 (spread해서 unshift()사용)
        // let copy = [...list];
        // copy.unshift(intxt);
        // setList(copy);
      }}>등록</button>

      {modal ? <Modal list={list} title={title} change={Change}></Modal> : ''}
      
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.list[props.title]}</h4>
      <p>내용</p>
      <p>상세내용</p>
      <button onClick={props.change}>글수정</button>
    </div>
  )
}

export default App;
