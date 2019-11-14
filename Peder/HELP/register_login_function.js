// Der hentes fra html-dokumentet de værdier, der står i feltet med ID: username og password. Disse værdier tildeles til to variabler, som hedder enteredUsername og enteredPassword
var enteredUsername = document.getElementById('username');
var enteredPassWord = document.getElementById('password');

//En klasse oprettes, som hedder Users. Den kan indeholde tre værdier. Et Username, et Password og deres bookede ture
class Users {
    constructor(Username,Password,bookedTours){
        this.Username = Username;
        this.Password = Password;
        this.bookedTours = bookedTours;
    }
}

//En klasse oprettes, som hedder guides.
class guides {
    constructor(guideUsername,guidePassword) {
        this.guideUsername = guideUsername;
        this.guidePassword = guidePassword;
    }
}
//Tre variabler oprettes til vores guides
var guide1 = new guides("Peder","1");
var guide2 = new guides("Onur","2");
var guide3 = new guides("Leila","3");

//Variablen allUsers oprettes, der skal bruges i den nedestående funcktion
var allUsers;
//Funktionen storeUser() bliver brugt, når der trykkes på knappen, der hedder "Sign Up", som registrer en ny bruger
function storeUser() {
    if (localStorage.getItem("Users") == null) {
        allUsers = []
        //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
        //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
    } else {
        allUsers = JSON.parse(localStorage.getItem("Users"))
        //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
    }
// if benyttes for at tjekke at allUsers.length===0, altså om arrayet er tomt.
    if (allUsers.length === 0) {
        var User = new Users(enteredUsername.value, enteredPassWord.value, "");
        //Variablen User opretters, der bruger klassen Users, hvor ens Username er værdien af enteredUsername og ens Password er værdien af enteredPassWord.
        allUsers.push(User);
        //User bliver pushet(tilføjet) til arrayet allUsers
        localStorage.setItem("Users", JSON.stringify(allUsers));
        //LocalStorage.setItem bruges til at at sætte værdien af allUsers til the key Users i localstorage ved hjælp af JSON.stringify. Det betyder, at den første bruger bliver oprettet i localStorage
    } else {
        //Hvis allUsers.length er 1 eller højere, altså at der er værdier i arrayet, vil funktionen lave et loop, der tjekker alle værdierne i arrayet
        for (i = 0; i < allUsers.length; i++) {
            if (enteredUsername.value === allUsers[i].Username) {
                alert("Username already exists");
                return true
                //Hvis den værdi, der blev indtastet i HTML-siden til at være et nye brugernavn, er det samme som et af de brugernavner i arrayet, vil der komme en alert, og bagefter afslutte funktionen
            }
        }
        //Hvis brugernavnet ikke er brugt før, fortsætter funktionen, og en opdateret array med den nye bruger bliver sat til nøglen Users i localstorage. Den slette altså den tidligere key "Users", der havde det gamle arrray
        var User = new Users(enteredUsername.value, enteredPassWord.value, "");
        allUsers.push(User);
        localStorage.setItem("Users", JSON.stringify(allUsers));

    }
}
var checkUsername = document.getElementById('checkusername');
var checkPassword = document.getElementById('checkpassword');
//To variabler skabes, der tildeles værdierne fra de felter, hvor man skriver sit username og password for at logge ind
function login() {
    allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if (checkUsername.value === allUsers[i].Username && allUsers[i].Password===checkPassword.value) {
            //Der køres et loop igennem alle brugere, som tjekker om der findes et match med de værdier, som blev indtastet på loginsiden
            localStorage.setItem("currentUser",JSON.stringify(allUsers[i]));
            window.location.assign("userpage.html");
            return true
            //Hvis det er et match, vil man blive overført til en ny side
        }
    }
    //hvis der ikke er et match, kommer der en alert frem
    alert("Please enter your Username and Password correctly")
}
var newUsername = document.getElementById('newusername');
var newPassword = document.getElementById("newpassword")

