// Music
const musicSound = new Audio('hapi.mp3');
musicSound.loop = true;
musicSound.play();

if(!musicSound.paused){
    var musicBtn = document.getElementById('music');
    musicBtn.style.background = "url('musicBtn.jpg') no-repeat";
    musicBtn.style.backgroundSize = "cover";
    musicBtn.style.backgroundPosition = "center";
}

var clickAudio = new Audio('click.wav');
let isSoundOn = true;
clickAudio.volume = 1;

function startGame() {
    window.location.href = "level.html";
}

function optionClicked(id) {
    if(id === "home"){
        window.location.href = "index.html";
    } else if (id === "sound"){
        var soundBtn = document.getElementById(id);
        clickAudio.play();
        if(!isSoundOn){
            clickAudio.volume = 1;
            isSoundOn = true;
            soundBtn.style.background = "url('voiceBtn.jpg')";
            soundBtn.style.backgroundSize = "cover";
            soundBtn.style.backgroundPosition = "center";
        } else {
            clickAudio.volume = 0;
            isSoundOn = false;
            soundBtn.style.background = "url('voiceMuteBtn.png')";
            soundBtn.style.backgroundSize = "cover";
            soundBtn.style.backgroundPosition = "center";
        }
    } else if (id === 'music') {
        var musicBtn = document.getElementById(id);
        clickAudio.play();
        // Toggle playback
        if (musicSound.paused) {
            musicSound.play();
            musicBtn.style.background = "url('musicBtn.jpg') no-repeat";
            musicBtn.style.backgroundSize = "cover";
            musicBtn.style.backgroundPosition = "center";
        } else {
            musicSound.pause();
            musicBtn.style.background = "url('musicMuteBtn.png') no-repeat";
            musicBtn.style.backgroundSize = "cover";
            musicBtn.style.backgroundPosition = "center";
        }
    } else if (id === "exit"){
        clickAudio.play();
        window.history.back() = "level.html";   
    } else if (id === "repeat"){
        clickAudio.play();
        window.location.reload(); // Refresh the current page
    }
}

function toggleDropdown() {
    clickAudio.play();
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.option-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        }
    }
}