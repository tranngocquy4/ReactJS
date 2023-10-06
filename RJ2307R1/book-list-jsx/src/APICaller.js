import axios from "axios"
import token from "./token"

const APICaller = axios.create({
    baseURL: "http://api.iamdien.com:8000/book/",
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        token: token,
    }
})

export default APICaller