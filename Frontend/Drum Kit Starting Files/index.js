var len = document.querySelectorAll(".drum").length;



for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var btn = this.innerHTML;
        audioTrack(btn);
        buttonAnimation(btn);
    });
}

document.addEventListener("keypress", (e) => {
    audioTrack(e.key);
    buttonAnimation(e.key);
})

function audioTrack(btn) {
    switch (btn) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}

