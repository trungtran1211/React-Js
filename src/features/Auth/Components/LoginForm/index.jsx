import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography, makeStyles, LinearProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from '../../../../Components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),    
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },
    proress:{
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));

RegisterForm.propTypes = {
    onsubmit: PropTypes.func,
};

function RegisterForm(props) {
    //style css
    const classes = useStyles();
    // validation form
    const schema = yup.object().shape({
        identifier: yup.string().required('Vui lòng điền email của bạn')
        .email('Vui lòng điền đúng email'),
        password: yup.string().required('Vui lòng nhập mật khẩu')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Mật khẩu chứa ít nhất 8 ký tự, một chữ hoa số và ký tự đặc biệt'
          )
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver:yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if(onSubmit){
          await onSubmit(values);
        }
    }

    const {isSubmitting} = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.proress}/>}
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Sign in
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" size="large" fullWidth> 
                    Sign in
                </Button>
            </form>
        </div>
        
    );
}

export default RegisterForm;