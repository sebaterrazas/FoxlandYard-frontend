import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LandingPage from './views/LandingPage'
import AboutUs from './views/AboutUs'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <UserWelcome /> */}
    {/* <LandingPage/> */}
    <AboutUs/>
  </React.StrictMode>,
)
