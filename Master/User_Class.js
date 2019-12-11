class User {
    constructor(Username, Password, bookedTours) {
        // Peder: Et objekt af klassen User har 3 properties. BookedTours er en lang string med alle booket ture, da det virker uden problemer med localStorage.
        this.Username = Username;
        this.Password = Password;
        this.bookedTours = bookedTours;

    }
    // Peder: Sign up bruges for at overføre infomationerne fra et objekt af klassen User til localstorage
    signUp() {
        if (enteredUsername.value.length===0||enteredPassWord.value.length===0){
            alert("Please enter both a Username and Password");
            return true
        }

        newUser.Username = enteredUsername.value;
        newUser.Password = enteredPassWord.value;
        if (localStorage.getItem("Users") == null) {
            allUsers = [];
        } else {
            allUsers = JSON.parse(localStorage.getItem("Users"));
            for (let i = 0; i < allUsers.length; i++) {
                if (enteredUsername.value === allUsers[i].Username) {
                    alert("Username already exists");
                    return true
                }
            }
        }
            allUsers.push(newUser);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            alert("Hey " + enteredUsername.value + ". You have now created a user");
        }
        //Peder: Login kontroller om brugernavnet og adgangskoden er korret, ellers frembringes en alert
    login() {
        allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (checkUsername.value === allUsers[i].Username && allUsers[i].Password === checkPassword.value) {
                localStorage.setItem("currentUser", JSON.stringify(allUsers[i]));
                alert("You have now logged in");
                window.location.assign("userPage.html");
            }
        }
        alert("Please enter your Username and Password correctly")
    }
    //Peder: Der bruges loops i denne metode, der kontrollerer, at et nyt brugernavn ikke allerede tilhører en anden bruger samt at det opdateret brugernavn bliver sat i
    //localstorage i nøglen currentUser og Users
    setnewUsername() {
        let oldaccount = JSON.parse(localStorage.getItem("currentUser"));
        let allUsers = JSON.parse(localStorage.getItem("Users"));

        for (i = 0; i < allUsers.length; i++) {

            if (newUsername.value === allUsers[i].Username) {
                alert("You cannot change your username to one that already exist");
                return true;
            }
        }
        for (i = 0; i < allUsers.length; i++) {
            if (oldaccount.Username === allUsers[i].Username) {
                oldaccount.Username = newUsername.value;
                allUsers[i].Username = newUsername.value;

                localStorage.setItem("currentUser", JSON.stringify(oldaccount));
                localStorage.setItem("Users", JSON.stringify(allUsers));


                document.location.reload();

            }
        }
    }
    //Peder: Samme metode bruges som setNewUsername. To brugere kan dog have den samme adgangskode
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

//Peder: Tjekker om turen overhovedet kan bookes, før brugeren overføres til betalings.
    //Vigtige metode, da
    validate(){
        var info = JSON.parse(localStorage.getItem("currentUser"));
      //link til payment side
        if (tour.currentParticipants == tour.amountLimit) {
            alert("This tour is fully booked");
            return true
        }
        if (tour.participants.includes(info.Username)) {
            alert("You cannot book this tour twice");
            return true
        }
        localStorage.setItem("paymentinfo", JSON.stringify(tour));
        window.location = "payment.html"
    }

//Peder: Denne metode bruges, efter betalingen er gennemført. Metoden tilføjer brugerens navn til en property af objektet Tour samt værdien af currentParticipants stiger med 1
    //Samtidigt bliver turens navn tilføjet til brugerens konto under bookedTours
    bookTour() {
        var customerInfo = JSON.parse(localStorage.getItem("currentUser"));
        for (let i = 0; i < tours.length; i++) {
            if (tour.tourName === tours[i].tourName) {
                tours[i].participants += " " + customerInfo.Username;
                tours[i].currentParticipants += 1;


                localStorage.setItem("tours", JSON.stringify(tours));

                customerInfo.bookedTours += " " + tour.tourName;
                localStorage.setItem("currentUser", JSON.stringify(customerInfo));

                let allUsers = JSON.parse(localStorage.getItem("Users"));

                for (i = 0; i < allUsers.length; i++) {
                    if (customerInfo.Username === allUsers[i].Username) {

                        allUsers[i].bookedTours = customerInfo.bookedTours;
                        localStorage.setItem("Users", JSON.stringify(allUsers));

                    }

                }
            }
        }
    }




//Peder: Delete account går ind og sletter brugeren fra localstorage. Først chekker metoden, om brugeren har nogle ture booket.
    //Der bruges en if sætning (participatingTours.length > 0, da hvis længden er 1 eller over, betyder det, at brugeren har booket ture, hvilket resultere ri en alvorlig bug,
    //hvor ikke alle informationer om brugeren slettes.
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

                    window.location.assign("index.html");
                    return true
                }
            }

        }
    }
//Metoden sletter en booket tour ved at fjerne brugerens navn fra turens deltagerliste
    deleteBookedTour() {

        for(i=0;i<tours.length;i++){
            if(participatingTours[counter].tourName===tours[i].tourName){
                let  participants = tours[i].participants;
                let username = JSON.parse(localStorage.getItem("currentUser")).Username;
                tours[i].participants = participants.replace(username,"");
                tours[i].currentParticipants --;
                localStorage.setItem("tours",JSON.stringify(tours));
                alert("You have now cancelled the tour");
                window.location.reload(true)
            }
        }}
}
