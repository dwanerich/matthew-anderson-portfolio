import React from 'react';
import arianaLogo from '../img/ariana.white.png';

export const Header = () => {
  return (
    <div className="header" style={{ background: '#fff' }}>
      <center>
        <img
          src={arianaLogo}
          alt="Ariana Weisner Logo"
          style={{ width: '80%' }}
        />
      </center>
      <div class="section-center"></div>
    </div>
  );
};
