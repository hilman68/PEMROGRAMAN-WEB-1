let dataMahasiswa = [];
async function ambilData() {
    const status = document.getElementById("status");
    status.textContent = "Sedang mengambil data...";
    try {
        const response = await fetch("mahasiswa.json");
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        dataMahasiswa = await response.json();
        cariMahasiswa();
    } catch (error) {
        status.textContent = "Gagal mengambil data JSON";
        document.getElementById("tabelMahasiswa").innerHTML = "";
        console.error("Error:", error);
    }
}
function tampilkanData(data) {
    const tabel = document.getElementById("tabelMahasiswa");
    tabel.innerHTML = "";
    data.forEach((mahasiswa, index) => {
        const baris = tabel.insertRow();
        [
            index + 1,
            mahasiswa.nim,
            mahasiswa.nama,
            mahasiswa.Jurusan,
            mahasiswa.Semester
        ].forEach(nilai => {
            const kolom = baris.insertCell();
            kolom.textContent = nilai;
        });
    });
    document.getElementById("status").textContent =
        data.length === 0
            ? "Data mahasiswa tidak ditemukan."
            : "Jumlah Mahasiswa: " + data.length;
}


function cariMahasiswa(){
    const keyword = document.getElementById("cari").value.toLowerCase();
    const Jurusan = document.getElementById("Jurusan").value;
    const hasil = dataMahasiswa.filter((mahasiswa) =>
        mahasiswa.nama.toLowerCase().includes(keyword) ||
        mahasiswa.nim.toLowerCase().includes(Jurusan)
    );
    tampilkanData(hasil);
}
