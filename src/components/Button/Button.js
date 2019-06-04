import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <a href={props.link} className={`button button-${props.theme}`} target="_blank">
    {props.children}
  </a>
)

Button.PropTypes = {
  theme: PropTypes.string,
  name: PropTypes.string
}

Button.defaultProps = {
  theme: 'light',
  name: 'button',
  download: ''
}

export default Button