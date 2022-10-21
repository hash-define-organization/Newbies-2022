for (var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        pressAnimation(this.innerHTML);
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keypress",function(e){
    pressAnimation(e.key);
    makeSound(e.key);
});

function makeSound(key){
    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
    
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
    
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            console.log("idk what did you do but u crashed the server");
            break;
    }
}

function pressAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}