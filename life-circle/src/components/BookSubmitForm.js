import React from 'react'

export default function BookSubmitForm(props) {
    function submitBook(e) {
        e.preventDefault()
        props.submitBook({...props.formSubmitBook, image:""})
    }
    return (
        <form onSubmit={submitBook}>
            <div className="row">
                <div className="col">
                    <input onChange={props.submitBookHandler} value={props.formSubmitBook.name} className="form-control" name="name" placeholder="Name"/>
                </div>
                <div className="col">
                    <input onChange={props.submitBookHandler} value={props.formSubmitBook.author} className="form-control" name="author" placeholder="Author"/>
                </div>
                <div className="col">
                    <button id="submitBookButton" type="submit" className="btn btn-info">
                        {(props.chooseBook === null) ? "Create" : "Update"}
                    </button>
                </div>
            </div>
        </form>
    )
}