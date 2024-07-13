import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";

export const GetAllMediums = async (query,limit,dispatch) => {
    try {
        const response = await axiosInstance.get(`/medium/allMediums`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}


export const GetMedium = async (id, dispatch) => {
    try {
        const response = await axiosInstance.get(`/medium/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const CreateMedium = async (data, dispatch) => {
    try {
        const response = await axiosInstance.post('/medium/create', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const UpdateMedium = async (id, data, dispatch) => {
    try {
        const response = await axiosInstance.put(`/medium/update/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const DeleteMedium = async (id, dispatch) => {
    try {
        const response = await axiosInstance.delete(`/medium/delete/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}