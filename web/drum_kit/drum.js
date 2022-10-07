//by mouse
var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;

       selectButton(buttonInnerHtml);
addAnimation(buttonInnerHtml);
        }

    );
}

function selectButton(buttonInnerHtml){

    switch (buttonInnerHtml) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
      
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":

            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":

            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

    }

}

//by keyboard

document.addEventListener("keydown",function(event){
   var keyInnerHtml= event.key;
   selectButton(keyInnerHtml);
   addAnimation(keyInnerHtml);
})
function addAnimation(buttonInnerHtml){
var ele=document.querySelector("."+buttonInnerHtml);
ele.classList.add("pressed");
setTimeout(function(){
    ele.classList.remove("pressed")
},100);
}







