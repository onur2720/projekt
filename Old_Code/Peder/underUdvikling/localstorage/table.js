//this creates references to the table in the HTML document
var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');
var allDeleteButtons = document.getElementsByClassName('delete')
var allAddButtons = document.getElementsByClassName(('addToStorage'))

//this is a class
class Fleamarket {
    constructor(name, location, date){
        this.name = name;
        this.location = location;
        this.date = date;
    }

//This is a method. The tr tag refers to a row and the td tag to a cell within that row.
    createHTML(){

        var addbutton = "<input type='button' class='addToStorage' name='add to storage' data-object='" + JSON.stringify(this) + "' value='Add to Storage' id='click'></input>";
        var deleteButton = "<input type='button' class='delete' name='delete from list' data-object='" + JSON.stringify(this) + "' value='Remove' id='click'></input>"
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + deleteButton + "</td><td>" + addbutton + "</td></tr>";
    }
}

//We create an array that contains two Fleamarket objects
var list = [];
list.push(new Fleamarket("A", "Books & Bags", "12.10.2019"));
list.push(new Fleamarket("B", "Vintage Jewelry", "12.11.2019"));

//This is an empty string
var html = "";

//This is a loop that loops through the objects in the list array. As the are Fleamarket objects we can call the method createHTML
for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}

// The table body will contain the string "html" which contains a string similar to this: ""<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>"...."
// the table can read the string properly and inserts everything correctly
tbody[0].innerHTML = html;

// Create wishes variable. Get the wishes from local storage and parse it from json to array. If wishes in local Storage is empty, use empty array for wishes.
var items;
if (localStorage.getItem('items') == null) {
    items = list
    localStorage.setItem("items", JSON.stringify(items))
    // if local storage wishes not empty, set var wishes to local storage
} else {
    items = JSON.parse(localStorage.getItem('items'))
}

//Add event listener for click on event. NOT SHOWN ANYMORE AS WE HAVE IMPLEMENTED NOTE
for(u=0; u < allAddButtons.length; u++){
    allAddButtons[u].addEventListener('click', function(e){
        console.log(this);
        for (j=0; j< items.length; j++) {
            //Alert ("already in wishlist") if fleamarket stored in local storage under the current user's user ID
            if (JSON.parse(this.dataset.object).name == items[j].name){
                alert ("already in storage");
                return
            }
        }


        // Push button information to wishes array and save to local storage
        items.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(items);
        localStorage.setItem('items', listString);
        window.location.reload();

    });
}

// On click, item is removed from the list by updating the wishes variable which is then updated in the local storage
for (u=0; u < allDeleteButtons.length; u++){
    allDeleteButtons[u].addEventListener('click', function(e){
        var name = JSON.parse(this.dataset.object).name;
        console.log(name)
        items = items.filter(function (item) {
            if(item.name == name) {
                return item.name !== name;
            } else {
                return item
            }

        });

        var listString = JSON.stringify(items);
        localStorage.setItem('items', listString);

        //automatically refresh after click
        onClick=ManualRefresh()
        function ManualRefresh(){
            window.location.reload();
        }

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    });
};