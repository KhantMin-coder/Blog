// import React from "react"
// import Layout from "../components/layout"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
// import blogStyles from "./blog.module.scss"

// const BlogPage = () => {
//   const blogs = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <p>Post will show up here later</p>
//       <ol className={blogStyles.posts}>
//         {blogs.allMarkdownRemark.edges.map((edge, i) => {
//           return (
//             <li className={blogStyles.post} key={i}>
//               <Link to={edge.node.fields.slug}>
//                 <h2>{edge.node.frontmatter.title}</h2>
//                 <p>{edge.node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogPage




///////////////////////////////////////////////////////


import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allContentfulBlogPost{
      edges{
          node{
            title,
            slug,
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Post will show up here later</p>
      <ol className={blogStyles.posts}>
        {blogs.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <li className={blogStyles.post} key={i}>
              <Link to={edge.node.slug}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage