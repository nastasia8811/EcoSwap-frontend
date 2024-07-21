import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {Box, Container,Button} from '@mui/material';
import './Events.scss';

import React, {useEffect} from 'react';
import EventCreate from '../EventCreate/EventCreate';
import  {useState} from 'react';
//import { useNavigate} from 'react-router-dom';
// @ts-ignore
import events from "./img/events.jpg";
import {useSelector, useDispatch} from "react-redux";

import { selectorGetEvents} from '../../selectors';
import EventItem from "../../components/EventItem/EventItem";
import {getEvents,actionGetOneEventData, initialState} from "../../reducers/event.reducer";
// import {selectLoginUserData} from "../../selectors";


// const theme = createTheme({
//     palette: {
//         primary: lightGreen,
//
//     },
// });
// interface EventsProps {
//     closeModalCreateEvent: () => void;
// }

const Events: React.FC = () => {

    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
    //const navigate = useNavigate();
const dispatch = useDispatch()
const eventsArray = useSelector(selectorGetEvents);
    const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        setIsModalAuthOpen(!isModalAuthOpen);
        dispatch(actionGetOneEventData({...initialState.formData}))
    };

    const closeModalCreateEvent = () => {
        setIsModalAuthOpen(false);
    }


    // @ts-ignore
    const userData = useSelector((state)=>state.login.userData)

    useEffect(() =>{

            // @ts-ignore
        dispatch(getEvents())

    }, []);

    const typeValue = localStorage.getItem('token')? 'full': 'short'
    return(
        <>
         <Container className="events-container" maxWidth="xl">
             <img className="events-container__img" src={events} alt='nature'/>

                <div className="events-container__wrapper">
                    <BreadCrumbs linksArray={[{ link:'/events', text: 'Events' }]} />
                    <h2 className="events-container__wrapper-title">Events</h2>
                    <div className="events-container__wrapper-plus">
                        {typeValue === 'full' &&  <Button className="events-container__wrapper-plus-button" variant="outlined"
                                                          onClick={(event) => toggleModalAuth(event)}>Add Event</Button>}

                        {isModalAuthOpen && <EventCreate closeModalCreateEvent = {closeModalCreateEvent} />}
                    </div>
                    <Box className="events-container__wrapper-flex">
                    {eventsArray.map((item:any) => (
                         <EventItem key={item._id} event={item}  type={typeValue} onClick={() => {}}  />
      ))}
                    </Box>

                </div>
            </Container>
        </>
    )}
;

export default Events;
