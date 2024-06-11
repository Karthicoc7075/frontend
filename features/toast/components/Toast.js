import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { hideToast } from '../actions/toastAction';

const Toast = () => {
    const dispatch = useDispatch();
    const { message, type, visible } = useSelector(state => state.toast);

    useEffect(() => {
        if (visible) {
            toast[type](message, {
                onClose: () => dispatch(hideToast()),
                autoClose: 1200 
            });
        }
    }, [visible, message, type, dispatch]);

    return null;
};

export default Toast;