document.getElementById("burgerButton").addEventListener("click", function () {
  var menu = document.getElementById("burgerMenu");
  var overlay = document.getElementById("overlay");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

document.getElementById("btnKeBeranda").addEventListener("click", function () {
  window.location.href = "landingPage.html";
});

document
  .getElementById("btnKeKonsultasi")
  .addEventListener("click", function () {
    window.location.href = "Konsultasi.html";
  });

document.addEventListener("DOMContentLoaded", function () {
  let dataDiriSubmitted = false;

  const navButtonFormDataGejala = document.getElementById(
    "btnKePerhitunganManual"
  );

  navButtonFormDataGejala.addEventListener("click", function (event) {
    if (!dataDiriSubmitted) {
      alert("Anda harus mengisi form data gejala terlebih dahulu.");
      event.preventDefault();
    } else {
      window.location.href = "formPerhitunganManual.html";
    }
  });
});

// WEB

document.getElementById("btnKeBeranda2").addEventListener("click", function () {
  window.location.href = "landingPage.html";
});

document.getElementById("btnKeKonsultasi2").addEventListener("click", function () {
    window.location.href = "Konsultasi.html";
  }); 

document.addEventListener("DOMContentLoaded", function () {
  let dataGejalaSubmitted = false;

  const navButtonPerhitunganMetode = document.getElementById(
    "btnKePerhitunganManual2"
  );

  navButtonPerhitunganMetode.addEventListener("click", function (event) {
    if (!dataGejalaSubmitted) {
      alert("Anda harus mengisi form data gejala terlebih dahulu.");
      event.preventDefault();
    } else {
      window.location.href = "perhitunganMetode";
    }
  });
});

const gejalaData = [
  { id: 1, kode: "G01", nama: "Mual" },
  { id: 2, kode: "G02", nama: "Muntah" },
  { id: 3, kode: "G03", nama: "Perut kembung" },
  { id: 4, kode: "G04", nama: "Cepat merasa kenyang" },
  { id: 5, kode: "G05", nama: "Nyeri pada ulu hati" },
  { id: 6, kode: "G06", nama: "Tidak nafsu makan" },
  { id: 7, kode: "G07", nama: "Rasa terbakar di tenggorokan" },
  { id: 8, kode: "G08", nama: "Perut terasa panas" },
  { id: 9, kode: "G09", nama: "Penurunan berat badan tanpa alasan yang jelas" },
  { id: 10, kode: "G10", nama: "Sulit menelan" },
  { id: 11, kode: "G11", nama: "Dada terasa panas (heartburn), terutama setelah makan atau saat berbaring"},
  { id: 12, kode: "G12", nama: "Naiknya makanan atau cairan asam dari lambung ke mulut"},
  { id: 13, kode: "G13", nama: "Kenyang dalam waktu yang lama setelah makan" },
  { id: 14, kode: "G14", nama: "Kondisi tubuh lemah" },
  { id: 15, kode: "G15", nama: "Sering diare" },
  { id: 16, kode: "G16", nama: "Nyeri pada perut" },
  { id: 17, kode: "G17", nama: "Mulas" },
  { id: 18, kode: "G18", nama: "Sulit menarik napas" },
  { id: 19, kode: "G19", nama: "Cegukan" },
  { id: 20, kode: "G20", nama: "BAB dengan tinja berwarna hitam atau berdarah" },
  { id: 21, kode: "G21", nama: "Muntah darah" },
  { id: 22, kode: "G22", nama: "Demam" },
  { id: 23, kode: "G23", nama: "Keram perut" },
  { id: 24, kode: "G24", nama: "Radang tenggorokan" },
  { id: 25, kode: "G25", nama: "Anemia" },
  { id: 26, kode: "G26", nama: "Rasa pahit atau asam di mulut" },
  { id: 27, kode: "G27", nama: "Suara serak" },
  { id: 28, kode: "G28", nama: "Kerusakan gigi karena terkena asam lambung" },
  { id: 29, kode: "G29", nama: "Bau mulut" },
  { id: 30, kode: "G30", nama: "Pembengkakan pada perut" },
  { id: 31, kode: "G31", nama: "Memiliki riwayat penyakit keluarga yang serius (penyakit lambung, diabetes, kanker, dsb.)"},
];

const itemsPerPage = 8;
let currentPage = 1;
const selectedGejala = [];

function populateGejalaTable() {
  const table = document
    .getElementById("tabelDataGejala")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = gejalaData.slice(startIndex, endIndex);

  currentData.forEach((gejala) => {
    const row = table.insertRow();
    row.insertCell(0).innerText = gejala.kode;
    row.insertCell(1).innerText = gejala.nama;
    const cell = row.insertCell(2);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedGejala.some((item) => item.kode === gejala.kode);
    checkbox.addEventListener("change", () =>
      handleGejalaSelection(gejala, checkbox.checked)
    );
    cell.appendChild(checkbox);
  });

  updatePaginationButtons();
  updatePaginationInfo();
}

function updatePaginationButtons() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled =
    currentPage === Math.ceil(gejalaData.length / itemsPerPage);
}

function updatePaginationInfo() {
  const paginationInfo = document.getElementById("paginationInfo");
  const totalPages = Math.ceil(gejalaData.length / itemsPerPage);
  const totalData = gejalaData.length;

  paginationInfo.innerText = `Page ${currentPage} of ${totalPages} | Total Data: ${totalData}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    populateGejalaTable();
    console.log("Current Page (prev):", currentPage);
  }
}

function nextPage() {
  if (currentPage < Math.ceil(gejalaData.length / itemsPerPage)) {
    currentPage++;
    populateGejalaTable();
    console.log("Current Page (next):", currentPage);
  }
}

function handleGejalaSelection(gejala, isSelected) {
  if (isSelected) {
    selectedGejala.push(gejala);
  } else {
    const index = selectedGejala.findIndex((item) => item.kode === gejala.kode);
    if (index !== -1) {
      selectedGejala.splice(index, 1);
    }
  }
}

document.getElementById("btnKirim").addEventListener("click", () => {
  localStorage.setItem("selectedGejala", JSON.stringify(selectedGejala));
  window.location.href = "perhitunganMetode.html";
});

document.getElementById("prev").addEventListener("click", prevPage);
document.getElementById("next").addEventListener("click", nextPage);

document.addEventListener("DOMContentLoaded", populateGejalaTable);
