var currentDate = moment().format('dddd, MMMM Do, YYYY h:mm A');
var currentHour = moment().format('h a');
var currentDateEl = document.querySelector("#currentDay");
var dateElSelector = document.querySelector;(".lead");
var workHours = [9, 10, 11, 12 , 1, 2, 3, 4, 5];
var saveButtonEl = document.querySelector('#saveCalender');

console.log (currentDate)

currentDateEl.innerHTML = currentDate;

function loadToCalender() {
    for (var i = 9; i < 17; i++) {
        var loadRowSelector;
        loadCalEvent = localStorage.getItem("Activity" + workHours[i] + "AM");
        if (loadCalEvent) {
            loadRowSelector = document.getElementById('Cal' + workHours[i]).value = localStorage.getItem("Activity" + workHours[i] + "AM");
        } else {
            loadCalEvent = localStorage.getItem("Activity" + workHours[i] + "PM");
            loadRowSelector = document.getElementById('Cal' + workHours[i]).value = localStorage.getItem("Activity" + workHours[i] + "PM");
        }
    }
}

var currentTimeUpdate = setInterval(function () {
    var rowSelector;

    currentDate = moment().format('dddd, MMMM Do, YYYY, h:mm A');
    currentHour = moment().format('H');

    for (var i = 9; i <= 17; i++) {
        if (currentHour == workHours[i] + " AM" || currentHour == workHours[i] + " PM") {
            rowSelector = document.getElementById("Cal" + workHours[i]).style.backgroundColor = "#ff6961";
            i++;
            for (i; i < 17; i++) {
                rowSelector = document.getElementById("Cal" + workHours[i]).style.backgroundColor = "77dd77";
            }
        } else {
            rowSelector = document.getElementById("Cal" + workHours[i]).style.backgroundColor = "#d3d3d3";
        };
    }

    currentDateEl.innerHTML = currentDate;
    dateElSelector.appendChild(currentDateEl);
}, 1000);

function saveLocalData(event) {
    event.preventDefault();
    var activityInput = event.target.querySelector('.col-10').value;
    var timeInput = event.target.querySelector('#currentDay');

    localStorage.setItem("Time " + timeInput, timeInput)
    localStorage.setItem("Activity " + timeInput, activityInput)
}

$(document).on('submit', saveButtonEl, saveLocalData);
loadToCalender();