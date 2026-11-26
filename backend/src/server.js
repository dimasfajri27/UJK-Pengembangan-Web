require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// import Routes
const siswa = require("../src/routes/datasiswaRoutes");

// mildware global untuk parsing json
app.use(cors());
app.use(express.json());

app.use("/api/siswa", siswa);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.status || 500).json({error: error.message || "Internal Server Eror"});
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server berjalan di Port" + PORT);
    
});