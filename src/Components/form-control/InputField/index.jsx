import React from 'react';
import PropTypes from 'prop-types';
import {  TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
 
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
    
};

function InputField(props) {
    const {form, name, label, disabled} = props;

    const  { formState: { errors } } = form;

    const hasError = errors[name];
   
    
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field:{onBlur, onChange, value, name, ref} }) => 
            <TextField 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            name={name}
            fullWidth
            label={label}
            disabled={disabled}
            variant="outlined"
            margin="normal"
            error={!!hasError}
            helperText={errors[name]?.message}
            />}
            
        />
    );
}

export default InputField;