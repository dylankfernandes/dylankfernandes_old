import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button className={`button button-${props.theme}`}>
    {props.children}
  </button>
);

Button.PropTypes = {
  theme: PropTypes.string,
  name: PropTypes.string
}

Button.defaultProps = {
  theme: 'light',
  name: 'button'
}

export default Button