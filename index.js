var noOfbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<noOfbuttons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
var buttoninnerHTML = this.innerHTML;
makesound(buttoninnerHTML);
buttonFlash(buttoninnerHTML);
});
}
document.addEventListener("keydown",function(event) {
	makesound(event.key);
	buttonFlash(event.key);
});
function makesound(key) {

switch (key) {

case "w":
var ton1  = new Audio("sounds/tom-1.mp3");
ton1.play();
break;

case "a":
var ton2  = new Audio("sounds/tom-2.mp3");
ton2.play();
break;

case "s":
var ton3  = new Audio("sounds/tom-3.mp3");
ton3.play();
break;

case "d":
var ton4  = new Audio("sounds/tom-4.mp3");
ton4.play();
break;

case "j":
var ton5  = new Audio("sounds/snare.mp3");
ton5.play();
break;

case "k":
var ton6  = new Audio("sounds/crash.mp3");
ton6.play();
break;

case "l":
var ton7  = new Audio("sounds/kick-bass.mp3");
ton7.play();
break;

default:
consol.log(innerHTML);
}

}

// Flash of Buttons

function buttonFlash(currentkey) {
 var activebutton = document.querySelector("."+currentkey);
 activebutton.classList.add("pressed");

setTimeout(function() {
activebutton.classList.remove("pressed");

},100);

}