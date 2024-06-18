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

// Objek savedStatus sebagai contoh, ganti dengan data aktual
const savedStatus = JSON.parse(localStorage.getItem('checkedStatus')) || {};

function convertToBobotCFUser(pilihan_jawaban) {
    switch (pilihan_jawaban) {
        case 'kurang_yakin':
            return 0.2;
        case 'sedikit_yakin':
            return 0.4;
        case 'cukup_yakin':
            return 0.6;
        case 'yakin':
            return 0.8;
        case 'sangat_yakin':
            return 1;
        default:
            return null;
    }
}

function displaySavedGejala() {
    const tableBody = document.querySelector('#tabelDataTerpilih tbody');
    tableBody.innerHTML = '';

    const sortedKeys = Object.keys(savedStatus).sort();

    sortedKeys.forEach(kode => {
        if (savedStatus[kode].checked) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${kode}</td>
                <td class="left-align">${savedStatus[kode].nama}</td>
                <td>
                    <select class="dropdown" data-kode="${kode}">
                        <option value="pilih_jawaban">Pilih Jawaban</option>
                        <option value="kurang_yakin">Kurang Yakin</option>
                        <option value="sedikit_yakin">Sedikit Yakin</option>
                        <option value="cukup_yakin">Cukup Yakin</option>
                        <option value="yakin">Yakin</option>
                        <option value="sangat_yakin">Sangat Yakin</option>
                    </select>
                </td>
                <td class="bobot">0</td>
            `;
            tableBody.appendChild(row);

            // Tambahkan event listener untuk dropdown
            const dropdown = row.querySelector('.dropdown');
            dropdown.addEventListener('change', function() {
                const bobotCell = row.querySelector('.bobot');
                const bobotValue = convertToBobotCFUser(this.value);
                bobotCell.textContent = bobotValue !== null ? bobotValue : '0';
            });
        }
    });
}

// Fungsi untuk menampilkan atau menyembunyikan bagian berdasarkan id
function showSection(sectionId) {
    const sections = ['perhitungan'];
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}

// Initial display
displaySavedGejala();

document.getElementById('btnKirim').addEventListener('click', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    let allSelected = true;
    let cf_user = [];
    let selectedGejala = [];

    dropdowns.forEach(dropdown => {
        const pilihan_jawaban = dropdown.value;
        const kode_gejala = dropdown.getAttribute('data-kode');
        const bobot_cf_user = convertToBobotCFUser(pilihan_jawaban);

        if (pilihan_jawaban === 'pilih_jawaban' || bobot_cf_user === null) {
            allSelected = false;
        } else {
            if (savedStatus.hasOwnProperty(kode_gejala)) {
                cf_user.push({
                    kode_gejala: kode_gejala,
                    nama_gejala: savedStatus[kode_gejala].nama,
                    bobot_cf_user: bobot_cf_user
                });
                selectedGejala.push(kode_gejala);
            } else {
                console.error(`Status tersimpan untuk ${kode_gejala} tidak didefinisikan atau tidak ada.`);
                allSelected = false;
            }
        }
    });

    if (!allSelected) {
        alert('Anda harus memilih jawaban untuk semua gejala!');
    } else {
        if (confirm('Anda tidak dapat mengubah nilai yang dipilih setelah dikirim. Apakah Anda yakin?')) {
            alert('Formulir berhasil dikirim!');

            // Menampilkan bagian perhitungan
            showSection('perhitungan');

            // Menyimpan cf_user di variabel global atau local scope untuk digunakan dalam createPerhitunganTable
            window.cf_user = cf_user;
            createPerhitunganTable(selectedGejala);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const penyakitList = [
      { kode: 'P01', nama: 'Dispepsia' },
      { kode: 'P02', nama: 'Gastritis' },
      { kode: 'P03', nama: 'Gastroesophageal Reflux Disease' },
      { kode: 'P04', nama: 'Gastroparesis' },
      { kode: 'P05', nama: 'Gastroenteritis' },
      { kode: 'P06', nama: 'Polip Lambung' },
      { kode: 'P07', nama: 'Tukak Lambung' },
      { kode: 'P08', nama: 'Kanker Lambung' }
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

    const selectedGejala = [];

    const tablesContainer = document.getElementById('tablesContainer');

    // Function to calculate CF(user) x CF(pakar)
    function calculateCFUserPakar(cfUser, cfPakar) {
        return parseFloat(cfUser) * cfPakar;
    }

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

      // Loop through selectedGejala and populate the table with matching gejala
      selectedGejala.forEach(gejala => {
        if (gejalaData[penyakit.kode].includes(gejala)) {
          const cfPakar = cfPakarData[penyakit.kode][gejala].cf;
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${gejala}</td>
            <td class="left-align">Nama Gejala Placeholder</td>
            <td><input class="cf-user" data-kode="${gejala}" value="${bobot_cf_user}"></td>
            <td>${cfPakar}</td>
            <td class="cf-result"></td>
          `;
          tbody.appendChild(row);
        }
      });

      tableContainer.appendChild(table);
      tablesContainer.appendChild(tableContainer);
    });

    // Event listener for input changes on CF(user)
  document.querySelectorAll('.cf-user').forEach(input => {
    input.addEventListener('input', function() {
      const gejala = input.getAttribute('data-kode');
      const cfUser = parseFloat(input.value);
      const penyakitKode = input.closest('table').querySelector('th').innerText.match(/\((.*?)\)/)[1]; // Extract penyakit kode from table header
      const cfPakar = cfPakarData[penyakitKode][gejala].cf;
      const cfResult = calculateCFUserPakar(cfUser, cfPakar);
      input.closest('tr').querySelector('.cf-result').innerText = cfResult.toFixed(2);
    });
  });
});

