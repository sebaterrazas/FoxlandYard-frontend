import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../views/LandingPage";
import AboutUs from "../views/AboutUs";
import MainPage from "../views/MainPage";
import AuthPage from "../views/Authentication/AuthPage";
import GamesList from "../views/Games/GamesList";
import GamePage from "../views/Games/GamePage";
import CharactersGameList from "../views/Characters/CharactersList";
import AllCharacters from "../views/Characters/AllCharacters";

import "../styles/main.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Rules from "./Rules";

function Routing() {
    return (
      <div className="container">
        <Navbar />
        <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/games/:gameId" element={<GamePage />} />
            <Route path="/games/:gameId/characters" element={<CharactersGameList />} />
            <Route path="/characters" element={<AllCharacters />} />
          </Routes>
        </BrowserRouter>
        </div>
        <Footer />
      </div>
    )
}

export default Routing;

/* // This is a React Router v6 app
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  function Users() {
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Routes>
      </div>
    );
  }

  export default App; */