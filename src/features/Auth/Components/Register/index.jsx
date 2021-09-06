import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../../features/Auth/userSlice';
import RegisterForm from '../RegisterForm';
import propTypes from 'prop-types';

Register.propTypes = {
    closeDialog: propTypes.func,
};

function Register(props) {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleSubmit = async (values) =>{
        try {
            //auto set username = email
            values.username = values.email;

            const action = register(values);
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
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;