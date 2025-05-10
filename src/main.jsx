import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Achievements from "./Components/Achievements.jsx";
import Forums from "./Components/Forums.jsx";
import JobPostings from "./Components/JobPostings.jsx";
import News from "./Components/News.jsx";
import StudyGroups from "./Components/StudyGroups.jsx";
import Tutoring from "./Components/Tutoring.jsx"; 
import Contact from "./Extra/Contact.jsx";
import PrivacyPolicy from "./Extra/PrivacyPolicy.jsx";
import Terms from "./Extra/Terms.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
       {
        path: "/about",
        element: <About/>,
      },
         {
        path: "/achievements",
        element: <Achievements/>,
      },
         {
        path: "/forums",
        element: <Forums />,
      },
         {
        path: "/job-postings",
        element: <JobPostings />,
      },
         {
        path: "/news",
        element: <News/>,
      },
         {
        path: "/Study-Groups",
        element: <StudyGroups/>,
      },
         {
        path: "/tutoring",
        element: <Tutoring/>,
      },
          {
        path: "/contact",
        element: <Contact/>,
      },
         {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
         {
        path: "/terms",
        element: <Terms/>,
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
