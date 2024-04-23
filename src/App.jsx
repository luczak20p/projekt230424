import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useState, useRef } from 'react';
import './App.css';
import Header from './assets/Header/Header';
import MainView from './views/MainView';
import PostyView from './views/PostyView';
import FormView from './views/FormView';
import GierkiView from './views/GierkiView';
import Footer from './assets/Footer/Footer';
//https://stackblitz.com/@belfer317a
//https://slicker.me/javascript/tower.htm

export default function App() {
  const postDefault = [
    {
      id: 1,
      tytul: 'Hello world!',
      autor: 'marcin',
      wartosc:
        'Lorem ipsum dolor sit amet. Et maiores distinctio At eaque cumque ea alias sunt ut recusandae inventore ut veniam nihil aut nobis voluptatibus et enim excepturi.',
    },
    {
      id: 2,
      tytul: 'Post2',
      autor: 'adrian',
      wartosc:
        'Lorem ipsum dolor sit amet. Et maiores distinctio At eaque cumque ea alias sunt ut recusandae inventore ut veniam nihil aut nobis voluptatibus et enim excepturi.',
    },
  ];

  const [bazaPosty, setBazaPost] = useState(postDefault);
  const addBazaPost = (bazaPost) => {
    setBazaPost((prevState) => [...prevState, bazaPost]);
  };

  let title = 'Vapour';
  let nazwa_uzytkownika = 'uzytkownik';
  const [nazwa, setNazwa] = useState(nazwa_uzytkownika);
  const changeName = (newName) => {
    setNazwa(newName);
  };
  return (
    <>
      <Header title={title} />
      <Router>
        <nav>
          <ul class="nav nav-pills abc pb-3 pt-3">
            <li class="flex-sm-fill text-sm-center nav-link">
              <NavLink to="/">{nazwa}(Profil)</NavLink>
            </li>
            <li class="flex-sm-fill text-sm-center nav-link">
              <NavLink to="posty">Centrum Społeczności</NavLink>
            </li>
            <li class="flex-sm-fill text-sm-center nav-link">
              <NavLink to="any">Stwórz post</NavLink>
            </li>
            <li class="flex-sm-fill text-sm-center nav-link w-100">
              <NavLink to="gierki">Gierki</NavLink>
            </li>
          </ul>
        </nav>
        <div class="modulik">
          <Routes>
            <Route
              path="/"
              element={<MainView nazwa={nazwa} changeName={changeName} />}
            />
            <Route
              path="/posty"
              element={<PostyView bazaPosty={bazaPosty} />}
            />
            <Route
              path="/any"
              element={
                <FormView
                  bazaPosty={bazaPosty}
                  addBazaPost={addBazaPost}
                  nazwa={nazwa}
                />
              }
            />
            <Route path="/gierki/*" element={<GierkiView />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer title={title} />
    </>
  );
}
