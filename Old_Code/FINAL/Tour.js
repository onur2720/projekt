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
        return "<tr><td>" + this.tourName + "</td><td>" + this.tourInfo+ "</td><td>" + this.tourDate + "</td><td>" + this.startTime + "</td><td>"+ this.duration + "</td><td>"+ this.tourPrice + "</td><td>" + this.tourLocation+ "</td></td>" + this.amountLimit + "</td></td>"+ this.participants + "</td></td>";

    };
}
