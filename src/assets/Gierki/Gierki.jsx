import React, { useState, useEffect } from 'react';
import {
  NavLink,
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Game from '../Gierki/Game';
import Game2 from '../Gierki/Game2';
import './Game.css';
import MainGierki from '../Gierki/MainGierki';

const Gierki = () => {
  return (
    <div>
      <div class="gierki-menu">
        <NavLink to="/gierki/">Main</NavLink>
        <NavLink to="/gierki/search">Tic Tac Toe</NavLink>
        <NavLink to="/gierki/search2">Snake(kiedyś)</NavLink>
        <NavLink to="/gierki/search3">Blackjack(kiedyś)</NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<MainGierki />}></Route>
          <Route path="/search" element={<Game />}></Route>
          <Route path="/search2" element={<Game2 />}></Route>
          <Route path="/search3" element={<Game2 />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Gierki;
