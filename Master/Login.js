let enteredUsername = document.getElementById('username');
let enteredPassWord = document.getElementById('password');
let checkUsername = document.getElementById('checkusername');
let checkPassword = document.getElementById('checkpassword');
let allUsers;

let newUser = new User("","", "");

document.getElementById("registration").addEventListener("click", function(){

    newUser.Username = enteredUsername.value;
    newUser.Password = enteredPassWord.value;

    newUser.signUp()
});

document.getElementById("login").addEventListener("click", function(){

    newUser.login()
});

let guide1 = new Guide("Peder","1");
let guide2 = new Guide("Onur","2");
let guide3 = new Guide("Leila","3");
document.getElementById("guideLoginbutton").addEventListener("click", function(){

    guide1.checkGuideLogin()
});
