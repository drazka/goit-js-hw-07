function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const registerForm = document.querySelector(".change-color");
registerForm.addEventListener("click", changeColor);
const span = document.querySelector("span.color")
const bodyColored = document.querySelector("body") 

function changeColor(event) {
  let newColor = getRandomHexColor();
  span.innerHTML = newColor;
  bodyColored.style.backgroundColor = newColor;

};
