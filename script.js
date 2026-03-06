
document.addEventListener("DOMContentLoaded", function () {
    console.log("Foodies Pakistan Website Loaded");


    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if(menuToggle){
        menuToggle.addEventListener("click", function(){
            nav.classList.toggle("active");
        });
    }
});

function orderFood(item) {
    alert("Your order for " + item + " has been placed successfully!");
}

function sendMessage() {
    alert("Your message has been sent successfully!");
}