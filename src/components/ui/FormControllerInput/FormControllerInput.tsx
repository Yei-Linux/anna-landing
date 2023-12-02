import TextField from '@mui/material/TextField';
import { HTMLInputTypeAttribute } from 'react';
import { Control, Controller } from 'react-hook-form';

export interface IFormControllerInput {
  name: string;
  control: Control<any> | undefined;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}
export const FormControllerInput = ({
  name,
  control,
  placeholder,
  type = 'text',
}: IFormControllerInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          type={type}
          placeholder={placeholder}
          variant="outlined"
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          sx={{
            '& fieldset': { border: '1px solid #a3a3a3 !important' },
          }}
        />
      )}
    />
  );
};
