const inputRef = document.querySelector('#validation-input');
console.log(inputRef);



const trueCheck = (event) => {
    const dataLen = Number(event.target.dataset.length);
    console.log(dataLen)
    const valueLen = event.target.value.length;
    console.log(valueLen)
    if (dataLen === valueLen) {
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    } else {
        event.target.classList.add("invalid");
        event.target.classList.remove("valid");
    }
}

inputRef.addEventListener('blur', trueCheck);