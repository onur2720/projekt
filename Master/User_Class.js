class User {
    constructor(Username, Password, bookedTours) {
        this.Username = Username;
        this.Password = Password;
        this.bookedTours = bookedTours;
    }
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
    login() {
        allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (checkUsername.value === allUsers[i].Username && allUsers[i].Password === checkPassword.value) {

                localStorage.setItem("currentUser", JSON.stringify(allUsers[i]));
                alert("You have now logged in");
                window.location.assign("userPage.html");
                return true
            }
        }
        alert("Please enter your Username and Password correctly")
    }
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


    bookTour() {
        var customerInfo = JSON.parse(localStorage.getItem("currentUser"));
        for (let i = 0; i < tours.length; i++) {
            if (tour.tourName === tours[i].tourName) {
                tours[i].participants += " " + customerInfo.Username;
                tours[i].currentParticipants += 1;

//Vi pusher det til localstorage, og overskriver den gamle "tours" key
                localStorage.setItem("tours", JSON.stringify(tours));
//Turens navn bliver tilføjet til brugeres parameter: bookedTOurs
                customerInfo.bookedTours += " " + tour.tourName;
                localStorage.setItem("currentUser", JSON.stringify(customerInfo));
//Vi pusher det til localstorage, og overskriver den gamle "currentUser" key
                let allUsers = JSON.parse(localStorage.getItem("Users"));
//samme loop som brugt før i koden. Sørger for at currentUsers værdier også tilføjes til "Users" i localstorage
                for (i = 0; i < allUsers.length; i++) {
                    if (customerInfo.Username === allUsers[i].Username) {

                        allUsers[i].bookedTours = customerInfo.bookedTours;
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

                    window.location.assign("index.html");
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
