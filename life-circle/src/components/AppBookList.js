import React, { useState, useEffect } from 'react'
import BookTable from './BookTable'
import BookSubmitForm from './BookSubmitForm'
import APICaller from '../APICaller'

export default function AppBookList(props) {
    const [ data, setData ] = useState(null)
    const [ formSubmitBook, setFormSubmitBook ] = useState({name:"",author:""})
    const [ chooseBook, setChooseBook ] = useState(null)
    const [ number, setNumber ] = useState(0)
    const [ page, setPage ] = useState(1)
    const [ perPage, setPerPage ] = useState(10)
    function callGetAPI() {
        console.log("Call API")
        APICaller.get("",{params:{page: page, per_page: perPage}})
        .then(res=>{
            setData(res.data.data)
            setNumber(res.data.number)
        })
    }
    useEffect(()=>{
        callGetAPI()
    },[page])
    function deleteBook(id) {
        APICaller.delete(id.toString())
        .then(res=>{
            setData(data.filter(item=>item.id !== id))
        })
    }
    function submitBookHandler(e) {
        setFormSubmitBook({
            ...formSubmitBook,
            [e.target.name]:e.target.value
        })
    }
    function editBook(item) {
        if (chooseBook === item.id) {
            setFormSubmitBook({name:"",author:""})
            setChooseBook(null)
        } else {
            setFormSubmitBook(data.find(i=>i.id===item.id))
            setChooseBook(item.id)
        }
    }
    function submitBook(item) {
        if (chooseBook === null) {
            APICaller.post("",{params: item})
            .then(res=>{
                setData([res.data.data[0],...data])
            })
        } else {
            APICaller.patch(chooseBook.toString(),{params: item})
            .then(res=>{
                const index = data.findIndex(item=>item.id===chooseBook)
                const dataNew = [...data]
                dataNew[index] = item
                setData(dataNew)
                setChooseBook(null)
                setFormSubmitBook({name:"",author:""})
            })
        }
    }
    console.log("render")
    return (
        <>
            <button onClick={()=>setPage(2)}>Click me</button>
            <BookSubmitForm submitBook={submitBook} chooseBook={chooseBook} submitBookHandler={submitBookHandler} formSubmitBook={formSubmitBook}/>
            <hr />
            <BookTable chooseBook={chooseBook} data={data} deleteBook={deleteBook} editBook={editBook}/>
        </>
    )
}