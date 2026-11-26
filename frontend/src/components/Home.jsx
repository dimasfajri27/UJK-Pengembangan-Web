import { useEffect, useState } from "react";
import { deleteSiswa, getAll } from "../services/DataSiswaServices";
import { Link } from "react-router-dom";

function Home(){
    const [siswa, setSiswa] = useState([]);
    const [error, setError] = useState(" ");

    const loadData = async () => {
        try{
            setError(" ")
            const respone = await getAll();
            console.log(respone.data);
            setSiswa(respone.data);
        }catch(error){
            console.log(error);
            setError(
                "Gagal mengambil data siswa"
            );
        };
    };

    useEffect (() => {
        loadData();
    }, []);

    // buat variabel untuk delete
    const handleDelete = async (id) => {
        const konfirmasi = window.confirm(
            "Apakah anda yakin ingin menghapus data ini?"
        );
        if(!konfirmasi){
            return;
        };
        try{
            await deleteSiswa(id);
            alert("Data berhasil dihapus");
            loadData();
        }catch(error){
            console.error(error);
            alert("Gagal menghapus data")
        };
    };

    return(
        <>
                <section>
            <Link to="/siswa/create"
                className="btn btn-primary"> Tambah Siswa</Link>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover align-middle mb-0">
                            <thead className="table-danger">
                                <tr className="text-center">
                                    <th>KODE SISWA</th>
                                    <th>NAMA</th>
                                    <th>ALAMAT</th>
                                    <th>TANGGAL LAHIR</th>
                                    <th>JURUSAN</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswa.map((siswa, index) => (
                                    <tr key={siswa.id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{siswa.nama_siswa}</td>
                                        <td>{siswa.alamat_siswa}</td>
                                        <td>{siswa.tanggal_siswa}</td>
                                        <td>{siswa.jurusan_siswa}</td>
                                        <td className="text-center">
                                            <Link to={`/${siswa.id}`} 
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Detail">
                                            <i className="bi bi-eye"></i>
                                            </Link>
                                            <Link to={`/siswa/edit/${siswa.kode_siswa}`} 
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Edit">
                                            <i className="bi bi-pencil"></i>
                                            </Link>
                                            <button
                                            onClick={() => handleDelete(siswa.kode_siswa)}
                                            className="btn btn-sm btn-outline-danger m-1"
                                            title="Hapus">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
};

export default Home;