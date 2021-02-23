const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const result = await graphql(`
    query allContentfulBlogPostId {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`GraphQL query error.`)
    return
  }

  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
