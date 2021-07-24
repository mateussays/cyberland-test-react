import React from 'react';
import logo from './../../images/logo g.svg';
import './../../App.scss';

function HeaderHome() {
  return (
    <header className="header-section">
      <div className="container">
        <img src={ logo } alt="logo" />
      </div>
    </header>
  )
}

export default HeaderHome;
