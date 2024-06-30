function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(`button.change-color`)
const spanEl = document.querySelector(`span.color`)
// console.log(buttonEl, spanEl)

buttonEl.addEventListener(`click`, handleClickColor)

function handleClickColor() {
  const newColor = getRandomHexColor();
  // console.log(newColor)
  document.body.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}
