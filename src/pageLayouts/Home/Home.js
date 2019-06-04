import React from 'react'
import Button from '../../components/Button/';
import Navbar from '../../components/Navbar';

import resume from '../../assets/dylanfernandes_resume.pdf'

const Home = (props) => (
  <div className="home">
    <div className="home__landing overlay">
      <div className="home__content">
        <h1 className="home__title">Hi, I'm Dylan Fernandes</h1>
        <p className="home__tagline">programmer, blogger, self development geek, student</p>
        <Button link={resume}>Resume</Button>
        <Button link="https://github.com/dylankfernandes">Projects</Button>
        <Navbar />
      </div>
    </div>
  </div>
)

export default Home