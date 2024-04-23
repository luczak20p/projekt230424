import React from 'react';
import { useState, useRef } from 'react';
export default function Posty({ posts }) {
  const reversedArray = posts.slice(0).reverse();
  const tytulPost = useRef();
  let temptable = [];

  const [search, setSearch] = useState('');
  const filteredContacts =
    search.length === 0
      ? reversedArray
      : reversedArray.filter((arg) =>
          arg.tytul.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <input
        class="ms-3"
        type="text"
        placeholder="Znajdź post po tytule"
        ref={tytulPost}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul class="list-group">
        {filteredContacts.map((arg) => (
          <li class="list-group-item">
            <a href="#">{arg.tytul}</a> Autor: {arg.autor}
            <p>{arg.wartosc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
