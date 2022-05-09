let menu_inner_container = document.getElementById("menu_inner_container");
let menu_icon = document.getElementById("menu_icon");
let menu_inner_menu_icon = document.getElementById("menu_inner_menu_icon");

menu_icon.addEventListener("click", () => {
  menu_inner_container.classList.toggle("menu-inner-container-on");
  menu_icon.classList.toggle("active");
});

menu_inner_menu_icon.addEventListener("click", () => {
  menu_inner_container.classList.toggle("menu-inner-container-on");
  menu_icon.classList.toggle("active");
});

let toggle_item = document.getElementsByClassName("sus-toggle-item");
let button_onclick = document.getElementsByClassName("sus-button-onclick");
let button_onclick1 = document.getElementsByClassName("sus-button-onclick1");
let toggle_item_inner = document.getElementsByClassName("sus-toggle-item-inner");

for (let i = 0; i < toggle_item_inner.length; i++) {
    button_onclick[i].addEventListener("click", () => {
        if (toggle_item_inner[i].style.display == "none") {
            toggle_item_inner[i].style.display = "block";
        }
        else if (toggle_item_inner[i].style.display = "block") {
            toggle_item_inner[i].style.display = "none";
        }


    })
}