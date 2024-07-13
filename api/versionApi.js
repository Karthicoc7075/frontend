import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";

export const GetAllVersions = async(dispatch) => {
    try{
     const res= await  axiosInstance.get('/version/allVersions')
     return res.data
    }catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}

export const GetVersion = async(id,dispatch) => {
    try{
        const res= await  axiosInstance.get(`/version/${id}`)
        return res.data
    }
    catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}

export const CreateVersion = async(data,dispatch) => {
    try{
        const res= await  axiosInstance.post('/version/create',data)
        return res.data
    }catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}

export const UpdateVersion = async(id,data,dispatch) => {
    try{
        const res= await  axiosInstance.put(`/version/update/${id}`,data)
        return res.data
    }catch(err){
        console.log(err.response.data.message);
        dispatch(showToast(err.response.data.message,'error'))
    }
}

export const DeleteVersion = async(id,dispatch) => {
    try{
        const res= await  axiosInstance.delete(`/version/delete/${id}`)
        return res.data
    }catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}