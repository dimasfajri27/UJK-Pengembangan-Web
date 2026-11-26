
const pool = require('../config/db');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM siswa ORDER BY kode_siswa ASC'
            );

            res.json(rows);
        } catch (error) {
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);

            const [rows] = await pool.execute(
                'SELECT * FROM siswa WHERE kode_siswa = ?',
                [id]
            );

            if (rows.length === 0) {
                return res.status(404).json({
                    message: "Siswa tidak ditemukan"
                });
            }

            res.json(rows[0]);
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const {
                nama_siswa,
                alamat_siswa,
                tanggal_siswa,
                jurusan_siswa
            } = req.body;

            const [result] = await pool.execute(
                `INSERT INTO siswa
                (nama_siswa, alamat_siswa, tanggal_siswa, jurusan_siswa)
                VALUES (?, ?, ?, ?)`,
                [
                    nama_siswa,
                    alamat_siswa,
                    tanggal_siswa,
                    jurusan_siswa
                ]
            );

            res.status(201).json({
                id: result.insertId,
                nama_siswa,
                alamat_siswa,
                tanggal_siswa,
                jurusan_siswa
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);

            const {
                nama_siswa,
                alamat_siswa,
                tanggal_siswa,
                jurusan_siswa
            } = req.body;

            // Menampung kolom dan nilai yang akan diupdate
            const fields = [];
            const values = [];

            if (nama_siswa !== undefined) {
                fields.push('nama_siswa = ?');
                values.push(nama_siswa);
            }

            if (alamat_siswa !== undefined) {
                fields.push('alamat_siswa = ?');
                values.push(alamat_siswa);
            }

            if (tanggal_siswa !== undefined) {
                fields.push('tanggal_siswa = ?');
                values.push(tanggal_siswa);
            }

            if (jurusan_siswa !== undefined) {
                fields.push('jurusan_siswa = ?');
                values.push(jurusan_siswa);
            }

            // Memeriksa apakah ada data yang akan diupdate
            if (fields.length === 0) {
                return res.status(400).json({
                    message: "Nothing to update"
                });
            }

            values.push(id);

            const sql = `
                UPDATE siswa
                SET ${fields.join(', ')}
                WHERE kode_siswa = ?
            `;

            const [result] = await pool.execute(sql, values);

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Siswa tidak ditemukan atau tidak ada perubahan"
                });
            }

            res.json({
                message: "Siswa berhasil diupdate"
            });

        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);

            const [result] = await pool.execute(
                'DELETE FROM siswa WHERE kode_siswa = ?',
                [id]
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Siswa tidak ditemukan"
                });
            }

            res.json({
                message: "Siswa berhasil dihapus"
            });
        } catch (error) {
            next(error);
        }
    }
};
