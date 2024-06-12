const savedStatus = JSON.parse(localStorage.getItem('checkedStatus')) || {};

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
                    <select class="dropdown">
                        <option value="pilih_jawaban">Pilih Jawaban</option>
                        <option value="kurang_yakin">Kurang Yakin</option>
                        <option value="sedikit_yakin">Sedikit Yakin</option>
                        <option value="cukup_yakin">Cukup Yakin</option>
                        <option value="yakin">Yakin</option>
                        <option value="sangat_yakin">Sangat Yakin</option>
                    </select>
                </td>
            `;
            tableBody.appendChild(row);
        }
    });
}

// Initial display
displaySavedGejala();
