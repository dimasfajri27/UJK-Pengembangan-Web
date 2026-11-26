module.exports ={
    validationsSiswaCreate : (req, res, next) =>{
        const {nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa} = req.body;
        const error = [];
        
        if(!nama_siswa || typeof nama_siswa !== "string" || nama_siswa.trim().length < 5){
            error.push("Nama wajib (minimal 5 karakter)")
        };
        if(!alamat_siswa || typeof alamat_siswa !== "string" || alamat_siswa.trim().length < 15){
            error.push("Alamat wajib (minimal 15 karakter)")
        };
        // if(!tanggal_siswa || typeof tanggal_siswa !== "number" || tanggal_siswa.trim().length < 16){
        //     error.push("umur wajib (umur minimal 16 tahun ke atas)")
        // };
        if(!jurusan_siswa || typeof jurusan_siswa !== "string" || jurusan_siswa.trim().length < 2){
            error.push("jurusan wajib (minimal 2 karakter)")
        };
        
        if(error.length) return res.status(400).json({error});
        next();
    },

    validationsSiswaUpdate : (req, res, next) => {
        const {nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa} = req.body;
        const error = [];

        if(nama_siswa !== undefined && (typeof nama_siswa !== "string" || nama_siswa.trim().length < 5)){
            error.push("Nama wajib (minimal 5 karakter)");
        };
        if(alamat_siswa !== undefined && (typeof alamat_siswa !== "string" || alamat_siswa.trim().length < 15)){
            error.push("Alamat wajib (minimal 15 karakter)")
        };
        // if(tanggal_siswa !== undefined && (typeof tanggal_siswa !== "number" || tanggal_siswa.trim().length < 16)){
        //     error.push("umur wajib (umur minimal 16 tahun ke atas)")
        // };
        if(jurusan_siswa !== undefined && (typeof jurusan_siswa !== "string" || jurusan_siswa.trim().length < 2)){
            error.push("jurusan wajib (minimal 2 karakter)")
        };

        if(error.length) return res.status(400).json({error});
        next();
        
    }
};