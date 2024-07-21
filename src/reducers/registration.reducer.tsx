import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { REGISTER_USER } from '../endpoints';
import axios from 'axios';


export interface RegistrationState {
    formData: {
        firstName: string;
        lastName: string;
        login: string;
        email: string;
        password: string;
        telephone: string;
        city: string;
        country: string;
        birthdate: string;
    };
    modalError: string | null;
    modalSuccess: boolean | null;
    pageIsLoading: boolean;
    messageError: string;
}



export const initialState: RegistrationState = {
    formData: {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        telephone: '',
        city:'',
        country:'',
        birthdate: '',
    },
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: ""
};

const registrationSlice:Slice<RegistrationState> = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        actionPageIsLoading: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionRegistrationSuccess: (state, action: PayloadAction<boolean>) => {
            state.modalSuccess = action.payload;
        },
        actionRegistrationError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },
        actionMessageError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
    },
});

export const { actionRegistrationSuccess, actionPageIsLoading, actionRegistrationError, actionMessageError} = registrationSlice.actions;

export const createCustomerServerApi = (value: any) => (dispatch: any) => {
    dispatch(actionPageIsLoading(true));
    return axios
        .post(REGISTER_USER, value)
        .then((savedCustomer) => {
            dispatch(actionRegistrationSuccess(true));
            return savedCustomer;
        })
        .catch((error) => {
            dispatch(actionMessageError(error.response.data.message))
            dispatch(actionRegistrationError(true))
        })
        .finally(() => { 
            dispatch(actionPageIsLoading(false))
        });
};


export default registrationSlice.reducer;
