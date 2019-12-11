class Guide {
    //Peder: Denne klasse har to properties: Username og Password
    constructor(guideUsername,guidePassword) {
        this.guideUsername = guideUsername;
        this.guidePassword = guidePassword;

    }
    //Peder: Denne metode bruges til at tjekke om kombinationen af Username og Password er rigtig,
    //så guiden får lov til at logge ind
    //Code-Review Peder: Ikke skalerbart i længden, da en linje skal skrives for hver guide
    checkGuideLogin() {

        let enteredGuideName = document.getElementById('enteredGuideName');
        let enteredGuidePass = document.getElementById('enteredGuidePass');


        if ((enteredGuideName.value === guide1.guideUsername && enteredGuidePass.value === guide1.guidePassword)
            || (enteredGuideName.value === guide2.guideUsername && enteredGuidePass.value === guide2.guidePassword)
            || (enteredGuideName.value === guide3.guideUsername && enteredGuidePass.value === guide3.guidePassword)
            || (enteredGuideName.value === guide4.guideUsername && enteredGuidePass.value === guide4.guidePassword)){
            alert('You are now logged in.');
            window.location = "guidePage.html"
        }
        else {
            alert('Error. Wrong login.');
        }
    }
}