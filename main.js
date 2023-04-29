const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnLgnPopup = $('.btnLgn-popup')
const registerLink = $('.register-link');
const loginLink = $('.login-link');
const wrapper = $('.wrapper');
const boxRegister = $('.form-box.register')
const boxLogin = $('.form-box.login')
const iconClose = $('.icon-close')


boxRegister.style.display = 'none';
registerLink.addEventListener('click',() => {
    wrapper.classList.add('active')
    boxLogin.style.display = 'none';
    boxRegister.style.display = 'block';
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active')
    boxRegister.style.display = 'none';
    boxLogin.style.display = 'block';
});

btnLgnPopup.addEventListener('click',() => {
    wrapper.classList.remove('open-modal')
})

iconClose.addEventListener('click', () => {
    wrapper.classList.add('open-modal')
})