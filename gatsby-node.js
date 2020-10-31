const path = require("path")

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   // Transform the new node here and create a new node or

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     console.log("@@@@@@@@@@@@@@@@" + slug + "@@@@@@@@@@@@@@@@")

//     // adding a slug to all mark down node
//     createNodeField({
//       // the first one is the node
//       node: node,
//       // name of the new field
//       name: "slug",
//       value: slug,
//     })
//     // console.log(JSON.stringify(node, undefined, 4))
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get Path to template
  // Get markdown data
  // Create new pages

  // path.resolve will resolve the path from root to current location
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // const res = await graphql(`
  //         query {
  //           allMarkdownRemark {
  //             edges {
  //               node {
  //                 fields {
  //                   slug
  //                 }
  //               }
  //             }
  //           }
  //         }
  // `)

  const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                      slug
                    }
                }
            }
        }`
  )

  // console.log(res.data.allMarkdownRemark)
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({ 
      component: blogTemplate,
      // path: `/blog/${edge.node.fields.slug}`,
      path: `/blog/${edge.node.slug}`,
      // context is an object , which contain things passdown to the template
      // if template got the slug , it can fetch other data , slug is like a key unique
      context: {
        // slug: edge.node.fields.slug
        slug: edge.node.slug
      }
    })
  })
}
