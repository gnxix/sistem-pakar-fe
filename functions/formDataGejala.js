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

document.getElementById('btnKeFormDataGejala').addEventListener('click', function() {
    window.location.href = "formDataGejala.html";
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

document.getElementById('btnKeFormDataGejala2').addEventListener('click', function() {
    window.location.href = "formDataGejala.html";
});

document.getElementById('btnKeRiwayatKonsultasi2').addEventListener('click', function() {
    window.location.href = "riwayatKonsultasi.html";
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

const data = [
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

const rowsPerPage = 8;
let currentPage = 1;
let checkedStatus = JSON.parse(localStorage.getItem('checkedStatus')) || {};

function displayTable(data, page) {
    const tableBody = document.querySelector('#tabelDataGejala tbody');
    tableBody.innerHTML = '';
    
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach(item => {
        const isChecked = checkedStatus[item.kode] ? checkedStatus[item.kode].checked : false;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.kode}</td>
            <td class="left-align">${item.nama}</td>
            <td><input type="checkbox" data-kode="${item.kode}" ${isChecked ? 'checked' : ''}></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('#tabelDataGejala input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const kode = this.getAttribute('data-kode');
            const nama = data.find(d => d.kode === kode).nama;
            if (this.checked) {
                checkedStatus[kode] = { checked: true, nama: nama };
            } else {
                delete checkedStatus[kode];
            }
            localStorage.setItem('checkedStatus', JSON.stringify(checkedStatus));
        });
    });
}

function nextPage() {
    if (currentPage * rowsPerPage < data.length) {
        currentPage++;
        displayTable(data, currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable(data, currentPage);
    }
}

// Initial display
displayTable(data, currentPage);


document.getElementById('btnKirim').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Formulir Terkirim!');
    window.location.href = "formDataTerpilih.html";
});