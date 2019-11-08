// Username and Password for the registration form
var arrInformation = JSON.parse(localStorage.getItem('paymentInformation')) || [];


function setItem() {
    const storeObj = {
        cardNumber: document.getElementById('KNR').value,
        expiredDate: document.getElementById('EX').value,
        controle: document.getElementById('TCR').value
    };

    for (var i = 0; i < arrInformation.length; i++) {
        if (arrInformation[i].cardNumber!=8 && arrInformation[i].expiredDate != 4 && arrInformation[i].controle != 3) {
           // alert("Kortnummer skal være mere end 8 tegn");
            console.log("testtest");
            return false;
        }



    }
    arrInformation.push(storeObj);
    localStorage.setItem('paymentInformation', JSON.stringify(arrInformation));
    return;


        // alert("Kortet er registreret");

}
function storeLogin() {


    // // localStorage.setItem('rgr_btn',btnReg.value);
    // console.log(KNR.value.length);
    // if (KNR.value.length < 8) {
    //     alert("Der er en fejl ved kortnummeret");
    // }
    // console.log(EX.value.length);
    // if (EX.value.length < 4) {
    //     alert("Der en fejl ved udløbsdatoen");
    // }
    // console.log(TCR.value.length);
    // if (TCR.value.length < 3) {
    //     alert("Der er en fejl ved Kontrolnummeret");
    // } else {
    //     alert('Betalingen er godkendt ');
    //
    // }
}


