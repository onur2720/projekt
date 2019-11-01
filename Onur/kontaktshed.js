function checkForm(event) {
  event.preventDefault(); //sørger for ikke at reloade siden

//get metoder til de forskellige input felter
var nameOfStudent = document.getElementById('fname').value;
var lastNameOfStudent = document.getElementById('lname').value;
var mailOfStudent = document.getElementById('email').value;
var messageByStudent = document.getElementById('messageByStudent').value;
var button = document.getElementById('button');

if(nameOfStudent == "" || lastNameOfStudent == ""|| mailOfStudent == "" || messageByStudent== "") {
  alert("Please enter all the information");
  focusForm();
  return false;
  }
  else {
      alert("Hej " + nameOfStudent + " " + lastNameOfStudent + ". Tak for din besked, hvor du skrev: " + "\"" + messageByStudent + "\"" + ". Vi vender tilbage til dig hurtigst muligt, på din mail: " + mailOfStudent + " \nMed venlig hilsen \nRamazan Akbas");
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
