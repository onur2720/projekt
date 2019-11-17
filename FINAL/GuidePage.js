
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
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation, amountLimit, participants, reviews, currentParticipants) {
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
        this.currentParticipants = currentParticipants;

    }
}


var tours;

function CreateTour() {
    if (localStorage.getItem("tours") == null) {
        oldTours = []
        //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
        //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
    } else {
        oldTours = JSON.parse(localStorage.getItem("tours"))
        //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
    }
    var tour = new Tours(tourName.value,tourInfo.value,tourDate.value,tourStartTime.value,tourDuration.value,tourMeetingPoint.value,tourPrice.value,tourLocation.value, amountLimit.value,"","", 0);
    for(i=0;i<oldTours.length;i++){
        if (tour.tourName===oldTours[i].tourName){
            alert("the tourname cannot be called the same as another tour")
            return true
        }
    }


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
    var newinfo9 = array[i].participants;
    info.push(newinfo9);
    var bookbutton = "<button type='button' id='"+i+"' >Click to change information of the tour!</button>";
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
let toursinfo = JSON.parse(localStorage.getItem("tours"));
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(i=0;i<toursinfo.length;i++){
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
    let hehe = i;
//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
    document.getElementById(i).addEventListener("click", function(){
        console.log(toursinfo[hehe]);
        localStorage.setItem("currentTour",JSON.stringify(toursinfo[hehe]));
       window.location.assign("changeTour.html")
    })
}