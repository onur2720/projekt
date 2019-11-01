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
var userName = document.getElementById('username');
var passWord = document.getElementById('password');

console.log(userName);
console.log(passWord);
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
};
/*let test = localStorage.key("1");
console.log(test);
let testlength = test.length;
console.log(test.charAt(testlength-1));
if (test.charAt(testlength - 1)==2){
    alert("hej")}
*/
let numberOfUsers = Object.keys(localStorage)
let h = numberOfUsers.length
let z = numberOfUsers.length-1
console.log(h)
function loop() {
    userInfo = {
        Username: userName.value,
        Password: passWord.value

    };

    localStorage.setItem(h, JSON.stringify(userInfo));
    let localData = JSON.parse(localStorage.getItem(h));

}
function hejsa(){
for(i=0; i < z; i++){
    if (JSON.parse(localStorage.getItem(z)).Username===JSON.parse(localStorage.getItem(i)).Username){
        alert("This username has been taken")
    }
}}
console.log(JSON.parse(localStorage.getItem(z)).Username);
console.log(JSON.parse(localStorage.getItem(49)).Username);

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
