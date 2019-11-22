//En klasse oprettes, som hedder Users. Den kan indeholde tre properties: Username, Password og bookedTours og en method signUp()
class User {
    constructor(Username, Password, bookedTours) {
        this.Username = Username;
        this.Password = Password;
        this.bookedTours = bookedTours;
    }
    signUp() {
        newUser.Username = enteredUsername.value;
        newUser.Password = enteredPassWord.value;
        //Hvis der ikke er en værdi i nøglen "Users" i localstorage, vil allUsers blive et tomt array
        if (localStorage.getItem("Users") == null) {
            allUsers = [];
            //Vi tilføjer newUser ind som den første værdi i arrayet allUsers
            allUsers.push(newUser);
            localStorage.setItem("Users", JSON.stringify(allUsers))
            //En alert oprettes, der består af to strings, som aldrig ændrer sig, og det indtastede brugernavn
            alert("Hej " + enteredUsername.value + ". Du har nu oprettet en bruger");
            //Værdien af allUsers bliver tilføjet til localStorage, og får nøglen "Users"
        } else {
            //Arrayet allUsers får værdien, der har nøglen "Users" i localStorage
            allUsers = JSON.parse(localStorage.getItem("Users"));
            //Et loop laves, der tjekker alle brugere, om det nye brugernavn matcher deres. Hvis det er true, vil der komme en warning og funktionen stopped med return true
            for (i = 0; i < allUsers.length; i++) {
                if (enteredUsername.value === allUsers[i].Username) {
                    alert("Username already exists");
                    return true
                }
            }
            //Den nye bruger bliver skubbet til arrayet
            allUsers.push(newUser);
            //Den opdateret array med den nye bruger bliver tilføjet til localstorage og sletter den gamle værdi, der havde nøglen "Users"
            localStorage.setItem("Users", JSON.stringify(allUsers));
            //En alert oprettes, der består af to strings, som aldrig ændrer sig, og det indtastede brugernavn
            alert("Hej " + enteredUsername.value + ". Du har nu oprettet en bruger");
        }
    }
}
// Der hentes fra html-dokumentet de værdier, der står i feltet med ID: username og password. Disse værdier tildeles til to variabler, som hedder enteredUsername og enteredPassword
let enteredUsername = document.getElementById('username');
let enteredPassWord = document.getElementById('password');
//Når registration siden åbnes, vil objektet newUser automatisk bliver oprettet med tomme værdier
let newUser = new User("","","");
//VI bruger addEventListener til at tjekke efter, om registration knappen bliver trykket
document.getElementById("registration").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    newUser.Username = enteredUsername.value;
    newUser.Password = enteredPassWord.value;
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.signUp()
});
class guide {
    constructor(guideUsername,guidePassword) {
        this.guideUsername = guideUsername;
        this.guidePassword = guidePassword;
    }
}
//Der skabes tre nye objekter, der hedder guide1,guide2 og guide 3
let guide1 = new guide("Peder","1");
let guide2 = new guide("Onur","2");
let guide3 = new guide("Leila","3");


//Variablen allUsers oprettes, der skal bruges i den nedestående funcktion. Forløbligt er den ikke tildelt en værdi

let checkUsername = document.getElementById('checkusername');
let checkPassword = document.getElementById('checkpassword');
//To variabler skabes, der tildeles værdierne fra de felter, hvor man skriver sit username og password for at logge ind
function login() {
    allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if (checkUsername.value === allUsers[i].Username && allUsers[i].Password===checkPassword.value) {
            //Der køres et loop igennem alle brugere, som tjekker om der findes et match med de værdier, som blev indtastet på loginsiden
            localStorage.setItem("currentUser",JSON.stringify(allUsers[i]));
            window.location.assign("userPage.html");
            return true
            //Hvis det er et match, vil man blive overført til en ny side
        }
    }
    //hvis der ikke er et match, kommer der en alert frem
    alert("Please enter your Username and Password correctly")
}
let newUsername = document.getElementById('newusername');
let newPassword = document.getElementById("newpassword");

function setnewUsername() {
    let oldaccount = JSON.parse(localStorage.getItem("currentUser"));
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if(newUsername.value===allUsers[i].Username){
            alert("You cannot change your username to one that already exist");
            return true
        }
    }
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
    let oldaccount = JSON.parse(localStorage.getItem("currentUser"));
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    for (i = 0; i < allUsers.length; i++) {
        if (oldaccount.Username === allUsers[i].Username) {
            oldaccount.Password = newPassword.value;
            allUsers[i].Password = newPassword.value;
            localStorage.setItem("currentUser", JSON.stringify(oldaccount));
            localStorage.setItem("Users", JSON.stringify(allUsers));
            return true
        }
    }
}

