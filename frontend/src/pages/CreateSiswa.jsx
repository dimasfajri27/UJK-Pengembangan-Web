import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { create } from "../services/DataSiswaServices"

function TambahSiswa() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nama_siswa: "",
        alamat_siswa: "",
        tanggal_siswa: "",
        jurusan_siswa: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Data yang dikirim :", form);
            await create(form);
            alert("Data berhasil ditambahkan");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Gagal Menambahkan data")
        };
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className=" row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-4">
                                    Tambah Siswa
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Nama Siswa
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="nama_siswa"
                                            value={form.nama_siswa}
                                            className="form-control"
                                            placeholder="Masukan nama" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Alamat
                                        </label>
                                        <textarea
                                            onChange={handleChange}
                                            name="alamat_siswa"
                                            value={form.alamat_siswa}
                                            className="form-control"
                                            rows="5"
                                            placeholder="Tuliskan Deskripsi" required>
                                        </textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Tanggal Lahir
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="date"
                                            name="tanggal_siswa"
                                            value={form.tanggal_siswa}
                                            className="form-control"
                                            placeholder="Masukan tanngal" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            jurusan
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="jurusan_siswa"
                                            value={form.jurusan_siswa}
                                            className="form-control"
                                            placeholder="Masukan nama" required />
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary">
                                            <i className="bi bi-save me-2"></i>
                                            Simpan
                                        </button>
                                        <button
                                            onClick={() => navigate("/siswa")}
                                            className="btn btn-secondary">
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TambahSiswa;