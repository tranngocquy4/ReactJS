import logo from './logo.svg';
import './App.css';
import React from 'react';

//// class Component
////// nguyên tắc đặt tên Component là luôn viết hoa chữ cái đầu tiên của mỗi từ (CamelCase)
////// là 1 class được kế thừa từ React.Component
////// phải có hàm render
////// hàm render phải trả về 1 JSX

class TuiLaComponent extends React.Component {
  render() {
    // this.props ### ~~> dạng object
    console.log("props nè:",this.props)
    // const abc = this.props.abc
    const { abc, hello } = this.props
    return <div>Hello {abc}, từ tui là Component</div>
  }
}

export default TuiLaComponent;
