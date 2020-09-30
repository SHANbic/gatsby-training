import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import innertext from 'innertext'

const BlogPostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <SEO
        title={innertext(post.title)}
        description={post.description}
        image={post.featured_media.source_url}
      />
      <Header />
      <div className="container">
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1
            style={{ margin: "2rem 0", textTransform: "capitalize" }}
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ textAlign: "left", fontSize: "1.4rem" }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      featured_media {
        source_url
      }
      excerpt
      categories
    }
  }
`

export default BlogPostLayout
