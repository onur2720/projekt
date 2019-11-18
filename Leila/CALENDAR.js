// dt is equal to new Date()
var dt = new Date();

function renderDate() {
    // our first day in the month is set to the 1st.
    dt.setDate(1);
    // we get the date from dt with .getDay()
    var day = dt.getDay();
    console.log(dt.getDate());
    console.log(dt.getMonth() + 1);
    console.log(dt.getFullYear());
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    // today is equal to new Date()
    var today = new Date();
    console.log(today);

    // We create an array with all the months //
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.getElementById("date_str").innerHTML = dt.toLocaleDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    // the string cells is empty until the a day passes and the dates becomes the previous date and a new class name gets assigned.
    var cells = "";
    for(x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
// for-loop assigns id for all the dates from the current date to all the upcoming dates
    for(i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<div class='today' id='" + i +"'>" + i +  "</div>";
        } else {
            cells += "<div class='next_date' id='" + i + "'>" + i + "</div>";
        }
    }
// .getElemtsByClassName gives all elements that is assigned the class 'days' from .innerHTML converts to cells.
    document.getElementsByClassName("days")[0].innerHTML = cells;
}
// function moveDate(para), allows us to move between the months in the calendar based on the conditions in the if/else-statement
function moveDate(para) {
    if(para == 'prev'){
        dt.setMonth(dt.getMonth()-1);
    } else if(para == 'next') {
        dt.setMonth(dt.getMonth()+ 1);
    }
    renderDate();
}


//document.getElementsByClassName("hello").style.display="block";


/* var node = document.createElement("p");
node.appendChild(document.createTextNode("Hello"));
document.getElementById("output").appendChild(node); */



// 1. Rediger typegrafi //
// 2. Rediger i knapperne //
// 3. Dagens dato skal stå som underoverskrift //