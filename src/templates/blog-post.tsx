import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { ContentfulBlogPostQuery } from "../../types/graphql-types"

type Props = {
  data: ContentfulBlogPostQuery
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => (
  <Layout>
    <article itemScope itemType="http://schema.org/Article">
      <header>
        <h1 itemProp="headline">{data?.contentfulBlogPost?.title}</h1>
        <p>{"a"}</p>
      </header>
      <hr />
      <footer>{"a"}</footer>
    </article>
    <nav className="blog-post-nav">
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      ></ul>
    </nav>
  </Layout>
)
export const query = graphql`
  query contentfulBlogPost {
    contentfulBlogPost {
      author {
        name
        description
        icon {
          file {
            url
          }
        }
      }
      body {
        raw
      }
      eyeCatch {
        file {
          url
        }
      }
      postDate
      title
    }
  }
`
export default BlogPostTemplate
