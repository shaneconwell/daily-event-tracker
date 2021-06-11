var saveButton = $(".saveBtn");
var timeDisplayEl = $('#time-display');
var resetButtonEl = $('#resetBtn');

var rightNow

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function displayTime() {
    rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(rightNow);
    return;
}

// button saves text in the description field  as a value onto local Storage with its time parent being the key. 
saveButton.on("click", function () {
    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

// Timeblocks are color coded to indicate whether it is in the past, present, or future
var currentTime = moment().hours();
$(".time-block").each(function () {
    var thisHour = parseInt($(this).attr("id").replace(/hour-/,''));
    console.log(thisHour);
    if (thisHour < currentTime) {
        $(this).removeClass("future")
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (thisHour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future")
        $(this).addClass("present");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
});

// gets any values saved in local storage and appends those saved values onto the child of their matching key
$("#hour-9").children(2).val(localStorage.getItem("hour-9"));
$("#hour-10").children(2).val(localStorage.getItem("hour-10"));
$("#hour-11").children(2).val(localStorage.getItem("hour-11"));
$("#hour-12").children(2).val(localStorage.getItem("hour-12"));
$("#hour-13").children(2).val(localStorage.getItem("hour-13"));
$("#hour-14").children(2).val(localStorage.getItem("hour-14"));
$("#hour-15").children(2).val(localStorage.getItem("hour-15"));
$("#hour-16").children(2).val(localStorage.getItem("hour-16"));
$("#hour-17").children(2).val(localStorage.getItem("hour-17"));

// reset button added to clear storage, possibly at the start of a new day
resetButtonEl.on("click", function () {
    localStorage.clear();
    location.reload();
});

// interval running to  update the displayed time every second
setInterval(displayTime, 1000);
localStorage.setItem