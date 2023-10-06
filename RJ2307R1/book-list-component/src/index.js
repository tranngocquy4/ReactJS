import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBooklist from './components/AppBooklist';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import TruyenConLenCha from "./components/TruyenConLenCha/App"

const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(
    <>
      <AppBooklist render={render}/>
      {/* <TruyenConLenCha render={render}/> */}
    </>
  );
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
