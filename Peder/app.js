// Username and Password for the registration form
var username = document.getElementById('username');
var password = document.getElementById('password');

class admin {
    constructor(adminUsername,adminPassword) {
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }
}
var admin1 = new admin("Peder","1");
var admin2 = new admin("Onur","2");
var admin3 = new admin("Leila","3");
var admin4 = new admin("Jonas","4");
       console.log(admin1);
       //Under forsøg

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

        alert('You are now logged in.');
        window.location = "indstillinger.html"




    }else {
        alert('Error. Wrong login.');
    }
}

function myFunction() {
    window.location.assign("indstillinger.html")
}

function checkAdminLogin() {

    // Entered data in the login form
    var enteredAdminName = document.getElementById('enteredAdminName');
    var enteredAdminPass = document.getElementById('enteredAdminPass');

    // Check if stored data from registration form is equal to adminpassword and adminusername
    if ((enteredAdminName.value == admin1.adminUsername && enteredAdminPass.value == admin1.adminPassword)
        || (enteredAdminName.value == admin2.adminUsername && enteredAdminPass.value == admin2.adminPassword)
        || (enteredAdminName.value == admin3.adminUsername && enteredAdminPass.value == admin3.adminPassword)
        || (enteredAdminName.value == admin4.adminUsername && enteredAdminPass.value == admin4.adminPassword)) {
        alert('You are now logged in.');
        window.location = "indstillinger.html"
        }
     else {
        alert('Error. Wrong login.');
    }
}



function clearUser() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}