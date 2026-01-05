const audio = document.getElementById("bgm");
const playBtn = document.querySelector(".play");

function toggleMusic() {
  if (audio.paused) {
    audio.volume = 0.4;
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

/* optional: autoplay pas hover card */
const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
  audio.volume = 0.3;
  audio.play();
  playBtn.textContent = "⏸";
});


