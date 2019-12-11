//Peder: Der er fire variabler, der får værdierne fra felterne i index.html.
let enteredUsername = document.getElementById('username');
let enteredPassWord = document.getElementById('password');
let checkUsername = document.getElementById('checkusername');
let checkPassword = document.getElementById('checkpassword');
let allUsers;
//Et objekt af klassen User oprettes. Får kun indsat værdier udover "", når signUp() kaldes
let newUser = new User("","", "");
//Peder: Der bruges addEventListener til at kalde på metoden signUp(). Dog fungerer signUp() først, efter at objektet newUser får indsat det ønskede Username og Password
document.getElementById("registration").addEventListener("click", function(){

    newUser.Username = enteredUsername.value;
    newUser.Password = enteredPassWord.value;

    newUser.signUp()
});

document.getElementById("login").addEventListener("click", function(){

    newUser.login()
});
//Peder: Her oprettes vores 4 guide-objekter. Vi har valgt at objekter af klassen guide ikke kan blive skabt på selve HTML-siden, så alle guide objekter skal skrives her:
let guide1 = new Guide("Peder","1");
let guide2 = new Guide("Onur","2");
let guide3 = new Guide("Leila","3");
let guide4 = new Guide("Henrik","4");
document.getElementById("guideLoginbutton").addEventListener("click", function(){

    guide1.checkGuideLogin()
});
