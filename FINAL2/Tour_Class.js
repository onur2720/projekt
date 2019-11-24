class Tour {
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation, amountLimit, participants, reviews, currentParticipants) {
        this.tourName = tourName;
        this.tourInfo = tourInfo;
        this.tourDate = tourDate;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
        this.amountLimit = amountLimit;
        this.participants  = participants;
        this.reviews = reviews;
        this.currentParticipants = currentParticipants;

    }
    createHTML()   {
        return "<tr><td>" + this.tourName + "</td><td>" + this.tourInfo+ "</td><td>" + this.tourDate + "</td><td>" + this.startTime + "</td><td>"+ this.duration + "</td><td>"+ this.tourPrice + "</td><td>" + this.tourLocation+ "</td></td>" + this.amountLimit + "</td></td>"+ this.participants + "</td></td>";

    };


    createTour(){
      var oldTours;
            if (localStorage.getItem("tours") == null) {
                 oldTours = []
                //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
                //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
            } else {
                 oldTours = JSON.parse(localStorage.getItem("tours"))
                //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
            }
            for(let i=0;i<oldTours.length;i++){
                if (newTour.tourName===oldTours[i].tourName){
                    alert("the Tour's name cannot be called the same as another tour");
                    return true;
                }
            }


            oldTours.push(newTour);
            localStorage.setItem("tours",JSON.stringify(oldTours));
        alert("You have now created the tour");
        document.location.reload()
        }

    deleteTour() {
        let allTours = JSON.parse(localStorage.getItem("tours"));
        let deletedTour = document.getElementById("delete_name");
        for (let i = 0; i < allTours.length; i++) {
            if (allTours[i].tourName === deletedTour.value) {
                allTours.splice(i, 1);
                localStorage.setItem("tours", JSON.stringify(allTours));
                alert("You have now deleted the tour");
                document.location.reload();
                return true;
            }
        }


            alert("The Tour name doesn't exist")


    }
    changeTourInfo(){

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



                Tour.tourName = tourName.value;
                Tour.tourInfo = tourInfo.value;
                Tour.amountLimit = amountLimit.value;
                Tour.duration = duration.value;
                Tour.meetingPoint = meetingPoint.value;
                Tour.startTime = startTime.value;
                Tour.tourDate = tourDate.value;
                Tour.tourLocation = tourLocation.value;
                Tour.tourPrice = tourPrice.value;



                Tours[i]=Tour;

                //Begge steder vil brugeren få tildelt et nyt brugernavn, som blev skrevet ind
                localStorage.setItem("currentTour", JSON.stringify(Tour));
                localStorage.setItem("tours", JSON.stringify(Tours));
                //De nye informationer overskriver de gamle i local storage
                window.location.reload(true)

            }
        }



    }


    }
