import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



RegisterForm.propTypes = {
    onsubmit: PropTypes.func,
};

function RegisterForm(props) {
    // validation form
    const schema = yup.object().shape({
        title: yup.string().required('bạn chưa nhập').min(5, 'Quá Ngắn'),
      });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver:yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log('Todo Form:', values);
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default RegisterForm;