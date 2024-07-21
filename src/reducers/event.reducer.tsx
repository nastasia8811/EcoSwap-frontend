import { createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import axios from 'axios';
import {
    ADD_EVENT,
    createOrCancelEvent,
    DELETE_EVENT,
    GET_EVENT, GET_EVENTS,
    UPDATE_EVENT
} from "../endpoints";
import {getLocalDate} from "../helpers/date";

import {ThunkDispatch} from "redux-thunk";

import { ThunkAction, AnyAction } from '@reduxjs/toolkit';

export interface EventState {
    formData: EventData,
    modalError: null | string,
    modalSuccess: null | string,
    pageIsLoading: boolean,
    messageError: string;
    events:EventData[];
    deleteEvent:boolean;
    unregisterEvent:boolean;
}

export interface EventData {
    title: string;
    date: Date| string;
    img: string;
    city: string;
    description: string;
    available: number;
    location: string;
    bookedSeats?: string[] ;
    customer_id?: string | null;
    _id?: null | string;
}

export const initialState: EventState = {
    formData: {
        title: '',
        date: getLocalDate(),
        img: '',
        city: '',
        description: '',
        available: 0,
        location: '',
        bookedSeats: [],
        customer_id: null,
        _id: null,

    },
    events:[],
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: "",
    deleteEvent:false,
    unregisterEvent:false,
};

const EventSlice: Slice<EventState> = createSlice({
    name: 'eventCreate',
    initialState,
    reducers: {
        actionPageIsLoadingEvent: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionEventSuccess: (state, action: PayloadAction<null | string>) => {
            state.modalSuccess = action.payload;
        },
        actionEventCreate: (state, action: PayloadAction<EventData>) => {
            // додавання елемента у formData
            state.events.push(action.payload)
        },

        actionEventData: (state, action: PayloadAction<EventData>) => {
            const newData= new Date(action.payload.date);
            const newObject = {...action.payload,date: getLocalDate(newData)}
            state.formData = newObject;
        },
        actionEventError: (state, action: PayloadAction<null | string>) => {
            state.modalError = action.payload;
        },
        actionMessageEventError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
        actionChangeEvent: (state, action: PayloadAction<EventData>) => {
            state.events= state.events.map((event)=>{if (event._id === action.payload._id) {
                return action.payload
            } else {
                return event
            }
            })
        },
        actionGetEvents: (state, action: PayloadAction<EventData[]>) => {
           state.events = action.payload;
        },
        actionDeleteEvent: (state, action: PayloadAction<string>) => {
            state.events= state.events.filter((event)=>{
                return event._id!==action.payload });
        },
        // переіменувати
        actionUnregisterEvent: (state, action: PayloadAction<boolean>) => {
            state.unregisterEvent = action.payload;
        },
        actionGetOneEventData: (state, action: PayloadAction<EventData>) => {
            state.formData = action.payload;
        },
    },
});

export const {
    actionPageIsLoadingEvent,
    actionEventSuccess,
    actionEventError,
    actionMessageEventError,
    actionEventData,
    EventState,
    actionChangeEvent,
    actionEventCreate,
    actionDeleteEvent,
    actionUnregisterEvent,
    actionGetOneEventData,
    actionGetEvents,
} = EventSlice.actions;

export const getEvents = ():ThunkAction<void, any, unknown, AnyAction> => async (dispatch: ThunkDispatch<any, any, AnyAction>)  =>{
    axios.get(GET_EVENTS)
        .then((response) => {
            dispatch(actionGetEvents(response.data));
        })
        .catch((error) => {
            console.error('Error fetching events:', error);
        });
}


export const bookOrCancelApiEvent = (id:string, customerId:string) => (dispatch: any) => {
    dispatch(actionPageIsLoadingEvent(true));

    return axios.put( createOrCancelEvent(id, customerId))
        .then((response) => {
            dispatch(actionChangeEvent(response.data));
            dispatch(actionEventSuccess('Event updated successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};

export const delApiOneEvent = (id:string) => async (dispatch: any)  =>{
    return axios
        .delete(DELETE_EVENT+id)
        .then(() =>{
            dispatch(actionDeleteEvent(id))
        })
        .catch(error => {
            console.error('del error:', error);
        });}


export const sendApiEvent = (values:any) => (dispatch: any) => {
    dispatch(actionPageIsLoadingEvent(true));

    return axios.post( ADD_EVENT, values)
        .then((response) => {
            dispatch(actionEventCreate(response.data));
            dispatch(actionEventSuccess('Event created successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {

                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};

export const getApiOneEvent = (event:any) => async (dispatch: any)  =>{
    return axios
        .get(GET_EVENT,event)
        .then(customer =>{
            dispatch(actionGetOneEventData(customer.data))
        })
        .catch(error => {
            console.error('Get one event error:', error);
        });}


export const changeApiEvent = (values:any) => (dispatch: any) => {
    dispatch(actionPageIsLoadingEvent(true));
//конкантенація
    return axios.put( UPDATE_EVENT+values._id, values)
        .then((response) => {
            dispatch(actionChangeEvent(response.data));
            dispatch(actionEventSuccess('Event updated successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};


export default EventSlice.reducer;
