


/* ------------------------------- GLOBAL VARIABLES ------------------------------- */

let $listCurrentDay = $("#currentDay");
$listCurrentDay.text(moment().format("dddd, MMMM Do"));

// Current Time (real-time)
let now = parseInt(moment().format("k"));

// All Text Area with data attribute
let allTextArea = $("textarea");
// allTextArea.text("Enter description here");

let dataTextArea = allTextArea.attr("data");
// console.log(dataTextArea);

let time8 = $("#8"); //0    8
let time9 = $("#9"); //1    9
let time10 = $("#10"); //2    10
let time11 = $("#11"); //3    11
let time12 = $("#12"); //4    12
let time13 = $("#13"); //5    1
let time14 = $("#14"); //6    2
let time15 = $("#15"); //7    3
let time16 = $("#16"); //8    4
let time17 = $("#17"); //9    5

let timeslot = [ time8, time9, time10, time11, time12, time13, time14, time15, time16, time17 ];

/* ------------------------------- FUNCTIONS ------------------------------- */

function getTime() {
// Get the time
// If time is == to the row ID, then change color to red
// If time is > less than the row ID, then change color to green
};


function colorRowTime(){
// Present = .present
// Future = .future
for (let i = 0; i < 10; i++){
  if (i+8 === now){
    timeslot[i].addClass("present")
  }
  if (i+8 > now) {
    timeslot[i].addClass("future");
    }
}
};


function storeUserInfo(){

};

colorRowTime();