function setnewUsername() {
    var oldaccount = JSON.parse(localStorage.getItem("currentUser"));
    var allUsers = JSON.parse(localStorage.getItem("Users"));
    //To variabler skabes, der indeholder den nuværende bruger og alle brugere i local storage
    for (i = 0; i < allUsers.length; i++) {
        if (oldaccount.Username === allUsers[i].Username) {
            //Alle brugere køres igennem et loop, indtil den nuværende bruger findes i alle brugere.
            oldaccount.Username = newUsername.value;
            allUsers[i].Username = newUsername.value;
            //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
            localStorage.setItem("currentUser", JSON.stringify(oldaccount));
            localStorage.setItem("Users", JSON.stringify(allUsers));
            //De nye informationer overskriver de gamle i local storage
            return true
        }
    }
}

function setnewPassword() {
    var oldaccount = JSON.parse(localStorage.getItem("currentUser"));
    var allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if (oldaccount.Username === allUsers[i].Username) {
            oldaccount.Password = newPassword.value;
            allUsers[i].Password = newPassword.value;
            localStorage.setItem("currentUser", JSON.stringify(oldaccount));
            localStorage.setItem("Users", JSON.stringify(allUsers));
            return true
        }
    }
}/*
//Denne funktion tillader dig at booke tour 1
function booktour() {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    //Variablen user oprettes, der henter informationerne om den nuværende bruger fra localstorage
    var firsttest = new RegExp("first tour");
    //Der oprettes en variabel, der hedder firsttourtest, der tjekker om står "first tour" i en string
    var secondtest = new RegExp("second tour");
    //Der oprettes en ny variabel, der tjekker om en string indkludere "second tour"
    var checkfirst = firsttest.test(user.bookedTours);
    //Variablen checkfirst vil enten returnere true eller false, som afhænger af om "first tour" er med i the streng under brugeres booket ture
    var checksecond = secondtest.test(user.bookedTours);


    //Variablen checksecond vil enten returnere true eller false, som afhænger af om "first tour" er med i the streng under brugeres booket ture
    if (!checksecond) {
        //Denne hvis sætning opfyldes, hvis brugeren ikke før har booket den "second tour"
        if (checkfirst) {
//If benyttes her til at tjekke om brugeren har booket den første tur først
            if (user.bookedTours === "You have ordered 10 tickets of the first tour  ") {
                alert("You cannot order more than 10 tickets on a single tour");
                return true
                //Hvis brugeren har booket den første tur til mere end 10 tickets, vil funktionen stoppe efter en alert aktiveres
            }
            for (i = 0; i < 10; i++) {
                var numbertest = new RegExp(i);
                var included = numbertest.test(user.bookedTours);
                //Der laves et loop, der kører gennem 0 til 10 og samtidig tjekker, om nogle af disse tal er indkluderet i brugeres booked ture
                if (included) {
                    //Hvis res er true, betyder det, at tallet i indkluderes i the string
                    var pluscount = i + 1;
                    //Vi laver en ny bookedTours i brugeren, der er opdateret med et højere tal
                    user.bookedTours = "You have ordered " + pluscount + " tickets of the first tour  ";
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    //Den gamle bruger overskreves af den nye bruger i localstorage
                    return true
                }
            }
        }
        //Nedenstående vil kun oprettes, hvis brugeren aldrig har booket tour 1 før
        user.bookedTours = "You have ordered 1 ticket of the first tour";
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true
    } else {
        var StringFirstOrder = user.bookedTours.substring(0, 47);
        //Variblen er en string, som vil indkludere de første 48 tegn, der vil være værdien af den første ordre, man har lavet
        var ticketlimit = new RegExp("10 tickets of the first tour");
        var limitreached = ticketlimit.test(user.bookedTours);
        //Tjekker om man har bestilt 10 billeter af den første ordre
        if (checksecond) {
            if (checkfirst) {
                if (limitreached) {
                    alert("You cannot order more than 10 tickets on a single tour");
                    return true
                    //Hvis der er bestilt 10 billeter af den første tur, kommer der en alarm frem, og funktionen afsluttes
                }
                for (i = 0; i < 10; i++) {
                    var numbertest = new RegExp(i);
                    var secondorderstring = user.bookedTours.substring(47);
                    var included = numbertest.test(secondorderstring);
                    //Vi tester om der findes tallet i i den substring fra brugeres bookede ture, der går fra linje 47 - altså brugerens anden ordre
                    if (included) {
                        var pluscount = i + 1;
                        user.bookedTours = StringFirstOrder + ", and you have ordered " + pluscount + " tickets of the first tour";
                        localStorage.setItem("currentUser", JSON.stringify(user));
                        return true
                        //Hvis included er opfyldt, vil der komme en opdateret bookedTours med et højere tal
                    }
                }
            }
            //Disse linjer vil kun blive opfyldt, hvis man har bestilt x antal af den anden tur, men ingen af den første tur, hvor += vil tilføje en string på bookedTours
            user.bookedTours += ", and you have ordered 1 ticket of the first tour";
            localStorage.setItem("currentUser", JSON.stringify(user));
            return true

        }
    }
}
//Mere eller mindre det samme men bare for Tur2
function booktourtwo() {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    var firsttourtest = new RegExp("second tour");
    var didyouorderfirsttour = user.bookedTours.substring(0, 45);
    var tourtestyy = new RegExp("first tour");
    var testytwo = tourtestyy.test(user.bookedTours);
   var tickettest = new RegExp("10 tickets of the second tour");
    var testy = firsttourtest.test(user.bookedTours);
    var umm = tickettest.test(user.bookedTours);
    if (testytwo) {
        if (testy) {

            if (umm) {
                alert("You cannot order more than 10 tickets on a single tour");
                return true
            }
            for (i = 0; i < 10; i++) {
                var numbertest = new RegExp(i);
                var didyouordersecondtour = user.bookedTours.substring(44);
                var res = numbertest.test(didyouordersecondtour);
                if (res) {
                    var pluscount = i + 1;
                    user.bookedTours = didyouorderfirsttour + ", and you have ordered " + pluscount + " tickets of the second tour";
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    return true
                }
            }
        }
        user.bookedTours += ", and you have ordered 1 ticket of the second tour";
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true
    } else{


            if (user.bookedTours === "You have ordered 10 tickets of the second tour ") {
                alert("You cannot order more than 10 tickets on a single tour");
                return true
            }
            for (i = 0; i < 10; i++) {
                var numbertest = new RegExp(i);
                var res = numbertest.test(user.bookedTours);
                if (res) {
                    var pluscount = i + 1;
                    user.bookedTours = "You have ordered " + pluscount + " tickets of the second tour ";
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    return true
                }
            }

        user.bookedTours = "You have ordered 1 ticket of the second tour";
        localStorage.setItem("currentUser",JSON.stringify(user));
        return true
    }}
*/
function checkAdminLogin() {

    // Entered data in the login form
    var enteredAdminName = document.getElementById('enteredAdminName');
    var enteredAdminPass = document.getElementById('enteredAdminPass');

    // Check if stored data from registration form is equal to adminpassword and adminusername
    if ((enteredAdminName.value == admin1.adminUsername && enteredAdminPass.value == admin1.adminPassword)
        || (enteredAdminName.value == admin2.adminUsername && enteredAdminPass.value == admin2.adminPassword)
        || (enteredAdminName.value == admin3.adminUsername && enteredAdminPass.value == admin3.adminPassword)
        || (enteredAdminName.value == admin4.adminUsername && enteredAdminPass.value == admin4.adminPassword)) {
        alert('You are now logged in.');
        window.location = "GuidePage.html"
    }
    else {
        alert('Error. Wrong login.');
    }
}

