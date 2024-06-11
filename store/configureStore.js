import { createStore , applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { loadState, saveState } from '../utils/localStorage'
import  {composeWithDevTools} from '@redux-devtools/extension'
import authReducer from '../features/auth/reducers/authReducer'
import classReducer from '../features/class/reducers/classReducer';
import subjectReducer from '../features/subject/reducers/subjectReducer';
import materialReducer from '../features/material/reducers/materialReducer';
import toastReducer from '../features/toast/reducers/toasterReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    class: classReducer,
    subject: subjectReducer,
    material: materialReducer,
    toast: toastReducer
});

const persistedState = loadState();

const store = createStore(
    rootReducer,
    {auth:persistedState},
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    const state = store.getState();
    saveState(state.auth);
});

export default store;
