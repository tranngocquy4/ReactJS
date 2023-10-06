import React, { Component } from 'react'

export default class BookSubmitForm extends Component {
    constructor(props) {
        super(props)
        this.formSubmitBook = this.props.formSubmitBook
        // this.submitBookHandler = this.submitBookHandler.bind(this)
        this.submitBook = this.submitBook.bind(this)
    }
    submitBook(e) {
        e.preventDefault()
        this.props.submitBook({...this.formSubmitBook, image:""})
    }
    render() {
        return (
            <form onSubmit={this.submitBook}>
                <div className="row">
                    <div className="col">
                        <input onChange={this.props.submitBookHandler} value={this.formSubmitBook.name} className="form-control" name="name" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input onChange={this.props.submitBookHandler} value={this.formSubmitBook.author} className="form-control" name="author" placeholder="Author"/>
                    </div>
                    <div className="col">
                        <button id="submitBookButton" type="submit" className="btn btn-info">
                            {(this.props.chooseBook === null) ? "Create" : "Update"}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
