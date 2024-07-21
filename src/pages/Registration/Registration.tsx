import * as React from 'react';
import {Container} from '@mui/material';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import FormRegistration from '../../components/FormRegistration/FormRegistration';
import ValidationSchema from './ValidationSchemaRegistration';
import ModalSuccessRegistration from './components/ModalSuccessRegistration/ModalSuccessRegistration';
import Preloader from '../../components/Preloader/Preloader';
import {createCustomerServerApi, actionRegistrationSuccess, actionRegistrationError} from '../../reducers';
import ModalErrorRegistration from './components/ModalErrorRegistration/ModalErrorRegistration';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectorRegistrationInitialState,
    selectorRegistrationIsLoading,
    selectorRegistrationModalError,
    selectorRegistrationModalSuccess
} from '../../selectors';

import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";


const Registration: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const initialFormData = useSelector(selectorRegistrationInitialState);
    const modalError = useSelector(selectorRegistrationModalError);
    const loading = useSelector(selectorRegistrationIsLoading);
    const openModal = useSelector(selectorRegistrationModalSuccess);

    return (
        <main>
            <Container className="registration-container" maxWidth="lg">
                <BreadCrumbs linksArray={[{link: '/registration', text: 'Registration'}]}/>
                <div className="registration-container__wrapper">
                    <h2 className="registration-container__wrapper-title">Registration</h2>

                    <FormRegistration
                        initialValues={initialFormData}
                        validationSchema={ValidationSchema}
                        //@ts-ignore
                        onSubmit={(values:any,{resetForm }) => {
                            delete values.confirmPassword;
                            dispatch(createCustomerServerApi(values)).then((axiosValue) => {
                                if (axiosValue) {
                                    resetForm()
                                }
                            })
                        }
                    }
                    />

                    {loading && <Preloader open/>}
                    {openModal &&
                        <ModalSuccessRegistration closeModal={() => dispatch(actionRegistrationSuccess(false))}/>}
                    {modalError &&
                        <ModalErrorRegistration closeErrorModal={() => dispatch(actionRegistrationError(false))}/>}
                </div>
            </Container>
        </main>
    );
};

export default Registration;
