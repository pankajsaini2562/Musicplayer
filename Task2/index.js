let progress = document.getElementById("progress")
let song = document.getElementById("audio")
let ctrlIcon = document.getElementById("ctrlIcon")
const speedControl = document.getElementById('speedControl');
const speedDisplay = document.getElementById('speedDisplay');

const volumeControl = document.getElementById('volumeControl');
const muteButton = document.getElementById('muteButton');

song.onloadedmetadata = function(){
   progress.max = song.duration;
   progress.value = song.currentTime;
}
speedControl.addEventListener('input', () => {
  const speed = parseFloat(speedControl.value);
  song.playbackRate = speed;
  speedDisplay.textContent = speed.toFixed(1) + 'x';
});
function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause")
    ctrlIcon.classList.add("fa-play")
  }
  else {
    song.play()
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
  }
}

if(song.play()){
  setInterval(()=>{
progress.value = song.currentTime;

  },500);
}

progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause")
  ctrlIcon.classList.remove("fa-play")
}