// src/features/toast/actions/toastActions.js

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const showToast = (message, type = 'error') => ({
    type: SHOW_TOAST,
    payload: { message, type },
});

export const hideToast = () => ({
    type: HIDE_TOAST,
});
