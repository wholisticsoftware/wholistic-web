import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

const BizTech = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "sun-tzu.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      
      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      cssEase: "linear"
    };
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
			  backgroundSize: `cover`, backgroundPosition: `top`}}>
          <div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div className="msg-container">
              <div className="actualize"><p>Actualize</p></div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome
