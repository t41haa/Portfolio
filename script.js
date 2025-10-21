"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Attach click listeners to nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId, link, event);
    });
  });

  // Show Home tab and all containers by default on page load
  const homeLink = document.querySelector('.nav-link[href="#Home"]');
  if (homeLink) {
    showSection('Home', homeLink, null);
  }
});

function showSection(sectionId, clickedElement, event) {
  if (event) event.preventDefault();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  clickedElement.classList.add('active');

  if (sectionId === 'Home') {
    document.querySelectorAll('.page-content').forEach(section => {
      section.classList.remove('hidden');
      section.classList.add('current');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.querySelectorAll('.page-content').forEach(section => {
      if (section.id === sectionId) {
        section.classList.remove('hidden');
        section.classList.add('current');
        // Delay scroll to ensure visibility
        setTimeout(() => {
          const navbar = document.querySelector('.glass-navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - navbarHeight - 60, // 20px extra space; adjust as desired
            behavior: 'smooth'
          });
        }, 0);
      } else {
        section.classList.add('hidden');
        section.classList.remove('current');
      }
    });
  }
}


// Animate skill bars on page load
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-progress").forEach(el => {
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

  document.getElementById("form-message").style.display = "block";
  event.target.reset();
  return false;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
