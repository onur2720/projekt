
// Der hentes fra html-dokumentet de værdier, der står i feltet med ID: username og password. Disse værdier tildeles til to variabler, som hedder enteredUsername og enteredPassword
let enteredUsername = document.getElementById('username');
let enteredPassWord = document.getElementById('password');
let checkUsername = document.getElementById('checkusername');
let checkPassword = document.getElementById('checkpassword');
let allUsers;
//Når registration siden åbnes, vil objektet newUser automatisk bliver oprettet med tomme værdier
let newUser = new User("","", "");
//VI bruger addEventListener til at tjekke efter, om registration knappen bliver trykket
document.getElementById("registration").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    newUser.Username = enteredUsername.value;
    newUser.Password = enteredPassWord.value;
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.signUp()
});

document.getElementById("login").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne

    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.login()
});

//Der skabes tre nye objekter, der hedder guide1,guide2 og guide 3
let guide1 = new Guide("Peder","1");
let guide2 = new Guide("Onur","2");
let guide3 = new Guide("Leila","3");
document.getElementById("guideLoginbutton").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne

    //Funktionen signUp i objektet newUser vil bliver kaldt på
    guide1.checkGuideLogin()
});
