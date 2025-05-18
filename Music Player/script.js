const music = document.getElementById("music");
const playBtn = document.querySelector(".Play i");
const backBtn = document.querySelector(".Back");
const forwardBtn = document.querySelector(".Forward");
const musicPic = document.querySelector("#music-pic img");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// Playlist: songs and corresponding images
const playlist = [
  {
    src: "./assets/music/music1.mp3",
    image: "./assets/images/image1.jpg",
  },
   {
    src: "./assets/music/music2.mp3",
    image: "./assets/images/image2.jpg",
  },
   {
    src: "./assets/music/music3.mp3",
    image: "./assets/images/image3.jpg",
  },
   {
    src: "./assets/music/music4.mp3",
    image: "./assets/images/image4.jpg",
  },
  {
    src: "./assets/music/music5.mp3",
    image: "./assets/images/image5.jpg",
  },
];

let currentSong = 0;
let isPlaying = false;

// Format seconds to mm:ss

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

// Load current song and image

function loadSong(index) {
  music.src = playlist[index].src;
  musicPic.src = playlist[index].image;
  music.load();
  if (isPlaying) music.play();
}
document.querySelector(".Play").addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    musicPic.classList.remove("rotating"); 
  } else {
    music.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    musicPic.classList.add("rotating"); 
  }
  isPlaying = !isPlaying;
});
// Back button: go to previous song
backBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong(currentSong);
});

// Forward button: go to next song
forwardBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
});


// When song ends, go to next
music.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
});

// Progress bar update
music.addEventListener("timeupdate", () => {
  progress.value = Math.floor(music.currentTime);
  currentTimeEl.textContent = formatTime(music.currentTime);
});

// Set max duration when loaded
music.addEventListener("loadedmetadata", () => {
  progress.max = Math.floor(music.duration);
  durationEl.textContent = formatTime(music.duration);
});

// Seek on progress bar change
progress.addEventListener("input", () => {
  music.currentTime = progress.value;
});
