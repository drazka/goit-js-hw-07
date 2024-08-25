function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]")
const destroy = document.querySelector("button[data-destroy]")
const elNumber = document.querySelector("input")
const container = document.querySelector("#boxes")

create.addEventListener("click", createData);
destroy.addEventListener("click", destroyData);

function createData() { 
  container.innerHTML="";
  if (elNumber.value > 0 && elNumber.value <= 100) {
    createBoxes(elNumber.value)
    elNumber.value = "";
  }
}

function destroyData() {
  container.innerHTML="";
}

function createBoxes(amount) {
  let i = 0;
  while (i < amount) {
    const div = document.createElement("div");
    let newColor = getRandomHexColor();
    div.style.backgroundColor = newColor;
    div.style.width = i * 10 + 30 + "px";
    div.style.height = i * 10 + 30 + "px";
    container.append(div)
    i++;
  }
}