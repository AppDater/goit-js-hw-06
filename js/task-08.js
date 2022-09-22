
const refs = {
    form: document.querySelector('.login-form'),
    emailRef: document.querySelector('.js-email-input'),
    passwRef: document.querySelector('.js-password-input'),
    submiRef: document.querySelector('.js-form-submit')
}

refs.emailRef.addEventListener('change', (event) => {})

refs.passwRef.addEventListener('change', (event) => {})

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (refs.emailRef.value ==='' || refs.passwRef.value ==='') {
        alert("Потрібно заповнити всі поля!")
    } else {
        let elements = {
            email: refs.emailRef.value,
            passwRef: refs.passwRef.value
        }
        console.log(elements)
        refs.form.reset();
    }
})