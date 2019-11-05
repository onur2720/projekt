var dt = new Date();

function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    console.log(dt.getDate());
    console.log(dt.getMonth() + 1);
    console.log(dt.getFullYear());
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

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

    document.getElementById("date_str").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    var cells = "";
    for(x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for(i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<div class='today' id='" + i +"'>" + i + "</div>";
        } else {
            cells += "<div id='" + i + "'>" + i + "</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
    if(para == 'prev'){
        dt.setMonth(dt.getMonth()-1);
    } else if(para == 'next') {
        dt.setMonth(dt.getMonth()+ 1);
    }
    renderDate();
}

// 1. Rediger typegrafi //
// 2. Rediger i knapperne //
// 3. Dagens dato skal stå som underoverskrift //