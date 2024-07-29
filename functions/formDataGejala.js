document.getElementById("burgerButton").addEventListener("click", function() {
    var menu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
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
    let dataGejalaSubmitted = false;

    const navButtonPerhitunganMetode = document.getElementById("btnKePerhitunganManual2");

    navButtonPerhitunganMetode.addEventListener("click", function(event) {
        if (!dataGejalaSubmitted) {
            alert("Anda harus mengisi form data gejala terlebih dahulu.");
            event.preventDefault();
        } else {
            window.location.href = 'perhitunganMetode';
        }
    });
});


const gejalaData = [
    { kode: 'G01', nama: 'Mual' },
    { kode: 'G02', nama: 'Muntah' },
    { kode: 'G03', nama: 'Perut kembung' },
    { kode: 'G04', nama: 'Cepat merasa kenyang' },
    { kode: 'G05', nama: 'Nyeri pada ulu hati' },
    { kode: 'G06', nama: 'Tidak nafsu makan' },
    { kode: 'G07', nama: 'Rasa terbakar di tenggorokan' },
    { kode: 'G08', nama: 'Perut terasa panas' },
    { kode: 'G09', nama: 'Penurunan berat badan tanpa alasan yang jelas' },
    { kode: 'G10', nama: 'Sulit menelan' },
    { kode: 'G11', nama: 'Dada terasa panas (heartburn), terutama setelah makan atau saat berbaring' },
    { kode: 'G12', nama: 'Naiknya makanan atau cairan asam dari lambung ke mulut' },
    { kode: 'G13', nama: 'Kenyang dalam waktu yang lama setelah makan' },
    { kode: 'G14', nama: 'Kondisi tubuh lemah' },
    { kode: 'G15', nama: 'Sering diare' },
    { kode: 'G16', nama: 'Nyeri pada perut' },
    { kode: 'G17', nama: 'Mulas' },
    { kode: 'G18', nama: 'Sulit menarik napas' },
    { kode: 'G19', nama: 'Cegukan' },
    { kode: 'G20', nama: 'BAB dengan tinja berwarna hitam atau berdarah' },
    { kode: 'G21', nama: 'Muntah darah' },
    { kode: 'G22', nama: 'Demam' },
    { kode: 'G23', nama: 'Keram perut' },
    { kode: 'G24', nama: 'Radang tenggorokan' },
    { kode: 'G25', nama: 'Anemia' },
    { kode: 'G26', nama: 'Rasa pahit atau asam di mulut' },
    { kode: 'G27', nama: 'Suara serak' },
    { kode: 'G28', nama: 'Kerusakan gigi karena terkena asam lambung' },
    { kode: 'G29', nama: 'Bau mulut' },
    { kode: 'G30', nama: 'Pembengkakan pada perut' },
    { kode: 'G31', nama: 'Memiliki riwayat penyakit keluarga yang serius (penyakit lambung, diabetes, kanker, dsb.)' },
];

const itemsPerPage = 8;
let currentPage = 1;
const selectedGejala = [];

function populateGejalaTable() {
    const table = document.getElementById('tabelDataGejala').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear previous content

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = gejalaData.slice(startIndex, endIndex);

    currentData.forEach(gejala => {
        const row = table.insertRow();
        row.insertCell(0).innerText = gejala.kode;
        row.insertCell(1).innerText = gejala.nama;
        const cell = row.insertCell(2);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedGejala.some(item => item.kode === gejala.kode);
        checkbox.addEventListener('change', () => handleGejalaSelection(gejala, checkbox.checked));
        cell.appendChild(checkbox);
    });

    updatePaginationButtons();
}

function updatePaginationButtons() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(gejalaData.length / itemsPerPage);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        populateGejalaTable();
    }
}

function nextPage() {
    if (currentPage < Math.ceil(gejalaData.length / itemsPerPage)) {
        currentPage++;
        populateGejalaTable();
    }
}

function handleGejalaSelection(gejala, isSelected) {
    if (isSelected) {
        selectedGejala.push(gejala);
    } else {
        const index = selectedGejala.findIndex(item => item.kode === gejala.kode);
        if (index !== -1) {
            selectedGejala.splice(index, 1);
        }
    }
}

document.getElementById('btnKirim').addEventListener('click', () => {
    localStorage.setItem('selectedGejala', JSON.stringify(selectedGejala));
    window.location.href = 'perhitunganMetode.html';
});

document.getElementById('prev').addEventListener('click', prevPage);
document.getElementById('next').addEventListener('click', nextPage);

document.addEventListener('DOMContentLoaded', populateGejalaTable);




