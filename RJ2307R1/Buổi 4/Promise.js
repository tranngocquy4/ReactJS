console.log("hello")
console.log("hi")

const now = new Date().getTime()

///// now đang là 7:44:30pm

console.log("call API để lấy dữ liệu lần thứ nhất")

// callback hell

// setTimeout(()=>{
//     console.log("Đã có dữ liệu xử lý gì đó")
//     console.log("call API để lấy dữ liệu lần thứ hai")
//     setTimeout(() => {
//         console.log("Đã có dữ liệu lần thứ 2")
//         console.log("call API để lấy dữ liệu lần thứ ba")
//         setTimeout(() => {
//             console.log("Đã có dữ liệu lần thứ 3")
//             console.log("call API để lấy dữ liệu lần thứ ba")
//             setTimeout(() => {
//                 console.log("Đã có dữ liệu lần thứ 3")
//                 console.log("call API để lấy dữ liệu lần thứ ba")
//                 setTimeout(() => {
//                     console.log("Đã có dữ liệu lần thứ 3")
//                     console.log("call API để lấy dữ liệu lần thứ ba")
//                     setTimeout(() => {
//                         console.log("Đã có dữ liệu lần thứ 3")
//                     },2000);
//                 },2000);
//             },2000);
//         },2000);
//     },2000);
// },2000)

// ajax, axios, fetch

const a = new Promise((resolve,reject)=>{
    console.log("Call API")
    setTimeout(()=>{
        console.log("đã call xong API")
        const data = [1,2,3]
        resolve(data)
    },5000)
})

a.then((value)=>{
    console.log("value:",value)
    return new Promise((resolve,reject)=>{
        console.log("Call API 2")
        setTimeout(()=>{
            console.log("đã call xong API 2")
            const data = [5,7,8]
            resolve(data)
        },1000)
    })
})
.then((value)=>{
    console.log("value:",value)
    return new Promise((resolve,reject)=>{
        console.log("Call API 3")
        setTimeout(()=>{
            console.log("đã call xong API 3")
            const data = [9,10,15]
            resolve(data)
        },1000)
    })
})
.then((value)=>{
    console.log(value)
    return "ABC"
})
.then((value)=>{
    console.log("in gì đó sau khi trả về abc",value)
})
.catch((e)=>{
    console.log(e)
})

console.log("xin chào")