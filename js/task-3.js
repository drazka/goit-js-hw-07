const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.trim() === "") {
        return; // Nic nie rób, jeśli wpisano tylko biały znak
      } else {
        output.textContent = inputValue;
      }
        }
  );