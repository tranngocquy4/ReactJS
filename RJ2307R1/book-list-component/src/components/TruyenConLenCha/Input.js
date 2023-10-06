import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.value = ""
    }
    handleInput = (e) => {
        this.value = e.target.value
        this.props.render()
    }
    render() {
        return (
            <>
                <input value={this.value} onChange={this.handleInput} />
                <button onClick={()=>this.props.changeValue(this.value)}>Click me</button>
            </>
        )
    }
}
