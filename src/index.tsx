import * as ReactDOM from "react-dom/client";
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import "./reset.css";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
