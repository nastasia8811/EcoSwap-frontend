import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Hero from "./pages/Hero/Hero";
import AboutUs from "./pages/AboutUs/AboutUs";
import Events from "./pages/Events/Events";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import EventPage from "./pages/EventPage/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "events",
        element: <Events />,
      },
      { path: "/event/:id", element: <EventPage /> },

      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "authorization",
        element: <Authorization />,
      },

    ],
  },
]);

export default router;
