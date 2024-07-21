import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormikControl from './FormikControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { InputHTMLAttributes } from 'react';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label: string;
  showPassword: boolean;
  onClick: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  placeholder,
  label,
  showPassword,
  onClick,
  onMouseDown,
  ...rest
}) => {
  return (
    <FormikControl
      label={label}
      variant="outlined"
      control="input"
      color="success"
      className="form-registration__input"
      name={name}
      placeholder={placeholder}
      id="outlined-adornment-password"
      required
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        // @ts-ignore
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default PasswordInput;
