let menu_inner_container = document.getElementById("menu_inner_container");
let menu_icon = document.getElementById("menu_icon");
let menu_inner_menu_icon = document.getElementById("menu_inner_menu_icon");

menu_icon.addEventListener("click", () => {
  menu_inner_container.classList.toggle("menu-inner-container-on");
  menu_icon.classList.toggle("active");
});

menu_inner_menu_icon.addEventListener("click", () => {
    menu_inner_container.classList.toggle("menu-inner-container-on");
  });
