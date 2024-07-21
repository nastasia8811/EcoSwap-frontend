import { RegistrationState } from "../reducers/registration.reducer"
import {LoginState} from '../reducers/login.reducer'
import {EventState} from '../reducers'



interface AppState {
    registration: RegistrationState;
    login: LoginState;
    event: EventState;
}

// //REGISTRATION
export const selectorRegistrationIsLoading = (state: AppState) => state.registration.pageIsLoading;
export const selectorRegistrationModalSuccess = (state: AppState) => state.registration.modalSuccess;
export const selectorRegistrationModalError = (state: AppState) => state.registration.modalError;
export const selectorRegistrationInitialState = (state: AppState) => state.registration.formData;
export const selectorRegistrationMessageError = (state: AppState) => state.registration.messageError;

//LOGIN

export const selectorLoginIsLoading = (state: AppState) => state.login.loginPageIsLoading;

//export const selectLoginUserData = (state: AppState) => state.login.userData;
export const selectorMassageError = (state: AppState) => state.login.loginMessageError;
export const selectorLoginModalError = (state: AppState) => state.login.modalError;
export const selectorLoginToken = (state: AppState) => state.login.loginToken;

// EVENT
export const selectorCreatingEventIsLoading = (state: AppState) => state.event.pageIsLoading;
export const selectorCreatingEventModalSuccess = (state: AppState) => state.event.modalSuccess;
export const selectorCreatingEventModalError = (state: AppState) => state.event.modalError;
export const selectorCreatingEvent = (state: AppState) => state.event.formData;
export const selectorCreatingEventMessageError = (state: AppState) => state.event.messageError;
//export const selectorChangeEvent = (state: AppState) => state.event.changeEvent;
export const selectorGetEvents = (state: AppState) => state.event.events;
export const selectorDeleteEvent = (state: AppState) => state.event.deleteEvent;
export const selectorUnregisterEvent = (state: AppState) => state.event.unregisterEvent;
export const selectorGetOneEvent = (state: AppState) => state.event.formData;



