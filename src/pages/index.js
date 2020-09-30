import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { nodes } = data.allWordpressPost
  return (
    <PrimaryLayout column="col-xs-6">
      {nodes.map((node, id) => (
        <Post
          key={id}
          title={node.title}
          image={node.featured_media.source_url}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        title
        excerpt
        slug
        featured_media {
          source_url
        }
      }
    }
  }
`
