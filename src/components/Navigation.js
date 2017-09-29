import React from 'react'
import Link from 'gatsby-link'
import './Navigation.css'

export default () =>
<ul className='site-nav'>
  <li>
    <Link to={`/shop/`}>Shop</Link>
  </li>
  <li>
    <Link to={`/about/`}>About</Link>
  </li>
  <li>
    <Link to={`/contact/`}>Contact</Link>
  </li>
</ul>
