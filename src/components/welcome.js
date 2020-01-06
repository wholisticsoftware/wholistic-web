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
    text: 'Software built with the whole picture in mind.', className: 'classA', animation: 'fade',
  },
  {
    text: 'Make tech serve you. Not the other way around.', className: 'classB', animation: 'fade',
  },
  {
    text: 'A team that scales to what YOU need.', className: 'classC', animation: 'fade',
  },
  {
    text: 'The experience and drive to build the best.', className: 'classD', animation: 'fade',
  },
  {
    text: 'Clients and projects, big and small.', className: 'classE', animation: 'fade',
  },
];
const Welcome = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "triangle1.jpg" }) {
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
      /*
      return (<div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
        <ReactTextRotator content={content} time={5000} startDelay={2000} />
      </div> )
      */
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, backgroundSize: `contain` }}>
          <div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div class="text-slider-container">
              <ReactTextRotator content={content} time={5000} startDelay={2000} />
            </div>
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
