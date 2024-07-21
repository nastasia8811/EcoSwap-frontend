import CustomInput, { CustomInputProps } from '../CustomInput/CustomInput';
//import * as PropTypes from 'prop-types';
import React from 'react';

interface FormikControlProps extends CustomInputProps {
    control: string;
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

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <CustomInput {...rest} />;
        // other cases...
        default:
            return null;
    }
};

// FormikControl.propTypes = {
//     control: PropTypes.string.isRequired,
// };

export default FormikControl;
