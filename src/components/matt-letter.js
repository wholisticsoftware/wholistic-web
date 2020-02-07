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
        desktop: file(relativePath: { eq: "desert-condor-big-2.jpg" }) {
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
        <BackgroundImage Tag="section" fluid={imageData} backgroundColor={`white`} 
          style={{ width: `100%`, height:`100vh`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundPosition: `center center`, backgroundOrigin:`bottom`, backgroundSize:`cover`}}>
          <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`}}>
            <p style={{marginTop: `5rem`, maxWidth:`450px`}}><h2>The essence of right action is <span className="wholisticfont">authenticity</span>.</h2></p>
            <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center`, overflow:`auto`, minHeight:`200px`, minWidth:`375px`}}>
                <p style={{maxWidth:`100px`, textAlign:`right`}}>Success <br/> is applied <br/> wisdom.</p>
                <p style={{maxWidth:`100px`}}>Good people working well together is the heart of software.</p>
                <p style={{maxWidth:`100px`, textAlign:`left`}}>Sincerety is the criterion of working well together.</p>
            </div>
            <div style={{ maxWidth:`500px`, fontFamily:`softwarefont`}}>
              <h3 style={{fontFamily:`softwarefont`,fontWeight:`bold`}}>I offer my sincere curiousity for what projects you undertake today.</h3>
              <p><span className="wholisticfont">Matt Tyson</span>, Founder | matt@wholisticsoftware.com</p>
              <p className="wholisticfont">Big Sur, California January 2020</p>  
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
//<p>I would love to hear about what you are working on and your vision for it.</p>
/*
<p>Beliefs and circumstance changes, but honest interaction remains.</p>
                <p></p>
                */