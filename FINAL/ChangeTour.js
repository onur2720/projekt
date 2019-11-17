//Hurtige kommentarer da funktionen ikke er færdig"
//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage
var array = JSON.parse(localStorage.getItem("currentTour"));
console.log(array);

//Vi laver et tomt array til varaiblen newArray
var newArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop

    var info = [];
    info.push("Tour name");
    var newinfo = array.tourName;
    info.push(newinfo);
    var newinfo = "<input type=text id=0 value='"+array.tourName+"' >";
    info.push(newinfo);
    newArray.push(info);

var info = [];
info.push("Tour information");
var newinfo = array.tourInfo;
info.push(newinfo);
var newinfo = "<input type=text id=1 value='"+array.tourInfo+"' >";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Total amount");
var newinfo = array.amountLimit;
info.push(newinfo);
var newinfo = "<input type=text id=2 value='"+array.amountLimit+"' >";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Duration");
var newinfo = array.duration;
info.push(newinfo);
var newinfo = "<input type=text id=3 value='"+array.duration+"' >";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Meeting Point");
var newinfo = array.meetingPoint;
info.push(newinfo);
var newinfo = "<input type=text id=4 value='"+array.meetingPoint+"' >";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Start Time");
var newinfo = array.startTime;
info.push(newinfo);
var newinfo = "<input type=text id=5 value='"+array.startTime+"' >";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Tour date");
var newinfo = array.tourDate;
info.push(newinfo);
var newinfo = "<input type=text id=6 value='"+array.tourDate+"'>";
info.push(newinfo);
newArray.push(info);

var info = [];
info.push("Location");
var newinfo = array.tourLocation;
info.push(newinfo);
var newinfo = "<input type=text id=7 value='"+array.tourLocation+"'>";
info.push(newinfo);
newArray.push(info);


var info = [];
info.push("Price");
var newinfo = array.tourPrice;
info.push(newinfo);
var newinfo = "<input type=text id=8 value='"+array.tourPrice+"'>";
info.push(newinfo);
newArray.push(info);


console.log(newArray);
table = document.getElementById("table");
//Tabellen oprettes
for(var i = 0; i < newArray.length; i++)
{
    array.tourDate.value = 0;


    var newRow = table.insertRow(table.length);
    for(var j = 0; j < newArray[i].length; j++)
    {

        var cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}

document.getElementById("dewit").addEventListener("click", function(){
    var tourName = document.getElementById('0');
    var tourInfo = document.getElementById('1');
    var amountLimit = document.getElementById('2');
    var duration = document.getElementById('3');
    var meetingPoint = document.getElementById('4');
    var startTime = document.getElementById('5');
    var tourDate = document.getElementById('6');
    var tourLocation = document.getElementById('7');
    var tourPrice = document.getElementById('8');



        var Tour = JSON.parse(localStorage.getItem("currentTour"));
        var Tours = JSON.parse(localStorage.getItem("tours"));
        //To variabler skabes, der indeholder den nuværende bruger og alle brugere i local storage
        for (i = 0; i < Tours.length; i++) {
            if (Tour.tourName === Tours[i].tourName) {

                console.log(Tour);

              Tour.tourName = tourName.value;
                Tour.tourInfo = tourInfo.value;
                Tour.amountLimit = amountLimit.value;
                Tour.duration = duration.value;
                Tour.meetingPoint = meetingPoint.value;
                Tour.startTime = startTime.value;
                Tour.tourDate = tourDate.value;
                Tour.tourLocation = tourLocation.value;
                Tour.tourPrice = tourPrice.value;
                console.log(Tour);

console.log(Tour)
Tours[i]=Tour

                //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
                localStorage.setItem("currentTour", JSON.stringify(Tour));
                localStorage.setItem("tours", JSON.stringify(Tours));
                //De nye informationer overskriver de gamle i local storage
                window.location.reload(true)

            }
        }
    });




