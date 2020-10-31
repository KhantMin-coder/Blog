import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyle from "../styles/layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
