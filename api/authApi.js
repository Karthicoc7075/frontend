import axiosInstance from "./axiosConfig"
import { showToast } from '../features/toast/actions/toastAction'

export const loginUser = async (username, password,dispatch) => {
    try {
        const response = await axiosInstance.post('/dashboard/auth/login', { username, password });
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}