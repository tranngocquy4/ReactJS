import React from 'react'

export default function BookTable(props) {
    function selectPerPage() {

    }
    function createPage() {

    }
    const { data, deleteBook, editBook } = props
    return <>
        <div>
            <select className="form-select" onChange={selectPerPage}>
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
                        'btn btn-'+(props.chooseBook === item.id ? "secondary" : "primary")
                    } onClick={()=>editBook(item)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleteBook(item.id)}>Delete</button>
                    </td>
                </tr>)
                }
            </tbody>
        </table>

        <nav aria-label="Page navigation example">
            <ul className="pagination" id="pagination">
                {createPage()}
            </ul>
        </nav>
    </>
}