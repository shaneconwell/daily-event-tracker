var saveButton = $(".saveBtn");
var timeDisplayEl = $('#time-display');
var rightNow
var resetButtonEl = $('#resetBtn');


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

function displayTime() {
    rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(rightNow);
    return;
}

saveButton.on("click", function () {
    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

// Timeblocks are color coded to indicate whether it is in the past, present, or future

var currentTime = moment().hours();
console.log(currentTime);
$(".time-block").each(function () {
    var thisHour = parseInt($(this).attr("id").replace(/hour-/, ''));
    console.log(thisHour);
    if (thisHour < currentTime) {
        $(this).removeClass("future")
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (thisHour === currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future")
        $(this).addClass("present");
    } else {
        $(this).removeClass("present");
        $(this).addClass("past");
        $(this).addClass("future");
    }
});


$("#hour-9").children(2).val(localStorage.getItem("hour-9"));
$("#hour-10").children(2).val(localStorage.getItem("hour-10"));
$("#hour-11").children(2).val(localStorage.getItem("hour-11"));
$("#hour-12").children(2).val(localStorage.getItem("hour-12"));
$("#hour-13").children(2).val(localStorage.getItem("hour-13"));
$("#hour-14").children(2).val(localStorage.getItem("hour-14"));
$("#hour-15").children(2).val(localStorage.getItem("hour-15"));
$("#hour-16").children(2).val(localStorage.getItem("hour-16"));
$("#hour-17").children(2).val(localStorage.getItem("hour-17"));

resetButtonEl.on("click", function () {
    localStorage.clear();
    location.reload();
});


setInterval(displayTime, 1000);
localStorage.setItem