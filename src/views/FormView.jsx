import React from 'react';
import Clock from '../assets/Clock/Clock';
import Form from '../assets/Form/Form';

const FormView = ({ bazaPosty, addBazaPost, nazwa }) => (
  <>
    <h2 style={{ textAlign: 'center' }}>Stwórz post</h2>
    <Form bazaPosty={bazaPosty} addBazaPost={addBazaPost} nazwa={nazwa} />
  </>
);
export default FormView;
