import * as yup from 'yup';

const validationSchemaEventCreate = yup.object().shape({
  title: yup
    .string()
    .min(5, 'Min 5 symbols')
    .max(40, 'Max 40 symbols')
    .required('Title field is requierd')
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
  city: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols')
    .required('City field is requierd')
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),

  date: yup
      .date()
      .typeError("Date should be in the format DD.MM.YYYY"),
  // img: yup
  //   .string()
  //   .matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     'Enter correct url',
  //   ),
  description:yup
      .string()
      .min(10, 'Min 10 symbols'),
  location:yup
      .string()
      .min(5, 'Min 5 symbols'),
  available:yup
      .number()
      .min(5, 'Min 5 symbols')
});



export default validationSchemaEventCreate;
