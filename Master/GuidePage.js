
let tourName = document.getElementById('tour-name');
let tourInfo = document.getElementById('tour-info');
let tourDate = document.getElementById('tour-date');
let tourStartTime = document.getElementById("start-time");
let tourMeetingPoint = document.getElementById("meetingpoint");
let tourDuration = document.getElementById('tour-duration');
let tourPrice = document.getElementById('tour-price');
let tourLocation = document.getElementById('tour-location');
let amountLimit = document.getElementById("limit");


var newTour = new Tour("","","","","","","","","","",0);
document.getElementById("create_tour").addEventListener("click", function(){

    newTour.tourName = tourName.value;
    newTour.tourInfo = tourInfo.value;
    newTour.tourDate = tourDate.value;
    newTour.startTime = tourStartTime.value;
    newTour.meetingPoint = tourMeetingPoint.value;
    newTour.tourPrice = tourPrice.value;
    newTour.tourLocation = tourLocation.value;
    newTour.amountLimit = amountLimit.value;
    newTour.duration = tourDuration.value;
    newTour.createTour()
});

document.getElementById("delete_tour").addEventListener("click",function(){
    newTour.deleteTour()
});

function deleteTour(){
    let allTours = JSON.parse(localStorage.getItem("tours"));
    let one= document.getElementById("delete_name");

    for (let i=0;i<allTours.length;i++){
        if(allTours[i].tourName===one.value){
            allTours.splice(i,1);
            localStorage.setItem("tours",JSON.stringify(allTours))
        }
    }
}


let array = JSON.parse(localStorage.getItem("tours"));

let newArray =[];

for(let i=0;i<array.length;i++){
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

for(let i = 0; i < newArray.length; i++)
{
    array[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(let j = 0; j < newArray[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}
let toursinfo = JSON.parse(localStorage.getItem("tours"));

for(let i=0;i<toursinfo.length;i++){

    document.getElementById(i).addEventListener("click", function(){
        localStorage.setItem("currentTour",JSON.stringify(toursinfo[i]));
        window.location.assign("changeTour.html")
    })
}