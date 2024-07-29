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

// Function to display a warning when the user attempts to reload the page
window.addEventListener('beforeunload', function (e) {
    // Custom message is deprecated, but this triggers the confirmation dialog
    const confirmationMessage = 'Perubahan yang Anda buat mungkin tidak akan disimpan. Apakah Anda yakin ingin meninggalkan halaman ini?';

    e.returnValue = confirmationMessage; // Legacy way of setting the message
    return confirmationMessage; // Modern way of setting the message
});



//FUNGSI MENU PERHITUNGAN
const jawabanOptions = {
    'Pilih jawaban': 0,
    'Kurang Yakin': 0.2,
    'Sedikit Yakin': 0.4,
    'Cukup Yakin': 0.6,
    'Yakin': 0.8,
    'Sangat Yakin': 1
};

const penyakitList = [
    { 
        kode: 'P01', 
        nama: 'Sindrom Dispepsia',
        treatment: 'Makan dalam porsi kecil, tetapi sering dan dianjurkan untuk makan 5–6 kali sehari',
        prevention: 'Untuk mencegah sindrom dispepsia, hindari makanan berlemak, berminyak, asam, dan pedas. Berhenti mengonsumsi alkohol, kurangi minuman bersoda, berkafein, dan cokelat. Hentikan merokok dan kelola stres. Konsultasikan dengan dokter tentang penggunaan obat yang tepat.'
    },
    { 
        kode: 'P02', 
        nama: 'Gastritis',
        treatment: '',
        prevention: 'Mencuci tangan dengan air mengalir dan sabun untuk menghindari infeksi bakteri. Membatasi asupan minuman berkafein. Berhenti/tidak mengkonsumsi minuman beralkohol. Berkonsultasi dengan dokter sebelum mengonsumsi obat antiimflamasi nonsteroid, Mengurangi stres. Menjaga pola makan. Menghindari tidur setelah makan.'
    },
    { 
        kode: 'P03', 
        nama: 'Gastroesophageal Reflux Disease',
        treatment: '',
        prevention: 'Meninggikan kepala saat tidur, menggunakan bantal yang lebih tinggi. Menghindari tidur setelah makan. Menghindari makanan dan minuman yang meningkatkan produksi asam lambung berlebih. Hindari stres untuk mencegah peningkatan produksi asam lambung berlebih. Makan sedikit tapi sering.'
    },
    { 
        kode: 'P04', 
        nama: 'Gastroparesis',
        treatment: '',
        prevention: 'Jika mengidap diabetes, pastikan kadar glukosa terkontrol dengan baik. Pahami kemungkinan efek samping dari perawatan yang sedang dijalani dan ketahui apa yang harus dilakukan jika terjadi efek samping. Berkonsultasi dengan dokter sebelum mengkonsumsi obat-obatan.'
    },
    { 
        kode: 'P05', 
        nama: 'Gastroenteritis',
        treatment:'',
        prevention: 'Pemberian imunisasi rotavirus lengkap. Menjaga kebersihan. Mencuci tangan dengan sabun dan di air mengalir. Pastikan makanan telah diolah menggunakan peralatan masak yang bersih dan steril. Hindari menggunakan barang pribadi bersamaan, seperti alat makan dan handuk. Hindari mengonsumsi makanan mentah. Jaga jarak dengan penderita gastroenteritis.'
    },
    { 
        kode: 'P06',
        nama: 'Polip Lambung',
        treatment: '',
        prevention: 'Menjaga kebersihan tangan. Menjaga kebersihan makanan. Berkonsultasi dengan dokter dalam pemilihan obat-obatan.'
    },
    { 
        kode: 'P07', 
        nama: 'Tukak Lambung',
        treatment: '',
        prevention: 'Mencegah peningkatan produksi asam lambung berlebih, seperti menjaga pola makan, hindari stres, menghindari minuman beralkohol, bersoda, berkafein, berhenti/ tidak merokok. Berkonsultasi dengan dokter terkait obat yang akan dikonsumsi.'
    },
    { 
        kode: 'P08', 
        nama: 'Kanker Lambung',
        treatment: '',
        prevention: '"Menghindari atau menghentikan kebiasaan merokok dan mengonsumsi alkohol. Menghindari makanan yang diasap, olahan, cepat saji/makanan instan. Mengurangi konsumsi garam sesuai kebutuhan harian. Menerapkan pola makan sehat. Berolahraga secara teratur untuk menjaga berat badan.'
    }
];

