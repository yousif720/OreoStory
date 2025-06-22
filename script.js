const imagePaths = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg",
  "images/img11.jpg",
  "images/img12.jpg",
  "images/img13.jpg",
  "images/img14.jpg",
  "images/img15.jpg",
  "images/img16.jpg",
  "images/img17.jpg",
  "images/img18.jpg",
  "images/img19.jpg",
  "images/img20.jpg",
  "images/img21.jpg",
  "images/img22.jpg",
  "images/img23.jpg",
  "images/img24.jpg",
  "images/img25.jpg",
  "images/img26.jpg",
  "images/img27.jpg",
  "images/img28.jpg",
  "images/img29.jpg",
  "images/img30.jpg",
  "images/img31.jpg",
  "images/img32.jpg",
  "images/img33.jpg"
];

const audioPaths = [
  "audio/audio1.mp3",
  "audio/audio2.mp3",
  "audio/audio3.mp3",
  "audio/audio4.mp3",
  "audio/audio6.mp3",
  "audio/audio7.mp3",
  "audio/audio8.mp3",
  "audio/audio9.mp3",
  "audio/audio10.mp3",
  "audio/audio11.mp3",
  "audio/audio12.mp3",
  "audio/audio13.mp3",
  "audio/audio14.mp3",
  "audio/audio15.mp3",
  "audio/audio16.mp3",
  "audio/audio17.mp3",
  "audio/audio18.mp3",
  "audio/audio19.mp3",
  "audio/audio20.mp3",
  "audio/audio21.mp3",
  "audio/audio22.mp3",
  "audio/audio23.mp3",
  "audio/audio24.mp3",
  "audio/audio25.mp3",
  "audio/audio26.mp3",
  "audio/audio27.mp3",
  "audio/audio28.mp3",
  "audio/audio29.mp3",
  "audio/audio30.mp3",
  "audio/audio31.mp3",
  "audio/audio32.mp3",
  "audio/audio33.mp3"
];

let currentIndex = 0;
let autoMode = false;

const image = document.getElementById("main-image");
const audio = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("next-button");
const autoButton = document.getElementById("auto-button");

function updateContent(index) {
  image.src = imagePaths[index];
  audio.src = audioPaths[index];
}

playButton.addEventListener("click", () => {
  audio.play();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  updateContent(currentIndex);
  if (autoMode) audio.play();
});

autoButton.addEventListener("click", () => {
  autoMode = !autoMode;
  autoButton.textContent = autoMode ? "⚙️ Auto: ON" : "⚙️ Auto: OFF";
  if (autoMode) audio.play();
});

audio.addEventListener("ended", () => {
  if (autoMode) {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    updateContent(currentIndex);
    audio.play();
  }
});
