let newUsername = document.getElementById('newusername');
let newPassword = document.getElementById("newpassword");
let newUser = JSON.parse(localStorage.getItem("currentUser"));
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

//Vi laver en variabel array, der henter den værdi fra nøglen "Tours" i local storage
let array = JSON.parse(localStorage.getItem("tours"));

//Vi laver et tomt array til varaiblen newArray
let newArray =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
for(i=0;i<array.length;i++){
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
    info.push("<button type='button' id='"+i+"' >Book!</button>");
    newArray.push(info);
}


console.log(newArray);
table = document.getElementById("table");
//Tabellen oprettes
for(i = 0; i < newArray.length; i++)
{
    array[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(j = 0; j < newArray[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray[i][j];
    }
}

function deleteall(){
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    let newUser= JSON.parse(localStorage.getItem("currentUser"));

    let buttons = document.getElementsByClassName('wow');

    for(i = 0; i < buttons.length; i++){
        buttons[i].click();
    }


    for (i = 0; i < allUsers.length; i++) {
        if (newUser.Username === allUsers[i].Username) {
            localStorage.removeItem("currentUser");
            allUsers.splice(i,1);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            alert("You have now deleted your account");

            window.location.assign("login.html");
            return true
        }
    }

}
//Hurtige kommentarer til Henrik
//Variablen tours skabes, der henter værdien fra localstorage, der blev tildelt nøglen "tours"
var tours =  JSON.parse(localStorage.getItem("tours"));
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

    let arraytwo = JSON.parse(localStorage.getItem("tours"));

    let arraytreee = [];

    for (i = 0; i < arraytwo.length; i++) {
        if (arraytwo[i].participants.includes(JSON.parse(localStorage.getItem("currentUser")).Username)) {
            arraytreee.push(arraytwo[i])
        }
    }


localStorage.setItem("participatingtours",JSON.stringify(arraytreee));
//Vi laver et tomt array til varaiblen newArray
let newArray5 =[];
//Et loop opretters, der opretter et nyt array, hvis eneste forskel fra det gamle array er, at alle properties i klassen "Tours" bliver til numbers, så det kan bruges i det næste loop
for(i=0;i< arraytreee.length;i++){
    let info = [];
    info.push(arraytreee[i].tourName);
    info.push(arraytreee[i].tourInfo);
    info.push(arraytreee[i].tourDate);
    info.push(arraytreee[i].startTime);
    info.push(arraytreee[i].duration);
    info.push(arraytreee[i].meetingPoint);
    info.push(arraytreee[i].tourPrice);
    info.push(arraytreee[i].tourLocation);
    info.push(arraytreee[i].amountLimit);
    info.push("<button type='button' class='wow' id='hej "+i+"' >Delete!</button>");
    newArray5.push(info);
}


console.log(newArray5);
table = document.getElementById("table2");
//Tabellen oprettes
for(var i = 0; i < newArray5.length; i++)
{
    array[i].tourDate.value = 0;


    let newRow = table.insertRow(table.length);
    for(j = 0; j < newArray5[i].length; j++)
    {

        let cell = newRow.insertCell(j);


        cell.innerHTML = newArray5[i][j];
    }
}

let tours4 = JSON.parse(localStorage.getItem("participatingtours"));
// Et loop skabes der kører den nedestående kode lige så mange gange som antal ture i tours
for(let i=0;i<tours4.length;i++){
    //Koden virker ikke, hvis vi ikke laver en variabel, der har værdien i
    let hehe = i;
    arrayfive = JSON.parse(localStorage.getItem("tours"));
//Henter id fra html side. Den første knap har id=0. Den anden knap har id=1 osv.
    document.getElementById("hej "+ i).addEventListener("click", function(){
        for(i=0;i<arrayfive.length;i++){
            if(tours4[hehe].tourName===arrayfive[i].tourName){
                console.log(arrayfive[i].participants);
                console.log(JSON.parse(localStorage.getItem("currentUser")).Username);
                let  arrayseven = arrayfive[i].participants;
                let arrayeight = JSON.parse(localStorage.getItem("currentUser")).Username;
                console.log(arrayseven);
                let arraysix = arrayseven.replace(arrayeight,"");
                arrayfive[i].participants = arraysix;
                arrayfive[i].currentParticipants --;
                console.log(arraysix);
                localStorage.setItem("tours",JSON.stringify(arrayfive));

            }
        }})}
