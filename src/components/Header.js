import React from 'react';
import matthewLogo from '../img/matthew-anderson-logo.gif';

export const Header = () => {
  return (
    <div className="header" style={{ background: '#fff' }}>
      <center>
        <img
          src={matthewLogo}
          alt="Matthew Logo"
          style={{ width: '50%' }}
        />
      </center>
      <div class="section-center"></div>
    </div>
  );
};
