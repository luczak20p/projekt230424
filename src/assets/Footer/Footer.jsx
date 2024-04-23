import React from 'react';
export default function Footer({ title }) {
  return (
    <footer class="d-flex text-light">
      <h3>&copy;{title}</h3>
    </footer>
  );
}