class admin {
    constructor(adminUsername,adminPassword) {
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }
}
var admin1 = new admin("Peder","1");
var admin2 = new admin("Onur","2");
var admin3 = new admin("Leila","3");
var admin4 = new admin("Jonas","4");
console.log(admin1);
function booktouser(){

   var tours = JSON.parse(localStorage.getItem("tours"));

  var newUser= JSON.parse(localStorage.getItem("currentUser"));
   var newUsername = newUser.Username;

    tours[i].participants += " " + newUsername ;

    localStorage.setItem("tours",JSON.stringify(tours));
    newUser.bookedTours += " " + tours[0].tourName;
    localStorage.setItem("currentUser",JSON.stringify(newUser));
    var allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if (newUser.Username === allUsers[i].Username) {

            allUsers[i].bookedTours = newUser.bookedTours;
            localStorage.setItem("Users", JSON.stringify(allUsers));
            return true
        }
}}
//Hurtige kommentarer da funktionen ikke er færdig"
//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage
var array = JSON.parse(localStorage.getItem("tours"));
console.log(array);
//Vi laver et tomt array til varaiblen newArray
var newArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
for(i=0;i<array.length;i++){
   var info = [];
    var newinfo = array[i].tourName;
    info.push(newinfo);

    var newinfo1 = array[i].tourInfo;
    info.push(newinfo1);
    var newinfo2 = array[i].tourDate;
    info.push(newinfo2);
    var newinfo3 = array[i].startTime;
    info.push(newinfo3);
    var newinfo4 = array[i].duration;
    info.push(newinfo4);
    var newinfo5 = array[i].meetingPoint;
    info.push(newinfo5);
    var newinfo6 = array[i].tourPrice;
    info.push(newinfo6);
    var newinfo7 = array[i].tourLocation;
    info.push(newinfo7);
    var newinfo8 = array[i].amountLimit;
    info.push(newinfo8);
    var bookbutton = "<button type='button' id='"+i+"' >Book!</button>";
    info.push(bookbutton);
    newArray.push(info);
}


