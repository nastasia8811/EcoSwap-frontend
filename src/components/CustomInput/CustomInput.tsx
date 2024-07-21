import { Field, useField } from 'formik';
import { TextField } from '@mui/material';
import './CustomInput.scss';

export interface CustomInputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  autocomplete?: string;
  onClick?: () => void;
  helperText:string;
  color:string;
  variant:string;
  required:boolean;
  htmlFor?: string;
  InputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const [field, meta] = useField(props);
  const { name, label, type, placeholder, className, id, helperText, autocomplete, onClick, ...rest } = props;
  return (
    <>
      <Field
        onClick={onClick}
        style={{ minWidth: 300 }}
        type={type}
        placeholder={placeholder}
        className={className}
        autocomplete={autocomplete}
        {...field}
        {...rest}
        as={TextField}
        label={label}
        id={id}
        helperText={
          !!meta.error && meta.touched && <span className="error-registration">{meta.error}</span>
        }

      />
    </>
  );
};

export default CustomInput;
