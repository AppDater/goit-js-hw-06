const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = "56px";
const textReg = (event) => {
    
    let range = event.target.value;
    textRef.style.fontSize = `${range}px`;
}

controlRef.addEventListener('input', textReg);