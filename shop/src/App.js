import {Nav, Navbar, Container} from 'react-bootstrap';
import data from './data';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'


function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>Features</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map(function(a,i){
                    return(
                      <Card shoes={shoes[i]} i={i+1}/>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<div>회사소개</div>} />
          <Route path="member" element={<div>멤버들소개</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </>
  )
}
function About() {
  return (
    <>
      <div>About 예시페이지 제목</div>
      <Outlet></Outlet>
    </>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
