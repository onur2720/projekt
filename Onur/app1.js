var arrInformation = JSON.parse(localStorage.getItem('paymentInformation')) || [];
//Vi tildeler en variabel til vores kort, MC og V fra HTML
var mastercard = document.getElementById('MC');
var vise = document.getElementById('V');
//Vi opretter en class der hedder Paymentinfo

class Paymentinfo {
    constructor(cardNumber, expiryDate, controleNumber) {
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
            alert("kortnummer skal være på præcis 8 tegn");
            return false;
        }
        if (expnum.length != 5) {
            alert("udløbsdato skal være på præcis 4 tegn");
            return false;
        }
        if (controlNum.length != 3) {
            alert("kontrolcifre skal være præcis 3 tegn");
            return false;
        }
    }
}





