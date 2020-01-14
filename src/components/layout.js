import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <div style={{ margin: `0 auto`, height: `100%`, padding: `0px`, paddingTop: 0, }} >
        <main>{children}</main>
        <footer className="fixed-bottom" style={{ left: `auto`, right: `0px`}}>
          © {new Date().getFullYear()}, wholistic software, llc.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
