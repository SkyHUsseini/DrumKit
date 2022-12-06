//
const keysContainer = document.querySelector(".keys");
const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");
// const audioA = document.querySelector(".A");

window.addEventListener("keydown", function (e) {
  //select the keyCode
  const pressed = e.keyCode;
  console.log(pressed);

  const keyDiv = document.querySelector(`div[data-key="${pressed}"]`);
  const audio = document.querySelector(`audio[data-key="${pressed}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewinds to the start as we click multiple times in a row
  audio.play();

  console.log(keyDiv);

  keys.forEach((k) => k.classList.remove("playing"));
  keyDiv.classList.add("playing");
});