function checkGuideLogin() {

    // Entered data in the login form
    let enteredGuideName = document.getElementById('enteredGuideName');
    let enteredGuidePass = document.getElementById('enteredGuidePass');

    // Check if stored data from registration form is equal to adminpassword and adminusername
    if ((enteredGuideName.value === guide1.guideUsername && enteredGuidePass.value === guide1.guidePassword)
        || (enteredGuideName.value === guide2.guideUsername && enteredGuidePass.value === guide2.guidePassword)
        || (enteredGuideName.value === guide3.guideUsername && enteredGuidePass.value === guide3.guidePassword)) {
        alert('You are now logged in.');
        window.location = "guidePage.html"
    }
    else {
        alert('Error. Wrong login.');
    }
}



//Hurtige kommentarer da funktionen ikke er færdig"
//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage
let array = JSON.parse(localStorage.getItem("tours"));

//Vi laver et tomt array til varaiblen newArray
let newArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
for(i=0;i<array.length;i++){
    let info = [];
    info.push(array[i].tourName);
    info.push(array[i].tourInfo);
    info.push(array[i].tourDate);
    info.push(array[i].startTime);
    info.push(array[i].duration);
    info.push(array[i].meetingPoint);
    info.push(array[i].tourPrice);
    info.push(array[i].tourLocation);
    info.push(array[i].amountLimit);
    info.push("<button type='button' id='"+i+"' >Book!</button>");
    newArray.push(info);
}


console.log(newArray);
table = document.getElementById("table");
//Tabellen oprettes
for(i = 0; i < newArray.length; i++)
{
    array[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(j = 0; j < newArray[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}

function deleteall(){
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    let newUser= JSON.parse(localStorage.getItem("currentUser"));

    let buttons = document.getElementsByClassName('wow');

    for(i = 0; i < buttons.length; i++){
        buttons[i].click();
    }


    for (i = 0; i < allUsers.length; i++) {
        if (newUser.Username === allUsers[i].Username) {
            localStorage.removeItem("currentUser");
            allUsers.splice(i,1);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            alert("You have now deleted your account");

            window.location.assign("login.html");
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
        if (tours[hehe].currentParticipants ===tours[hehe].amountLimit){
            alert("This tour is fully booked");
            return true
        }
        if (tours[hehe].participants.includes(Username)){
            alert("You cannot book this tour twice");
            return true
        }
//Turen der har samme id som knappen, vil tilføje den nuværende brugers navn til parameteren participants.
        tours[hehe].participants += " " + Username ;
        tours[hehe].currentParticipants += 1;

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

let arraytwo = JSON.parse(localStorage.getItem("tours"));
console.log(arraytwo[1].participants);
console.log(JSON.parse(localStorage.getItem("currentUser")).Username);
let arraytreee = [];

for(i=0;i<arraytwo.length;i++){
    if (arraytwo[i].participants.includes(JSON.parse(localStorage.getItem("currentUser")).Username)){
        arraytreee.push(arraytwo[i])
    }
}

localStorage.setItem("participatingtours",JSON.stringify(arraytreee));
//Vi laver et tomt array til varaiblen newArray
let newArray5 =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
for(i=0;i< arraytreee.length;i++){
    let info = [];
    info.push(arraytreee[i].tourName);
    info.push(arraytreee[i].tourInfo);
    info.push(arraytreee[i].tourDate);
    info.push(arraytreee[i].startTime);
    info.push(arraytreee[i].duration);
    info.push(arraytreee[i].meetingPoint);
    info.push(arraytreee[i].tourPrice);
    info.push(arraytreee[i].tourLocation);
    info.push(arraytreee[i].amountLimit);
    info.push("<button type='button' class='wow' id='hej "+i+"' >Delete!</button>");
    newArray5.push(info);
}


console.log(newArray5);
table = document.getElementById("table2");
//Tabellen oprettes
for(var i = 0; i < newArray5.length; i++)
{
    array[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(j = 0; j < newArray5[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray5[i][j];
    }
}

let tours4 = JSON.parse(localStorage.getItem("participatingtours"));
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(let i=0;i<tours4.length;i++){
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
    let hehe = i;
    arrayfive = JSON.parse(localStorage.getItem("tours"));
//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
    document.getElementById("hej "+ i).addEventListener("click", function(){
for(i=0;i<arrayfive.length;i++){
    if(tours4[hehe].tourName===arrayfive[i].tourName){
        console.log(arrayfive[i].participants);
        console.log(JSON.parse(localStorage.getItem("currentUser")).Username);
       let  arrayseven = arrayfive[i].participants;
        let arrayeight = JSON.parse(localStorage.getItem("currentUser")).Username;
        console.log(arrayseven);
        let arraysix = arrayseven.replace(arrayeight,"");
arrayfive[i].participants = arraysix;
        arrayfive[i].currentParticipants --;
        console.log(arraysix);
        localStorage.setItem("tours",JSON.stringify(arrayfive));

    }
}})}
