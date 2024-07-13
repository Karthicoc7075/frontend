import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";

export const GetAllNotifications = async(dispatch) => {

    try{
        const res =await axiosInstance.get('/notification/allNotifications');
        return res.data;
    }
    catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}

export const CreateNotification = async (data,dispatch) => {
    try{
        const res = await axiosInstance.post('/notification/create',data);
        return res.data;
    }
    catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}



export const DeleteNotification = async (id,dispatch) => {
    try{
        const res = await axiosInstance.delete(`/notification/delete/${id}`);
        return res.data;
    }
    catch(err){
        dispatch(showToast(err.response.data.message,'error'))
    }
}