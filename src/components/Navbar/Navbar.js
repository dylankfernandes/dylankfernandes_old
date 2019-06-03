import React from 'react'
import Twitter from '../SocialMedia/Twitter';
import Facebook from '../SocialMedia/Facebook';
import Medium from '../SocialMedia/Medium';
import Instagram from '../SocialMedia/Instagram';

const Navbar = () => (
  <div>
    <Twitter className="navbar__twitter" />
    <Medium className="navbar__medium" />
    <Facebook className="navbar__facebook" />
    <Instagram className="navbar__instagram" />
  </div>
)

export default Navbar;