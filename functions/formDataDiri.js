document.getElementById("burgerButton").addEventListener("click", function() {
    var menu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    window.location.href = "formDataGejala.html";
});
