
// TRIN 1: Vi henter værdierne fra HTML, der står i feltet med ID og tilføjer dem en variabel:
let tourName = document.getElementById('tour-name');
let tourInfo = document.getElementById('tour-info');
let tourDate = document.getElementById('tour-date');
let tourStartTime = document.getElementById("start-time");
let tourMeetingPoint = document.getElementById("meetingpoint");
let tourDuration = document.getElementById('tour-duration');
let tourPrice = document.getElementById('tour-price');
let tourLocation = document.getElementById('tour-location');
let amountLimit = document.getElementById("limit");


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


let tours;

function CreateTour() {
    if (localStorage.getItem("tours") == null) {
         oldTours = []
        //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
        //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
    } else {
         oldTours = JSON.parse(localStorage.getItem("tours"))
        //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
    }
    let tour = new Tours(tourName.value,tourInfo.value,tourDate.value,tourStartTime.value,tourDuration.value,tourMeetingPoint.value,tourPrice.value,tourLocation.value, amountLimit.value,"","", 0);

    for(i=0;i<oldTours.length;i++){
        if (tour.tourName===oldTours[i].tourName){
            alert("the tourname cannot be called the same as another tour");
            return true
        }
    }

    var alertMessage = "";
    var alertBoolean = true;

    // if statement which controls that the information required is filled correctly
    if (tour.tourName=="") {
        alertMessage += "Indtast tour name \n";
        alertBoolean = false;
    }

    // if statement controls that the tour info is at least 30 characters
    if (tour.tourInfo.length <="20") {
        alertMessage +="Tour information skal mindst være 30 tegn \n";
        alertBoolean = false;

    }

    // The boxes the guide has to fill out, is not filled correctly if the alertBoolean is false. This will set off the alertMessage.
    // If the alertBoolean is true, everything is filled out correctly and  the tour will be created
    if (alertBoolean === false) {
        alert(alertMessage);
        return true
    }

    oldTours.push(tour);
    localStorage.setItem("tours",JSON.stringify(oldTours))
}
// TRIN 3: Vi tildeler de værdier vi har fået til HTML dokumentet til en klasse.
function deleteTour(){
    let allTours = JSON.parse(localStorage.getItem("tours"));
    let one= document.getElementById("delete_name");
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
let array = JSON.parse(localStorage.getItem("tours"));
console.log(array);
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
    info.push(array[i].participants);
    info.push("<button type='button' id='"+i+"' >Click to change information of the tour!</button>");
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