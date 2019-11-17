var arrInformation = JSON.parse(localStorage.getItem('paymentInformation')) || [];
var mastercard = document.getElementById('MC');
var vise = document.getElementById('V');

function setItem() {
    const storeObj = {
        cardNumber: document.getElementById('betknr').value,
        expiredDate: document.getElementById('betex').value,
        controle: document.getElementById('bettcr').value
    };

    if(validateCardInf() == false) {
        return;
    }
    else {
        arrInformation.push(storeObj);
        localStorage.setItem('paymentInformation', JSON.stringify(arrInformation));
        alert("Betalingen er nu godkendt");
        window.open("Bookkvit2.html");
    }

}
function validateCardInf() {
    var kortnummer = document.getElementById('betknr').value;
    var expnum = document.getElementById('betex').value;
    var controlNum = document.getElementById('bettcr').value;

    if(kortnummer.length !=16) {
        alert("kortnummer skal være på præcis 8 tegn");
        return false;
    }
    if(expnum.length !=5) {
        alert("udløbsdato skal være på præcis 4 tegn");
        return false;
    }
    if (controlNum.length !=3) {
        alert("kontrolcifre skal være præcis 3 tegn");
        return false;
    }
}

function paymentCard1 () {
    alert("MasterCard valgt");
}
function paymentCard2 () {
    alert("Visa valgt");
}




