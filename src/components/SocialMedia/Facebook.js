import React from 'react'

const Medium = (props) => (
  <a href="https://www.facebook.com/dylan.fernandes.37853"  className={`social-media-icon social-media-icon-${props.size}`}>
    <svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001" fill="#FFFFFF"></path>
      </g>
    </svg>
  </a>
)

Medium.defaultProps = {
  color: "#fff"
}

export default Medium;