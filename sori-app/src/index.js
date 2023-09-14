import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chp_03/Library';
//import Clock from './chp_04/Clock';
// import Clock from './chp_05/CommentList';
// import CommentList from './chp_05/CommentList';
import NotificationList from './chp_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root')); //리액트18버전으로함

//**chp_03**
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

//**chp_04**
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

//**chp_05**
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

//**chp_06**
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
