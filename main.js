const buttonShare = document.querySelector('.card-icon-share');

const menuToggle = document.querySelector('.card-float');

buttonShare.addEventListener('click', toggleButtonShare);

function toggleButtonShare() {
    menuToggle.classList.toggle('inactive')
}