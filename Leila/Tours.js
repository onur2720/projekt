
// We use the constructor function which includes the object 'this'. 'this' is the substitute for the tour-values */

class Tour {
    constructor(tourName, tourInfo, startTime, tourDate, duration, meetingPoint, tourPrice, tourLocation) {
        this.tourName = tourName;
        this.tourInfo = tourInfo;
        this.tourDate = tourDate;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
    }

    CreateTour() {
            if (localStorage.getItem("tours") == null) {
                oldTour = []
                //Først bruges der "if", der tjekker om der IKKE er en key, som hedder "Users" i localstorage.
                //Hvis dette er true, vil funktion sætte et tomt array til variablen allUsers
            } else {
                oldTour = JSON.parse(localStorage.getItem("tours"))
                //Hvis der er en key, der hedder Users i localstorage, bruges der JSON.parse, så værdien af Users, kan blive tildelt til allUsers
            }
            let tour = new Tour(tourName.value,tourInfo.value,tourDate.value,tourStartTime.value,tourDuration.value,tourMeetingPoint.value,tourPrice.value,tourLocation.value, amountLimit.value,"","", 0);

            for(i=0;i<oldTour.length;i++){
                if (tour.tourName===oldTours[i].tourName){
                    alert("the tourname cannot be called the same as another tour");
                    return true
                }
            }

            var alertMessage = "";
            var alertBoolean = true;

            // if statement which controls that the information required is filled correctly
            if (tour.tourName=="") {
                alertMessage += "Indtast tour name \n";
                alertBoolean = false;
            }

            // if statement controls that the tour info is at least 30 characters
            if (tour.tourInfo.length <="20") {
                alertMessage +="Tour information skal mindst være 30 tegn \n";
                alertBoolean = false;
            }

            // The boxes the guide has to fill out, is not filled correctly if the alertBoolean is false. This will set off the alertMessage.
            // If the alertBoolean is true, everything is filled out correctly and  the tour will be created
            if (alertBoolean === false) {
                alert(alertMessage);
                return true
            }

            oldTour.push(tour);
            localStorage.setItem("tours",JSON.stringify(oldTour))
        }
    }

    let newTour = new Tour("", "","","","","","","");
    document.getElementById("create_btn").addEventListener("click", newTour.CreateTour());




// We create a table with createHTML()
// The return statement stops the execution of the function and returns the values from the function Tours.
    createHTML()   {
        var bookbutton = "<button type='button' onclick=booking()>Book!</button>";
        var review = "<textarea type='text' rows='2' cols='10' id='review-tour' value='' placeholder='Review the tour here!'></textarea></br><button type='submit' style='cursor: pointer;'>Review</button>";
        return "<tr><td>" + this.tourName + "</td><td>" + this.tourInfo+ "</td><td>" + this.tourDate + "</td><td>" + this.startTime + "</td><td>"+ this.duration + "</td><td>"+ this.tourPrice + "</td><td>" + bookbutton + "</td></td>" + review + "</td></td>";

    }
}
