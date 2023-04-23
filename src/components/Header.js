import React from 'react';
import take2Logo from '../img/take-two-logo.gif';

export const Header = () => {
  return (
    <div className="header">
      <center style={{ background: 'black' }}>
        <img
          src={take2Logo}
          alt="Take Two Logo"
          style={{ width: '25%',
        backgroundColor: 'black'}}
        />
      </center>
      <div class="section-center">

      </div>
    </div>
  );
};
