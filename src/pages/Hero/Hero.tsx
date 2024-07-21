import {Box, Container} from '@mui/material';
import './Hero.scss';
import {Link} from "react-router-dom";
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';


// @ts-ignore
import container_top from './img/container_top.jpg'

// const theme: Theme = createTheme({
//     components: {
//         MuiContainer: {
//             styleOverrides: {
//                 root: {
//                     maxWidth: '1800px', // Set your custom maxWidth value here
//                 },
//             },
//         },
//     },
// });
const Hero = () => {

    return (

        <Box className="hero">
            {/*<ThemeProvider theme={theme}>*/}
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

                    <Link className="hero__carousel-register" to="/events">Register events</Link>
                </Box>
            </Container>
            {/*//</ThemeProvider>*/}
        </Box>
    )
}

export default Hero;
