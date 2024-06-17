document.getElementById('btnKonsultasi').addEventListener('click', function() {
    window.location.href = "konsultasi.html";
});

document.getElementById('btnKonsultasi2').addEventListener('click', function() {
    window.location.href = "konsultasi.html";
});
  
document.getElementById("burgerButton").addEventListener("click", function() {
    var menu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

//Fungsi untuk menampilkan Informasi Penyakit
const diseaseData = {
    dispepsia: {
        desc: "Dispepsia adalah istilah medis yang merujuk pada gangguan pencernaan atau rasa tidak nyaman di bagian atas perut.",
        image: "./assets/Dispepsia.jpg",
        cause: "Makanan berlemak, berminyak, asam dan pedas. Minuman beralkohol, bersoda, dan berkafein tinggi. Merokok, merasa cemas/stres, dan konsumsi jenis obat NSAID.",
        symptoms: "Mual, muntah, perut kembung, cepat merasa kenyang, nyeri pada ulu hati, tidak nafsu makan, penurunan berat badan tanpa alasan yang jelas, anemia.",
        prevention: "Menghindari makanan berlemak, berminyak, asam dan pedas. Berhenti/tidak mengkonsumsi minuman beralkohol. Mengurangi minuman bersoda, berkafein, dan cokelat. Merokok. Mengontrol cemas/stres yang berlebihan. Berkonsultasi dengan dokter dalam pemilihan jenis obat antibiotik dan penghilang rasa nyeri."
    },
    gastritis: {
        desc: "Gastritis adalah peradangan pada lapisan lambung. Kondisi ini dapat terjadi secara tiba-tiba (akut) atau berkembang perlahan-lahan (kronis).",
        image: "./assets/Gastritis.jpg",
        cause: "Infeksi bakteri H.Pylori, penggunaan obat-obatan NSAID, pola makan tidak sehat, stres berkepanjangan, konsumsi minuman bersoda, berkafein dan beralkohol. Mengkonsumsi cokelat berlebih.",
        symptoms: "Mual, muntah, perut kembung, cepat merasa kenyang, nyeri pada ulu hati, tidak nafsu makan, perut terasa panas, penurunan berat badan tanpa alasan yang jelas, kondisi tubuh lemah, nyeri pada perut, mulas, cegukan, BAB berdarah, muntah darah, anemia.",
        prevention: "Mencuci tangan dengan air mengalir dan sabun untuk menghindari infeksi bakteri. Membatasi asupan minuman berkafein. Berhenti/tidak mengkonsumsi minuman beralkohol. Berkonsultasi dengan dokter sebelum mengonsumsi obat antiimflamasi nonsteroid, Mengurangi stres. Menjaga pola makan. Menghindari tidur setelah makan."
    },
    gerd: {
        desc: "GERD (Gastroesophageal Reflux Disease) adalah kondisi medis yang ditandai oleh aliran balik (refluks) asam lambung ke kerongkongan (esofagus).",
        image: "./assets/GERD.jpg",
        cause: "Peningkatan asam lambung. Melemahnya sfingter esofagus bagian bawah. Konsumsi makanan berlemak, berminyak, asam dan pedas. Konsumsi minuman bersoda, berkafein, beralkohol.",
        symptoms: "Mual, muntah, rasa terbakar di tenggorokan, sulit menelan, heartburn, regurgitasi makanan, sulit menarik napas, radang tenggorokan, rasa pahit atau asam di mulut, suara serak.",
        prevention: "Meninggikan kepala saat tidur, menggunakan bantal yang lebih tinggi. Menghindari tidur setelah makan. Menghindari makanan dan minuman yang meningkatkan produksi asam lambung berlebih. Hindari stres untuk mencegah peningkatan produksi asam lambung berlebih. Makan sedikit tapi sering."
    },
    gastroparesis: {
        desc: "Gastroparesis adalah suatu kondisi medis di mana perut tidak dapat mengosongkan isinya dengan normal.",
        image: "./assets/Gastroparesis.jpg",
        cause: "Kerusakan saraf vagus, mengidap penyakit tertentu seperti diabetes atau hipotiroid. Efek samping pengobatan kanker, seperti kemoterapi atau radioterapi.",
        symptoms: "Mual, muntah, perut kembung, cepat merasa kenyang, nyeri pada ulu hati, tidak nafsu makan, sulit menelan, kenyang dalam waktu yang lama, nyeri pada perut, muntah darah, demam.",
        prevention: "Jika mengidap diabetes, pastikan kadar glukosa terkontrol dengan baik. Pahami kemungkinan efek samping dari perawatan yang sedang dijalani dan ketahui apa yang harus dilakukan jika terjadi efek samping. Berkonsultasi dengan dokter sebelum mengkonsumsi obat-obatan."
    },
    gastroenteritis: {
        desc: "Gastroenteritis adalah peradangan pada saluran pencernaan, terutama lambung dan usus, yang biasanya disebabkan oleh infeksi virus, bakteri, atau parasit.",
        image: "./assets/Gastroenteritis.jpg",
        cause: "Infeksi virus Rotavirus, Norovirus, Astrovirus, Adenovirus. Infeksi bakteri Yersinia, Shigella, Staphylococcus, Salmonella, Escherichia coli, Campylobacter.",
        symptoms: "Mual, muntah, tidak nafsu makan, sering diare, nyeri pada perut, keram perut.",
        prevention: "Pemberian imunisasi rotavirus lengkap. Menjaga kebersihan. Mencuci tangan dengan sabun dan di air mengalir. Pastikan makanan telah diolah menggunakan peralatan masak yang bersih dan steril. Hindari menggunakan barang pribadi bersamaan, seperti alat makan dan handuk. Hindari mengonsumsi makanan mentah. Jaga jarak dengan penderita gastroenteritis."
    },
    polipLambung: {
        desc: "Polip lambung adalah pertumbuhan jaringan yang tidak normal pada lapisan dalam lambung.",
        image: "./assets/Polip.jpg",
        cause: "Infeksi bakteri Helicobacter pylori, riwayat penyakit Gastritis kronis, penggunaan obat PPI, dan kondisi genetik.",
        symptoms: "Biasanya tidak menimbulkan gejala, tetapi dapat menyebabkan mual, muntah, nyeri pada perut.",
        prevention: "Menjaga kebersihan tangan. Menjaga kebersihan makanan. Berkonsultasi dengan dokter dalam pemilihan obat-obatan."
    },
    tukakLambung: {
        desc: "Tukak lambung adalah luka terbuka yang berkembang di lapisan dalam lambung. ",
        image: "./assets/Tukak.jpg",
        cause: "Peningkatan  asam lambung, infeksi Helikobacter Pylori, konsumsi obat NSAID jangka panjang seperti aspirin, ibuprofen, atau naproxen. Konsumsi alkohol, merokok, dan pola makan tidak sehat.",
        symptoms: "Mual, muntah, perut kembung, cepat merasa kenyang, nyeri pada ulu hati, tidak nafsu makan, penurunan berat badan tanpa alasan yang jelas, BAB berdarah, muntah darah.",
        prevention: "Mencegah peningkatan produksi asam lambung berlebih, seperti menjaga pola makan, hindari stres, menghindari minuman beralkohol, bersoda, berkafein, berhenti/ tidak merokok. Berkonsultasi dengan dokter terkait obat yang akan dikonsumsi."
    },
    kankerLambung: {
        desc: "Kanker lambung, juga dikenal sebagai kanker perut, adalah pertumbuhan sel-sel kanker yang dimulai dari lapisan dalam lambung (perut).",
        image: "./assets/Kanker.jpg",
        cause: "Mutasi genetik pada sel di dalam lambung. Infeksi bakteri H. pylori. Konsumsi makanan pemicu kanker, seperti daging olahan, makanan cepat saji/ makanan instan, makanan tinggi garam, dan makanan yang dibakar.",
        symptoms: "Mual, muntah, perut kembung, cepat merasa kenyang, nyeri pada ulu hati, tidak nafsu makan, penurunan berat badan tanpa alasan yang jelas, heartburn, kondisi tubuh lemah, nyeri pada perut, mulas, BAB berdarah, muntah darah, anemia, pembengkakan pada perut",
        prevention: "Menghindari atau menghentikan kebiasaan merokok dan mengonsumsi alkohol. Menghindari makanan yang diasap, olahan, cepat saji/makanan instan. Mengurangi konsumsi garam sesuai kebutuhan harian. Menerapkan pola makan sehat. Berolahraga secara teratur untuk menjaga berat badan."
    }
};

function showInfo(disease) {
    document.getElementById('disease-desc').innerText = diseaseData[disease].desc;
    document.getElementById('disease-image').src = diseaseData[disease].image;
    document.getElementById('disease-cause').innerText = diseaseData[disease].cause;
    document.getElementById('disease-symptoms').innerText = diseaseData[disease].symptoms;
    document.getElementById('disease-prevention').innerText = diseaseData[disease].prevention;
}






