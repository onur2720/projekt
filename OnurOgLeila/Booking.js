
class Booking {
    constructor (tourName, guideUsername, Username, productID) {
        Tour.call(this, tourName);
        Guide.call(this, guideUsername);
        User.call(this, Username);
        this.productID = productID;
    }
}






