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