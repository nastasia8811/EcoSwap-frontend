
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
// ThemeProvider,createTheme,
import { useEffect } from 'react';
 import Footer from '../../components/footer/Footer';
 import Header from '../../components/Header/Header';
//import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

import { actionToken, getUserApi} from "../../reducers";

import {selectorLoginToken} from "../../selectors";
//import { defaultTheme } from '../../assets/theme/theme';
//import {  Link } from 'react-router-dom';
const Layout = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const token = useSelector(selectorLoginToken);
    //const navigate = useNavigate();

    // useEffect(() => {
    //     const storedToken = localStorage.getItem("token");
    //     if (storedToken) {
    //         dispatch(actionToken(storedToken));
    //     }
    //     else {
    //         navigate('/authorization');
    //     }
    // }, [dispatch, navigate]);

    useEffect(()=>{
       if (token){
        dispatch(actionToken(token))
       } 



     },[]);
    useEffect(() => {

        if (token) {
            dispatch<object>(getUserApi());
        }
    }, [token, dispatch]);
    
    // if (!token) {
    //     return null; // Или какой-нибудь спиннер/загрузка
    // }

    return (
        <Box display="flex" sx={{ flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <Box sx={{ flex: '1 1 auto' ,position:"relative"}}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};
export default Layout;
