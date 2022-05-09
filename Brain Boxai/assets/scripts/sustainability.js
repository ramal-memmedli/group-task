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
