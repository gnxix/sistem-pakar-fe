document.getElementById('btnKonsultasi').addEventListener('click', function() {
    window.location.href = "formDataDiri.html";
});
  
document.getElementById("burgerButton").addEventListener("click", function() {
    var menu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// script.js

document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // You can add your form validation and submission code here
    alert('Form submitted!');
});



