let data = [];
let editIndex = -1;

function simpanData(){

    let nik = document.getElementById("nik").value;
    let nama = document.getElementById("nama").value;
    let jabatan = document.getElementById("jabatan").value;

    if(nik=="" || nama=="" || jabatan==""){
        alert("Semua data harus diisi!");
        return;
    }

    if(editIndex==-1){

        data.push({
            nik:nik,
            nama:nama,
            jabatan:jabatan
        });

    }else{

        data[editIndex]={
            nik:nik,
            nama:nama,
            jabatan:jabatan
        };

        editIndex=-1;
    }

    tampilData();
    bersih();
}

function tampilData(){

    let tabel=document.getElementById("tabelKaryawan");

    tabel.innerHTML="";

    for(let i=0;i<data.length;i++){

        tabel.innerHTML+=`
        <tr>
            <td>${i+1}</td>
            <td>${data[i].nik}</td>
            <td>${data[i].nama}</td>
            <td>${data[i].jabatan}</td>
            <td>
                <button class="edit" onclick="editData(${i})">Edit</button>
                <button class="hapus" onclick="hapusData(${i})">Hapus</button>
            </td>
        </tr>
        `;
    }

}

function editData(index){

    document.getElementById("nik").value=data[index].nik;
    document.getElementById("nama").value=data[index].nama;
    document.getElementById("jabatan").value=data[index].jabatan;

    editIndex=index;

}

function hapusData(index){

    if(confirm("Yakin ingin menghapus data?")){

        data.splice(index,1);

        tampilData();

    }

}

function bersih(){

    document.getElementById("nik").value="";
    document.getElementById("nama").value="";
    document.getElementById("jabatan").value="";

}