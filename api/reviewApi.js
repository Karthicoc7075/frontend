import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";

export const GetAllReviews = async (dispatch) => {
    try {
        const response = await axiosInstance.get('/review/allReviews')
        return response.data
    } catch (error) {
        dispatch(showToast(error.response.data.message  ,'error'))
    }
}


export const DeleteReview = async (id,dispatch) => {
    try {
        const response = await axiosInstance.delete(`/review/delete/${id}`)
        return response.data
    } catch (error) {
        dispatch(showToast(error.response.data.message, 'error'));
    }
}