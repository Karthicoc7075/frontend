

import { SHOW_TOAST, HIDE_TOAST } from '../actions/toastAction';

const initialState = {
    message: '',
    type: 'error', 
    visible: false,
};

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
                visible: true,
            };
        case HIDE_TOAST:
            return {
                ...state,
                visible: false,
            };
        default:
            return state;
    }
};

export default toastReducer;
