import * as types from '../contants/actionTypes';


const initialState = {
    materials: [],
    material: {},
    loading: false,
    updateLoading: false,
    deleteLoading: false,
    error: null
}

const materialReducer = (state = initialState, action) => {
        switch(action.type) {
            case types.GET_ALL_MATERIALS_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case types.GET_ALL_MATERIALS_SUCCESS:
                return {
                    ...state,
                    materials: action.payload,
                    loading: false
                }
            case types.GET_ALL_MATERIALS_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
         
            default:
                return state;
        }   

}

export default materialReducer;