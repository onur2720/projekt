
// Tour class
class Tours {
    constructor(tourName, tourInfo, startTime, duration, meetingPoint, tourPrice, tourLocation) {
        this.tourname = tourName;
        this.tourInfo = tourInfo;
        this.startTime = startTime;
        this.duration = duration;
        this.meetingPoint = meetingPoint;
        this.tourPrice = tourPrice;
        this.tourLocation = tourLocation;
    }
    createHTML()   {
        return "<tr><td>" + this.tourname + "</td><td>" + this.startTime + "</td><td>" + this.duration + "</td><td>"+ this.tourPrice + "</td><td>"+ this.tourname + "</td></td>"
                }

}
