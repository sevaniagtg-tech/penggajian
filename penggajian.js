let dataPenggajian = [];
let nomor = 1;

function hitungGaji(){

    let nik = document.getElementById("nik").value;
    let nama = document.getElementById("nama").value;
    let jabatan = document.getElementById("jabatan").value;

    let gajiPokok = Number(document.getElementById("gajiPokok").value);
    let tunjangan = Number(document.getElementById("tunjangan").value);
    let potongan = Number(document.getElementById("potongan").value);

    if(
        nik=="" ||
        nama=="" ||
        jabatan==""
    ){
        alert("Lengkapi data terlebih dahulu!");
        return;
    }

    let total = gajiPokok + tunjangan - potongan;

    dataPenggajian.push({
        nik,
        nama,
        jabatan,
        gajiPokok,
        tunjangan,
        potongan,
        total
    });

    tampilData();

    bersih();
}

function tampilData(){

    let tabel = document.getElementById("tabelPenggajian");

    tabel.innerHTML = "";

    nomor = 1;

    dataPenggajian.forEach(function(item){

        tabel.innerHTML += `
        <tr>
            <td>${nomor++}</td>
            <td>${item.nik}</td>
            <td>${item.nama}</td>
            <td>${item.jabatan}</td>
            <td>Rp ${item.gajiPokok.toLocaleString("id-ID")}</td>
            <td>Rp ${item.tunjangan.toLocaleString("id-ID")}</td>
            <td>Rp ${item.potongan.toLocaleString("id-ID")}</td>
            <td><b>Rp ${item.total.toLocaleString("id-ID")}</b></td>
        </tr>
        `;
    });

}

function bersih(){

    document.getElementById("nik").value="";
    document.getElementById("nama").value="";
    document.getElementById("jabatan").value="";
    document.getElementById("gajiPokok").value="";
    document.getElementById("tunjangan").value="";
    document.getElementById("potongan").value="";
}