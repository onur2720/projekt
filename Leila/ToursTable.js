// We create different tours with the class function in Tours.js //
let tour1 = new Tours("Old Copenhagen", "The old city", "12:00", "05.05.20","2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn", "12:00", "06.06.20", "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "11:00", "07.07.20", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

// Create an array //
var tours = [tour1, tour2, tour3];
console.log(tours)

// We can know call our array in the for loop which will get pushed in our empty string info1 //
var info1 = "";

for(i=0; i < tours.length; i++){
    // info1 += "Tourname:" + tours[i].tourname +", Tourinfo: " + tours[i].tourInfo +", Start time: " + tours[i].startTime + ", Tour price: " + tours[i].tourPrice;
    info1 += tours[i].createHTML()
}

var table = document.getElementById('hello');
var tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = info1


