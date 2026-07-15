function hitungGaji() {

    let nik = document.getElementById("nik").value;
    let nama = document.getElementById("nama").value;
    let jabatan = document.getElementById("jabatan").value;
    let gajiPokok = parseInt(document.getElementById("gajiPokok").value);
    let tunjangan = parseInt(document.getElementById("tunjangan").value);
    let potongan = parseInt(document.getElementById("potongan").value);

    // Validasi input
    if (nik === "" || nama === "" || jabatan === "" ||
        isNaN(gajiPokok) || isNaN(tunjangan) || isNaN(potongan)) {

        alert("Semua data harus diisi!");
        return;
    }

    // Menghitung total gaji
    let totalGaji = gajiPokok + tunjangan - potongan;

    // Menampilkan data pada tabel
    let tabel = document.getElementById("tabelPenggajian");
    let nomor = tabel.rows.length + 1;

    tabel.innerHTML += `
    <tr>
        <td>${nomor}</td>
        <td>${nik}</td>
        <td>${nama}</td>
        <td>${jabatan}</td>
        <td>${gajiPokok}</td>
        <td>${tunjangan}</td>
        <td>${potongan}</td>
        <td>${totalGaji}</td>
    </tr>
    `;

    // Menyimpan data ke localStorage
    let dataPenggajian =
        JSON.parse(localStorage.getItem("penggajian")) || [];

    dataPenggajian.push({
        nik: nik,
        nama: nama,
        jabatan: jabatan,
        gajiPokok: gajiPokok,
        tunjangan: tunjangan,
        potongan: potongan,
        totalGaji: totalGaji
    });

    localStorage.setItem(
        "penggajian",
        JSON.stringify(dataPenggajian)
    );

    // Mengosongkan input
    document.getElementById("nik").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jabatan").value = "";
    document.getElementById("gajiPokok").value = "";
    document.getElementById("tunjangan").value = "";
    document.getElementById("potongan").value = "";

    alert("Data berhasil disimpan!");
}