
/* ------------------------------- GLOBAL VARIABLES ------------------------------- */

let $listCurrentDay = $("#currentDay");
$listCurrentDay.text(moment().format("dddd, MMMM Do"));

// Current Time (real-time)
let now = parseInt(moment().format("k"));

/* Text Area DOM Elements to Affect Color */
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


/* ------------------------------- FUNCTIONS ------------------------------- */

/* Text Area DOM Elements placed into Array to match with "now" */
let timeslot = [ time8, time9, time10, time11, time12, time13, time14, time15, time16, time17 ];


/* Global Variables #2 */

// All Text Area with data attribute
let $allTextBox = $("textarea");
// allTextArea.text("Enter description here");

let $allButton = $(".saveBtn");
// $allButton.text("hi");

$(document).ready(function() {


$(document).on("click", ".saveBtn", storeInput);

let btnEl = [];
// console.log(btnEl);

function storeInput(){

    let inputvalue = $(this).attr("data-number");
    let buttonID = $("#" + inputvalue).val().trim();
    localStorage.setItem("todo", JSON.stringify(buttonID));

}


/* ------------------------------- GLOBAL FUNCTION ------------------------------- */

function colorRowTime(){
      for (let i = 0; i < 10; i++){
        if (i+8 === now){
          timeslot[i].addClass("present")
        }
        if (i+8 > now) {
          timeslot[i].addClass("future");
          }
      }
      };
colorRowTime();

});
