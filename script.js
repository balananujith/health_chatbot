// JavaScript code for handling card clicks
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            const cardTitle = card.querySelector(".card-title").textContent;
            console.log("Clicked on", cardTitle);
            // You can add more functionality here, such as displaying details of the service
        });
    });
});
