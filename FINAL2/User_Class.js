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
            localStorage.setItem("Users", JSON.stringify(allUsers))
            //En alert oprettes, der består af to strings, som aldrig ændrer sig, og det indtastede brugernavn
            alert("Hej " + enteredUsername.value + ". Du har nu oprettet en bruger");
            //Værdien af allUsers bliver tilføjet til localStorage, og får nøglen "Users"
        } else {
            //Arrayet allUsers får værdien, der har nøglen "Users" i localStorage
            allUsers = JSON.parse(localStorage.getItem("Users"));
            //Et loop laves, der tjekker alle brugere, om det nye brugernavn matcher deres. Hvis det er true, vil der komme en warning og funktionen stopped med return true
            for (i = 0; i < allUsers.length; i++) {
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
        for (i = 0; i < allUsers.length; i++) {
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

        for (i = 0; i < allUsers.length; i++) {
            if (newUsername.value === allUsers[i].Username) {
                alert("You cannot change your username to one that already exist");
                return true
            }
            for (i = 0; i < allUsers.length; i++) {
                if (oldaccount.Username === allUsers[i].Username) {
                    //Alle brugere køres igennem et loop, indtil den nuværende bruger findes i alle brugere.

                    oldaccount.Username = newUsername.value;
                    allUsers[i].Username = newUsername.value;
                    //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
                    localStorage.setItem("currentUser", JSON.stringify(oldaccount));
                    localStorage.setItem("Users", JSON.stringify(allUsers));
                    //De nye informationer overskriver de gamle i local storage
                    return true
                }
            }

        }
    }
}