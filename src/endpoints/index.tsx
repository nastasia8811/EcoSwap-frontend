import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';


export const REGISTER_USER = `/customers`;
export const LOGIN_USER = `/customers/login`;
export const GET_USER = `/customers/customer`;

export const ADD_EVENT = `/event`;
export const DELETE_EVENT = `/event/`;
export const UPDATE_EVENT = `/event/`;
export const GET_EVENTS = `/event`;
export const GET_EVENT = `/event/id`;
export const BOOK_OR_CANCEL_EVENT = `/event/`;

export function createOrCancelEvent (id:string, customerId:string){
    return BOOK_OR_CANCEL_EVENT+id+"/book/"+ customerId
}
