import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";



export const GetAllMaterials = async (query,limit,dispatch) => {
    try {
        const response = await axiosInstance.get(`/material/allMaterials?query=${query}&$limit=${limit}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}


export const GetMaterial = async (id, dispatch) => {
    try {
        const response = await axiosInstance.get(`/material/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const CreateMaterial = async (data, dispatch) => {
    try {
        const response = await axiosInstance.post('/material/create', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const UpdateMaterial = async (id, data, dispatch) => {
    try {
        const response = await axiosInstance.put(`/material/update/${id}`, data, {
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


export const DeleteMaterial = async (id, dispatch) => {
    try {
        const response = await axiosInstance.delete(`/material/delete/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}

export const updateMaterialStatus = async (id, status, dispatch) => {
    try {
        const response = await axiosInstance.put(`/material/updateStatus/${id}`, { status });
        return response.data;
    } catch (error) {
        console.log(error.response);
        dispatch(showToast(error.response.data.message, 'error'));
    }
}