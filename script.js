"use strict";

// Navigation tab logic
function showSection(sectionId, clickedElement, event) {
  if (event) event.preventDefault();
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  clickedElement.classList.add('active');
  document.querySelectorAll('.page-content').forEach(section => {
    if (section.id === sectionId) {
      section.classList.remove('hidden');
      section.classList.add('current');
    } else {
      section.classList.add('hidden');
      section.classList.remove('current');
    }
  });
}


// Animate skill bars on page load
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-progress").forEach((el) => {
    el.classList.add("animate");
  });
});

// Hamburger menu toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".glass-navbar").classList.toggle("active");
});

// Contact form validation and confirmation
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all the fields.");
    return false;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Show confirmation message and reset form
  document.getElementById("form-message").style.display = "block";
  event.target.reset();
  return false;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
