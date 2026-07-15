let data = JSON.parse(localStorage.getItem("penggajian")) || [];

let tabel = document.getElementById("dataLaporan");

data.forEach((item,index)=>{

tabel.innerHTML += `
<tr>
<td>${index+1}</td>
<td>${item.nik}</td>
<td>${item.nama}</td>
<td>${item.jabatan}</td>
<td>${item.gajiPokok}</td>
<td>${item.tunjangan}</td>
<td>${item.potongan}</td>
<td>${item.totalGaji}</td>
</tr>
`;

});