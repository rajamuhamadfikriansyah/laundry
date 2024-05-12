//TOGGLE
const navbarNav = document.querySelector
('.navbar-nav');
//ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}