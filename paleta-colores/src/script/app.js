const color = document.querySelector("#color");
const exitName = document.querySelector("#color-name");
const exitContainer = document.querySelector("#salida");

color.addEventListener("input", () => {
  const value = color.value;
  exitName.innerHTML = value;
  exitContainer.style.background = value;
});
