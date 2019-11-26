//En klasse oprettes, som hedder Users. Den kan indeholde tre properties: Username, Password og bookedTours og en method signUp()
class User {
    constructor(Username, Password, bookedTours) {
        this.Username = Username;
        this.Password = Password;
        this.bookedTours = bookedTours;
    }

    signUp() {
        newUser.Username = enteredUsername.value;
        newUser.Password = enteredPassWord.value;
        //Hvis der ikke er en værdi i nøglen "Users" i localstorage, vil allUsers blive et tomt array
        if (localStorage.getItem("Users") == null) {
            allUsers = [];
            //Vi tilføjer newUser ind som den første værdi i arrayet allUsers
            allUsers.push(newUser);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            //En alert oprettes, der består af to strings, som aldrig ændrer sig, og det indtastede brugernavn
            alert("Hej " + enteredUsername.value + ". Du har nu oprettet en bruger");
            //Værdien af allUsers bliver tilføjet til localStorage, og får nøglen "Users"
        } else {
            //Arrayet allUsers får værdien, der har nøglen "Users" i localStorage
            allUsers = JSON.parse(localStorage.getItem("Users"));
            //Et loop laves, der tjekker alle brugere, om det nye brugernavn matcher deres. Hvis det er true, vil der komme en warning og funktionen stopped med return true
            for (var i = 0; i < allUsers.length; i++) {
                if (enteredUsername.value === allUsers[i].Username) {
                    alert("Username already exists");
                    return true
                }
            }
            //Den nye bruger bliver skubbet til arrayet
            allUsers.push(newUser);
            //Den opdateret array med den nye bruger bliver tilføjet til localstorage og sletter den gamle værdi, der havde nøglen "Users"
            localStorage.setItem("Users", JSON.stringify(allUsers));
            //En alert oprettes, der består af to strings, som aldrig ændrer sig, og det indtastede brugernavn
            alert("Hej " + enteredUsername.value + ". Du har nu oprettet en bruger");
        }
    }

    login() {
        allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (checkUsername.value === allUsers[i].Username && allUsers[i].Password === checkPassword.value) {
                //Der køres et loop igennem alle brugere, som tjekker om der findes et match med de værdier, som blev indtastet på loginsiden
                localStorage.setItem("currentUser", JSON.stringify(allUsers[i]));
                alert("You have now logged in");
                window.location.assign("userPage.html");
                return true
                //Hvis det er et match, vil man blive overført til en ny side
            }
        }
        //hvis der ikke er et match, kommer der en alert frem
        alert("Please enter your Username and Password correctly")
    }

    setnewUsername() {
        let oldaccount = JSON.parse(localStorage.getItem("currentUser"));
        let allUsers = JSON.parse(localStorage.getItem("Users"));
        console.log(newUsername.value);
        console.log(allUsers[1].Username);
        for (i = 0; i < allUsers.length; i++) {

            if (newUsername.value === allUsers[i].Username) {
                alert("You cannot change your username to one that already exist");
                return true;
            }
        }

        //Alle brugere køres igennem et loop, indtil den nuværende bruger findes i alle brugere.
        for (i = 0; i < allUsers.length; i++) {
            if (oldaccount.Username === allUsers[i].Username) {
                oldaccount.Username = newUsername.value;
                allUsers[i].Username = newUsername.value;
                //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
                localStorage.setItem("currentUser", JSON.stringify(oldaccount));
                localStorage.setItem("Users", JSON.stringify(allUsers));

                //De nye informationer overskriver de gamle i local storage
                document.location.reload();
                return true
            }
        }
    }




    setnewPassword() {
        let oldaccount = JSON.parse(localStorage.getItem("currentUser"));
        let allUsers = JSON.parse(localStorage.getItem("Users"));
        for (i = 0; i < allUsers.length; i++) {
            if (oldaccount.Username === allUsers[i].Username) {
                oldaccount.Password = newPassword.value;
                allUsers[i].Password = newPassword.value;
                localStorage.setItem("currentUser", JSON.stringify(oldaccount));
                localStorage.setItem("Users", JSON.stringify(allUsers));
                alert("You have now changed your Password");
                document.location.reload();
                return true
            }
        }
    }


    bookTour(){
        var User3 = JSON.parse(localStorage.getItem("currentUser"));
      //link til payment side
        if (tour.currentParticipants == tour.amountLimit) {
            alert("This tour is fully booked");
            return true
        }
        if (tour.participants.includes(User3.Username)) {
            alert("You cannot book this tour twice");
            return true
        }
        localStorage.setItem("paymentinfo", JSON.stringify(tour));
        window.location = "Betaling1.html"
    }


    bookTour2() {
        var User4 = JSON.parse(localStorage.getItem("currentUser"));
        for (let i = 0; i < tours.length; i++) {
            if (tour.tourName === tours[i].tourName) {
                tours[i].participants += " " + User4.Username;
                tours[i].currentParticipants += 1;

//Vi pusher det til localstorage, og overskriver den gamle "tours" key
                localStorage.setItem("tours", JSON.stringify(tours));
//Turens navn bliver tilføjet til brugeres parameter: bookedTOurs
                User4.bookedTours += " " + tour.tourName;
                localStorage.setItem("currentUser", JSON.stringify(User4));
//Vi pusher det til localstorage, og overskriver den gamle "currentUser" key
                let allUsers = JSON.parse(localStorage.getItem("Users"));
//samme loop som brugt før i koden. Sørger for at currentUsers værdier også tilføjes til "Users" i localstorage
                for (i = 0; i < allUsers.length; i++) {
                    if (User4.Username === allUsers[i].Username) {

                        allUsers[i].bookedTours = User4.bookedTours;
                        localStorage.setItem("Users", JSON.stringify(allUsers));

                    }

                }
            }
        }
    }





    deleteAccount() {
        let allUsers = JSON.parse(localStorage.getItem("Users"));
        let newUser = JSON.parse(localStorage.getItem("currentUser"));


        if (participatingTours.length > 0) {
            alert("Please cancel all your tours first")
        } else {
            for (i = 0; i < allUsers.length; i++) {
                if (newUser.Username === allUsers[i].Username) {
                    localStorage.removeItem("currentUser");
                    allUsers.splice(i, 1);
                    localStorage.setItem("Users", JSON.stringify(allUsers));
                    alert("You have now deleted your account");

                    window.location.assign("login.html");
                    return true
                }
            }

        }
    }

    deleteBookedTour() {

        for(i=0;i<tours.length;i++){
            if(participatingTours[counter].tourName===tours[i].tourName){
                let  participants = tours[i].participants;
                let username = JSON.parse(localStorage.getItem("currentUser")).Username;
                console.log(participants);
                tours[i].participants = participants.replace(username,"");
                tours[i].currentParticipants --;
                localStorage.setItem("tours",JSON.stringify(tours));
                alert("You have now cancelled the tour");
                window.location.reload(true)
            }
        }}
}
