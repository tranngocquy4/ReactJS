const a = []

a.push(5)

const b = {}

b.newKey = "hello"

console.log('a',a)
console.log('b',b)

if (true) {
    const c = 10
    console.log("c trong block",c)
}

// không sử dụng được ở ngoài block

// console.log("c ngoài block",c)

// var, let

if (true) {
    var d = 10
    console.log("d trong block",d)
}

console.log("d ngoài block",d)

function abc() {
    var e = 16 // biến local
    console.log("e trong function",e)
}

abc()

// biến e là biến local không gọi ngoài hàm được

// console.log("e ngoài function",e)

var f = 17 // biến global

function abc2() {
    console.log("f trong function",f)
}

abc2()

console.log("f ngoài function",f)

if (true) {
    let g = 20
    console.log("g trong block",g)
}

// console.log("g ngoài block",g)

// -------------------------------------- //

function ham() {
    console.log("hàm")
}

const ham_arrow = ()=>{
    console.log("hàm")
}

function tong(a,b) {
    console.log(a+b)
}

const tong_arrow = (a,b)=>{
    console.log(a+b)
}

function tong2(a,b) {
    return a+b
}

const tong2_arrow = (a,b)=>a+b

function tongsieucap(a,b) {
    var tong = 0
    for (var i =0; i<a;i++) {
        tong += b+i
    }
    return tong
}

const tongsieucap_arrow = (a,b)=>{
    var tong = 0
    for (var i =0; i<a;i++) {
        tong += b+i
    }
    return tong
}

function mu2(a) {
    return a**2
}

const mu2_arrow = a=>a**2

function hello() {
    console.log('hello')
}

const hello_arrow = ()=>console.log("hello")

// -------------------------------------- //

const hamMacDinh = (a,b=3) => a+b

const hamMacDinh2 = (a,b=3,c=10) => a+b+c

const hamMacDinh3 = (a,b=3,c=10) => {
    console.log("a:",a)
    console.log("b:",b)
    console.log("c:",c)
}

// -------------------------------------- //

function hamKhac(thamSo) {
    console.log("in hàm khác")
    console.log("thamSo + 35:",thamSo+35)
    return 20
}

const hamMoi = (a,b)=>{
    console.log("b",b)
    b(a)
}

// hamMoi(17,hamKhac)

hamMoi(20,(thamSo)=>{
    console.log(thamSo*7)
})

// -------------------------------------- //

function hamNay(item) {
    return item*3
}

function giaiThua(item) {
    var result = 1
    for (var i = 2; i <= item; i++) {
        result *= i
    }
    return result
}

const ListSo = [7,10,15,20,5]

const ListSoMoi = ListSo.map(giaiThua)

const ListSoFilter = ListSo.filter(item=>item > 10)

const ListSoSort = ListSo.sort((a,b)=>b-a)

// setTimeout và setInterval là một hàm sử dụng callback

const ListHocVien = [
    {id:1,name:"Thanh Loan",age:19,gender:"nữ"},
    {id:2,name:"Thiện",age:21,gender:"nam"},
    {id:3,name:"San San",age:20,gender:"nữ"},
]

const ListHocVienMoi = ListHocVien.map((item)=>{
    /// thêm 1 key mới cho item là key class với giá trị là RJ2307R1
    /// thuộc tính lan truyền.
    const newItem = {...item, class:"RJ2307R1"} 
    // sao chép ra cái item mới không phải là item cũ
    /// newItem là một object hoàn toàn riêng biệt với item
    return newItem
})

const ListHocVienFilter = ListHocVien.filter((item)=>{
    /// hàm này phải trả về 1 trong 2 kết quả là true hoặc là false
    return item.gender === "nữ"
})

const ListHocVienFilter2 = ListHocVien.filter((item)=>{
    /// hàm này phải trả về 1 trong 2 kết quả là true hoặc là false
    return item.age > 20
})

const ListHocVienSort = ListHocVien.sort((a,b)=>a.age-b.age)
// Sắp xếp chữ cái đầu theo bảng chữ cái