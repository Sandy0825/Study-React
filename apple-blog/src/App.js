import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [list, setList] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [good, setGood] = useState(0);
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
      <div className="list">
        <h4>{ list[0] } <span onClick={() => {setGood(good+1)}}>👍</span>{good}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ list[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ list[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
