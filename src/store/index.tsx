import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer,
    loginReducer,
    eventReducer,
} from "../reducers";



const store = configureStore({
    reducer:{
        registration: registrationReducer,
        login: loginReducer,
        event: eventReducer
    }

})

export default store;
