import { Link, useStaticQuery, graphql } from 'gatsby'
import React from "react"

// import '../styles/header.module.css'
import headerStyles from "../styles/header.module.css"

const Header = () => {

  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title,
        }
      }
    }
  `)


  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/">
            Index
          </Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/contact">
            contact
          </Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/blog">
            blog
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