const gejalaData = {
    P01: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G25'],
    P02: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G08', 'G09', 'G14', 'G16', 'G17', 'G19', 'G20', 'G21', 'G25', 'G31'],
    P03: ['G01', 'G02', 'G07', 'G10', 'G11', 'G12', 'G18', 'G24', 'G26', 'G27', 'G28', 'G29'],
    P04: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G10', 'G13', 'G16', 'G21', 'G22', 'G31'],
    P05: ['G01', 'G02', 'G06', 'G15', 'G16', 'G23'],
    P06: ['G01', 'G02', 'G16', 'G31'],
    P07: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G20', 'G21', 'G31'],
    P08: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G11', 'G14', 'G16', 'G17', 'G20', 'G21', 'G25', 'G30', 'G31']
};

const cfPakarData = {
    P01: {
      G01: { mb: 1, md: 0, cf: 1 },
      G02: { mb: 1, md: 0, cf: 1 },
      G03: { mb: 1, md: 0, cf: 1 },
      G04: { mb: 1, md: 0, cf: 1 },
      G05: { mb: 1, md: 0, cf: 1 },
      G06: { mb: 1, md: 0.2, cf: 0.8 },
      G09: { mb: 1, md: 0.2, cf: 0.8 },
      G25: { mb: 1, md: 0, cf: 1 }
    },
    P02: {
      G01: { mb: 1, md: 0.2, cf: 0.8 },
      G02: { mb: 1, md: 0.2, cf: 0.8 },
      G03: { mb: 1, md: 0.4, cf: 0.6 },
      G04: { mb: 1, md: 0.4, cf: 0.6 },
      G05: { mb: 1, md: 0.4, cf: 0.6 },
      G06: { mb: 1, md: 0.2, cf: 0.8 },
      G08: { mb: 1, md: 0.2, cf: 0.8 },
      G09: { mb: 1, md: 0.4, cf: 0.6 },
      G14: { mb: 1, md: 0.4, cf: 0.6 },
      G16: { mb: 1, md: 0.4, cf: 0.6 },
      G17: { mb: 1, md: 0.4, cf: 0.6 },
      G19: { mb: 1, md: 0.4, cf: 0.6 },
      G20: { mb: 1, md: 0.4, cf: 0.6 },
      G21: { mb: 1, md: 0.4, cf: 0.6 },
      G25: { mb: 1, md: 0.4, cf: 0.6 },
      G31: { mb: 1, md: 0.4, cf: 0.6 }
    },
    P03: {
      G01: { mb: 1, md: 0.2, cf: 0.8 },
      G02: { mb: 1, md: 0.2, cf: 0.8 },
      G07: { mb: 1, md: 0.2, cf: 0.8 },
      G10: { mb: 1, md: 0.4, cf: 0.6 },
      G11: { mb: 1, md: 0.2, cf: 0.8 },
      G12: { mb: 1, md: 0.4, cf: 0.6 },
      G18: { mb: 1, md: 0.2, cf: 0.8 },
      G24: { mb: 1, md: 0.4, cf: 0.6 },
      G26: { mb: 1, md: 0.4, cf: 0.6 },
      G27: { mb: 1, md: 0.4, cf: 0.6 },
      G28: { mb: 1, md: 0.4, cf: 0.6 },
      G29: { mb: 1, md: 0.4, cf: 0.6 }
    },
    P04: {
      G01: { mb: 1, md: 0.4, cf: 0.6 },
      G02: { mb: 1, md: 0.4, cf: 0.6 },
      G03: { mb: 1, md: 0.4, cf: 0.6 },
      G04: { mb: 1, md: 0.4, cf: 0.6 },
      G05: { mb: 1, md: 0.2, cf: 0.8 },
      G06: { mb: 1, md: 0.4, cf: 0.6 },
      G10: { mb: 1, md: 0.4, cf: 0.6 },
      G13: { mb: 1, md: 0.2, cf: 0.8 },
      G16: { mb: 1, md: 0.4, cf: 0.6 },
      G21: { mb: 1, md: 0.4, cf: 0.6 },
      G22: { mb: 1, md: 0.4, cf: 0.6 },
      G31: { mb: 1, md: 0.4, cf: 0.6 }
    },
    P05: {
      G01: { mb: 1, md: 0.2, cf: 0.8 },
      G02: { mb: 1, md: 0.2, cf: 0.8 },
      G06: { mb: 1, md: 0.4, cf: 0.6 },
      G15: { mb: 1, md: 0.2, cf: 0.8 },
      G16: { mb: 1, md: 0.4, cf: 0.6 },
      G23: { mb: 1, md: 0.4, cf: 0.6 }
    },
    P06: {
        G01: { mb: 1, md: 0.4, cf: 0.6 },
        G02: { mb: 1, md: 0.4, cf: 0.6 },
        G16: { mb: 1, md: 0.4, cf: 0.6 },
        G31: { mb: 1, md: 0.2, cf: 0.8 }
    },
    P07: {
        G01: { mb: 1, md: 0.2, cf: 0.8 },
        G02: { mb: 1, md: 0.2, cf: 0.8 },
        G03: { mb: 1, md: 0.4, cf: 0.6 },
        G04: { mb: 1, md: 0.4, cf: 0.6 },
        G05: { mb: 1, md: 0.2, cf: 0.8 },
        G06: { mb: 1, md: 0.2, cf: 0.8 },
        G09: { mb: 1, md: 0.4, cf: 0.6 },
        G20: { mb: 1, md: 0.4, cf: 0.6 },
        G21: { mb: 1, md: 0.4, cf: 0.6 },
        G31: { mb: 1, md: 0.2, cf: 0.8 }
    },
    P08: {
        G01: { mb: 1, md: 0.2, cf: 0.8 },
        G02: { mb: 1, md: 0.2, cf: 0.8 },
        G03: { mb: 1, md: 0.4, cf: 0.6 },
        G04: { mb: 1, md: 0.6, cf: 0.4 },
        G05: { mb: 1, md: 0.2, cf: 0.8 },
        G06: { mb: 1, md: 0.2, cf: 0.8 },
        G09: { mb: 1, md: 0.2, cf: 0.8 },
        G11: { mb: 1, md: 0.4, cf: 0.6 },
        G14: { mb: 1, md: 0.2, cf: 0.8 },
        G16: { mb: 1, md: 0.2, cf: 0.8 },
        G17: { mb: 1, md: 0.2, cf: 0.8 },
        G20: { mb: 1, md: 0.2, cf: 0.8 },
        G21: { mb: 1, md: 0.2, cf: 0.8 },
        G25: { mb: 1, md: 0.2, cf: 0.8 },
        G30: { mb: 1, md: 0.4, cf: 0.6 },
        G31: { mb: 1, md: 0.2, cf: 0.8 }
    }
}


