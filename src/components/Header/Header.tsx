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
import {theme} from '../../helpers/mui_theme';
import { ThemeProvider } from '@mui/material/styles';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //@ts-ignore
    const isUserAuthorized = useSelector((state) => state.login.userData);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(actionToken(null));
        dispatch(actionResetState(null));
        setIsMenuOpen(false);
    };


    return (
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__wrapper-logo">
                        <Link to="/" className="logo">
                            {logo}
                        </Link>
                    </Box>
                        <Link to="/" className="header__wrapper-name">
                            EcoSwap
                        </Link>
                    <Box className={`header__wrapper-menu ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to="/about" className="header__wrapper-menu-item" onClick={() => setIsMenuOpen(false)}>
                            About us
                        </NavLink>

                        <NavLink to="/events" className="header__wrapper-menu-item" onClick={() => setIsMenuOpen(false)}>
                            Events
                        </NavLink>

                        <NavLink to="/authorization" className="header__wrapper-menu-item" onClick={handleLogout}>
                            {isUserAuthorized._id ? <LoginOutlinedIcon />: <AccountCircleOutlinedIcon/>}
                        </NavLink>
                    </Box>
                    <ThemeProvider theme={theme}>
                    <Box className="header__wrapper-burger_btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseOutlinedIcon color="secondary"/> : <MenuOutlinedIcon color="secondary"/>}
                    </Box>
                    </ThemeProvider>
                </Box>
            </Container>
        </header>
    );
};

export default Header;
