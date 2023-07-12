const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav__links");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => 
    n.addEventListener("click", () => {
        menu.classList.remove("active");
        navLinks.classList.remove("active");
}))