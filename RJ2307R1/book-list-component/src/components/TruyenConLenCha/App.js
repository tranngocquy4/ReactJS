import React, { Component } from 'react'
import Label from './Label'
import Input from './Input'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.a = "tui là a"
    }
    changeValue = (value) => {
        this.a = value
        this.props.render()
    }
    render() {
        return (
        <>
            <label>{this.a}</label>
            <Label value={this.a}/>
            <Input changeValue={this.changeValue} render={this.props.render}/>
        </>
        )
    }
}
