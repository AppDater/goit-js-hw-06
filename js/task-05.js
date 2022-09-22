const inputSrc = document.querySelector('#name-input');
const titleSrc = document.querySelector('#name-output');
inputSrc.addEventListener('input', titleTransform);

function titleTransform(event) {
    titleSrc.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        titleSrc.textContent = 'Anonymous'
    }
}