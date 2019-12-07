// We create different tours with the constructor function imported from Tours.js
let tour1 = new Tours("Old Copenhagen", "The old city", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn",   "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

// Create an array and test that all objects are created.
var tours = [tour1, tour2, tour3];
console.log(tours)

// We call our array in the for-loop which will get pushed in our empty variable called info1.
var info1 = "";

// Create a for-loop, which loops through the data in our tours array.
// the condition for the loop to run is that i must be less than the property .length.
for(i=0; i < tours.length; i++){
    // we add a value to the variable with the operator +=.
    // we get the property-names with tours[i] for the tours that is pushed in the array
    // By that we use .createHTML() to push the information into our table-function.
    // info1 += "Tourname:" + tours[i].tourname +", Tourinfo: " + tours[i].tourInfo +", Start time: " + tours[i].startTime + ", Tour price: " + tours[i].tourPrice;
    info1 += tours[i].createHTML()

}
// var table is defined with .getElementById from our attribute for the table in Calendar.HTML
var table = document.getElementById('hello')
// var table is defined with .getElementByTagName from our attribute for the table body in Calendar.HTML
var tbody = table.getElementsByTagName('tbody');
// We use the property .innerHTML to set the HTML content of the element (tbody) to our array info1
tbody[0].innerHTML = info1

// we set a variable for the date-object that creates a new date object with the current date and time:
var dt = new Date();
dt.setDate(1);
// we define day to our varibale dt in which we get the date-information with the method .getDay
var day = dt.getDay();
// testing that we get the correct date
console.log(dt.getDate());
console.log(dt.getMonth() + 1);
console.log(dt.getFullYear());
// variable today is set to new Date()
// we test the outcome
var today = new Date();
console.log(today);
console.log(day);

// create a function called booking() in which a variable is defined bookTour.
// tourname in tour1 gets stringified and assigned to localStorage
// .setItem sets the value of our object bookedTour
function booking() {
    var bookedTour = JSON.stringify(tour1.tourName);
    localStorage.setItem("Tours", bookedTour);
    console.log(localStorage);
};

// .getElementsByClassName is defined to the variable datesBtn
var datesBtn = document.getElementsByClassName("days")
// console.log(datesBtn.length) //

// We create a for-loop looping through our dates. We have addEventListener() that will display the tour table when a date i chosen.
for(i=0; i < datesBtn.length; i++){
    console.log("error") // we check if we enter the for loop
    document.addEventListener('click', function() {
            console.log("Hello") // we check if we enter the event listener. 
        document.getElementById("hello").style.display = "block";
    })
}
