
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

   // createHTML(tourTable) {
        //return $("'<tr><td>' + $(this.tourname´) + '<td><td>' + $("this.startTime") + '</td><td>' + $("this.duration") + '</td><td>' + $("this.tourPrice") + '</td></tr>'");

        //return “<tr><td>“+ this.tourname + “</td><td>” + this.startTime + “</td><td>” + this.duration + “</td><td>” + this.tourPrice + “</td></tr>“;



    //}
}

let tour1 = new Tours("Old Copenhagen", "The old city", "12:00", "2 HRS", "Christiansborg", "7 EUR", "Copenhagen");
let tour2 = new Tours("Copenhagen Higlights", "The little Mermaid, Amalienborg and Nyhavn", "12:00", "1 HR", "Nyhavn", "5 EUR", "Copenhagen");
let tour3 = new Tours("Rosenborg Castle and Royal Jewelry", "Museum", "11.00", "2 HRS", "Nørreport St.", "10 EUR", "Copenhagen");

var tours = [tour1, tour2, tour3];
console.log(tours)

var info1 = "";
//var breakTag = document.createElement("br")


//for (tours=0, tours<=)
for(i=0; i < tours.length; i++){
  info1 += "Tourname:" + tours[i].tourname +", Tourinfo: " + tours[i].tourInfo +", Start time: " + tours[i].startTime + ", Tour price: " + tours[i].tourPrice;
//info1 += tours[i].createHTML(tourTable)
}


content.innerText = info1


}
/*Attach an even, we cant to check if the box i open, if yes we want to shrink it vs.  */

/* var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function () {

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else{
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
}; */

