import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { IoLogoLinkedin } from 'react-icons/io';

const Layout = ({ children, showBrand, brandClass, navBaseClass }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} showBrand={showBrand} brandClass={brandClass} navBaseClass={navBaseClass}/>
      <div style={{ margin: `0 auto`, padding: `0px`, paddingTop: 0, }} >
        <main>{children}</main>
      </div>
      <footer>
        <span>&copy; 2020. Wholistic. Built with Gatsby and Framer.</span>&nbsp;&nbsp;
        <span style={{fontSize:'20px'}}><a href="https://www.linkedin.com/company/wholistic-software-llc"><IoLogoLinkedin /></a></span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
