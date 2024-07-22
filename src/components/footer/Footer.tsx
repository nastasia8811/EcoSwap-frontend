import { Box, Container } from '@mui/material';
import {Link} from "react-router-dom";
import {logo} from "../Header/icons";
import "./Footer.scss";
const Footer = () => {

    return (
            <footer className="footer">
                    <Container maxWidth="xl">
                        <Box className="footer__container">
                            <Box className="footer__container-logo">
                                <Link to="/" className="logo">
                                    {logo}
                                </Link>
                            </Box>
                            <Box className="footer__container-menu">
                                <p className="footer__container-menu-item">tel. +49 1517 090 81 75</p>
                                <p className="footer__container-menu-item">email: ecoswap@gmail.com</p>
                                <p className="footer__container-menu-item">Hamburg, Germany</p>
                            </Box>
                        </Box>
                    </Container>
            </footer>
    )
}

export default Footer;
