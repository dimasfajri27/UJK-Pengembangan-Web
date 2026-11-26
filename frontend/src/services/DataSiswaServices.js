
import axios from "axios";

const API_URL = "http://localhost:3000/api/siswa";

export const getAll = () => {
    return axios.get(API_URL);
};

export const getById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const create = (siswa) => {
    return axios.post(API_URL, siswa);
};

export const update = (id, siswa) => {
    return axios.put(`${API_URL}/${id}`, siswa);
};

export const deleteSiswa = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
