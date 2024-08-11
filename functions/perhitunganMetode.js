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



const jawabanOptions = {
    'Pilih jawaban': 0,
    'Kurang Yakin': 0.2,
    'Sedikit Yakin': 0.4,
    'Cukup Yakin': 0.6,
    'Yakin': 0.8,
    'Sangat Yakin': 1
};

// ATURAN FORWARD CHAINING
const rules = [
    { if: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G25'], then: 'Sindrom Dispepsia' },
    { if: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G08', 'G09', 'G14', 'G16', 'G17', 'G19', 'G20', 'G21', 'G25', 'G31'], then: 'Gastritis' },
    { if: ['G01', 'G02', 'G07', 'G10', 'G11', 'G12', 'G18', 'G24', 'G26', 'G27', 'G28', 'G29'], then: 'Gastroesophageal Reflux Disease' },
    { if: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G10', 'G13', 'G16', 'G21', 'G22', 'G31'], then: 'Gastroparesis' },
    { if: ['G01', 'G02', 'G06', 'G15', 'G16', 'G23'], then: 'Gastroenteritis' },
    { if: ['G01', 'G02', 'G16', 'G31'], then: 'Polip Lambung' },
    { if: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G20', 'G21', 'G31'], then: 'Tukak Lambung' },
    { if: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G09', 'G11', 'G14', 'G16', 'G17', 'G20', 'G21', 'G25', 'G30', 'G31'], then: 'Kanker Lambung' }
];

// BASIS PENGETAHUAN
const cfPakarData = {
    P01: { G01: { cf: 1 }, G02: { cf: 1 }, G03: { cf: 1 }, G04: { cf: 1 }, G05: { cf: 1 }, G06: { cf: 0.8 }, G09: { cf: 0.8 }, G25: { cf: 1 } },
    P02: { G01: { cf: 0.8 }, G02: { cf: 0.8 }, G03: { cf: 0.6 }, G04: { cf: 0.6 }, G05: { cf: 0.6 }, G06: { cf: 0.8 }, G08: { cf: 0.8 }, G09: { cf: 0.6 }, G14: { cf: 0.6 }, G16: { cf: 0.6 }, G17: { cf: 0.6 }, G19: { cf: 0.6 }, G20: { cf: 0.6 }, G21: { cf: 0.6 }, G25: { cf: 0.6 }, G31: { cf: 0.6 } },
    P03: { G01: { cf: 0.8 }, G02: { cf: 0.8 }, G07: { cf: 0.8 }, G10: { cf: 0.6 }, G11: { cf: 0.8 }, G12: { cf: 0.6 }, G18: { cf: 0.8 }, G24: { cf: 0.6 }, G26: { cf: 0.6 }, G27: { cf: 0.6 }, G28: { cf: 0.6 }, G29: { cf: 0.6 } },
    P04: { G01: { cf: 0.6 }, G02: { cf: 0.6 }, G03: { cf: 0.6 }, G04: { cf: 0.6 }, G05: { cf: 0.8 }, G06: { cf: 0.6 }, G10: { cf: 0.6 }, G13: { cf: 0.8 }, G16: { cf: 0.6 }, G21: { cf: 0.6 }, G22: { cf: 0.6 }, G31: { cf: 0.6 } },
    P05: { G01: { cf: 0.8 }, G02: { cf: 0.8 }, G06: { cf: 0.6 }, G15: { cf: 0.8 }, G16: { cf: 0.6 }, G23: { cf: 0.6 } },
    P06: { G01: { cf: 0.6 }, G02: { cf: 0.6 }, G16: { cf: 0.6 }, G31: { cf: 0.8 } },
    P07: { G01: { cf: 0.8 }, G02: { cf: 0.8 }, G03: { cf: 0.6 }, G04: { cf: 0.6 }, G05: { cf: 0.8 }, G06: { cf: 0.8 }, G09: { cf: 0.6 }, G20: { cf: 0.6 }, G21: { cf: 0.6 }, G31: { cf: 0.8 } },
    P08: { G01: { cf: 0.8 }, G02: { cf: 0.8 }, G03: { cf: 0.6 }, G04: { cf: 0.4 }, G05: { cf: 0.8 }, G06: { cf: 0.8 }, G09: { cf: 0.8 }, G11: { cf: 0.6 }, G14: { cf: 0.8 }, G16: { cf: 0.8 }, G17: { cf: 0.8 }, G20: { cf: 0.8 }, G21: { cf: 0.8 }, G25: { cf: 0.8 }, G30: { cf: 0.6 }, G31: { cf: 0.8 } }
};

const penyakitList = [
    { 
        kode: 'P01', 
        nama: 'Sindrom Dispepsia',
        treatment: {
            'Mual': saranPenangananGejala.P01['Mual'].saran,
            'Muntah': saranPenangananGejala.P01['Muntah'].saran,
            'Perut kembung': saranPenangananGejala.P01['Perut kembung'].saran,
            'Cepat merasa kenyang': saranPenangananGejala.P01['Cepat merasa kenyang'].saran,
            'Nyeri pada ulu hati': saranPenangananGejala.P01['Nyeri pada ulu hati'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P01['Tidak nafsu makan'].saran,
            'Penurunan berat badan tanpa alasan yang jelas': saranPenangananGejala.P01['Penurunan berat badan tanpa alasan yang jelas'].saran,
            'Anemia': saranPenangananGejala.P01['Anemia'].saran
        },
        prevention: 'Untuk mencegah sindrom dispepsia, hindari makanan berlemak, berminyak, asam, dan pedas. Berhenti mengonsumsi alkohol, kurangi minuman bersoda, berkafein, dan cokelat. Hentikan merokok dan kelola stres. Konsultasikan dengan dokter tentang penggunaan obat yang tepat.'
    },
    { 
        kode: 'P02', 
        nama: 'Gastritis',
        treatment: {
            'Mual': saranPenangananGejala.P02['Mual'].saran,
            'Muntah': saranPenangananGejala.P02['Muntah'].saran,
            'Perut kembung': saranPenangananGejala.P02['Perut kembung'].saran,
            'Cepat merasa kenyang': saranPenangananGejala.P02['Cepat merasa kenyang'].saran,
            'Nyeri pada ulu hati': saranPenangananGejala.P02['Nyeri pada ulu hati'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P02['Tidak nafsu makan'].saran,
            'Perut terasa panas': saranPenangananGejala.P02['Perut terasa panas'].saran,
            'Penurunan berat badan tanpa alasan yang jelas': saranPenangananGejala.P02['Penurunan berat badan tanpa alasan yang jelas'].saran,
            'Kondisi tubuh lemah': saranPenangananGejala.P02['Kondisi tubuh lemah'].saran,
            'Nyeri pada perut': saranPenangananGejala.P02['Nyeri pada perut'].saran,
            'Mulas': saranPenangananGejala.P02['Mulas'].saran,
            'Cegukan': saranPenangananGejala.P02['Cegukan'].saran,
            'BAB dengan tinja berwarna hitam atau berdarah': saranPenangananGejala.P02['BAB dengan tinja berwarna hitam atau berdarah'].saran,
            'Anemia': saranPenangananGejala.P02['Anemia'].saran,
            'Memiliki riwayat penyakit keluarga yang serius': saranPenangananGejala.P02['Memiliki riwayat penyakit keluarga yang serius'].saran
        },
        prevention: 'Mencuci tangan dengan air mengalir dan sabun untuk menghindari infeksi bakteri. Membatasi asupan minuman berkafein. Berhenti/tidak mengkonsumsi minuman beralkohol. Berkonsultasi dengan dokter sebelum mengonsumsi obat anti inflamasi nonsteroid. Kurangi stres dan jaga pola makan yang baik. Serta hindari rebahan setelah makan.'
    },
    { 
        kode: 'P03', 
        nama: 'Gastroesophageal Reflux Disease',
        treatment: {
            'Mual': saranPenangananGejala.P03['Mual'].saran,
            'Muntah': saranPenangananGejala.P03['Muntah'].saran,
            'Rasa terbakar di tenggorokan': saranPenangananGejala.P03['Rasa terbakar di tenggorokan'].saran,
            'Sulit menelan': saranPenangananGejala.P03['Sulit menelan'].saran,
            'Dada terasa panas': saranPenangananGejala.P03['Dada terasa panas'].saran,
            'Naiknya makanan atau cairan asam dari lambung ke mulut': saranPenangananGejala.P03['Naiknya makanan atau cairan asam dari lambung ke mulut'].saran,
            'Sulit menarik napas': saranPenangananGejala.P03['Sulit menarik napas'].saran,
            'Radang tenggorokan': saranPenangananGejala.P03['Radang tenggorokan'].saran,
            'Rasa pahit atau asam di mulut': saranPenangananGejala.P03['Rasa pahit atau asam di mulut'].saran,
            'Suara serak': saranPenangananGejala.P03['Suara serak'].saran,
            'Kerusakan gigi karena terkena asam lambung': saranPenangananGejala.P03['Kerusakan gigi karena terkena asam lambung'].saran,
            'Bau mulut': saranPenangananGejala.P03['Bau mulut'].saran
        },
        prevention: 'Meninggikan kepala saat tidur, menggunakan bantal yang lebih tinggi. Menghindari tidur setelah makan. Menghindari makanan dan minuman yang meningkatkan produksi asam lambung berlebih. Hindari stres untuk mencegah peningkatan produksi asam lambung berlebih. Makan sedikit tapi sering.'
    },
    { 
        kode: 'P04', 
        nama: 'Gastroparesis',
        treatment: {
            'Mual': saranPenangananGejala.P04['Mual'].saran,
            'Muntah': saranPenangananGejala.P04['Muntah'].saran,
            'Perut kembung': saranPenangananGejala.P04['Perut kembung'].saran,
            'Cepat merasa kenyang': saranPenangananGejala.P04['Cepat merasa kenyang'].saran,
            'Nyeri pada ulu hati': saranPenangananGejala.P04['Nyeri pada ulu hati'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P04['Tidak nafsu makan'].saran,
            'Sulit menelan': saranPenangananGejala.P04['Sulit menelan'].saran,
            'Kenyang dalam waktu yang lama setelah makan': saranPenangananGejala.P04['Kenyang dalam waktu yang lama setelah makan'].saran,
            'Kondisi tubuh lemah': saranPenangananGejala.P04['Kondisi tubuh lemah'].saran,
            'Nyeri pada perut': saranPenangananGejala.P04['Nyeri pada perut'].saran,
            'Mulas': saranPenangananGejala.P04['Mulas'].saran,
            'Cegukan': saranPenangananGejala.P04['Cegukan'].saran,
            'BAB dengan tinja berwarna hitam atau berdarah': saranPenangananGejala.P04['BAB dengan tinja berwarna hitam atau berdarah'].saran,
            'Anemia': saranPenangananGejala.P04['Anemia'].saran
        },
        prevention: 'Jika mengidap diabetes, pastikan kadar glukosa terkontrol dengan baik. Pahami kemungkinan efek samping dari perawatan yang sedang dijalani dan ketahui apa yang harus dilakukan jika terjadi efek samping. Berkonsultasi dengan dokter sebelum mengkonsumsi obat-obatan.'
    },
    { 
        kode: 'P05', 
        nama: 'Gastroenteritis',
        treatment: {
            'Mual': saranPenangananGejala.P05['Mual'].saran,
            'Muntah': saranPenangananGejala.P05['Muntah'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P05['Tidak nafsu makan'].saran,
            'Sering diare': saranPenangananGejala.P05['Sering diare'].saran,
            'Nyeri pada perut': saranPenangananGejala.P05['Nyeri pada perut'].saran,
            'Keram perut': saranPenangananGejala.P05['Keram perut'].saran,
            'Rasa pahit atau asam di mulut': saranPenangananGejala.P05['Rasa pahit atau asam di mulut'].saran
        },
        prevention: 'Pemberian imunisasi rotavirus lengkap. Menjaga kebersihan. Mencuci tangan dengan sabun dan di air mengalir. Pastikan makanan telah diolah menggunakan peralatan masak yang bersih dan steril. Hindari menggunakan barang pribadi bersamaan, seperti alat makan dan handuk. Hindari mengonsumsi makanan mentah. Jaga jarak dengan penderita gastroenteritis.'
    },
    { 
        kode: 'P06',
        nama: 'Polip Lambung',
        treatment: {
            'Mual': saranPenangananGejala.P06['Mual'].saran,
            'Muntah': saranPenangananGejala.P06['Muntah'].saran,
            'Nyeri pada perut': saranPenangananGejala.P06['Nyeri pada perut'].saran,
            'Memiliki riwayat penyakit keluarga yang serius': saranPenangananGejala.P06['Memiliki riwayat penyakit keluarga yang serius'].saran
        },
        prevention: 'Menjaga kebersihan tangan. Menjaga kebersihan makanan. Berkonsultasi dengan dokter dalam pemilihan obat-obatan.'
    },
    { 
        kode: 'P07', 
        nama: 'Tukak Lambung',
        treatment: {
            'Mual': saranPenangananGejala.P07['Mual'].saran,
            'Muntah': saranPenangananGejala.P07['Muntah'].saran,
            'Perut kembung': saranPenangananGejala.P07['Perut kembung'].saran,
            'Cepat merasa kenyang': saranPenangananGejala.P07['Cepat merasa kenyang'].saran,
            'Nyeri pada ulu hati': saranPenangananGejala.P07['Nyeri pada ulu hati'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P07['Tidak nafsu makan'].saran,
            'Diare': saranPenangananGejala.P07['Diare'].saran,
            'Kelelahan': saranPenangananGejala.P07['Kelelahan'].saran
        },
        prevention: 'Mencegah peningkatan produksi asam lambung berlebih, seperti menjaga pola makan, hindari stres, menghindari minuman beralkohol, bersoda, berkafein, berhenti/ tidak merokok. Berkonsultasi dengan dokter terkait obat yang akan dikonsumsi.'
    },
    { 
        kode: 'P08', 
        nama: 'Kanker Lambung',
        treatment: {
            'Mual': saranPenangananGejala.P08['Mual'].saran,
            'Muntah': saranPenangananGejala.P08['Muntah'].saran,
            'Perut kembung': saranPenangananGejala.P08['Perut kembung'].saran,
            'Cepat merasa kenyang': saranPenangananGejala.P08['Cepat merasa kenyang'].saran,
            'Nyeri pada ulu hati': saranPenangananGejala.P08['Nyeri pada ulu hati'].saran,
            'Tidak nafsu makan': saranPenangananGejala.P08['Tidak nafsu makan'].saran,
            'Penurunan berat badan tanpa alasan yang jelas': saranPenangananGejala.P08['Penurunan berat badan tanpa alasan yang jelas'].saran,
            'Dada terasa panas': saranPenangananGejala.P08['Dada terasa panas'].saran,
            'Kondisi tubuh lemah': saranPenangananGejala.P08['Kondisi tubuh lemah'].saran,
            'Nyeri pada perut': saranPenangananGejala.P08['Nyeri pada perut'].saran,
            'Mulas': saranPenangananGejala.P08['Mulas'].saran,
            'BAB dengan tinja berwarna hitam atau berdarah': saranPenangananGejala.P08['BAB dengan tinja berwarna hitam atau berdarah'].saran,
            'Muntah darah': saranPenangananGejala.P08['Muntah darah'].saran,
            'Anemia': saranPenangananGejala.P08['Anemia'].saran,
            'Pembengkakan pada perut': saranPenangananGejala.P08['Pembengkakan pada perut'].saran,
        },
        prevention: 'Menghindari atau menghentikan kebiasaan merokok dan mengonsumsi alkohol. Menghindari makanan yang diasap, olahan, cepat saji/makanan instan. Mengurangi konsumsi garam sesuai kebutuhan harian. Menerapkan pola makan sehat. Berolahraga secara teratur untuk menjaga berat badan.'
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


//SARAN PENANGANAN GEJALA
const saranPenangananGejala = {
    P01: {
        'Mual': { saran: 'Cobalah minum teh jahe hangat atau makan camilan ringan seperti biskuit.' },
        'Muntah': { saran: 'Minumlah air secara perlahan dan hindari makan makanan berat atau berminyak.' },
        'Perut kembung': { saran: 'Hindari minuman bersoda dan makan dalam porsi kecil namun sering.' },
        'Cepat merasa kenyang': { saran: 'Makanlah dengan porsi kecil lebih sering dan hindari makan terlalu cepat.' },
        'Nyeri pada ulu hati': { saran: 'Hindari makanan pedas, asam, dan minuman berkafein. Cobalah mengonsumsi makanan yang lembut.' },
        'Tidak nafsu makan': { saran: 'Konsumsi makanan yang ringan dan mudah dicerna seperti sup kaldu atau buah-buahan.' },
        'Penurunan berat badan tanpa alasan yang jelas': { saran: 'Periksakan diri ke dokter untuk evaluasi lebih lanjut dan konsultasikan dengan ahli gizi.' },
        'Anemia': { saran: 'Konsumsi makanan tinggi zat besi seperti daging merah, hati, dan sayuran hijau. Pertimbangkan suplemen zat besi jika diperlukan.' }
    },
    P02: {
        'Mual': { saran: 'Hindari makanan berlemak dan berminyak, serta cobalah minum air jahe.' },
        'Muntah': { saran: 'Minumlah air dalam tegukan kecil dan istirahatlah dalam posisi duduk.' },
        'Perut kembung': { saran: 'Hindari makanan yang memproduksi gas, seperti kacang-kacangan dan minuman bersoda.' },
        'Cepat merasa kenyang': { saran: 'Makanlah dalam porsi kecil dan hindari makanan yang berlemak.' },
        'Nyeri pada ulu hati': { saran: 'Hindari makanan pedas dan asam. Konsumsi susu atau makanan yang dapat menetralkan asam.' },
        'Tidak nafsu makan': { saran: 'Makanlah makanan yang mudah dicerna dan berkalori tinggi untuk membantu meningkatkan nafsu makan.' },
        'Perut terasa panas': { saran: 'Hindari makanan pedas, dan konsumsi makanan dingin atau netral.' },
        'Penurunan berat badan tanpa alasan yang jelas': { saran: 'Segera konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.' },
        'Kondisi tubuh lemah': { saran: 'Konsumsi makanan yang bergizi dan pastikan mendapatkan cukup istirahat.' },
        'Nyeri pada perut': { saran: 'Hindari makanan yang dapat memicu nyeri dan gunakan kompres hangat pada perut.' },
        'Mulas': { saran: 'Hindari makanan pedas dan asam, serta cobalah minum air putih atau susu untuk meredakan mulas.' },
        'Cegukan': { saran: 'Minum air dingin secara perlahan atau menahan napas selama beberapa detik.' },
        'BAB dengan tinja berwarna hitam atau berdarah': { saran: 'Segera konsultasi dengan dokter untuk evaluasi lebih lanjut.' },
        'Anemia': { saran: 'Konsumsi makanan kaya zat besi dan pertimbangkan suplemen jika diperlukan. Konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.' },
        'Memiliki riwayat penyakit keluarga yang serius': { saran: 'Lakukan pemeriksaan kesehatan secara rutin dan konsultasikan dengan dokter untuk evaluasi.' }
    },
    P03: {
        'Mual': { saran: 'Minum air jahe hangat atau teh herbal, dan makan makanan ringan yang mudah dicerna.' },
        'Muntah': { saran: 'Minum air putih dalam tegukan kecil dan hindari makanan berat.' },
        'Rasa terbakar di tenggorokan': { saran: 'Hindari makanan pedas dan asam, serta cobalah minum susu atau air dingin.' },
        'Sulit menelan': { saran: 'Konsumsi makanan lunak dan cair seperti sup atau yogurt.' },
        'Dada terasa panas': { saran: 'Hindari berbaring setelah makan dan konsumsi makanan yang tidak mengiritasi lambung.' },
        'Naiknya makanan atau cairan asam dari lambung ke mulut': { saran: 'Tidurkan kepala lebih tinggi dan hindari makanan pemicu seperti makanan pedas.' },
        'Sulit menarik napas': { saran: 'Hindari aktivitas berat dan konsultasikan dengan dokter jika gejala berlanjut.' },
        'Radang tenggorokan': { saran: 'Berkumur dengan air garam hangat dan minum teh hangat.' },
        'Rasa pahit atau asam di mulut': { saran: 'Konsumsi permen karet bebas gula atau bilas mulut dengan air bersih.' },
        'Suara serak': { saran: 'Istirahatkan suara dan hindari berbicara keras atau panjang.' },
        'Kerusakan gigi karena terkena asam lambung': { saran: 'Bilas mulut dengan air setelah muntah dan konsultasikan dengan dokter gigi.' },
        'Bau mulut': { saran: 'Sikat gigi secara teratur, gunakan benang gigi, dan bilas mulut dengan obat kumur.' }
    },
    P04: {
        'Mual': { saran: 'Hindari makanan berat dan berminyak, dan cobalah minum air jahe.' },
        'Muntah': { saran: 'Minum cairan dalam tegukan kecil dan hindari makanan padat.' },
        'Perut kembung': { saran: 'Hindari makanan yang menghasilkan gas dan minuman bersoda.' },
        'Cepat merasa kenyang': { saran: 'Makan dalam porsi kecil dan sering, serta hindari makanan berlemak.' },
        'Nyeri pada ulu hati': { saran: 'Hindari makanan pedas dan asam. Cobalah makanan yang lembut seperti oatmeal.' },
        'Tidak nafsu makan': { saran: 'Konsumsi makanan ringan dan bernutrisi, dan pertimbangkan suplemen jika diperlukan.' },
        'Sulit menelan': { saran: 'Konsumsi makanan lunak dan hindari makanan keras atau kasar.' },
        'Kenyang dalam waktu yang lama setelah makan': { saran: 'Makan dalam porsi kecil dan hindari makanan berat.' },
        'Kondisi tubuh lemah': { saran: 'Konsumsi makanan bergizi dan pastikan mendapatkan istirahat yang cukup.' },
        'Nyeri pada perut': { saran: 'Hindari makanan yang memicu nyeri dan gunakan kompres hangat jika diperlukan.' },
        'Mulas': { saran: 'Hindari makanan pedas dan asam, serta minum air putih untuk meredakan mulas.' },
        'Cegukan': { saran: 'Minum air dingin perlahan atau menahan napas.' },
        'BAB dengan tinja berwarna hitam atau berdarah': { saran: 'Segera konsultasikan dengan dokter.' },
        'Anemia': { saran: 'Konsumsi makanan kaya zat besi dan pertimbangkan suplemen jika diperlukan.' }
    },
    P05: {
        'Mual': { saran: 'Minum air hangat dengan sedikit madu atau makan camilan ringan.' },
        'Muntah': { saran: 'Minum air dalam tegukan kecil dan hindari makanan berat.' },
        'Tidak nafsu makan': { saran: 'Makanlah dalam porsi kecil namun sering dan pilih makanan yang mudah dicerna.' },
        'Sering diare': { saran: 'Minum banyak cairan untuk mencegah dehidrasi dan hindari makanan yang dapat memperburuk diare.' },
        'Nyeri pada perut': { saran: 'Hindari makanan pedas dan asam, serta gunakan kompres hangat pada perut.' },
        'Keram perut': { saran: 'Konsumsi makanan yang lembut dan hindari makanan yang mengandung gas.' },
        'Rasa pahit atau asam di mulut': { saran: 'Bilas mulut dengan air bersih atau gunakan permen karet bebas gula.' }
    },
    P06: {
        'Mual': { saran: 'Minum teh jahe atau camilan ringan untuk meredakan mual.' },
        'Muntah': { saran: 'Minum air perlahan dan makan makanan yang mudah dicerna.' },
        'Nyeri pada perut': { saran: 'Hindari makanan yang mengiritasi perut dan gunakan kompres hangat.' },
        'Memiliki riwayat penyakit keluarga yang serius': { saran: 'Lakukan pemeriksaan rutin dan konsultasikan dengan dokter.' }
    },
    P07: {
        'Mual': { saran: 'Minum air jahe atau makan makanan ringan seperti biskuit.' },
        'Muntah': { saran: 'Minum air dalam tegukan kecil dan hindari makanan berat.' },
        'Perut kembung': { saran: 'Hindari makanan yang menghasilkan gas dan makan dalam porsi kecil.' },
        'Cepat merasa kenyang': { saran: 'Makan dalam porsi kecil dan hindari makanan yang berat.' },
        'Nyeri pada ulu hati': { saran: 'Hindari makanan pedas dan asam serta cobalah makanan lembut.' },
        'Tidak nafsu makan': { saran: 'Konsumsi makanan ringan dan bernutrisi.' },
        'Diare': { saran: 'Minum banyak cairan untuk mencegah dehidrasi dan hindari makanan yang memicu diare.' },
        'Kelelahan': { saran: 'Istirahat yang cukup dan konsumsi makanan bergizi.' }
    },
    P08: {
        'Mual': { saran:'Minum air jahe atau makan makanan ringan seperti biskuit.' },
        'Muntah': { saran:'Minum air dalam tegukan kecil dan hindari makanan berat.' },
        'Perut kembung': { saran:'Hindari makanan yang menghasilkan gas dan makan dalam porsi kecil' },
        'Cepat merasa kenyang': { saran:'Makan dalam porsi kecil dan hindari makanan yang berat' },
        'Nyeri pada ulu hati': { saran:'Hindari makanan pedas dan asam serta cobalah makanan lembut.' },
        'Tidak nafsu makan': { saran:'Konsumsi makanan ringan dan bernutrisi.' },
        'Penurunan berat badan tanpa alasan yang jelas': { saran:'Segera konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.' },
        'Dada terasa panas': { saran:'Hindari berbaring setelah makan dan konsumsi makanan yang tidak mengiritasi lambung.' },
        'Kondisi tubuh lemah': { saran:'Konsumsi makanan bergizi dan pastikan mendapatkan istirahat yang cukup.' },
        'Nyeri pada perut': { saran:'Hindari makanan yang mengiritasi perut dan gunakan kompres hangat.' },
        'Mulas': { saran:'Hindari makanan pedas dan asam, serta minum air putih untuk meredakan mulas.' },
        'BAB dengan tinja berwarna hitam atau berdarah': { saran:'Segera konsultasi dengan dokter untuk evaluasi lebih lanjut.' },
        'Muntah darah': { saran:'Segera cari bantuan medis dengan menghubungi layanan darurat atau pergi ke rumah sakit terdekat.' },
        'Anemia': { saran:'Konsumsi makanan kaya zat besi dan pertimbangkan suplemen jika diperlukan.' },
        'Pembengkakan pada perut': { saran:'Dapat diredakan dengan kompres dingin, namun tetap memerlukan penanganan medis segera' },
        'Memiliki riwayat penyakit keluarga yang serius (penyakit lambung, diabetes, kanker, dsb.)': { saran:'Lakukan pemeriksaan rutin dan konsultasikan dengan dokter.' },
    }
};

const penangananGejalaUmum = {
    G01: 'Minum air jahe, makan porsi kecil sering, hindari makanan berlemak.',
    G02: 'Minum cairan sedikit demi sedikit, makan makanan mudah dicerna.',
    G03: 'Hindari makanan berlemak, minum teh peppermint, olahraga ringan.',
    G04: 'Makan porsi kecil sering, hindari makanan berat sebelum tidur.',
    G05: 'Hindari makanan pedas dan berlemak, minum antasida.',
    G06: 'Makan porsi kecil sering, coba makanan favorit, minum jus segar.',
    G07: 'Hindari makanan asam, pedas, dan berlemak.',
    G08: 'Minum antasida, hindari makanan pedas dan berlemak.',
    G09: 'Konsultasi dengan dokter, cek kondisi medis.',
    G10: 'Makan makanan lembut, minum air hangat, konsultasi dokter.',
    G11: 'Hindari makanan pedas, makan porsi kecil, tidak berbaring setelah makan.',
    G12: 'Hindari makan sebelum tidur, tidur dengan bantal tinggi.',
    G13: 'Makan porsi kecil sering, hindari makanan berat.',
    G14: 'Istirahat cukup, makan makanan bergizi, minum vitamin.',
    G15: 'Minum banyak cairan, makan makanan rendah serat, hindari produk susu.',
    G16: 'Hindari makanan pedas, minum air hangat, konsultasi dokter.',
    G17: 'Hindari makanan pedas dan asam, minum antasida.',
    G18: 'Istirahat, hindari aktivitas berat, konsultasi dokter.',
    G19: 'Minum air dingin perlahan, tahan napas beberapa detik.',
    G20: 'Segera konsultasi dokter, cek kondisi medis.',
    G21: 'Segera konsultasi dokter, hindari makan berat.',
    G22: 'Minum banyak cairan, istirahat, minum obat penurun demam.',
    G23: 'Minum air hangat, kompres hangat, hindari makanan berlemak.',
    G24: 'Minum air hangat, kumur air garam, hindari makanan asam.',
    G25: 'Konsumsi makanan tinggi zat besi, minum suplemen zat besi.',
    G26: 'Hindari makanan pedas dan asam, minum air putih.',
    G27: 'Istirahatkan suara, minum air hangat, hindari merokok.',
    G28: 'Sikat gigi secara teratur, hindari makanan asam.',
    G29: 'Sikat gigi dua kali sehari, minum air putih, hindari makanan berbau.',
    G30: 'Hindari makanan berlemak dan gas, minum air putih.',
    G31: 'Konsultasi dengan dokter secara rutin, lakukan pemeriksaan kesehatan berkala.'
};

//Fungsi untuk menampilkan data dari tabel data gejala
function populateSelectedGejalaTable() {
    const table = document.getElementById('selectedGejalaTable').getElementsByTagName('tbody')[0];
    let selectedGejala = JSON.parse(localStorage.getItem('selectedGejala')) || [];
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

        row.insertCell(3).innerText = cfUserBobot;
        updateBobot(row, cfUserBobot);
    });
}

//Fungsi untuk mengupdate nilai bobot atau CF User
function updateBobot(row, value) {
    const kode = row.getAttribute('data-kode');
    localStorage.setItem(`CF_${kode}`, value);
    row.cells[3].innerText = value;
}

function updateCfUserInput(kode, value) {
    localStorage.setItem(`CF_${kode}`, value);
}

// Fungsi Metode Forward Chaining
function forwardChaining() {
    let selectedGejala = JSON.parse(localStorage.getItem('selectedGejala')) || [];
    const diagnosisResults = {};

    penyakitList.forEach(penyakit => {
        const gejalaPenyakit = rules[penyakit.kode] || [];
        let matchedGejalaCount = 0;

        selectedGejala.forEach(gejala => {
            if (gejalaPenyakit.includes(gejala.kode)) {
                matchedGejalaCount++;
            }
        });

        const cf = matchedGejalaCount / gejalaPenyakit.length;
        diagnosisResults[penyakit.kode] = cf;
    });

    return diagnosisResults;
}


//Fungsi Metode Certainty Factor
function calculateCF() {
    const tableContainer = document.getElementById('tablesContainer');
    tableContainer.innerHTML = '';

    const selectedGejala = JSON.parse(localStorage.getItem('selectedGejala')) || [];

    // Filter penyakit berdasarkan gejala yang dipilih
    penyakitList.forEach(penyakit => {
        const rule = rules.find(rule => rule.then === penyakit.nama);

        if (rule) {
            const gejalaDataForPenyakit = rule.if;
            const matchedGejala = selectedGejala.filter(gejala => gejalaDataForPenyakit.includes(gejala.kode));
            if (matchedGejala.length > 0) {
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

                matchedGejala.forEach(gejala => {
                    const cfPakar = cfPakarData[penyakit.kode]?.[gejala.kode]?.cf || 0;
                    const cfUserBobot = localStorage.getItem(`CF_${gejala.kode}`) || '0';
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${gejala.kode}</td>
                        <td class="left-align">${gejala.nama}</td>
                        <td>${cfUserBobot}</td>
                        <td>${cfPakar}</td>
                        <td class="cf-result">0</td>
                    `;
                    tbody.appendChild(row);
                });

                tableContainer.appendChild(table);
            }
        } else {
            console.error(`Aturan untuk penyakit ${penyakit.nama} tidak ditemukan.`);
        }
    });
}

function combineCF(cf1, cf2) {
    return cf1 + cf2 * (1 - cf1);
}

function calculateDiseaseCF() {
    let highestCF = -Infinity;
    let diagnosedDisease = null;

    penyakitList.forEach(penyakit => {
        const hasilPerhitunganElement = document.getElementById(`hasilPerhitungan${penyakit.kode}`);
        if (!hasilPerhitunganElement) {
            console.error(`Hasil perhitungan dengan ID  ${penyakit.kode} tidak ditemukan.`);
            return; 
        }

        const cfTable = hasilPerhitunganElement.closest('table');
        if (!cfTable) {
            console.error(`Tabel untuk penyakit dengan kode ${penyakit.kode} tidak ditemukan.`);
            return;
        }

        const rows = cfTable.querySelectorAll('tbody tr');
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

        hasilPerhitunganElement.innerText = `Total CF: ${combinedCF.toFixed(2)}`;

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

//Fungsi untuk menampilkan pop-up
document.getElementById('submitJawabanBtn').addEventListener('click', () => {
    document.getElementById('cfSection').classList.remove('hidden');
    calculateCF();
    const { disease, cf } = calculateDiseaseCF();

    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('btnLihatHasil');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        const treatmentList = document.getElementById('treatmentAdvice');
        treatmentList.innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    openPopupBtn.addEventListener('click', () => {
        if (disease) {
            const cfPercentage = (cf * 100).toFixed(0) + '%';
            const diagnosis = `Anda memiliki diagnosis awal ${disease.nama === 'Sindrom Dispepsia' ? '' : 'Penyakit '}${disease.nama} berdasarkan hasil perhitungan dengan nilai tertinggi yaitu ${cfPercentage}.`;
            const treatment = disease.treatment;
            const prevention = disease.prevention;
            const symptom = JSON.parse(localStorage.getItem('selectedGejala')) || [];

            document.getElementById('diagnosisResult').innerText = diagnosis;

            let symptomTreatment = symptom.map(item => ({
                kode: item.kode,
                nama: item.nama,
                treatment: treatment[item.nama] || penangananGejalaUmum[item.kode] || 'No treatment available'
            }));

            const treatmentList = document.getElementById('treatmentAdvice');
            treatmentList.innerHTML = ''; 

            symptomTreatment.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'treatment-item';
                listItem.innerHTML = `<span class="symptom">${item.nama}:</span> ${item.treatment}`;
                treatmentList.appendChild(listItem);
            });

            document.getElementById('preventionAdvice').innerText = prevention;
        } else {
            console.error('Tidak ada penyakit yang terdiagnosis.');
        }

        popup.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', populateSelectedGejalaTable);
