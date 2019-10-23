
// Tour class
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

    createHTML()   {
        var bookbutton = "<button type='button'>Book!</button>";
        return "<tr><td>" + this.tourName + "</td><td>" + this.startTime + "</td><td>" + this.tourDate + "</td><td>"+ this.tourPrice + "</td><td>" + bookbutton + "</td></td>";

    }

}
