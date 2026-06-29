// ===============================
// Dark Mode Toggle
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// ===============================
// Search Blogs
// ===============================

const searchInput = document.getElementById("searchInput");
const blogCards = document.querySelectorAll(".blog-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    blogCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const text = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(value) || text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// ===============================
// Read More Popup
// ===============================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const buttons = document.querySelectorAll(".readMoreBtn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        popupTitle.innerText = button.dataset.title;
        popupText.innerText = button.dataset.content;

        popup.style.display = "flex";

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {
        popup.style.display = "none";
    }

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Thank you! Your message has been sent successfully.");

    form.reset();

});


// ===============================
// Smooth Scroll
// ===============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Reveal Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".blog-card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});