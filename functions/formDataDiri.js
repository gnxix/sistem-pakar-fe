document.getElementById("burgerButton").addEventListener("click", function() {
    var menu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulir Terkirim!');
    window.location.href = "formDataGejala.html";
});

document.getElementById('btnKeBeranda').addEventListener('click', function() {
    window.location.href = "landingPage.html";
});

document.getElementById('btnKeKonsultasi').addEventListener('click', function() {
    window.location.href = "Konsultasi.html";
});

document.getElementById('btnKeFormDataDiri').addEventListener('click', function() {
    window.location.href = "formDataDiri.html";
});

document.getElementById('btnKeRiwayatKonsultasi').addEventListener('click', function() {
    window.location.href = "riwayatKonsultasi.html";
});

document.addEventListener("DOMContentLoaded", function() {
    let dataDiriSubmitted = false;

    const navButtonFormDataGejala = document.getElementById("btnKeFormDataGejala");

    navButtonFormDataGejala.addEventListener("click", function(event) {
        if (!dataDiriSubmitted) {
            alert("Anda harus mengisi form data diri terlebih dahulu.");
            event.preventDefault();
        } else {
            window.location.href = 'formDataGejala.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let dataDiriSubmitted = false;

    const navButtonFormDataGejala = document.getElementById("btnKePerhitunganManual");

    navButtonFormDataGejala.addEventListener("click", function(event) {
        if (!dataDiriSubmitted) {
            alert("Anda harus mengisi form data gejala terlebih dahulu.");
            event.preventDefault();
        } else {
            window.location.href = 'formPerhitunganManual.html';
        }
    });
});



// WEB

document.getElementById('btnKeBeranda2').addEventListener('click', function() {
    window.location.href = "landingPage.html";
});

document.getElementById('btnKeKonsultasi2').addEventListener('click', function() {
    window.location.href = "Konsultasi.html";
});

document.getElementById('btnKeFormDataDiri2').addEventListener('click', function() {
    window.location.href = "formDataDiri.html";
});

document.getElementById('btnKeRiwayatKonsultasi2').addEventListener('click', function() {
    window.location.href = "riwayatKonsultasi.html";
});

document.addEventListener("DOMContentLoaded", function() {
    let dataDiriSubmitted = false;

    const navButtonFormDataGejala = document.getElementById("btnKeFormDataGejala2");

    navButtonFormDataGejala.addEventListener("click", function(event) {
        if (!dataDiriSubmitted) {
            alert("Anda harus mengisi form data diri terlebih dahulu.");
            event.preventDefault();
        } else {
            window.location.href = 'formDataGejala.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let dataDiriSubmitted = false;

    const navButtonFormDataGejala = document.getElementById("btnKePerhitunganManual2");

    navButtonFormDataGejala.addEventListener("click", function(event) {
        if (!dataDiriSubmitted) {
            alert("Anda harus mengisi form data gejala terlebih dahulu.");
            event.preventDefault();
        } else {
            window.location.href = 'formPerhitunganManual.html';
        }
    });
});