function populateSelectedGejalaTable() {
    const table = document.getElementById('selectedGejalaTable').getElementsByTagName('tbody')[0];
    let selectedGejala = JSON.parse(localStorage.getItem('selectedGejala')) || [];

    // Sort selectedGejala array by kode
    selectedGejala.sort((a, b) => a.kode.localeCompare(b.kode));

    selectedGejala.forEach(gejala => {
        const row = table.insertRow();
        row.setAttribute('data-kode', gejala.kode);
        row.insertCell(0).innerText = gejala.kode;
        row.insertCell(1).innerText = gejala.nama;

        const selectCell = row.insertCell(2);
        const select = document.createElement('select');
        for (const [text, value] of Object.entries(jawabanOptions)) {
            const option = document.createElement('option');
            option.value = value;
            option.text = text;
            select.appendChild(option);
        }

        const cfUserBobot = '0';
        select.value = cfUserBobot;
        select.addEventListener('change', () => updateBobot(row, select.value));
        selectCell.appendChild(select);

        // Display bobot from localStorage
        row.insertCell(3).innerText = cfUserBobot;

        // Update CF(user) input when the page loads
        updateCfUserInput(gejala.kode, cfUserBobot);
    });
}

function updateBobot(row, bobot) {
    row.cells[3].innerText = bobot;
    localStorage.setItem(`CF_${row.getAttribute('data-kode')}`, bobot); // Simpan bobot ke localStorage
    updateCfUserInput(row.getAttribute('data-kode'), bobot);
}

function updateCfUserInput(kodeGejala, bobot) {
    document.querySelectorAll(`input.cf-user[data-kode="${kodeGejala}"]`).forEach(input => {
        input.value = bobot;
    });
    calculateCF();
}

