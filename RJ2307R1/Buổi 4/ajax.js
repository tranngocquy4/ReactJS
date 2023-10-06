$.ajax({
    url : "http://api.iamdien.com:8000/get_name/?id=40",
    // url: "https://cellphones.com.vn/mobile/samsung.html",
    type: "GET", 
    data : {},
    success: function(response, textStatus, jqXHR) {
        console.log(response)
    },
    error: function (jqXHR, textStatus, errorThrown) {
        
    }
})

//// tạo 1 trang web có 1 khung input, 1 nút submit, 1 random
//// nhập số vào input, nhân submit ~~> call API lấy ra tên dựa theo số nhập trên input và hiển thị lên trình duyệt
//// nhấn random ~~> call API random ra 1 con số ~~> hiển thị lên input và call API lấy ra tên dựa số theo random rồi hiển thị lên trình duyệt

const number = document.querySelector("#number")
const name = document.querySelector("#name")
const loading = document.querySelector("#loading")

setInterval(() => {
    loading.innerHTML += "."
    if (loading.innerHTML.length > 10) {
        loading.innerHTML = "loading"
    }
}, 500);

function showLoading() {
    loading.style.display = "inline"
}

function hideLoading() {
    loading.style.display = "none"
}

function submitHandle() {
    showLoading()
    $.ajax({
        url : `http://api.iamdien.com:8000/get_name/?id=${number.value}`,
        type: "GET", 
        data : {},
        success: function(response, textStatus, jqXHR) {
            hideLoading()
            name.innerHTML = response
        },
        error: function (jqXHR, textStatus, errorThrown) {
            hideLoading()
        }
    }) 
}

function randomHandle() {
    showLoading()
    $.ajax({
        url : `http://api.iamdien.com:8000/random_number/`,
        // url: "https://cellphones.com.vn/mobile/samsung.html",
        type: "GET", 
        data : {},
        success: function(response, textStatus, jqXHR) {
            hideLoading()
            number.value = response
            submitHandle()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            hideLoading()
        }
    }) 
}