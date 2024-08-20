const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
        return;
      } else {
        output.textContent = event.currentTarget.value.trim();
      }
        }
  );