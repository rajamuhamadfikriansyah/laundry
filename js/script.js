const navbarNav = document.querySelector(".navbar-nav");
//ketika di Menu sidebar di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const hamburger =  document.querySelector ('#hamburger-menu');
