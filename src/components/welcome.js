import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import Slider from "react-slick";

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
              
const Welcome = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "trangle-padded3.jpg" }) {
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
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`, backgroundPosition: `bottom`, }}>
          <div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div className="text-slider-container">
              <Slider {...settings}>
				  <div>
				    <p>Business and Technology</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Aligned</h1>
					<button className="go" style={{ marginTop: `-1em` }}>See How</button>
				  </div>
				  <div>
				    <p>Full-Service Software</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap` }}>Solutions</h1>
					<button className="go" style={{ marginTop: `-1em` }}>Learn More</button>
				  </div>
				  <div>
				    <p>Complexity</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Simplified</h1>
					<button className="go" style={{ marginTop: `-1em` }}>See How</button>
				  </div>
				  <div>
					<p>What You Need</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Delivered</h1>
					<button className="go">GO</button>
				  </div>
              </Slider>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)
/*
<div>
				    <p>Business and Technology</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Aligned</h1>
				  </div>
				  <div>
				    <p>Full-Service Software</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap` }}>Solutions</h1>
					<button className="go" style={{ marginTop: `-1em` }}>Learn More</button>
				  </div>
				  <div>
				    <p>Complexity</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Simplified</h1>
				  </div>
				  <div>
					<p>What You Need</p>
					<h1 class="wholistic" style={{ wordWrap: `no-wrap`}}>Delivered</h1>
					<button className="go">GO</button>
				  </div>
				  */
const StyledWelcome = styled(Welcome)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default StyledWelcome
