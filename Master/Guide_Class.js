class Guide {
    constructor(guideUsername,guidePassword) {
        this.guideUsername = guideUsername;
        this.guidePassword = guidePassword;

    }
    checkGuideLogin() {

        let enteredGuideName = document.getElementById('enteredGuideName');
        let enteredGuidePass = document.getElementById('enteredGuidePass');


        if ((enteredGuideName.value === guide1.guideUsername && enteredGuidePass.value === guide1.guidePassword)
            || (enteredGuideName.value === guide2.guideUsername && enteredGuidePass.value === guide2.guidePassword)
            || (enteredGuideName.value === guide3.guideUsername && enteredGuidePass.value === guide3.guidePassword)) {
            alert('You are now logged in.');
            window.location = "guidePage.html"
        }
        else {
            alert('Error. Wrong login.');
        }
    }
}