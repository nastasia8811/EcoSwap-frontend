import { useState } from 'react';
import { Formik, Form } from 'formik';
import {Button} from '@mui/material';
import FormikControl from '../CustomInput/FormikControl';
import PasswordInput from '../CustomInput/PasswordInput';
import './FormRegistration.scss';

interface FormRegistrationProps {
    onSubmit: (values: any) => void;
    initialValues: any;
    validationSchema: any;
}

const FormRegistration: React.FC<FormRegistrationProps> = ({
                                                               onSubmit,
                                                               initialValues,
                                                               validationSchema
                                                           }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(isValid) => (
                    <>
                        <Form className="form-registration" style={{ width: '100%' }}>
                            <div className="form-registration__grid_wrapper">
                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="First Name"
                                    color="success"
                                    className="form-registration__grid_wrapper__input"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <FormikControl
                                    type="text"
                                    control="input"
                                    color="success"
                                    label="Last Name"
                                    className="form-registration__grid_wrapper__input"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <FormikControl
                                    type="text"
                                    control="input"
                                    color="success"
                                    label="Login"
                                    className="form-registration__grid_wrapper__input"
                                    name="login"
                                    placeholder="Enter your login"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <FormikControl
                                    type="text"
                                    control="input"
                                    color="success"
                                    label="Email"
                                    className="form-registration__grid_wrapper__input"
                                    name="email"
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <PasswordInput
                                    name="password"
                                    placeholder="Enter your password"
                                    label="Enter your password"
                                    showPassword={showPassword}
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={handleMouseDown}
                                />

                                <PasswordInput
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    label="Confirm password"
                                    showPassword={showRepeatPassword}
                                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                    onMouseDown={handleMouseDown}
                                />

                                <FormikControl
                                    type="text"
                                    control="input"
                                    color="success"
                                    label="Telephone"
                                    className="form-registration__grid_wrapper__input"
                                    name="telephone"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    required
                                    helperText='null'
                                    placeholder="+491 99 999 99 99"
                                />

                                <FormikControl
                        
                                    type="text"
                                    control="input"
                                    label="City"
                                    color="success"
                                    className="form-registration__grid_wrapper__input"
                                    name="city"
                                    placeholder="Enter your city"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="Country"
                                    color="success"
                                    className="form-registration__grid_wrapper__input"
                                    name="country"
                                    placeholder="Enter your country"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    required
                                    helperText='null'
                                />

                                <FormikControl
                                    id="outlined-multiline-flexible"
                                    name="birthdate"
                                    placeholder="dd.mm.yyyy"
                                    label="Birth date"
                                    type="text"
                                    control="input"
                                    color="success"
                                    className="form-registration__grid_wrapper__input"
                                    variant="outlined"
                                    helperText='null'
                                    required
                                />
                            </div>
                            <Button style={{margin:'0 auto', display:'flex'}} variant="contained" type="submit" color="success" disabled={!isValid}>create</Button>

                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
};

export default FormRegistration;
