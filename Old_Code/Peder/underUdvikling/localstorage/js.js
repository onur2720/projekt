/*var header = document.getElementsByTagName("h1") [0];
console.log(header);
localStorage.setItem("siteName", "My Site");
siteName = localStorage.getItem("siteName");
console.log(siteName)
header.innerHTHML = "hejsa";
localStorage.removeItem("siteName2");
var header = document.getElementsByTagName("h1")[0],
    siteData = {
    siteName: "My Site",
        siteDescription: "Another JS Site"
    },

    localData;
localStorage.setItem("siteData",JSON.stringify(siteData));
localData = JSON.parse(localStorage.getItem("siteData"));
console.log(localData);
console.log(localStorage.getItem("siteData"));
console.log(siteData)
console.log(localData.siteName)*/
//Peder: Koden skal opnå at lave en loginfunktion
//Vi henter fra html.dokumentet de to værdier, der har id'et username og password og tildeler dem til to variabler, der hedder userName og passWord
var userName = document.getElementById('username');
var passWord = document.getElementById('password');

/*
function storeLogin(){

    if (localStorage.getItem("0")!=null)
    {
        userInfo2 = {
            Username: userName.value,
            Password: passWord.value
        };
        localStorage.setItem("1",JSON.stringify(userInfo2));
        let localData2 = JSON.parse(localStorage.getItem("1"));
    } else {
            userInfo = {
                Username: userName.value,
                Password: passWord.value
            };
            localStorage.setItem("0",JSON.stringify(userInfo));
            let localData = JSON.parse(localStorage.getItem("0"));
    }
};*/
/*let test = localStorage.key("1");
console.log(test);
let testlength = test.length;
console.log(test.charAt(testlength-1));
if (test.charAt(testlength - 1)==2){
    alert("hej")}
*/

//Vi skaber en funckion, der bruges i HTML-dokumentet, når "Register" trykkes i html-dokumentet.
function loop() {
    //Her skabes der en userInfo objekt, der indeholder informationer om brugeren, hvilket er værdien af de two inputs: userName og passWord
    userInfo = {
        Username: userName.value,
        Password: passWord.value
    };
//Denne if-sætning tjekker, hvis længden af password er mellem 4 eller 16 tegn
    if (passWord.value.length < 4 || passWord.value.length > 16){
        alert("You need to write a Password with a length between 4 and 16");
        throw new Error("Something went badly wrong!");
    }

//Her defineres to variabler. NumberOfUsers, som er antallet
    let numberOfUsers = Object.keys(localStorage);
    let h = numberOfUsers.length;
    localStorage.setItem(h, JSON.stringify(userInfo));
    let localData = JSON.parse(localStorage.getItem(h));

    for(i=0; i < h; i++){
        if (JSON.parse(localStorage.getItem(h)).Username===JSON.parse(localStorage.getItem(i)).Username){
            alert("This username has been taken")

            localStorage.removeItem(h)
            throw new Error("Something went badly wrong!");
    }}
    document.cookie = "username="+username.value;

}
function hejsa(){
for(i=0; i < z; i++){
    if (JSON.parse(localStorage.getItem(z)).Username===JSON.parse(localStorage.getItem(i)).Username){
        alert("This username has been taken")
    }
}}

function logintest() {
    let numberOfUsers = Object.keys(localStorage);
    let h = numberOfUsers.length;
    for (i = 0; i < h; i++) {
        if (JSON.parse(localStorage.getItem(i)).Username == userName.value  && JSON.parse(localStorage.getItem(i)).Password == passWord.value) {
            document.cookie = "username="+username.value;

            window.location = "logedin.html"

        } else if (userName.value == ""  && passWord.value == ""){
            alert("Please write your username and password")
            throw new Error("Something went badly wrong!");
        } else if (userName.value == ""){
            alert("Please write username")
            throw new Error("Something went badly wrong!");
        } else if (passWord.value == "" )
        {alert("Please write Password")
        throw new Error("Something went badly wrong!");}
     else if (JSON.parse(localStorage.getItem(i)).Username !== userName.value  || JSON.parse(localStorage.getItem(i)).Password !== passWord.value)
    }
}




/*function storeLogin() {

   },

         localData;
     localStorage.setItem("userInformation",JSON.stringify(userInfo));

}

   /* (
    }'username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
    var result = str.link(index.html)
    function storeLogin() {
    userInfo = {
        Username: userName.value,
        Password: passWord.value
    };
    if (localStorage.getItem("userInformation.Username").length < 2) {
        localStorage.setItem(userinformation2), JSON.stringify(userInfo);
    } else {

        localStorage.setItem("userInformation", JSON.stringify(userInfo))

    }
};
console.log(localStorage.getItem("userInformation"));
 */
