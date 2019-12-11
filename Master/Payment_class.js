
class Paymentinfo {
constructor(cardNumber, expiryDate, controleNumber) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.controleNumber = controleNumber;
    }
    //Code review Peder: Vi skal prøve at implementere en løsning, så paymentinfomationer bliver privat til den konto,
    // der er logget ind. Et forslag kan være, at der kommer en ny property på payment, der f.eks. er Id'et på den
    // nuværende bruger
         setItem() {
        const storeObj = {
            cardNumber: document.getElementById('betknr').value,
            expiredDate: document.getElementById('betex').value,
            controleNumber: document.getElementById('bettcr').value
        };
        if (this.validateCardInf() === false) {
            return true;
        } else {
            var paymentinfo = storeObj;
            sessionStorage.setItem('paymentInformation', JSON.stringify(paymentinfo));
            alert("The payment was succesfull. We have also saved your credit card information. Please close the " +
                "browser before you log out for the creditcard information to be deleted");
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
