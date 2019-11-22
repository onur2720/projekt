// TRIN 2: Vi laver en klasse, der indeholder værdierne se i Tours.js
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
        var bookbutton = "<button type='button' onclick=booking()>Book!</button>";
        var review = "<textarea type='text' rows='2' cols='10' id='review-tour' value='' placeholder='Review the tour here!'></textarea></br><button type='submit' style='cursor: pointer;'>Review</button>";
        return "<tr><td>" + this.tourName + "</td><td>" + this.tourInfo+ "</td><td>" + this.tourDate + "</td><td>" + this.startTime + "</td><td>"+ this.duration + "</td><td>"+ this.tourPrice + "</td><td>" + bookbutton + "</td></td>" + review + "</td></td>";

    }
}