/* import React from 'react'
import ReactDOM from 'react-dom/client' */

/* import App from './App'
import MainPage from './views/MainPage'
import AboutUs from './views/AboutUs'
import LandingPage from './views/LandingPage'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about-us" component={AboutUs} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
 */

/* import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from './views/MainPage'
import AboutUs from './views/AboutUs'
import LandingPage from './views/LandingPage'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); */

import React from "react";
import ReactDOM from "react-dom/client";

import Routing from "./components/Routing";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
