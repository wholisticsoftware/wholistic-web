import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import Slider from "react-slick";

import { FaFly } from "react-icons/fa";
import { GiCurledLeaf } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";

import Icon from "../svg/wholistic-logo-tight.svg";

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>

const Welcome = ({ className, onWelcomeClick, id }) => {
	return (
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

      const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, speed: 500, cssEase: "linear" };
      return (
        <BackgroundImage id={id} Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`}
            style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`, backgroundPosition: `bottom`}}>
          <div className="front-page" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div className="text-slider-container">
              <Slider {...settings}>
                <div className="slider-inner">
                  <div>&nbsp;</div>
                  <Icon style={{maxWidth:'95px', maxHeight:'95px'}} />
                  <div>&nbsp;</div>
                </div>
                <div>
                  <p>Get What</p>
                  <h1 className="wholistic" style={{ wordWrap: `no-wrap`}}>You Need</h1>
                  <p className='wholistic-arrow'><GoTriangleDown style={{fontSize:"1em", textAlign:'top'}} /></p>
                </div>
                <div>
                  <p>The</p>
                  <h1 className="wholistic" style={{ wordWrap: `no-wrap` }}>Easy Way</h1>
                  <p className='wholistic-arrow'><GoTriangleDown style={{fontSize:"1em", textAlign:'top'}}/></p>
                </div>
                {/*
                <div id="foo" style={{display:'flex',flexDirection:`column`, justifyContent: `center`, alignItems:`center`, textAlign:`center`, cursor:`pointer`}} onClick={onWelcomeClick}>
                  <h1 className="wholistic" style={{ wordWrap: `no-wrap`, marginTop:`.1em`}}>Simplicity</h1>
                  <GiCurledLeaf style={{ fontSize:`3em`, marginBottom:`.5em`}}/>
                  <FaFly style={{fontSize:`3em`, marginBottom:`.5em`, cursor:`pointer`}}/>
                  <GiCurledLeaf style={{transform: `scale(-1, 1)`, fontSize:`3em`, marginBottom:`.5em`}}/>
                  <p>&nbsp;</p>
                </div>
                */}

              </Slider>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)}

const StyledWelcome = styled(Welcome)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default StyledWelcome

/*

                */



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
