let counterValue = 0;

const valueSrc = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueSrc.textContent = counterValue
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueSrc.textContent = counterValue
})