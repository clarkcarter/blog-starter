import React from "react"
import Link from "gatsby-link"
import './index.css'
import Navigation from '../components/Navigation'

export default ({ children, data }) =>
  <div className='blog-title'>
    <Link to={`/`}>
      <h3>{data.site.siteMetadata.title}</h3>
    </Link>
    <Navigation />
    {children()}
  </div>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
