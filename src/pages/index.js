import React from "react"
import Link from 'gatsby-link'
import PostList from '../components/PostList'

export default ({ data }) => {
  return (
    <div>
      <h1>Amazing {data.site.siteMetadata.title}</h1>
      <PostList data={data}/>
    </div>
  )
}

  export const query = graphql`
    query HomeQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
       edges {
         node {
           id
           frontmatter {
             title
             date
           }
           fields {
             slug
           }
           excerpt(pruneLength: 140)
         }
       }
     }
    }
  `
