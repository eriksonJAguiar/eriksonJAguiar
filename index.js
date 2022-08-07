const animateBtn = document.querySelector('#navbar__icon');
const animateActive = document.querySelector('.active');
const body = document.querySelector('body');

animateBtn.onclick = () => {
    animateBtn.classList.toggle('fa-times');
    body.classList.toggle('noscroll');
};
