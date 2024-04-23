import React from 'react';
import { useState, useRef } from 'react';
import logo from './pipege.png';
export default function Profile({ nazwa, changeName }) {
  const tytul = useRef();
  const daj = (evt) => {
    evt.preventDefault();
    changeName(tytul.current.value);
    console.log({ nazwa });
  };
  return (
    <div>
      <img
        src={logo}
        alt="profilowe"
        class="d-block border border-secondary"
        style={{ width: '128px', height: '128px' }}
      />
      <p>Nazwa użytkonwika: {nazwa}</p>
      <input type="text" ref={tytul} />
      <button class="mb-1 btn btn-secondary" onClick={daj}>
        Zmień nazwę
      </button>
    </div>
  );
}
