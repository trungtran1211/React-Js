import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../../features/Auth/userSlice';
import LoginForm from '../LoginForm';
import propTypes from 'prop-types';

Login.propTypes = {
    closeDialog: propTypes.func,
};

function Login(props) {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleSubmit = async (values) =>{
        try {

            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            const {closeDialog} = props;
            if(closeDialog){
                closeDialog();
            };

            console.log('New user', user);
            enqueueSnackbar('Đăng nhập thành công',{variant:'success'});
        } catch (error) {
            console.log('Lỗi', error);
            enqueueSnackbar(error.message, {variant:'error'});
        }
        
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
            
        </div>
    );
}

export default Login;