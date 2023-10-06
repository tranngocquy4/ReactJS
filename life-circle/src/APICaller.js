import token from "./token"
// import axios from "axios"

export default axios.create({
    baseURL: "http://api.iamdien.com:8000/book/",
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        token: token,
    }
})
