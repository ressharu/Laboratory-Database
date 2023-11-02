import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    console.log(res.data)
    return res.data;
}

export const verlifyEmail = async (email: string, verificationCode: number) => {
    console.log(verificationCode)
    const res = await axios.post(`${API_URL}/verify`, { email, verificationCode }, { withCredentials: true });
    return res.data;
}
