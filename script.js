const save_id_prefix = "save";

var currentDay = moment().format("ddd Do MMMM");
var currentHour = parseInt(moment().format("H"));
var timeBlocks = $(".time-block");
var saveButtons = $(".saveBtn");

function updateTimeBlocks() {
    for (i = 0; i < timeBlocks.length; i++) {
        if (timeBlocks[i].id < currentHour) {
            $(timeBlocks[i]).attr("class", "time-block past");
        }

        else if (timeBlocks[i].id === currentHour) {
            $(timeBlocks[i]).attr("class", "time-block present");
        }
        else {
            $(timeBlocks[i]).attr("class", "time-block future");
        }
    }
}

function loadSavedItems() {
    for (i = 0; i < timeBlocks.length; i++) {
        if (localStorage [save_id_prefix + timeBlocks[i].id) {
            timeBlocks[i].value = localStorage[save_id_prefix + timeBlocks[i].id];
        }
    }
}

function bindSaveButtons() {
    $(saveButtons).on("click", function () {
        var saveId = this.id;
        var idNumber = save.Id.slice(save_id_prefix.length, saveId.length);
        var timeBlockText = $("#" + idNumber).val();
        localStorage[saveId] = timeBlockText;
    });
}

function beginTimeUpdates () {
    interval = setInterval (function () {
        currentDay = moment().format ("dddd Do MMMM");
        currentHour = parseInt(moment().format('H'));
        $("#currentDay").text(currentDay);
        updateTimeBlocks();
    }, 1000);
}

bindSaveButtons();
loadSavedItems();

$("#currentDay").text(currentDay);
updateTimeBlocks();

beginTimeUpdates();