function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnRef: document.querySelector('.change-color'),
  color: document.querySelector('.color')
}

refs.btnRef.addEventListener('click', toChangeColor)

function toChangeColor() {
  refs.color.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}

