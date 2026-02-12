import { AsyncThunkAction, createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {GET_USER, LOGIN_USER} from '../endpoints';
import axios from 'axios';


export interface LoginState {
    loginPageIsLoading: boolean;
    loginToken: string;
    loginMessageError:null | string;
    modalError: string | null;
    userData: UserDataObject;
}

interface UserDataObject {
    isAdmin?: boolean;
    enabled?: boolean;
    _id?: string;
    firstName?: string;
    lastName?: string;
    login: string;
    email?: string;
    password:string;
    telephone?: string;
    city?: string;
    country?: string;
    customerNo?: string;
    date?: string;
    __v?: number;
}

export const initialState: LoginState = {
    userData: {
        login: "",
        password: "",
    },
    loginToken: localStorage.getItem("token") || "",
    loginPageIsLoading: false,
    loginMessageError: null,
    modalError: null,

};


export const setAuthToken = (token: string | null): void => {
    // Функция setAuthToken: Она принимает один аргумент token и устанавливает заголовок Authorization
    // для всех запросов Axios, если токен присутствует. Если токен отсутствует, заголовок удаляется.
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const loginSlice: Slice<LoginState> = createSlice({
    name: 'login',
    initialState,
    reducers: {
        actionPageIsLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.loginPageIsLoading = action.payload;
        },
        actionToken: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.loginToken = action.payload;
            setAuthToken(action.payload);
        },

        actionUserData: (state, action: PayloadAction<UserDataObject>) => {
            state.userData = action.payload;
        },
        actionLoginMessageError: (state, action: PayloadAction<string>) => {
            state.loginMessageError = action.payload;
        },
        actionLoginError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },
        actionResetState:() =>  initialState
    }
});

export const {
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMessageError,
    actionResetState
} = loginSlice.actions;

export const sendApiLogin = (value: { login: string; password: string }) => (dispatch: any) => {
    dispatch(actionPageIsLoadingLogin(true));

    const loginData = {
        loginOrEmail: value.login,
        password: value.password
    };

    return axios
        .post(LOGIN_USER, loginData)
        .then((response) => {
            const token = response.data.token;
            dispatch(actionToken(token))
            dispatch(actionUserData(response.data));
            return response;
        })
        .catch((error) => {
            if (error.response) {
                dispatch(actionLoginMessageError(error.response.data.message));
            } else {
                dispatch(actionLoginMessageError('An unknown error occurred.'));
            }
            dispatch(actionLoginError(true));
        }).finally(() => {
            dispatch(actionPageIsLoadingLogin(false));
        });
};

export const getUserApi = () => async (dispatch: (arg0: { payload: any; type: `${string}/${string}`; } | AsyncThunkAction<any, any, any>) => void)  =>{
    return axios
    .get(GET_USER)
    .then(customer =>{
        dispatch(actionUserData(customer.data))
    })
    .catch(() => {});

};

export default loginSlice.reducer;
