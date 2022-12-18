const pianoKeys = document.querySelectorAll('.piano-leys .key');

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.play(); //playing audio
}

pianoKeys.forEach(key => {
    //calling playTune function with data-key as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));
});