console.log(newArray);
table = document.getElementById("table");
//Tabellen oprettes
for(var i = 0; i < newArray.length; i++)
{
   array[i].tourDate.value = 0;


    var newRow = table.insertRow(table.length);
    for(var j = 0; j < newArray[i].length; j++)
    {

        var cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}

function deleteall(){
    var allUsers = JSON.parse(localStorage.getItem("Users"));
    var newUser= JSON.parse(localStorage.getItem("currentUser"));
    for (i = 0; i < allUsers.length; i++) {
        if (newUser.Username === allUsers[i].Username) {
            localStorage.removeItem("currentUser");
            allUsers.splice(i,1);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            alert("You have now deleted your account");

            window.location.assign("register_login.html");
            return true
        }
    }

}
//Hurtige kommentarer til Henrik
//Variablen tours skabes, der henter værdien fra localstorage, der blev tildelt nøglen "tours"
let tours = JSON.parse(localStorage.getItem("tours"));
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(i=0;i<tours.length;i++){
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
let hehe = i;
//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
document.getElementById(i).addEventListener("click", function(){

//Vi henter den nuværende bruger og hans brugernavn fra localStorage og tildeler dem variabler.
    let User= JSON.parse(localStorage.getItem("currentUser"));
    let Username = User.Username;
//Turen der har samme id som knappen, vil tilføje den nuværende brugers navn til parameteren participants.
    tours[hehe].participants += " " + Username ;
//Vi pusher det til localstorage, og overskriver den gamle "tours" key
    localStorage.setItem("tours",JSON.stringify(tours));
  //Turens navn bliver tilføjet til brugeres parameter: bookedTOurs
    User.bookedTours += " " + tours[hehe].tourName;
    localStorage.setItem("currentUser",JSON.stringify(User));
    //Vi pusher det til localstorage, og overskriver den gamle "currentUser" key
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    //samme loop som brugt før i koden. Sørger for at currentUsers værdier også tilføjes til "Users" i localstorage
    for (i = 0; i < allUsers.length; i++) {
        if (User.Username === allUsers[i].Username) {

            allUsers[i].bookedTours = User.bookedTours;
            localStorage.setItem("Users", JSON.stringify(allUsers));

            return true
        }
    }

}); }

