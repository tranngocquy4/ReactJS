function abc() {
    console.log("In từ hàm abc")
}

///// viết 1 hàm xác định số nguyên tố
////// hàm này đầu vào là 1 số nguyên
////// xác định xem số nguyên này có phải là số nguyên tố hay không
////// nếu phải thì trả về true, không thì trả về false

function snt(a) {
    if (a < 2) return false
    for (var i = 2; i < Math.sqrt(a); i++) {
        if (a % i === 0) return false
    }
    return true
}

///// tìm dãy số snt
/////// viết hàm với đầu vào là 1 mảng chỉ chứa toàn số nguyên
/////// trả về mảng chỉ chứa số nguyên tố tìm được trong mảng đó

function daysnt(arr) {
    const resultArr = []
    for (const i of arr) {
        if (snt(i)) resultArr.push(i)
    }
    return resultArr
}


///// tìm số lớn thứ 5
////// viết hàm với đầu vào là 1 mảng chỉ chứa toàn số nguyên
////// trả về số lớn thứ 5 trong mảng

////// input: 5,7,10,10,8,15,20,15,12
////// output: 8

function ham(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i]<arr[j]) {
                const c = arr[i]
                arr[i] = arr[j]
                arr[j] = c
            }
        }
    }
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (i==0 || arr[i] !== arr[i-1]) {
            count += 1
            if (count===5) return arr[i]
        }
    } 
}