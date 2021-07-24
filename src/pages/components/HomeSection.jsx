import React from 'react'
import whiteLogo from './../../images/whitelogo.png';
import './../../App.scss';

function HomeSection() {
  return (
    <section className="poster-container">
      <div className="container">
        <div className="information-container">
          <img src={ whiteLogo } alt="logo" />
          <p>monitore os seus animes <br/>preferidos e não perca mais <br/>nenhum episódio</p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
