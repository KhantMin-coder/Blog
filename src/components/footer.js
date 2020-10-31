import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Create by {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
