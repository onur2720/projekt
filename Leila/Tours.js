
// object - Tour
class Tours {
    constructor(tourName, tourInfo, startTime, duration, meetingPoint, tourPrice, tourLocation) {
        this.tourname = tourName;
        this.tourInfo = tourInfo;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
    }
}
let tour1 = new Tours("Old Copenhagen", "The old city", "12:00", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn", "12:00", "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "11.00", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

var tours = [tour1, tour2, tour3];
console.log(tours)

var content = document.getElementById("content");
var button = document.getElementById("show-more");

var info = ""
//for (tours=0, tours<=)
for(i=0; i < tours.length; i++){
  info += "Tourname:" + tours[i].tourname +", Tourinfo " + tours[i].tourInfo

}

content.innerText = info

button.onclick = function () {

    if(content.className == "open"){
        //shrink the box
        content.className == "";
        button.innerHTML = "Show More";
    } else{
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};

