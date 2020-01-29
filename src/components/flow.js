import React, { useState } from 'react';
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

import Badge from 'react-bootstrap/Badge'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
              
const BizTech = ({ className }) => {
	const [projectType, setProjectType] = useState("unknown");
	const [projectSize, setProjectSize] = useState("unknown");
	const [techPref, setTechPref] = useState("unknown");
	const [stack, setStack] = useState("unknown");  // frontend, backend, fullstack
	const [tech, setTech] = useState([]);
	
	let addTech = (name) => { setTech([...tech, name ]); };

	return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "jane-palmer-creek.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, speed: 500, cssEase: "linear" };
      return (
      <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundPosition: `bottom` }}>
        <div style={{ minWidth: `100%`, textAlign: `center`, maxHeight: `350px`, display: `flex`, justifyContent: `center`, alignItems:  `center`, flexDirection: `column`, backgroundColor: `rgba(255,255,255,.5)`, borderTop: `1px solid rgba(100,100,100,.5)`, borderBottom: `1px solid rgba(100,100,100,.5)`, paddingBottom: `1rem`}}>
          <h1 className="wholisticfont" style={{paddingTop: '1rem', fontSize: '4em'}}>Flow</h1>
          <p>A state wherein otherwise difficult aims are achieved with ease.</p>
          <h4>From compelling websites to enterprise microservices.</h4>
          <p className="" style={{fontWeight:``}}>Wholistic makes it simpler.</p>
          <div style={{width: `450px`, display: 'flex', justifyContent: `space-between`}}>
            <a href="">Get a Quote</a> <a href="">Project Builder</a> <a href="">Wholistic Philosophy</a>
          </div>
        </div>
      </BackgroundImage>
      )
    }}
  />
)}
//style={{visibility: (projectType === "unknown" || projectType === "existing") ? '' : 'hidden'}}
//Tag="section" backgroundColor={`transparent`} 
const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome

/*
 * accommodate
attune
comply
coordinate
fit
harmonize
integrate
reconcile
tailor
* 
* flow
* */
