import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GameContext } from '../contexts/GameContext';
import LandingPage from "../views/LandingPage";
import AboutUs from "../views/AboutUs";
import AuthPage from "../views/Authentication/AuthPage";
import GamesList from "../views/Games/GamesList";
import GamePage from "../views/Games/GamePage";
import CharactersGameList from "../views/Characters/CharactersList";
import AllCharacters from "../views/Characters/AllCharacters";
import ViewUser from "../views/Users/ViewUser";


import "../styles/main.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Rules from "./Rules";

function Routing() {
  const { toggleAudio, audio, nextSong } = useContext(GameContext);
  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      <div>
        <button onClick={toggleAudio}>{audio?.current?.paused ? 'Play' : '||' }</button>
        <button onClick={nextSong}> {'>'} </button>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:gameId" element={<GamePage />} />
          <Route path="/games/:gameId/characters" element={<CharactersGameList />} />
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="/user" element={<ViewUser />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
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