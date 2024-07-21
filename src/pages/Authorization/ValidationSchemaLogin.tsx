import * as yup from 'yup';

const validationSchemaLogin = yup.object().shape({
  login: yup.string().min(3, 'Min 3 symbols').max(20, 'Max 20 symbols').required('Not valid login')
  .matches(/^[a-zA-Z0-9]+$/, 'Should contain only characters and space'),

  password: yup.string()
    .required('No password provided')
    .min(7, 'Password is too short - should be 8 chars minimum')
    .max(30, 'Password is too long - should be 30 chars maximum')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for password is a-z, A-Z, 0-9'),

});

export default validationSchemaLogin;
