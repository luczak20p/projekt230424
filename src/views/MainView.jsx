import React from 'react';
import Profile from '../assets/Profile/Profile';

const MainView = ({ nazwa, changeName }) => (
  <>
    <h2 style={{ textAlign: 'center' }}>Profil</h2>
    <Profile nazwa={nazwa} changeName={changeName} />
  </>
);
export default MainView;
