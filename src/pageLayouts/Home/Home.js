import React from 'react'
import Button from '../../components/Button/';

const Home = (props) => (
  <div className="home">
    <div className="home__landing overlay">
      <div className="home__content">
        <h1 className="home__title">Hi, I'm Dylan Fernandes</h1>
        <p className="home__tagline">programmer, blogger, self development geek, student</p>
        <Button>Resume</Button>
        <Button>About Me</Button>
      </div>
    </div>
  </div>
)

export default Home