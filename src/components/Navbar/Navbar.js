import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    open: false,
    active: false
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
      active: !this.state.active
    })
  }

  render() {
    let openClasses = this.state.open ? 'on' : ''
    let resizeClasses = this.state.open ? 'active' : ''
    return (
      <div>
        <nav className="nav">
          <span className="nav__brand">
            <a href="index.html">Dylan Fernandes</a>
          </span>

          <ul className="nav__menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

          <div className={`nav__toggle ${openClasses}`} onClick={() => this.toggle()}>
            <div className="span one"></div>
            <div className="span two"></div>
            <div className="span three"></div>
          </div>
        </nav>

        <div className={`nav__resize ${resizeClasses}`}>
          <ul className="nav__menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar