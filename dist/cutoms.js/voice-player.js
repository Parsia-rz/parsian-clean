// const image = document.querySelector("#cover");
// const title = document.getElementById("title");
// const artist = document.getElementById("artist");
// const music = document.querySelector("audio");
// const currentTimeEl = document.getElementById("current-time");
// const durationEl = document.getElementById("duration");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");
// const background = document.getElementById("background");

// // Music
// const songs = [
//   {
//     path:
//       "/dist/assets/landing-page/elderly-nurse/audio/voice-message-1.ogg",
//     displayName: "خانم خاکی",
//     artist: "خدمات ارائه شده : پرستار سالمند پوشکی",
//     // cover:
//     //   "../dist/assets/landing-page/header-cover-1.jpg",
//   },
//   {
//     path: "/dist/assets/landing-page/elderly-nurse/audio/voice-message-2.ogg",
//     displayName: "خانم باقری",
//     artist: "خدمات ارائه شده : امور آشپزی و منزل",
//     // cover: "https://picsum.photos/id/1076/600/400",
//   },
// ];

// // Check if Playing
// let isPlaying = false;

// // Play
// function playSong() {
//   isPlaying = true;
// //   playBtn.classList.replace("fa-play", "fa-pause");
//   playBtn.className = 'bi bi-pause-fill'
// //   playBtn.setAttribute("title", "Pause");
//   music.play();
// }

// // Pause
// function pauseSong() {
//   isPlaying = false;
//   playBtn.className = 'bi bi-play';
// //   playBtn.setAttribute("title", "Play");
//   music.pause();
// }

// // Play or Pause Event Listener
// playBtn.addEventListener("click", function () {
//   if (isPlaying) {
//     pauseSong()
//   } else {
//     playSong()
//   }
// })

// // Update DOM
// function loadSong(song) {
//   console.log(song);
//   title.textContent = song.displayName;
//   artist.textContent = song.artist;
//   music.src = song.path;
//   // changeCover(song.cover);
// }

// // function changeCover(cover) {
// //   image.classList.remove("active");
// //   setTimeout(() => {
// //     image.src = cover;
// //     image.classList.add("active");
// //   }, 100);
// //   background.src = cover;
// // }

// // Current Song
// let songIndex = 0;

// // Previous Song
// function prevSong() {
//   songIndex--;
//   if (songIndex < 0) {
//     songIndex = songs.length - 1;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
// }

// // Next Song
// function nextSong() {
//   songIndex++;
//   if (songIndex > songs.length - 1) {
//     songIndex = 0;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
// }

// // On Load - Select First Song
// loadSong(songs[songIndex]);

// // Update Progress Bar & Time
// function updateProgressBar(e) {
//   if (isPlaying) {
//     const duration = e.srcElement.duration;
//     const currentTime = e.srcElement.currentTime;
//     // Update progress bar width
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = progressPercent + "%";
//     // Calculate display for duration
//     const durationMinutes = Math.floor(duration / 60);
//     let durationSeconds = Math.floor(duration % 60);
//     if (durationSeconds < 10) {
//       durationSeconds = "0" + durationSeconds;
//     }
//     // Delay switching duration Element to avoid NaN
//     if (durationSeconds) {
//       durationEl.textContent = durationMinutes + ":" + durationSeconds;
//     }
//     // Calculate display for currentTime
//     const currentMinutes = Math.floor(currentTime / 60);
//     let currentSeconds = Math.floor(currentTime % 60);
//     if (currentSeconds < 10) {
//       currentSeconds = "0" + currentSeconds;
//     }
//     currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
//   }
// }

// // Set Progress Bar
// function setProgressBar(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = music.duration;
//   music.currentTime = (clickX / width) * duration;
// }

// // Event Listeners
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);
// music.addEventListener("ended", nextSong);
// music.addEventListener("timeupdate", updateProgressBar);
// progressContainer.addEventListener("click", setProgressBar);


const playBtns = document.querySelectorAll('#play');
let currentAudio = null;

playBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const voiceMessageContent = e.target.closest('.voice-message-content');
    const voiceMessage = voiceMessageContent.querySelector('audio');
    
    if (currentAudio && currentAudio !== voiceMessage) {
      pauseAudio(currentAudio, currentAudio.nextElementSibling);
      
    }
    
    if (voiceMessage.paused) {
      playAudio(voiceMessage);
      btn.classList.replace('bi-play', 'bi-pause-fill');
      currentAudio = voiceMessage;
    } else {
      pauseAudio(voiceMessage);
      btn.classList.replace('bi-pause-fill', 'bi-play');
      currentAudio = null;
    }
  });
});

function pauseAudio(audio) {
  audio.pause(); 
  // btn.classList.replace('bi-pause-fill', 'bi-play');
}

function playAudio(audio) {
  audio.play();
  // btn.classList.replace('bi-play', 'bi-pause-fill');
}

