import TextField from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

export interface IFormControllerInput {
  name: string;
  control: Control<any> | undefined;
  placeholder: string;
}
export const FormControllerInput = ({
  name,
  control,
  placeholder,
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
          placeholder={placeholder}
          variant="outlined"
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
