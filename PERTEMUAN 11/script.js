//Mengambil elemen elemen form
const form = document.getElementById('formRegistrasi');
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const password = document.getElementById('password');
const konfirmasiPassword = document.getElementById('konfirmasiPassword');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// FUNGSI UTAMA VALIDASI (PER INPUT)



function validateNama() {
    const val = nama.value.trim();
    if (val === '') {
        showError (nama, 'errNama', 'Nama Lengkap tidak boleh kosong!');
        return false;
    } else if (val.length < 3){
        showError (nama, 'errNama', 'Nama minimal harus 3 karakter!');
        return false;
    } else {
        showSuccess(nama);
        return true;
    }
}

function validateEmail() {
    const val = email.value.trim();
    if (val === '') {
        showError (email, 'errEmail', 'Email tidak boleh kosong!');
        return false;
    } else if (!emailPattern.test(val)){
        showError (email, 'errEmail', 'Format Email tidak valid!');
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

function validatePassword() {
    const val = password.value;
    if (val === '') {
        showError (password, 'errPassword', 'Password Wajib diisi!');
        return false;
    } else if (val.length < 8){
        showError (password, 'errPassword', 'Password minimal harus 8 karakter!');
        return false;
    } else {
        showSuccess(password);
        return true;
    }
}

function validateKonfirmasiPassword() {
    const valPass = password.value;
    const valKonf= konfirmasiPassword.value;
    if (valKonf === '') {
        showError (konfirmasiPassword, 'errKonfirmasiPassword', 'Konfirmasi Password harus diisi!');
        return false;
    } else if (valKonf !== valPass) {
        showError (konfirmasiPassword, 'errKonfirmasiPassword', 'Password tidak cocok!');
        return false;
    } else {
        showSuccess(konfirmasiPassword);
        return true;
    }
}


// menggunakan event 'input' agar erpr/sukses terdeteksi langsung saat diketik

nama.addEventListener('input', validateNama);
email.addEventListener('input', validateEmail);

password.addEventListener('input', () => {
    validatePassword();
    if (konfirmasiPassword.value !== '') {
        validateKonfirmasiPassword();
}
});

konfirmasiPassword.addEventListener('input', validateKonfirmasiPassword);

// validasi final pas submit biar gak lolos
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNamaValid = validateNama();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isKonfirmasiValid = validateKonfirmasiPassword();

    if (isNamaValid && isEmailValid && isPasswordValid && isKonfirmasiValid) {
        alert('Pendaftaran Berhasil! Semua data valid.');
        form.submit(); // atau kirim pakai fetch
    }
});


function showError(inputElement, errorElementId, message){
    const errorText = document.getElementById(errorElementId);
    errorText.innerText = message;
    errorText.style.display = 'block';
    inputElement.classList.add('input-error');
    inputElement.classList.remove ('input-success');

}

function showSuccess(inputElement) {
    const errorText = inputElement.nextElementSibling;
    if (errorText && errorText.classList.contains('error-message')){
        errorText.innerText = '';
        errorText.style.display = 'none';

    }
    inputElement.classList.remove('input-error');
    inputElement.classList.add('input-success');


}