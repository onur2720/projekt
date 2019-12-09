//Kommentarer: Peder To variabler dannes, hvis brugeren ønsker at ændre sine informationer
let newUsername = document.getElementById('newusername');
let newPassword = document.getElementById("newpassword");
let newUser = JSON.parse(localStorage.getItem("currentUser"));
var tours =  JSON.parse(localStorage.getItem("tours"));
newUser = new User("","","");
document.getElementById("changeusername").addEventListener("click", function(){
    newUser.setnewUsername()
});
document.getElementById("changepassword").addEventListener("click", function(){
    newUser.setnewPassword()
});
document.getElementById("deleteaccount").addEventListener("click", function(){
    newUser.deleteAccount()
});
////Kommentarer: Peder To tobeller skabes på html-siden: Den første er for alle ture, og giver muligheden for at booke turerne.
//Den anden tabel er for alle brugerens bookede ture
let tableArray =[];

for(i=0;i<tours.length;i++){
    let info = [];
    info.push(tours[i].tourName);
    info.push(tours[i].tourInfo);
    info.push(tours[i].tourDate);
    info.push(tours[i].startTime);
    info.push(tours[i].duration);
    info.push(tours[i].meetingPoint);
    info.push(tours[i].tourPrice);
    info.push(tours[i].tourLocation);
    info.push(tours[i].amountLimit);
    info.push("<button type='button' id='"+i+"' >Book!</button>");
    tableArray.push(info);
}

table = document.getElementById("table");

for(i = 0; i < tableArray.length; i++)
{
    tours[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(j = 0; j < tableArray[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = tableArray[i][j];
    }
}

var tour;

for(i=0;i<tours.length;i++) {

    let counter = i;

        document.getElementById(i).addEventListener("click", function () {
       tour = tours[counter];
                newUser.validate()
        });
    }

    let bookedTableArray = [];

    for (i = 0; i < tours.length; i++) {
        if (tours[i].participants.includes(JSON.parse(localStorage.getItem("currentUser")).Username)) {
            bookedTableArray.push(tours[i])
        }
    }


localStorage.setItem("participatingtours",JSON.stringify(bookedTableArray));

let bookedTours =[];

for(i=0;i< bookedTableArray.length;i++){
    let info = [];
    info.push(bookedTableArray[i].tourName);
    info.push(bookedTableArray[i].tourInfo);
    info.push(bookedTableArray[i].tourDate);
    info.push(bookedTableArray[i].startTime);
    info.push(bookedTableArray[i].duration);
    info.push(bookedTableArray[i].meetingPoint);
    info.push(bookedTableArray[i].tourPrice);
    info.push(bookedTableArray[i].tourLocation);
    info.push(bookedTableArray[i].amountLimit);
    info.push("<button type='button' class='deletebuttons' id='delete "+i+"' >Delete!</button>");
    bookedTours.push(info);
}

table = document.getElementById("table2");

for(var i = 0; i < bookedTours.length; i++)
{
    bookedTableArray[i].tourDate.value = 0;

    let newRow = table.insertRow(table.length);
    for(j = 0; j < bookedTours[i].length; j++)
    {
        let cell = newRow.insertCell(j);

        cell.innerHTML = bookedTours[i][j];
    }
}
let participatingTours = JSON.parse(localStorage.getItem("participatingtours"));

for(let i=0;i<participatingTours.length;i++){
    var counter = i;
    document.getElementById("delete "+ i).addEventListener("click", function() {
    newUser.deleteBookedTour()}
    )}


