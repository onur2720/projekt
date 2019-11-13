// We create different tours with the class function in Tours.js   //
let tour1 = new Tours("Old Copenhagen", "The old city", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn",   "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

// Create an array //
var tours = [tour1, tour2, tour3];
console.log(tours)

// We can now call our array in the for-loop which will get pushed in our empty string info1 //
var info1 = "";

for(i=0; i < tours.length; i++){
    // info1 += "Tourname:" + tours[i].tourname +", Tourinfo: " + tours[i].tourInfo +", Start time: " + tours[i].startTime + ", Tour price: " + tours[i].tourPrice;
    info1 += tours[i].createHTML()

}

var table = document.getElementById('hello');
var tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = info1

var dt = new Date();
dt.setDate(1);
var day = dt.getDay();
console.log(dt.getDate());
console.log(dt.getMonth() + 1);
console.log(dt.getFullYear());
var today = new Date();
console.log(today);
console.log(day);


function booking() {
    var bookedTour = JSON.stringify(tour1.tourName);
    localStorage.setItem("Tours", bookedTour);
    console.log(localStorage);
};

var datesBtn = document.getElementsByClassName("days")
/* console.log(datesBtn.length) */

// We create a for-loop looping through our dates. We have addEventListener() that will display the tour table when a date i chosen.
for(i=0; i < datesBtn.length; i++){
    console.log("error") // we check if we enter the for loop
    document.addEventListener('click', function() {
            console.log("Hello") // we check if we enter the event listener. 
        document.getElementById("hello").style.display = "block";
    })
}
