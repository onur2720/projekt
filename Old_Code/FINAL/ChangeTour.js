//Hurtige kommentarer da funktionen ikke er færdig"
//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage
let array = JSON.parse(localStorage.getItem("currentTour"));
console.log(array);

//Vi laver et tomt array til varaiblen newArray
let newArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop

let info = [];
info.push("Tour name");
info.push(array.tourName);
info.push("<input type=text id=0 value='"+array.tourName+"' >");
newArray.push(info);

let info1 = [];
info1.push("Tour information");
info1.push(array.tourInfo);
info1.push("<input type=text id=1 value='"+array.tourInfo+"' >");
newArray.push(info1);

let info2 = [];
info2.push("Total amount");
info2.push(array.amountLimit);
info2.push("<input type=text id=2 value='"+array.amountLimit+"' >");
newArray.push(info2);

let info3 = [];
info3.push("Duration");
info3.push(array.duration);
info3.push("<input type=text id=3 value='"+array.duration+"' >");
newArray.push(info3);

let info4 = [];
info4.push("Meeting Point");
info4.push(array.meetingPoint);
info4.push("<input type=text id=4 value='"+array.meetingPoint+"' >");
newArray.push(info4);

let info5 = [];
info5.push("Start Time");
info5.push(array.startTime);
info5.push("<input type=text id=5 value='"+array.startTime+"' >");
newArray.push(info5);

let info6 = [];
info6.push("Tour date");
info6.push(array.tourDate);
info6.push("<input type=text id=6 value='"+array.tourDate+"' >");
newArray.push(info6);

let info7 = [];
info7.push("Location");
info7.push(array.tourLocation);
info7.push("<input type=text id=7 value='"+array.tourLocation+"' >");
newArray.push(info7);


let info8 = [];
info8.push("Price");
info8.push(array.tourPrice);
info8.push("<input type=text id=8 value='"+array.tourPrice+"' >");
newArray.push(info8);


console.log(newArray);
table = document.getElementById("table");
//Tabellen oprettes
for(let i = 0; i < newArray.length; i++)
{
    array.tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(let j = 0; j < newArray[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}

document.getElementById("dewit").addEventListener("click", function(){
    let tourName = document.getElementById('0');
    let tourInfo = document.getElementById('1');
    let amountLimit = document.getElementById('2');
    let duration = document.getElementById('3');
    let meetingPoint = document.getElementById('4');
    let startTime = document.getElementById('5');
    let tourDate = document.getElementById('6');
    let tourLocation = document.getElementById('7');
    let tourPrice = document.getElementById('8');



    let Tour = JSON.parse(localStorage.getItem("currentTour"));
    let Tours = JSON.parse(localStorage.getItem("tours"));
    //To variabler skabes, der indeholder den nuværende bruger og alle brugere i local storage
    for (let i = 0; i < Tours.length; i++) {
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

            console.log(Tour);
            Tours[i]=Tour;

            //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
            localStorage.setItem("currentTour", JSON.stringify(Tour));
            localStorage.setItem("tours", JSON.stringify(Tours));
            //De nye informationer overskriver de gamle i local storage
            window.location.reload(true)

        }
    }
});




