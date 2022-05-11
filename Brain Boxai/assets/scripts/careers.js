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

let card_button = document.getElementsByClassName("card-button");
let card_inner = document.getElementsByClassName("card-inner");

for (let i = 0; card_button.length; i++) {
    card_inner[i].style.display = "none";
    card_button[i].innerText = "+";
    card_button[i].addEventListener("click", () => {
        if (card_inner[i].style.display == "none") {
            card_inner[i].style.display = "block";
            card_button[i].innerText = "-";
        }
        else if(card_inner[i].style.display == "block"){
            card_inner[i].style.display = "none";
            card_button[i].innerText = "+";
        }
    })
}
