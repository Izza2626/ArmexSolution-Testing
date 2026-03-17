import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/sections/ServiceDetail";
import ContactUs from "./pages/ContactUs/ContactUs";
import Sitemap from "./pages/Sitemap/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },

      // Dynamic Service Page
      { path: "services/:serviceId", element: <ServiceDetail /> },

      { path: "contact-us", element: <ContactUs /> },
      { path: "sitemap", element: <Sitemap /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-and-conditions", element: <TermsConditions /> },
    ],
  },
]);

export default router;