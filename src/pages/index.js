import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from "../components/welcome"
//
/*
 *     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    * */
const IndexPage = () => (
  <Layout style={{ height: `100%`}}>
    <SEO title="Wholistic Software" />
    <Welcome></Welcome>
  </Layout>
)

export default IndexPage
