import {Box, Container} from '@mui/material';
import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import {logo} from "./icons";
import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {actionResetState, actionToken} from "../../reducers";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //@ts-ignore
    const isUserAuthorized = useSelector((state) => state.login.userData)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__wrapper-logo">
                        <Link to="/" className="logo">
                            {logo}
                        </Link>
                    </Box>
                    <Box className="header__wrapper-name">EcoSwap</Box>
                    <Box className={`header__wrapper-menu ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to="/about" className="header__wrapper-menu-item" onClick={() => setIsMenuOpen(false)}>
                            About us
                        </NavLink>

                        <NavLink to="/events" className="header__wrapper-menu-item" onClick={() => setIsMenuOpen(false)}>
                            Events
                        </NavLink>
                        <NavLink to="/authorization" className="header__wrapper-menu-item"
                                 onClick={() => {
                                     localStorage.removeItem('token');
                                     dispatch(actionToken(null));
                                     dispatch(actionResetState(null))
                                     setIsMenuOpen(false);
                                 }}>

                            {isUserAuthorized._id ? <LoginOutlinedIcon/> : <AccountCircleOutlinedIcon/>}
                        </NavLink>

                    </Box>
                    <Box className="header__wrapper-burger_btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
                    </Box>
                </Box>
            </Container>
        </header>
    );
};

export default Header;
