import React from 'react';
import Posty from '../assets/Posty/Posty';

const PostyView = ({ bazaPosty }) => (
  <>
    <h2 style={{ textAlign: 'center' }}>Posty</h2>
    <Posty posts={bazaPosty} />
  </>
);
export default PostyView;
