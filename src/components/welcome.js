import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>

const Welcome = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "willow-creek.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`#040e18`} style={{ width: `100%`, height: `100%` }}>
          <h2>foo</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledWelcome = styled(Welcome)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome
