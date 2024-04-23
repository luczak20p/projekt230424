import React, { useState, useRef } from 'react';

export default function Form({ bazaPosty, addBazaPost, nazwa }) {
  const tytulPost = useRef();
  const autor = useRef();
  const zawartosc = useRef();
  const formularz = useRef();
  const [wiadomosc, setIsShown] = useState(false);
  const [wiadomosc2, setIsShown2] = useState(false);

  const addPostu = (evt) => {
    evt.preventDefault();
    if (tytulPost.current.value && zawartosc.current.value) {
      let post = {
        id: crypto.randomUUID(),
        tytul: tytulPost.current.value,
        autor: nazwa,
        wartosc: zawartosc.current.value,
      };
      addBazaPost(post);
      console.log(post);
      formularz.current.reset();
      setIsShown((current) => true);
      setIsShown2((current) => false);
      console.log(wiadomosc);
    } else {
      setIsShown2((current) => true);
      setIsShown((current) => false);
      console.log(wiadomosc);
    }
  };
  return (
    <div>
      <form ref={formularz}>
        <input ref={tytulPost} placeholder="Tytuł posta" />
        <p ref={autor}>Autor:{nazwa}</p>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Zawartość posta"
          ref={zawartosc}
        ></textarea>
        <button onClick={addPostu}>Utwórz</button>
        {wiadomosc == true && <p class="mb-0">Post przesłany</p>}
        {wiadomosc2 == true && <p class="mb-0">Błędne dane</p>}
      </form>
    </div>
  );
}
