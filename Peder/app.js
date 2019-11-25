// Username and Password for the registration form
//TRIN 1: Vi henter fra html-dokumentet de værdier, der står i feltet med ID: username og password, og tildeler dem en variabel, der hedder UserName og passWord
var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var checkuserName = document.getElementById('checkusername');
var checkpassWord = document.getElementById('checkpassword');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

//TRIN 2 vi laver en klasse, der indeholder værdierne
class normalUsers {
    constructor(normalUsername,normalPassword,bookedTours){
        this.normalUsername = normalUsername;
        this.normalPassword = normalPassword;
        this.bookedTours = bookedTours;
    }
}

/*var normalUser1 = new normalUsers("Simon",5,"");
var normalUser2 = new normalUsers("Ida", 6, "");*/


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
//Under forsøg

// Store input from registration form in localStorage
/*function storeLgin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
    var result = str.link(index.html)*/
//console.log(JSON.parse(localStorage.getItem("Users")).length)
//console.log(JSON.parse(localStorage.getItem("Users"))[0].normalUsername)
//console.log
var allUsers

function storeLogin(){
    if(localStorage.getItem("Users") == null){
        allUsers = []
    } else {
        allUsers = JSON.parse(localStorage.getItem("Users"))
    }

    console.log(allUsers.length)

    if(allUsers.length === 0){
        //Trin 3 Vi tildeler de værdier vi har fået til html dokumentet til en klasse
        var normalUser = new normalUsers(userName.value,passWord.value,"");
        //Trin 4 Vi pusher klasen til et array
        allUsers.push(normalUser);
        localStorage.setItem("Users", JSON.stringify(allUsers));
    } else {
    for (i = 0; i < allUsers.length; i++) {
        if (userName.value === allUsers[i].normalUsername) {
            alert("Username already exists");
            return true
        }
    }
        var normalUser = new normalUsers(userName.value, passWord.value, "");
        allUsers.push(normalUser);
        localStorage.setItem("Users", JSON.stringify(allUsers));

    }


    // for(i=0;i<JSON.parse(localStorage.getItem("Users")).length;i++)
    //  {
    //     if("Peder"==JSON.parse(localStorage.getItem("Users"))[i].normalUsername){
    //         alert("hej")
    //     }
    //  }
}
/*  for(i=0;i<=JSON.parse(localStorage.getItem("Users")).length;i++){
      if (normalUser.normalUsername == 0) {
  }}*/
/* userInfo = {
     Username: userName.value,
     Password: passWord.value
 };
//Denne if-sætning tjekker, hvis længden af password er mellem 4 eller 16 tegn
 if (passWord.value.length < 4 || passWord.value.length > 16){
     alert("You need to write a Password with a length between 4 and 16");
     throw new Error("Something went badly wrong!");
 }*/

//Her defineres to variabler. NumberOfUsers, som er antallet
/*  let numberOfUsers = Object.keys(localStorage);
  let h = numberOfUsers.length; */
/* for(i=0;i<localStorage.getItem(Users).length; i++){
     if (normalUser.normalUsername==localStorage.getItem(Users)){
         alert("This username has been taken")
     }
 }*/


/*for(i=0;i<=JSON.parse(localStorage.getItem("Users")).length;i++){
    if(JSON.parse(localStorage.getItem("Users"))[i].normalUsername==userName.value){
        alert("Your username has already been taken")
        throw new Error("Something went badly wrong!");
    }
}*/
/* localStorage.setItem(h, JSON.stringify(userInfo));
   let localData = JSON.parse(localStorage.getItem(h));

   for(i=0; i < h; i++){
       if (JSON.parse(localStorage.getItem(h)).Username===JSON.parse(localStorage.getItem(i)).Username){
           alert("This username has been taken")

           localStorage.removeItem(h)
           throw new Error("Something went badly wrong!");
       }}}
   document.cookie = "username="+username.value;*/

