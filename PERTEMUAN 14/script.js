function hitungnilai(){
    let nama = document.getElementById("nama").value;
    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    //Menampilkan data di console
    console.log("Nama:", nama);
    console.log("Nilai Tugas:", tugas);
    console.log("Nilai UTS:", uts);
    console.log("Nilai UAS:", uas);

    //Validasi Input
    if (nama.trim() === "" || 
    document.getElementById("tugas").value === "" ||
    document.getElementById("uts").value === "" ||
    document.getElementById("uas").value === "") {
        alert("Semua data wajib diisi");
        return;
    }
    if (tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100){
            alert("Nilai harus diantara 0 sampai 100!");
            return;
    }

    //Rumus Nilai Akhir
    let nilaiAkhir =
    (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);

    //menentukan grade berdasarkan nilai akhir

    let grade;

    if (nilaiAkhir >= 85) {
        grade = "A";
    } else if (nilaiAkhir >=70) {
        grade = "B";
    } else if (nilaiAkhir >=60) {
        grade = "C";
    } else if (nilaiAkhir >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    //Menentukan status kelulusan
    let status;
    
    if (nilaiAkhir >=60) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }

    //meamilkan hasil debugging di console
    console.log("Nilai Akhir:", nilaiAkhir)
    console.log("Grade:",grade);
    console.log("Status:", status);

    //hasil
    document.getElementById("hasil").innerHTML = 
        "Nama: " + nama +
        "<br> Nilai Akhir: " +nilaiAkhir.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Status: "+ status;

    
}

function hapusData() {
    // Mengosongkan semua kolom input
    document.getElementById("nama").value = "";
    document.getElementById("tugas").value = "";
    document.getElementById("uts").value = "";
    document.getElementById("uas").value = "";

    // Menghapus tampilan hasil perhitungan
    document.getElementById("hasil").innerHTML = "";

    // (Opsional) Mengarahkan kursor kembali ke kolom nama
    document.getElementById("nama").focus();
}