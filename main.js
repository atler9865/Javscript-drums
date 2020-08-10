//Start background music player
const playerPlay = document.querySelector('.player-item-play');
const playerPause = document.querySelector('.player-item-pause');
const playerStop = document.querySelector('.player-item-stop');
const backgroundMusic = document.querySelector('#background-music');

function playBackgroundMusic(e){
    backgroundMusic.play();
}

function pauseBackgroundMusic(e){
    backgroundMusic.pause();
}

function stopBackgroundMusic(e){
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}
//End background music player

function playSoundFromKeyboard(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return ;
    
        audio.currentTime = 0;
        audio.play();
    
        key.classList.add('playing');
}

function playSoundOnClick(e){
    let audio, key;

    //if user click inside key element
    if(!e.target.dataset.key)
    {
        audio = document.querySelector(`audio[data-key="${e.target.parentElement.dataset.key}"]`);
        key = document.querySelector(`.key[data-key="${e.target.parentElement.dataset.key}"]`);
    }
    else //if user click on key element
    {
        audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        key = document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
    }

    // if(!audio) return ;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

//remove animation after play
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

//Start background music player
playerPlay.addEventListener('click', playBackgroundMusic);
playerPause.addEventListener('click', pauseBackgroundMusic);
playerStop.addEventListener('click', stopBackgroundMusic);
//End background music player

//remove animation after play
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Play sound with mouse click
keys.forEach(key => key.addEventListener('click', playSoundOnClick));

//Play sound on keyboard click
window.addEventListener('keydown', playSoundFromKeyboard);