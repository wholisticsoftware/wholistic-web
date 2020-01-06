import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import ReactTextRotator from 'react-text-rotator';

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>

const content = [
  {
    text: 'We shall fight on the beaches.',    className: 'classA',    animation: 'fade',
  },
  {
    text: 'We shall fight on the landing grounds.',    className: 'classB',    animation: 'fade',
  },
  {
    text: 'We shall fight in the fields and in the streets.',    className: 'classC',    animation: 'fade',
  },
  {
    text: 'We shall fight in the hills.',    className: 'classD',    animation: 'fade',
  },
  {
    text: 'We shall never surrender...',    className: 'classE',    animation: 'fade',
  },
];
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
          <div class="text-slider-container">
            <ReactTextRotator content={content} time={5000} startDelay={2000} />
          </div>
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
