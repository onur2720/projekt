/* Kommenteret af Peder: Denne javascript fil henter informationerne fra nøglen i localStorage "currenTour" og
opretter et array. Dette array bliver brugt til at lave en tabel, der giver mulighed for ændringer af informationer i den udvalgte tour*/
let array = JSON.parse(localStorage.getItem("currentTour"));
let changetour = new Tour("","", "");

let newArray =[];


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

document.getElementById("change_Tour").addEventListener("click", function(){
    changetour.changeTourInfo()
});





