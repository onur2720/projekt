
class Paymentinfo {
constructor(cardNumber, expiryDate, controleNumber) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.controleNumber = controleNumber;
    }
         setItem() {
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
            User2.bookTour2();
            window.open("userPage.html");
        }
    }
    //Her kører vi et if-statement, der skal kontrollere om kortinformationerne har den korrekte længde
         validateCardInf() {
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
