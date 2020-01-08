import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Welcome from "../components/welcome"
import BizTech from "../components/business-tech"
import Philosophy from "../components/philosophy"

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
    <BizTech></BizTech>
    <Philosophy></Philosophy>
  </Layout>
)

export default IndexPage