function calculateCF() {
    const table = document.getElementById('selectedGejalaTable').getElementsByTagName('tbody')[0];
    const cfTable = document.getElementById('tablesContainer');
    cfTable.innerHTML = '';
    
    penyakitList.forEach(penyakit => {
        const tableContainer = document.createElement('div');
        tableContainer.classList.add('table-container');

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr class="namaPenyakit">
                    <th colspan="5">${penyakit.nama} (${penyakit.kode})</th>
                </tr>
                <tr>
                    <th>Kode Gejala</th>
                    <th class="left-align">Nama Gejala</th>
                    <th>Nilai CF Pengguna</th>
                    <th>Nilai CF Pakar</th>
                    <th>CF(user) x CF(pakar)</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <td colspan="5" id="hasilPerhitungan${penyakit.kode}"></td>
                </tr>
            </tfoot>
        `;

        const tbody = table.querySelector('tbody');

        if (gejalaData[penyakit.kode]) {
            let selectedGejala = JSON.parse(localStorage.getItem('selectedGejala')) || [];
            selectedGejala.sort((a, b) => a.kode.localeCompare(b.kode));
            
            selectedGejala.forEach(gejala => {
                if (gejalaData[penyakit.kode].includes(gejala.kode)) {
                    const cfPakar = cfPakarData[penyakit.kode][gejala.kode];
                    const cfUserBobot = localStorage.getItem(`CF_${gejala.kode}`) || '0';
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${gejala.kode}</td>
                        <td class="left-align">${gejala.nama}</td>
                        <td>${cfUserBobot}</td> <!-- Display bobot from localStorage -->
                        <td>${cfPakar.cf}</td> <!-- Use cfPakar.cf instead of cfPakar -->
                        <td class="cf-result">0</td>
                    `;
                    tbody.appendChild(row);
                }
            });
        } else {
            console.error(`gejalaData[${penyakit.kode}] is undefined or null.`);
        }

        tableContainer.appendChild(table);
        cfTable.appendChild(tableContainer);
    });
}

function combineCF(cf1, cf2) {
    return cf1 + cf2 * (1 - cf1);
}

function calculateDiseaseCF() {
    let highestCF = -Infinity;
    let diagnosedDisease = null;

    penyakitList.forEach(penyakit => {
        const tableContainer = document.getElementById('tablesContainer');
        const cfTable = tableContainer.querySelector(`#hasilPerhitungan${penyakit.kode}`).closest('.table-container');

        if (!cfTable) {
            console.error(`Tidak dapat menemukan tabel untuk penyakit dengan kode ${penyakit.kode}`);
            return;
        }

        const table = cfTable.querySelector('table');
        const rows = table.querySelectorAll('tbody tr');
        let combinedCF = 0;
        let isFirstCF = true;

        rows.forEach(row => {
            const cfUser = parseFloat(row.cells[2].innerText.trim());
            if (!isNaN(cfUser)) {
                const cfPakar = parseFloat(row.cells[3].innerText.trim());
                const cfResult = cfUser * cfPakar;
                row.cells[4].innerText = cfResult.toFixed(2);

                if (isFirstCF) {
                    combinedCF = cfResult;
                    isFirstCF = false;
                } else {
                    combinedCF = combineCF(combinedCF, cfResult);
                }
            } else {
                console.error(`Nilai input tidak valid di baris dengan kode gejala: ${row.cells[0].innerText}`);
            }
        });

        document.getElementById(`hasilPerhitungan${penyakit.kode}`).innerText = `Total CF: ${combinedCF.toFixed(2)}`;

        if (combinedCF > highestCF) {
            highestCF = combinedCF;
            diagnosedDisease = penyakit;
        }
    });

    return {
        disease: diagnosedDisease,
        cf: highestCF
    };
}

document.getElementById('submitJawabanBtn').addEventListener('click', () => {
    document.getElementById('cfSection').classList.remove('hidden');
    calculateCF();
    const { disease, cf } = calculateDiseaseCF();
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('btnLihatHasil');
    const closeBtn = document.querySelector('.close');
    

    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    openPopupBtn.addEventListener('click', () => {
        if (disease) {
            const cfPercentage = (cf * 100).toFixed(0) + "%";
            const diagnosis = `Anda memiliki diagnosis awal Penyakit ${disease.nama} berdasarkan hasil perhitungan dengan nilai tertinggi yaitu ${cfPercentage}.`;
            const prevention = disease.prevention;
            const treatment = disease.treatment;
    
            document.getElementById('diagnosisResult').innerText = diagnosis;
            document.getElementById('treatmentAdvice').innerText = treatment;
            document.getElementById('preventionAdvice').innerText = prevention;
        } else {
            console.error('Tidak ada penyakit yang terdiagnosis.');
        }

        // Tampilkan popup
        popup.style.display = "block";
    });
});

document.addEventListener('DOMContentLoaded', populateSelectedGejalaTable);
