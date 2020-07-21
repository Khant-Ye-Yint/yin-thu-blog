const path = require("path")

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  //1. Get Path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
