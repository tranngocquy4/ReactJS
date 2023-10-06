import React, { Component } from 'react'

export default class BookTable extends Component {
  changePage = (e) => {
    this.props.changePage(+e.target.getAttribute("page"))
  }
  createPage = () => {
    const { number, choosePage, itemsPerPage } = this.props
    const pages = []
    const totalPages = Math.ceil(number/itemsPerPage)
    for (var i = 1; i < totalPages+1; i++) {
      pages.push(<li className={`page-item${i === choosePage ? ' active' : ''}`} style={{cursor: "pointer"}}>
        <a className="page-link" page={i} onClick={this.changePage}>
          {i}
        </a>
      </li>)
    }
    return pages
  }
  selectPerPage = (e) => {
    
  }
  render() {
    const { data, deleteBook, editBook } = this.props
    return (
      <>
        <div>
          <select className="form-select" onChange={this.selectPerPage}>
              <option value="10">10</option>
              <option value="25">25</option>
          </select>
        </div>
        <table className='table'>
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
                      'btn btn-'+(this.props.chooseBook === item.id ? "secondary" : "primary")
                    } onClick={()=>editBook(item)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleteBook(item.id)}>Delete</button>
                  </td>
                </tr>)
              }
            </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination" id="pagination">
              {this.createPage()}
          </ul>
        </nav>
      </>
    )
  }
}
