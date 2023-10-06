import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import tinhTong, { tinhHieu, a, b } from './file'
// import tengicungduoc from "./HoangThinh/HoangThinhinside"
// import blabla from "./HoangThinh"

const root = ReactDOM.createRoot(document.getElementById('root'));
const a = 10
const b = 17.5
const c = "abc"
const d = [7,10,15] // chỉ hiển thị nội dung của array
const e = {a:"hi",b:"hello"} // object không được đặt bên trong JSX (lỗi)
const f = true /// kiểu boolean đưa vào JS sẽ không được hiển thị
const g = null /// kiểu null đưa vào JS sẽ không được hiển thị
const h = undefined /// kiểu undefined đưa vào JS sẽ không được hiển thị
const l = ()=>{console.log("tui là hàm")} /// kiểu function đưa vào JS sẽ không được hiển thị
const j = <a href="https://www.google.com/">hello</a>
const dsHocVien = ["Hồng Thắm","Quỳnh Như","Đức","Đình Chí","Hồng Minh"]
var count = 0
var inputName = ""

function clickMe() {
  count += 1
  console.log(count)
  render()
}

function themHV() {
  dsHocVien.push(inputName)
  render()
}

function handleChange(e) {
  inputName = e.target.value
  render()
}

function render() {
  root.render(
    <>
      <div>Int a: { a }</div>
      <div>Float b: { b }</div>
      <div>String c: { c }</div>
      <div>Array d: { d }</div>
      <div>Boolean f: { f }</div>
      <div>Null g: { g }</div>
      <div>Undefined h: { h }</div>
      <div>Function l: { l }</div>
      <div>JSX j: { j }</div>
      <ul>{ dsHocVien.map(item=><li>{ item }</li>) }</ul>
      <button onClick={clickMe}>Click me: { count }</button>
      <input value={inputName} onChange={handleChange} />
      <button onClick={themHV}>Thêm HV</button>
    </>
  );
}

render()


// const hello = tinhTong(7,9)
// console.log("hello",hello)
// const hi = tinhHieu(9,7)
// console.log("hi",hi)
// console.log("a",a)
// console.log("b",b)
// tengicungduoc(10,15)
// blabla()

//// JSX ~~> Javascript XML
//// HTML là XML

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
