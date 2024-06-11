import * as types from '../contants/actionTypes';
import { showToast } from '../../toast/actions/toastAction';
import { GetAllMaterials } from '../../../api/materialApi';


export const getAllMaterials = (query, limit) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_MATERIALS_REQUEST });
    try {
        const response = await GetAllMaterials(query, limit);
        dispatch({ type: types.GET_ALL_MATERIALS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: types.GET_ALL_MATERIALS_FAILURE, payload: error})
}

}
