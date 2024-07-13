import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";


export const GetReports = async(dispatch)=>{
    try{
        const res =await axiosInstance.get('/report/allReports');
        return res.data;
    }catch(err){
        dispatch(showToast(err.response.data.message, 'error'));
    }
}


export const SolveReport = async(id,dispatch)=>{
    try{
        const res =await axiosInstance.put(`/report/solve/${id}`);
        return res.data;
    }catch(err){
        dispatch(showToast(err.response.data.message || err.message, 'error'));
    }
}

export const DeleteReport = async(id,dispatch)=>{
    try{
        const res =await axiosInstance.delete(`/report/delete/${id}`);
        return res.data;
    }catch(err){
        dispatch(showToast(err.response.data.message, 'error'));
    }
}

