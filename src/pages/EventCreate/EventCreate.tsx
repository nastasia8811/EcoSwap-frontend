import './EventCreate.scss';
import React from 'react';
import ValidationSchemaEventCreate from "../../components/FormEventCreate/ValidationSchemaEventCreate";
import FormEventCreate from "../../components/FormEventCreate/FormEventCreate";
import Modal from '../../components/Modal/Modal'
import './EventCreate.scss';

import {sendApiEvent, changeApiEvent} from "../../reducers/event.reducer";
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import {Button} from "@mui/material";
interface EventCreateProps {
    closeModalCreateEvent: () => void;
}

const EventCreate: React.FC<EventCreateProps> = ({closeModalCreateEvent}) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    // const eventData = useSelector(selectorCreatingEvent);

    // @ts-ignore
    const userData = useSelector((state)=>state.login.userData)

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };
//@ts-ignore
    const handleSubmit = (values:any,{resetForm}) => {
const sessionImage = sessionStorage.getItem("imgUrl");

        let sendApi = (values._id) ? changeApiEvent : sendApiEvent;


        values.customer_id=userData._id

if(sessionImage){
    values.img=sessionImage
} else if (!values.img){
    values.img='https://res.cloudinary.com/dequtvxxc/image/upload/v1718666639/yf6pg3rsymcph86j5cad.png'
}
        dispatch(sendApi(values)).then((axiosValue) => {
            if (axiosValue) {
                resetForm()
                closeModalCreateEvent()
            }
        }).catch((error) => {
            console.error("Submission error:", error);
        });
    };


        return (
            <>
                <Modal
                    modalAction={closeModalCreateEvent}
                    closeAction={closeModalCreateEvent}
                >
                    <div className="eventCreate-container__wrapper" onClick={handleModalClick}>

                        <h2 className="eventCreate-container__wrapper-title">New event</h2>

                        <FormEventCreate
                            // initialValues={eventData}
                            validationSchema={ValidationSchemaEventCreate}
                            //@ts-ignore
                            onSubmit={handleSubmit}
                        />
                        <Button className="form-block__btn" style={{margin:'0 auto', display:'flex'}} variant="outlined"  color="success" onClick={closeModalCreateEvent}>close</Button>
                    </div>
                    </Modal>
            </>
        )
    }
;

export default EventCreate;
