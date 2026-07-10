function bukaKaryawan() {
    window.location.href = "karyawan.html";
}

function bukaPenggajian() {
    window.location.href = "penggajian.html";
}

function bukaLaporan() {
    window.location.href = "laporan.html";
}

function logout() {
    if (confirm("Yakin ingin logout?")) {
        window.location.href = "index.html";
    }
}