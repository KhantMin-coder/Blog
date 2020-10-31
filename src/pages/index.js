import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import '../styles/index.css'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
     <Head title="Home Page" />
      <h1>Hello Gatsby World</h1>
      <p>Hello for everyone</p>
      {/* Use Link when connnecting to your own links, use a when contact outside links */}
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default IndexPage
