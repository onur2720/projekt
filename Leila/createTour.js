
// TRIN 1: Vi henter værdierne fra HTML, der står i feltet med ID og tilfeler dem en variabel:
var tourName = document.getElementById('tour-name');
var tourInfo = document.getElementById('tour-info');
var tourDate = document.getElementById('tour-date');
var tourDuration = document.getElementById('duration');
var tourPrice = document.getElementById('price');


// TRIN 2: Vi laver en klasse, der indeholder værdierne se i Tours.js

// TRIN 3: Vi tildeler de værdier vi har fået til HTML dokumentet til en klasse.

f(alltours.length === 0) {
    var Tours = new Tours(ntourName.value,ntourInfo.value,nduration.value,meetingPoint.value,ntourPrice.value,"");
    //TRIN 4 Vi pusher klassen til et array
    alltours.push(Tours);
    localStorage.setItem("Tours",JSON.stringify(alltours));
} else {
    for (i =0; i < alltours.length; i++) {

    }
}
}



f(allUsers.length === 0){
    //Trin 3 Vi tildeler de værdier vi har fået til html dokumentet til en klasse
     var normalUser = new normalUsers(userName.value,passWord.value,"");
    //Trin 4 Vi pusher klasen til et array
    allUsers.push(normalUser);
    localStorage.setItem("Users", JSON.stringify(allUsers));
} else {
    for (i = 0; i < allUsers.length; i++) {
        if (userName.value === allUsers[i].normalUsername) {
            alert("Username already exists");
            return true
        }
    }
    var normalUser = new normalUsers(userName.value, passWord.value, "");
    allUsers.push(normalUser);
    localStorage.setItem("Users", JSON.stringify(allUsers));
