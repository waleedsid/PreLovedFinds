'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// search bar
// document.addEventListener("DOMContentLoaded", function () {
//   const searchButton = document.getElementById("search-button");
//   const searchBarContainer = document.getElementById("search-bar-container");

//   // Toggle search bar visibility when the button is clicked
//   searchButton.addEventListener("click", function () {
//       searchBarContainer.classList.toggle("hidden");
//   });
// });

const navItems = document.querySelectorAll(".nav-action-btn");

navItems.forEach(item => {
    const icon = item.querySelector("ion-icon");
    const text = item.querySelector(".nav-action-text");

    item.addEventListener("mouseenter", () => {
        text.style.transform = "translateY(0)";
        text.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        text.style.transform = "translateY(100%)";
        text.style.opacity = "0";
    });
});
//////////////////////////////////////////////////////
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordStrength = document.getElementById("password-strength");
const confirmPasswordStrength = document.getElementById("confirm-password-strength");
const passwordMatch = document.getElementById("password-match");

// Function to check password strength and provide feedback
function checkPasswordStrength() {
    const password = passwordInput.value;
    const strengthMeter = calculatePasswordStrength(password);

    // Display password strength feedback
    if (strengthMeter < 25) {
        passwordStrength.textContent = "Weak";
        passwordStrength.style.color = "red";
    } else if (strengthMeter < 50) {
        passwordStrength.textContent = "Moderate";
        passwordStrength.style.color = "orange";
    } else if (strengthMeter < 75) {
        passwordStrength.textContent = "Strong";
        passwordStrength.style.color = "green";
    } else {
        passwordStrength.textContent = "Very Strong";
        passwordStrength.style.color = "darkgreen";
    }
}

// Function to check if passwords match and provide feedback
function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordMatch.textContent = "Passwords match";
        passwordMatch.style.color = "green";
    } else {
        passwordMatch.textContent = "Passwords do not match";
        passwordMatch.style.color = "red";
    }
}

// Function to calculate password strength (customize this based on your criteria)
function calculatePasswordStrength(password) {
    // Customize your password strength criteria here
    // ...

    // Example: A simple criteria that checks password length
    const minLength = 8;
    const strengthMeter = password.length >= minLength ? 100 : 0;

    return strengthMeter;
}

// Attach event listeners to both password and confirm password inputs
passwordInput.addEventListener("input", () => {
    checkPasswordStrength();
});

confirmPasswordInput.addEventListener("input", () => {
    checkPasswordStrength();
    checkPasswordMatch();
});

// ////////////////////////////////////////////////
// validation Message
// ///////////////////////////////////////////////

