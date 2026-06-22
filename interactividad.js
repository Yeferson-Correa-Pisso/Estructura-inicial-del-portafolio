const menubtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click",() => {
    menu.classList.toggle("activo");
});