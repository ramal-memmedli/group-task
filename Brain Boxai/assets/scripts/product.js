//var acc = document.getElementsByClassName("accordion");
//var i;

//for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//        this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//    if (panel.style.display === "block") {
//        panel.style.display = "none";
//     } else {
//         panel.style.display = "block";
//    }
//  });
//}

let product_inner = document.getElementsByClassName("product-inner");
let product_button = document.getElementsByClassName("product-button");

for (let i = 0; product_button.length; i++) {
    product_inner[i].style.display = "none";
    product_button[i].innerText = "+"
    product_button[i].addEventListener("click", () => {
        if (product_inner[i].style.display == "none") {
            product_inner[i].style.display = "block";
            product_button[i].innerText = "-"
        } else if (product_inner[i].style.display == "block") {

            product_button[i].innerText = "+";
            product_inner[i].style.display = "none";
        }
    })
}