
// TRIN 1: Define the class of Tours
class Tours {
    // Add attributes to the class
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation) {
        this.tourName = tourName;
        this.tourInfo = tourInfo;
        this.tourDate = tourDate;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
    }
}

// TRIN 2: Create tours, whcih is pre-defined tours  //
let tour1 = new Tours("Old Copenhagen", "The old city", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn",   "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

// Create an array with all the tours created in above; the array includes our objects created above. We console.log the array to test they are created.
var tours = [tour1, tour2, tour3];
console.log(tours);

// TRIN 3: Define variables of the fields that are required to be filled out when creating a new tour.
// Vi henter værdierne fra HTML, der står i feltet med ID og tilføjer dem en variabel:

function controlTourCreation() {
    var tourName = document.getElementById('tour-name').value;
    var tourInfo = document.getElementById('tour-info').value;
    var tourDate = document.getElementById('tour-date').value;
    var tourStartTime = document.getElementById("start-time").value;
    var tourMeetingPoint = document.getElementById("meetingpoint").value;
    var tourDuration = document.getElementById('tour-duration').value;
    var tourPrice = document.getElementById('tour-price').value;
    var tourLocation = document.getElementById('tour-location').value;
    var alertMessage = "";
    var alertBoolean = true;

    // if statement which controls that the information required is filled correctly
    if (tourName.value=="") {
        alertMessage += "Indtast tour name \n";
        alertBoolean = false;
    }

    // if statement controls that the tour info is at least 30 characters
    if (tourInfo.value.length <="20") {
        alertMessage +="Tour information skal mindst være 30 tegn \n";
        alertBoolean = false;
    }

    // Loop goes through all tours to make sure that the tour does not exist
    for (let i = 0; i < tours.length; i++) {
        if (tourName === tours[i].tourName) {
            alertMessage += "Turen er allerede oprettet af en anden guide. Vælg et nyt tur-navn \n";
            alertBoolean = false;
        }
    }

    // The boxes the guide has to fill out, is not filled correctly if the alertBoolean is false. This will set off the alertMessage.
    // If the alertBoolean is true, everything is filled out correctly and  the tour will be created
    if (alertBoolean === false) {
        alert(alertMessage);
    } else {
        CreateTour();
    }
}

//We stringify tours in order to connect it to localStorage
var tours = localStorage.setItem("tours", JSON.stringify(tours));
// localStorage with the key: "tours" is not empty as we get data from the array tours.
console.log(JSON.parse(localStorage.getItem("tours")));

// We create a function called CreateTour() in which we call the values by .value from createTour.html to create a new
function CreateTour() {
    var tour = new Tours(tourName.value,tourInfo.value,tourDate.value,tourStartTime.value,tourDuration.value,tourMeetingPoint.value,tourPrice.value,tourLocation.value)
    // We define the tours in localStorage as 'oldTours' in which we want
    oldTours = JSON.parse(localStorage.getItem("tours"));
    oldTours.push(tour);
    localStorage.setItem("tours",JSON.stringify(oldTours))
}

/* function cloneTour(Tours) {
    var clone = {};
    for(tours) {
        if (.
        Tours.hasOwnProperty(tours)
    )
        clone[tours] = Tours[tours];
    }
    return clone;
}

//Then everytime you want to push a message into the list do:
tours.push(cloneMessage(Tours));

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
} */

// TRIN 3: Vi tildeler de værdier vi har fået til HTML dokumentet til en klasse.


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
