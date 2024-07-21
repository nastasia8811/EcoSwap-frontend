import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import EventItem from "../EventItem/EventItem";
import './ImageCarousel.scss'
import {EventData, getEvents} from "../../reducers/event.reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectorGetEvents} from "../../selectors";


const ImageCarousel: React.FC = () => {
    const eventsArray = useSelector(selectorGetEvents);
    const dispatch = useDispatch()
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    useEffect(()=>{
        // @ts-ignore
        dispatch(getEvents())
    },[])

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            responsive: [

                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };

    return (
        <Box  sx={{ maxWidth: 1800, margin: 'auto', mt: 3 }}>
            <Slider className="carousel" {...settings}>
                {eventsArray.map((item: EventData) => (
                    <EventItem type="slider" key={item._id} event={item} />
                ))}
            </Slider>
        </Box>
    );
}

export default ImageCarousel;
