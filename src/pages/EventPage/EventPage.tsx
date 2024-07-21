import React from 'react';
import {useParams} from 'react-router-dom';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Container, ToggleButton} from '@mui/material';
// , ToggleButton}
import './EventPage.scss';
import axios from "axios"
// @ts-ignore
import background from './img/background.jpg';
import {GET_EVENTS} from '../../endpoints';
import {useState, useEffect} from 'react';

interface Person {
    title: string;
    date: string;
    img: string;
    city: string;
    description: string;
    available: number;
    location: string;
    bookedSeats?: string[] | null;
    customer_id?: string | null;

}

const EventPage: React.FC = () => {
const [event, setEvent] = useState<Person>({
    title: '',
    date: '',
    img: '',
    city: '',
    description: '',
    available: 0,
    location: '',
    bookedSeats: [],
    customer_id: null});

const params = useParams()

    useEffect(() =>{
        if (params.id){
            axios.get(GET_EVENTS)
                .then((response) => {
                    setEvent(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching events:', error);
                });
        }
    }, []);

    // if (!event) {
    //     return <div>Event not found</div>;
    //добавити лоадер
    // }

    return (
        <>
            <Container className="eventPage" maxWidth="xl" >
                <img className="eventPage__img" src={background} alt='nature'/>
                <BreadCrumbs linksArray={[{ link: '/events', text: 'Events' }, { link: `/event/${params.id}`, text: 'Event' }]} />
                <div className="eventPage__container" onClick={()=>{}}>

                    <h2 className="eventPage__container-title">{event.title}</h2>
                    <div className="eventPage__container-date">{event.date}</div>
                    <div className="eventPage__container-available">{event.available}</div>

                    <ToggleButton value="android">Join Event</ToggleButton>
                    <h4 className="eventPage__container-city">{event.city}</h4>
                    <img className="eventPage__container-img" src={event.img} alt={event.title} />
                    <p className="eventPage__container-description">{event.description}</p>
                </div>
            </Container>
        </>
    );
};

export default EventPage;
