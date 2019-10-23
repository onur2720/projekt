// Username and Password for the registration form
var username = document.getElementById('username');
var password = document.getElementById('password');




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
function storeLogin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
    var result = str.link(index.html)
}

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
    if(enteredName.value == storedName && enteredPass.value == storedPass) {

        alert('You are now logged in.');
        window.location = "booking.html"




    }else {
        alert('Error. Wrong login.');
    }
}

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





























