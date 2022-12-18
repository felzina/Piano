const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;//passing audio scr based on key pressed
    audio.play(); //playing audio
}

pianoKeys.forEach(key => {
    //calling playTune function with data-key as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});