import React from "react"
import Link from 'gatsby-link'

const PostList = ( props ) => {
  return (
    <div>
    {props.data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} style={{borderTop: '1px solid #999', borderBottom: '1px solid #999'}}>
        <Link to={node.fields.slug}>
          <h1>{node.frontmatter.title}</h1>
        </Link>
        <p><strong>{node.frontmatter.date}</strong></p>
        <p>{node.excerpt}</p>
      </div>
    )}
    </div>
  )
}

export default PostList;
