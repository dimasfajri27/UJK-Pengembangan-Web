CREATE DATABASE IF NOT EXISTS data_siswa;
USE data_siswa;

CREATE TABLE siswa(
    kode_siswa INT AUTO_INCREMENT PRIMARY KEY,
    nama_siswa VARCHAR(100) NOT NULL,
    alamat_siswa VARCHAR(100) NOT NULL,
    tanggal_siswa DATE NOT NULL,
    jurusan_siswa VARCHAR(100) NOT NULL
)