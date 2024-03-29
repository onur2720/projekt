// Leila: Tour class oprettes ved hjælp af constructor
class Tour {
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation, amountLimit
                , participants, currentParticipants) {
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
        this.currentParticipants = currentParticipants;

    }
    //Peder: En ny tur skabes ved at først tjekke om en anden tur hedder det samme.
    // Vi har valgt at bruge at loops for at opnå dette.Bagefter skubbes det til localstorage med nøglen "tours".
    // Årsagen til at vi laver en if og else statement er, at metoden ikke fungere, hvis der bruges
    // localStorage.getItem. og nøglen ikke eksisterer i localStorage
    createTour(){
      var oldTours;
            if (localStorage.getItem("tours") == null) {
                 oldTours = []
            } else {
                 oldTours = JSON.parse(localStorage.getItem("tours"))
            }
            for(let i=0;i<oldTours.length;i++){
                if (newTour.tourName===oldTours[i].tourName){
                    alert("the Tour's name cannot be called the same as another tour");
                    return true
                }
            }

            oldTours.push(newTour);
            localStorage.setItem("tours",JSON.stringify(oldTours));
        alert("You have now created the tour");
        document.location.reload()
        }
//Peder: Turen slettes ved brug af .splice() i et loop, da alle ture er i et array
// . Derefter skubbes den opdateret string op til localstorage og siden genindlæses.
    //Metoden virker uden reload() i localstorage, men brugeren kan ikke se ændringerne med det samme på html-siden
    deleteTour() {
        let allTours = JSON.parse(localStorage.getItem("tours"));
        let deletedTour = document.getElementById("delete_name");
        for (let i = 0; i < allTours.length; i++) {
            if (allTours[i].tourName === deletedTour.value) {
                allTours.splice(i, 1);
                localStorage.setItem("tours", JSON.stringify(allTours));
                alert("You have now deleted the tour");
                document.location.reload();
                return true
            }
        }
            alert("The Tour name doesn't exist")
    }
    //Peder Metoden henter alle informationerne fra HTML-siden med getElementById. Derefter bruges et loop, hvor de
    // nye informationer skubes til localStorage. Vi har valgt at ændre alle properties i objektet, da metoden ikke
    // kan vide, om guiden ændre alle informationer eller kun en enkelt.
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

                localStorage.setItem("currentTour", JSON.stringify(Tour));
                localStorage.setItem("tours", JSON.stringify(Tours));

                window.location.reload(true)
            }
        }
    }
    }
