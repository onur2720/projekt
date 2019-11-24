let newUsername = document.getElementById('newusername');
let newPassword = document.getElementById("newpassword");
let newUser = JSON.parse(localStorage.getItem("currentUser"));
var tours =  JSON.parse(localStorage.getItem("tours"));
newUser = new User("","","");
document.getElementById("changeusername").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.setnewUsername()
});
document.getElementById("changepassword").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.setnewPassword()
});
document.getElementById("deleteaccount").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    newUser.deleteAccount()
});
//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage


//Vi laver et tomt array til varaiblen newArray
let tableArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
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


console.log(tableArray);
table = document.getElementById("table");
//Tabellen oprettes
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


//Hurtige kommentarer til Henrik
//Variablen tours skabes, der henter værdien fra localstorage, der blev tildelt nøglen "tours"
var tour;
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(i=0;i<tours.length;i++) {
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
    let counter = i;

        //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
        document.getElementById(i).addEventListener("click", function () {
       tour = tours[counter];
                newUser.bookTour()
        });
    }



    let bookedTableArray = [];

    for (i = 0; i < tours.length; i++) {
        if (tours[i].participants.includes(JSON.parse(localStorage.getItem("currentUser")).Username)) {
            bookedTableArray.push(tours[i])
        }
    }


localStorage.setItem("participatingtours",JSON.stringify(bookedTableArray));
//Vi laver et tomt array til varaiblen newArray
let bookedTours =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
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


console.log(bookedTours);
table = document.getElementById("table2");
//Tabellen oprettes
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
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(let i=0;i<participatingTours.length;i++){
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
    var counter = i;

//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
    document.getElementById("delete "+ i).addEventListener("click", function() {
    newUser.deleteBookedTour()}
    )}

