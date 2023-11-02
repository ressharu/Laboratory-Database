import axios from "axios";

const API_URL = "http://localhost:3000/labo";

export const getLabos = async () => {
    const res = await axios.get(`${API_URL}/get/all`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return res.data;
}

export const getLabosById = async (labo_id: number) => {
    const res = await axios.get(`${API_URL}/get/${labo_id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return res.data;
}

export const getLabosByStudentField = async (student_field: string) => {
    const res = await axios.get(`${API_URL}/get/field/${student_field}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return res.data;
}

export const getLabosByProf = async (prof: string) => {
    const res = await axios.get(`${API_URL}/get/prof/${prof}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return res.data;
}