// Function to list user in localStorage
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {


    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if((enteredName.value == storedName && enteredPass.value == storedPass) || (enteredName.value == normalUser1.normalUsername && enteredPass.value == normalUser1.normalPassword)|| (enteredName.value == normalUser2.normalUsername && enteredPass.value == normalUser2.normalPassword)) {

        alert('You are now logged in.');
        window.location = "booking.html"




    }else {
        alert('Error. Wrong login.');
    }
}
function logintest() {
    let numberOfUsers = Object.keys(localStorage);
    let h = numberOfUsers.length;
    for (i = 0; i < h; i++) {
        if (JSON.parse(localStorage.getItem(i)).Username == checkuserName.value  && JSON.parse(localStorage.getItem(i)).Password == checkpassWord.value) {
            document.cookie = "username="+checkusername.value;

            window.location = "logedin.html"

        } else if (checkuserName.value == ""  && checkpassWord.value == ""){
            alert("Please write your username and password")
            throw new Error("Something went badly wrong!");
        } else if (checkuserName.value == ""){
            alert("Please write username")
            throw new Error("Something went badly wrong!");
        } else if (checkpassWord.value == "" ) {
            alert("Please write Password")
        }
    }}

function myFunction() {
    window.location.assign("indstillinger.html")
}

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
        window.location = "indstillinger.html"
    }
    else {
        alert('Error. Wrong login.');
    }
}



function clearUser() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}

function tours() {
    var enteredTourName = document.getElementById('enteredTourName').value;

    var enteredTourInfos = document.getElementById('enteredTourInfo').value;
    alert("Hi:" + enteredTourInfos+enteredTourName);
}


function ture (tourName, tourInfo, startTime, duration, meetingPoint, tourPrice, tourLocation, maxPatipiciants) {
    this.tourname = tourName;
    this.tourInfo = tourInfo;
    this.startTime = startTime;
    this.duration = duration;
    this.meetingPoint = meetingPoint;
    this.tourPrice = tourPrice;
    this.tourLocation = tourLocation;
    this.maxPartipants = maxPatipiciants
}
let tours1 = new ture("Old Copenhagen", "The old city", "12:00", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen", 5);
let tours2 = new ture("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn", "12:00", "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tours3 = new ture("Rosenborg Castle and Royal Jewelry", "Museum", "11.00", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");
var alltours  = [tours1, tours2, tours3];

function showMoreInfo1 (){

    alert("Tour name: " + tours1.tourname +"\nTour Info: "  + tours1.tourInfo + "\nStart Time: " + tours1.startTime + "\nDuration: " + tours1.duration + "\nMeeting Point; " + tours1.meetingPoint +"\nTour Location: " + tours1.tourLocation + "\nMax Participants " + tours1.maxPartipants );


}


var clicks = 0;
function myFunction() {
    if (clicks < tours1.maxPartipants) {
        clicks += 1;
        document.getElementById("demo").innerHTML = clicks;}
    else {
        alert("This tour is booked")
    }

}
var touronenames = [];
function tournames() {

    var enteredname = document.getElementById('enteredName').value;
    touronenames.push(enteredname);
    console.log(touronenames)
}

var tt = ""
function hehe() {
    var t = document.createTextNode("Deltagernes navne:");
    document.body.appendChild(t);
    for(var i = 0; i < touronenames.length; i ++) {
        //var tt = document.createTextNode(touronenames[i]+", ");
        //document.body.appendChild(tt)
        if( tt == ""){
            tt = document.createTextNode(touronenames[i])
            document.body.appendChild(tt)
        } else{
            tt = document.createTextNode(", " + touronenames[i])
            document.body.appendChild(tt)
        }

    }

}

function goToBooking() {
    location.replace("betaling.html")
}

function addmember1() {
    if (normalUser1.bookedTours.includes(" Tur 1")) {
        alert("You can't book twice")
    } else {
        normalUser1.bookedTours += " Tur 1";
        console.log(normalUser1)
    }
}
function addmember2() {
    if (normalUser1.bookedTours.includes(" Tur 2")) {
        alert("You can't book twice")
    } else {
        normalUser1.bookedTours += " Tur 2";
        console.log(normalUser1)
    }
}
function addmember3() {
    if (normalUser1.bookedTours.includes(" Tur 3")) {
        alert("You can't book twice")
    } else {
        normalUser1.bookedTours += " Tur 3";
        console.log(normalUser1)
    }
}
