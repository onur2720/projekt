// Username and Password for the registration form
var MC = document.getElementById('MC');
var V = document.getElementById('V');
var KNR = document.getElementById('KNR');
var btnReg = document.getAnimations('rgr_btn');


function setItem() {
    localStorage.setItem('MC', MC.value);
    localStorage.setItem('V', V.value);
    alert('Kortet er registreret');
}
function storeLogin() {
   // localStorage.setItem('rgr_btn',btnReg.value);
    feilmedelserr();
    alert('Betalingen er godkendt');

}

function feilmedelserr(){
if(KNR.length< 8){
    alert("det er en feil") ;
    }
}








//var objBet = [
    //{
        //KNR: "****************"
        //EX: "**/**"
        //TCR: "***"
    //}
    //]

//function getInfo() {
    //var KNR = document.getElementById("KNR").value
    //var EX = document.getElementById("EX").value
    //var TCR = document.getElementById("TCR").value

    //for (i = 0; i < objBet.length; i++) {
        //if(KNR == objBet[i].KNR && EX == objBet.EX && TCR == objBet.TCR)
            //console.log(KNR + Er godkendt)
    //}
//}



