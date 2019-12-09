var paymentcredintials = JSON.parse(sessionStorage.getItem('paymentInformation')) || [];
console.log(paymentcredintials);


    document.getElementById("betknr").value = "";
if(paymentcredintials.cardNumber){

    document.getElementById("betknr").value = paymentcredintials.cardNumber
}

    document.getElementById("betex").value = "";
if(paymentcredintials.cardNumber) {

    document.getElementById("betex").value = paymentcredintials.expiredDate;
}

document.getElementById("bettcr").value = "";
if(paymentcredintials.cardNumber) {

    document.getElementById("bettcr").value = paymentcredintials.controleNumber;
}
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

