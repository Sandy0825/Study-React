import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [list, setList] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [good, setGood] = useState([0,1,2]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);

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
      <button onClick={Textorder}>가나다 순</button>
      <button onClick={Change}>글바뀜</button>
      {
        list.map(function(a, i){
          return(
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i)}}>{ list[i] } 
                <span onClick={() => {
                  let thumb = [...good];
                  thumb[i] += 1;
                  setGood(thumb);
                }}>👍</span>{good[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
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
