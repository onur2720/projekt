function checkForm(event) {
    event.preventDefault(); //sørger for ikke at reloade siden

//get metoder til de forskellige input felter
    var fornavnS = document.getElementById('fornavn').value;
    var efternavnS = document.getElementById('efternavn').value;
    var mailS = document.getElementById('mail').value;
    var beskedS = document.getElementById('besked').value;
    var button = document.getElementById('button');

    if(fornavnS == "" || efternavnS == ""|| mailS == "" || beskedS== "") {
        alert("Skriv venligst al informationen");
        focusForm();
        return false;
    }
    else {
        alert("Hej " + fornavnS + " " + efternavnS + ". Tak for henvendelsen, hvor du har henvendt dig med beskrivelsen: " + "\"" + beskedS + "\"" + ". Vi giver hurtigst muligt respons over mail: " + mailS + " \nBedste hilsener \nOnur Karakus");
        resetForm();
        focusForm();
        return true;
    }
}

function resetForm() {
    document.getElementById('form').reset(); //reset alle input felter, så de er clear
}

function focusForm() {
    document.getElementById('fname').focus(); //sætter cursoren på name input med det samme
}

