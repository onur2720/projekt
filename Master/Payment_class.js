
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
        if (this.validateCardInf() === false) {
            return true;
        } else {
            arrInformation.push(storeObj);
            localStorage.setItem('paymentInformation', JSON.stringify(arrInformation));
            alert("The payment was succesfull");
            userObject.bookTour();
            window.location.href = "userPage.html"
        }
    }

         validateCardInf() {
        var kortnummer = document.getElementById('betknr').value;
        var expnum = document.getElementById('betex').value;
        var controlNum = document.getElementById('bettcr').value;

        if (kortnummer.length !== 16) {
            alert("THe cardnumber needs to be 16 numbers");
            return false;
        }
        if (expnum.length !== 5) {
            alert("Last use date needs to be 5 signs");
            return false;
        }
        if (controlNum.length !== 3) {
            alert("Security code needs to be 3 numbers");
            return false;
        }
    }
}
