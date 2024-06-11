import * as actionTypes from '../constants/actionsTypes';
import {loginUser} from '../../../api/authApi'
import {showToast} from '../../toast/actions/toastAction'

export const login = (username, password) =>async(dispatch) =>{
    dispatch({type:actionTypes.LOGIN_REQUEST})

    try{
        const response = await loginUser(username, password,dispatch)
        const payload = response.data
        dispatch({type:actionTypes.LOGIN_SUCCESS, payload})
        dispatch(showToast(response.message, 'success'))
    }
    catch(error){
        dispatch({type:actionTypes.LOGIN_FAILURE, error})
    }
}



export const logout = () => async (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT_REQUEST });

    try {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: actionTypes.LOGOUT_FAILURE, error });
    }
}