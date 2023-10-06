import React, { Component } from 'react'
import BookTable from './BookTable'
import BookSearchForm from './BookSearchForm'
import BookSubmitForm from './BookSubmitForm'
import axios from "axios"
import token from "../token"

const data = [
    {id:1,name:"sách 1",author:"tác giả 1"},
    {id:2,name:"sách 2",author:"tác giả 2"},
    {id:3,name:"sách 3",author:"tác giả 3"},
]

export default class AppBooklist extends Component {
    constructor(props) {
        super(props)
        this.APICaller = axios.create({
            baseURL: "http://api.iamdien.com:8000/book/",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                token: token,
            }
        })
        this.choosePage = 1
        this.perPage = 10
        this.data = null
        this.number = 0
        this.choosePage = 1
        this.itemsPerPage = 10
        this.callGetAPI()
        this.submitBook = this.submitBook.bind(this)
        this.formSubmitBook = {name:"",author:""}
        this.chooseBook = null
    }

    callGetAPI(params={}) {
        this.APICaller.get("",{params:{...params, page: this.choosePage, per_page: this.perPage}})
        .then(res=>{
          this.data = res.data.data
          this.number = res.data.number
          this.props.render()
        })
    }
    changePage = (page) => {
        this.choosePage = page
        this.callGetAPI()
    }
    submitBook(newBook) {
        if (this.chooseBook === null) {
            this.APICaller.post("",{params:newBook})
            .then(res=>{
                this.data.unshift(res.data.data[0])
                this.props.render()
            })
        } else {
            this.APICaller.patch(this.chooseBook.toString(),{params:newBook})
            .then(res=>{
                this.formSubmitBook.name=""
                this.formSubmitBook.author=""
                const index = this.data.findIndex(item=>item.id===this.chooseBook)
                this.data[index] = res.data.data[0]
                this.chooseBook = null
                this.props.render()
            })
        }
    }
    deleteBook = (id) => {
        this.APICaller.delete(id.toString())
        .then(res=>{
            this.data = this.data.filter(item=>item.id!==id)
            this.props.render()
        })
    }
    editBook = (data) => {
        if (data.id === this.chooseBook) {
            this.formSubmitBook.name = ""
            this.formSubmitBook.author = ""
            this.chooseBook = null
        } else {
            this.formSubmitBook.name = data.name
            this.formSubmitBook.author = data.author
            this.chooseBook = data.id
        }
        this.props.render()
    }
    submitBookHandler = (e)=>{
        this.formSubmitBook[e.target.name] = e.target.value
        this.props.render()
    }
    render() {
        return (
            <>
                <BookSubmitForm render={this.props.render} chooseBook={this.chooseBook} submitBookHandler={this.submitBookHandler} formSubmitBook={this.formSubmitBook} submitBook={this.submitBook} />
                <hr />
                <BookSearchForm render={this.props.render} />
                <hr />
                <BookTable changePage={this.changePage} editBook={this.editBook} number={this.number} choosePage={this.choosePage} itemsPerPage={this.itemsPerPage} chooseBook={this.chooseBook} data={this.data} deleteBook={this.deleteBook} render={this.props.render}/>
            </>
        )
    }
}
