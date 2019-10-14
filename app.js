// Username and Password for the registration form
var username = document.getElementById('username');
var password = document.getElementById('password');

class admin {
    constructor(adminUsername,adminPassword) {
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }
}
   var admin1 = new admin("Peder","jegergod");
var admin2 = new admin("Onur","prololspiller");
var admin3 = new admin("Leila","giderikkeatmodeoptiltiden");
var admin4 = new admin("Jonas","huskdinoplader");
       console.log(admin1);
// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
    var result = str.link(index.html)
}

// Function to list user in localStorage
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedName && enteredPass.value == storedPass) {
        window.location.href = "http://www.google.com";
        alert("You are logged in");




    }else {
        alert('Error. Wrong login.');
    }
}

function checkAdminLogin() {

  
  
  

    // Entered data in the login form
    var enteredAdminName = document.getElementById('enteredAdminName');
    var enteredAdminPass = document.getElementById('enteredAdminPass');

    // Check if stored data from registration form is equal to entered data from login form
    if ((enteredAdminName.value == "Peder" && enteredAdminPass.value == "jegergod") || (enteredAdminName.value == "Leila" && enteredAdminPass.value == "jegerdoven")
    || (enteredAdminName.value == "Onur" && enteredAdminPass.value == "profortnitespiller")
    || (enteredAdminName.value == "Jonas" && enteredAdminPass.value == "ripoplader")) {
        window.location.href = "http://www.google.com";
        alert("You are logged in"); }















     else {
        alert('Error. Wrong login.');
    }
}



function clearUser() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}