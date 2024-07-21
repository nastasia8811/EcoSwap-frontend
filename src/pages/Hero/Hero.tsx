import {Box, Container} from '@mui/material';
import './Hero.scss';
import {Link} from "react-router-dom";
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../helpers/mui_theme'
// @ts-ignore
import container_top from './img/container_top.jpg'
import Grid from '@mui/material/Grid';

const Hero = () => {

    return (
        <Box className="hero">
            <Container maxWidth="xl">
                <img className="hero__background-top" src={container_top} alt='nature'/>

                <div className="hero__content-container">
                    <div className="hero__content-container_text1">
                        We have only
                        one planet
                    </div>
                    <div className="hero__content-container_text2">
                        so let's begin caring for this one today
                    </div>
                </div>

                <div className="hero__background-bottom">
                    <div className="hero__background-bottom_container">
                        <p className="hero__background-bottom_container-content">Explore a world of environmental
                            protection
                            events with EcoSwap! We offer an extensive array of gatherings focused on ecology,
                            sustainable development, and nature conservation.
                            Get inspired, learn, and become part of the global movement for a greener future right
                            here!</p>
                    </div>
                </div>
                <Box className="hero__carousel">
                    <h2 className="hero__carousel-title">Join our events</h2>
                    <ImageCarousel/>
                    <ThemeProvider theme={theme}>
                        <Grid container justifyContent="center" >
                    <Button className="hero__carousel-register" color="primary" variant="contained" style={{ marginTop: '30px', marginBottom: '30px' }}>
                        <Link className="hero__carousel-register-text" to="/events">Register events</Link>
                    </Button>
                        </Grid>
                    </ThemeProvider>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero;
