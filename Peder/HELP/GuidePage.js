
// TRIN 1: Vi henter værdierne fra HTML, der står i feltet med ID og tilføjer dem en variabel:
var tourName = document.getElementById('tour-name');
var tourInfo = document.getElementById('tour-info');
var tourDate = document.getElementById('tour-date');
var tourStartTime = document.getElementById("start-time");
var tourMeetingPoint = document.getElementById("meetingpoint");
var tourDuration = document.getElementById('tour-duration');
var tourPrice = document.getElementById('tour-price');
var tourLocation = document.getElementById('tour-location');
var amountLimit = document.getElementById("limit");


// TRIN 2: Vi laver en klasse, der indeholder værdierne se i Tours.js
class Tours {
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation, amountLimit, participants, reviews) {
        this.tourName = tourName;
        this.tourInfo = tourInfo;
        this.tourDate = tourDate;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
        this.amountLimit = amountLimit;
        this.participants  = participants;
        this.reviews = reviews;
    }
}

// We create different tours with the class function in Tours.js   //
/*let tour1 = new Tours("Old Copenhagen", "The old city", "2 HRS", "31. December", "2 hours", "Copenhagen", "2 kroner", "Mars", 5);
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn", "2 hours" , "31. December", "2 hours", "Copenhagen", "2 kroner", "Mars", 5);
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "2 HRS", "31. December", "2 hours", "Copenhagen", "2 kroner", "Mars", 5);
*/
// Create an array //
/*
var tours = [tour1, tour2, tour3];
console.log(tours);
*/
var tours;
/*
localStorage.setItem("tours", JSON.stringify(tours));
console.log(JSON.parse(localStorage.getItem("tours")));*/
// We can now
function CreateTour() {
    if (localStorage.getItem("tours") == null) {
        oldTours = []
        //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
        //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
    } else {
        oldTours = JSON.parse(localStorage.getItem("tours"))
        //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
    }
    var tour = new Tours(tourName.value,tourInfo.value,tourDate.value,tourStartTime.value,tourDuration.value,tourMeetingPoint.value,tourPrice.value,tourLocation.value, amountLimit.value,"","");
    oldTours.push(tour);
    localStorage.setItem("tours",JSON.stringify(oldTours))
}
// TRIN 3: Vi tildeler de værdier vi har fået til HTML dokumentet til en klasse.
function deleteTour(){
    var allTours = JSON.parse(localStorage.getItem("tours"));
    var one= document.getElementById("delete_name");
    console.log(allTours);
    console.log(allTours.length);
    console.log(allTours[0].tourName);
console.log(one.value);
   for (i=0;i<allTours.length;i++){
       if(allTours[i].tourName===one.value){
           allTours.splice(i,1);
           localStorage.setItem("tours",JSON.stringify(allTours))
       }
   }
}

/* f(alltours.length === 0) {
    var Tours = new Tours(tourName.value,tourInfo.value,duration.value,meetingPoint.value,tourPrice.value,"");
    //TRIN 4 Vi pusher klassen til et array
    alltours.push(Tours);
    localStorage.setItem("Tours",JSON.stringify(alltours));
} else {
    for (i =0; i < alltours.length; i++) {

    }
}
}



f(allUsers.length === 0){
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
    localStorage.setItem("Users", JSON.stringify(allUsers)); */
