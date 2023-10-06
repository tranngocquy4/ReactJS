import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import APICaller from './APICaller';
import toastr from "toastr"

const root = ReactDOM.createRoot(document.getElementById('root'));
var data = null
var number = 0
var formSubmitBook = {name:"",author:""}
var formSearchBook = {name:"",author:""}
var chooseBook = null
var itemsPerPage = 10
var choosePage = 1
var perPage = 10

function submitBook(e) {
  e.preventDefault()
  var error = false
  if (formSubmitBook.name === "") {
    error = true
    toastr.error("Tên sách không được rỗng")
  }
  if (formSubmitBook.author === "") {
    error = true
    toastr.error("Tên tác giả không được rỗng")
  }
  if (!error) {
    const newBook = {
      name: formSubmitBook.name,
      author: formSubmitBook.author,
      image: ""
    }
    if (chooseBook === null) {
      APICaller.post("",{params:newBook})
      .then(res=>{
        formSubmitBook.name=""
        formSubmitBook.author=""
        data.unshift(res.data.data[0])
        render()
      })
    } else {
      APICaller.patch(chooseBook.toString(),{params:newBook})
      .then(res=>{
        formSubmitBook.name=""
        formSubmitBook.author=""
        const index = data.findIndex(item=>item.id===chooseBook)
        data[index] = res.data.data[0]
        chooseBook = null
        render()
      })
    }
  }
}

function searchBook(e) {
  e.preventDefault()
  choosePage = 1
  callGetAPI(formSearchBook)
}

function selectPerPage(e) {
  perPage = e.target.value
  choosePage = 1
  callGetAPI(formSearchBook)
}

function submitBookHandler(e) {
  formSubmitBook[e.target.name] = e.target.value
  render()
}

function searchBookHandler(e) {
  formSearchBook[e.target.name] = e.target.value
  render()
}

function deleteHandler(id) {
  console.log(id)
  APICaller.delete(id.toString())
  .then(res=>{
    data = data.filter(item=>item.id!==id)
    render()
  })
}

function callGetAPI(params={}) {
  APICaller.get("",{params:{...params, page: choosePage, per_page: perPage}})
  .then(res=>{
    data = res.data.data
    number = res.data.number
    render()
  })
}

function editHandler(id,name,author) {
  if (chooseBook === id) {
    formSubmitBook.name = ""
    formSubmitBook.author = ""
    chooseBook = null
  } else {
    formSubmitBook.name = name
    formSubmitBook.author = author
    chooseBook = id
  }
  render()
  /// viết nội dung hàm
  /// khi nhấn nút edit ~~> nội dung hiển thị lên form
}

function changePage(e) {
  choosePage = +e.target.getAttribute("page")
  callGetAPI({
    ...formSearchBook,
  })
  render()
}

function render() {
  root.render(
    <>
      <form onSubmit={submitBook}>
        <div className="row">
            <div className="col">
                <input onChange={submitBookHandler} value={formSubmitBook.name} className="form-control" name="name" placeholder="Name"/>
            </div>
            <div className="col">
                <input onChange={submitBookHandler} value={formSubmitBook.author} className="form-control" name="author" placeholder="Author"/>
            </div>
            <div className="col">
                <button id="submitBookButton" type="submit" className="btn btn-info">
                  {chooseBook !== null ? "Update" : "Create"}
                </button>
            </div>
        </div>
      </form>

      <hr />

      <form onSubmit={searchBook}>
          <div className="row">
              <div className="col">
                <input onChange={searchBookHandler} value={formSearchBook.name} className="form-control" name="name" placeholder="Name"/>
              </div>
              <div className="col">
                <input onChange={searchBookHandler} value={formSearchBook.author} className="form-control" name="author" placeholder="Author"/>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-info">Search</button>
              </div>
          </div>
      </form>

      <hr />

      <div>
          <select className="form-select" onChange={selectPerPage}>
              <option value="10">10</option>
              <option value="25">25</option>
          </select>
      </div>

      <table className="table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody id="booklist">
            {
              /* {xây dựng data bằng hàm map} */
              data && data.map(item=><tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>
                  <button className={
                    'btn btn-' + (chooseBook === item.id ? "secondary" : "primary")
                  } onClick={()=>{editHandler(item.id,item.name,item.author)}} >Edit</button>
                  <button onClick={()=>{deleteHandler(item.id)}} className='btn btn-danger'>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
      </table>

      <nav aria-label="Page navigation example">
          <ul className="pagination" id="pagination">
              {function () {
                const pages = []
                const totalPages = Math.ceil(number/itemsPerPage)
                for (var i = 1; i < totalPages+1; i++) {
                  pages.push(<li className={`page-item${i === choosePage ? ' active' : ''}`} style={{cursor: "pointer"}}>
                    <a className="page-link" page={i} onClick={changePage}>
                      {i}
                    </a>
                  </li>)
                }
                return pages
              }()}
          </ul>
      </nav>
    </>
    
  );
}

render()
callGetAPI()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
