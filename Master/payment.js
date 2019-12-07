var arrInformation = JSON.parse(localStorage.getItem('paymentInformation')) || [];

var tours =  JSON.parse(localStorage.getItem("tours"));
var tour =  JSON.parse(localStorage.getItem("paymentinfo"));
var payment = new Paymentinfo("");
var userObject = new User("");
document.getElementById("rgr_btn").addEventListener("click", function(){

    payment.setItem()
});

document.getElementById("cancel").addEventListener("click", function(){

    window.location.href = "userPage.html"
});

