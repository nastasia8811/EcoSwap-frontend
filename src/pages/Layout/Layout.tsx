
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import { actionToken, getUserApi} from "../../reducers";
import {selectorLoginToken} from "../../selectors";


const Layout = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const token = useSelector(selectorLoginToken);


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
