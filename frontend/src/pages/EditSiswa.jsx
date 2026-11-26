import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../services/DataSiswaServices";

function EditSiswa() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nama_siswa: "",
        alamat_siswa: "",
        tanggal_siswa: "",
        jurusan_siswa: ""
    });



    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
            const response = await getById(id);
            console.log(response.data);
            setForm({
                nama_siswa: response.data.nama_siswa,
                alamat_siswa: response.data.alamat_siswa,
                tanggal_siswa: response.data.tanggal_siswa,
                jurusan_siswa: response.data.jurusan_siswa
            });
        } catch (error) {
            console.log(error)
            alert("Data tidak ditemukan");
            navigate("/")
        }
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log("Data yang dikirim :", form);
            await update(id, form);
            alert("Data berhasil di update");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Gagal Mengupdate Data")
        };
    };
    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-4">
                                    Edit Siswa
                                </h3>
                                <form onSubmit={handleUpdate}>
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
                                            placeholder="Tuliskan Deskripsi" required >
                                        </textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Tanggal Lahir
                                        </label>

                                        <input
                                            type="date"
                                            name="tanggal_siswa"
                                            value={form.tanggal_siswa}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Jurusan
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
                                            <i className="bi bi-save me-2"></i>Update
                                        </button>
                                        <button type="button"
                                            onClick={() => navigate("/")}
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
    );

};

export default EditSiswa;