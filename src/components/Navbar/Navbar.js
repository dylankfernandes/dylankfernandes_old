import React, { Component } from 'react'
import Link from 'gatsby-link'

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
            <Link to="/" className="nav__link">Dylan Fernandes</Link>
          </span>

          <ul className="nav__menu">
            <li><Link to="/" className="nav__link">Home</Link></li>
            <li><Link to="/" className="nav__link">About</Link></li>
            <li><Link to="/" className="nav__link">Contact</Link></li>
            <li><Link to="/" className="nav__link">FAQ</Link></li>
          </ul>

          <div className={`nav__toggle ${openClasses}`} onClick={() => this.toggle()}>
            <div className="span one"></div>
            <div className="span two"></div>
            <div className="span three"></div>
          </div>
        </nav>

        <div className={`nav__resize ${resizeClasses}`}>
          <ul className="nav__menu">
            <li><Link to="/" className="nav__link">Home</Link></li>
            <li><Link to="/" className="nav__link">About</Link></li>
            <li><Link to="/" className="nav__link">Contact</Link></li>
            <li><Link to="/" className="nav__link">FAQ</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar