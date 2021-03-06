import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText } from '@material-ui/core';
 
PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
    
};

function PasswordField(props) {
    const {form, name, label, disabled} = props;

    const  { formState: { errors } } = form;

    const hasError = errors[name];

    const [ showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () =>{
        setShowPassword(x => !x);
    }
    
    return (
        <div>
              {/* <Controller
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
        */}
          <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
              name={name}
              control={form.control}
              render={({ field:{onBlur, onChange, value, name, ref} }) => 
              <OutlinedInput 
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
              name={name}
              id={name}
              type={showPassword ? 'text' : 'password'}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>}
                disabled={disabled}
                variant="outlined"
                margin="normal"
                
                
                />}
            />
            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        </div>
    );
}

export default PasswordField;