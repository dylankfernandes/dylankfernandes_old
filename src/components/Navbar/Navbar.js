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
      <div className="nav">
        <nav>
          <span id="brand">
            <a href="index.html">Dylan Fernandes</a>
          </span>

          <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

          <div id="toggle" className={openClasses} onClick={() => this.toggle()}>
            <div className="span" id="one"></div>
            <div className="span" id="two"></div>
            <div className="span" id="three"></div>
          </div>
        </nav>

        <div id="resize" className={resizeClasses}>
          <ul id="menu">
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