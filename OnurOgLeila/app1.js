var arrInformation = JSON.parse(localStorage.getItem('paymentInformation')) || [];
//Vi tildeler en variabel til vores kort, MC og V fra HTML
var mastercard = document.getElementById('MC');
var vise = document.getElementById('V');
//Vi opretter en class der hedder Paymentinfo

var tours =  JSON.parse(localStorage.getItem("tours"));
var tour =  JSON.parse(localStorage.getItem("paymentinfo"));
var infoo = new Paymentinfo("");
var User2 = new User("")
document.getElementById("rgr_btn").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    infoo.setItem()
});

document.getElementById("cancel").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    window.location.href = "userPage.html"
});
   /* constructor(cardNumber, expiryDate, controleNumber) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.controleNumber = controleNumber;
    }
        static setItem() {
        const storeObj = {
            cardNumber: document.getElementById('betknr').value,
            expiredDate: document.getElementById('betex').value,
            controle: document.getElementById('bettcr').value
        };
        if (this.validateCardInf() == false) {
            return;
        } else {
            arrInformation.push(storeObj);
            localStorage.setItem('paymentInformation', JSON.stringify(arrInformation));
            alert("Betalingen er nu godkendt");
            window.open("Bookkvit1.html");
        }
    }
    //Her kører vi et if-statement, der skal kontrollere om kortinformationerne har den korrekte længde
        static validateCardInf() {
        var kortnummer = document.getElementById('betknr').value;
        var expnum = document.getElementById('betex').value;
        var controlNum = document.getElementById('bettcr').value;

        if (kortnummer.length != 16) {
            alert("kortnummer skal være på præcis 16 tegn");
            return false;
        }
        if (expnum.length != 5) {
            alert("udløbsdato skal være på præcis 5 tegn");
            return false;
        }
        if (controlNum.length != 3) {
            alert("kontrolcifre skal være præcis 3 tegn");
            return false;
        }
    }
}

*/



