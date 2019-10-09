window.onload= function () {
    var d = new Date();
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();
    // returns valule 0-11
    var year =  d.getFullYear();
    // returns 2019
    var firstDate = monthName[month] + " " + 1 + " " + year;
    // October 1 2019
    var tmp = new Date(firstDate).toDateString();
    // creates an object which stores the value - Tue Oct 1 2019..
    var firstDate = tmp.substring(0, 3); // Tue
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayNumber = dayName.indexOf(firstDate); // Tue
    var days = new Date(year, month+1,0).getDate();
    // get the value 31, the total number of days in the current month
};

function getCalender(dayNumber, days) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    // first row for the day letters

    for(var i=0; i<6; i++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[i];
        tr.appendChild(td);
    } //create for loop to the variable i, running from 0-6 incremented by 1. Inside the for-loop with an element 'td'.
    // afterwards td.innerHTML has a string for the first letters of the days.
    table.appendChild(tr);

    //Second row//




    
}
