import axiosInstance from "./axiosConfig";
import { showToast } from "../features/toast/actions/toastAction";

export const GetDashboardDatas = async (dispatch) => {
            try{
                const response = await axiosInstance.get(`/dashboard/`);
                return response.data;
            }
            catch(error){
                dispatch(showToast(error.response?.data?.message || error.message, 'error'));
            }
}