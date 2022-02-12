const menu = document.querySelector(".mobile_menu_wrapper");

function openNav() {
  menu.classList.add("active");
}
function closeNav() {
  menu.classList.remove("active");
}

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});
