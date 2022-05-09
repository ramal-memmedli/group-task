let executives = document.querySelector(".executives");
let governanceTeam = document.querySelector(".governanceteam");

governanceTeam.addEventListener("click", changeCards);

function changeCards() {
    document.querySelector(".author-name-one").textContent="John Cammett";
    document.querySelector(".author-position-one").textContent="Chairman of the Board";

    document.querySelector(".author-name-two").textContent="Sean Neely";
    document.querySelector(".author-position-two").textContent="Co-Chairman of the Board";
    
    document.querySelector(".author-name-three").textContent="Sam Ramadori";
    document.querySelector(".author-position-three").textContent="Board Member";
    
    document.querySelector(".author-name-four").textContent="Jean-Simon Venne";
    document.querySelector(".author-position-four").textContent="Board Member";
    
    document.querySelector(".author-name-five").textContent="Frank Sullivan";
    document.querySelector(".author-position-five").textContent="Board Member";
    
    document.querySelector(".author-name-six").textContent="Kenneth Code";
    document.querySelector(".author-position-six").textContent="Board Member";
    
    document.querySelector(".author-name-seven").textContent="Dr. Thorsten Müller";
    document.querySelector(".author-position-seven").textContent="Board Member";
    
    document.querySelector(".author-name-eight").textContent="Malin Carlstrom";
    document.querySelector(".author-position-eight").textContent="Advisory Board";
    
    document.querySelector(".author-name-nine").textContent="Angelos Vlasopoulos";
    document.querySelector(".author-position-nine").textContent="Advisory Board";
    
    document.querySelector(".author-name-ten").textContent="Gareth Morgan";
    document.querySelector(".author-position-ten").textContent="Advisory Board";
    
    document.querySelector(".author-name-eleven").textContent="Dr. Bouffard";
    document.querySelector(".author-position-eleven").textContent="Advisory Board";
}