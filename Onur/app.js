// Username and Password for the registration form
var MC = document.getElementById('MC');
var V = document.getElementById('V');
var KNR = document.getElementById('KNR');
var EX = document.getElementById('EX');
var btnReg = document.getElementById('rgr_btn');
var TCR = document.getElementById('TCR');


function setItem() {
    localStorage.setItem('MC', MC.value);
    localStorage.setItem('V', V.value);
    alert("Kortet er registreret");
}
function storeLogin() {
    // localStorage.setItem('rgr_btn',btnReg.value);
    console.log(KNR.value.length);
    if (KNR.value.length < 8) {
        alert("Der er en fejl ved kortnummeret");
    }
    console.log(EX.value.length);
    if (EX.value.length < 4) {
        alert("Der en fejl ved udløbsdatoen");
    }
    console.log(TCR.value.length);
    if (TCR.value.length < 3) {
        alert("Der er en fejl ved Kontrolnummeret");
    } else {
        alert('Betalingen er godkendt ');

    }
}


