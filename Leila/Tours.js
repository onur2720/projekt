
// LET - Vi opretter vores tour-object for at kunne kalde/benytte tours i vores booking system.

class Tours {
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
// LT - Vi opretter HTML-kode i vores js for at oprette en 'table' for vores objecter.
// LT - Vi har valgt at holde det på samme side, således at vi let kan finde tilbage til indholdet.
    createHTML()   {
        var bookbutton = "<button type='button' onclick=booking()>Book!</button>";
        var review = "<textarea type='text' rows='2' cols='10' id='review-tour' value='' placeholder='Review the tour here!'></textarea></br><button type='submit' style='cursor: pointer;'>Review</button>";
        return "<tr><td>" + this.tourName + "</td><td>" + this.tourInfo+ "</td><td>" + this.tourDate + "</td><td>" + this.startTime + "</td><td>"+ this.duration + "</td><td>"+ this.tourPrice + "</td><td>" + bookbutton + "</td></td>" + review + "</td></td>";

    }
}
