import React, { useState } from 'react';
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { Link } from "gatsby";

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

import { FaGuitar, FaDrum } from "react-icons/fa";

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
      <BackgroundImage Tag="section" className="flow" fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundPosition: `bottom` }}>
        <div style={{ minWidth: `100%`, textAlign: `center`, maxHeight: `350px`, display: `flex`, justifyContent: `center`, alignItems:  `center`, flexDirection: `column`, backgroundColor: `rgba(255,255,255,.5)`, borderTop: `1px solid rgba(100,100,100,.5)`, borderBottom: `1px solid rgba(100,100,100,.5)`, paddingBottom: `1rem`}}>
          <h1 className="wholisticfont" style={{paddingTop: '1rem', fontSize: '4em',cursor:`pointer`}} onClick={() => alert('Flow: A state wherein otherwise  difficult aims are achieved with ease.')}>Flow</h1>
          <p style={{fontSize:`25px`,fontSize:`20px`}}>From <b>compelling websites</b> to <b>enterprise microservices</b></p>
          <h3 className="" style={{fontWeight:`light`, color:`#BC7421`}}><span className="wholisticfont">Wholistic</span> makes <span style={{fontFamily:`nav-font`}}>SOFTWARE</span> Simpler</h3>
          <div style={{width: `500px`, display: 'flex', justifyContent: `space-between`, paddingTop:`1em`}}>
            <Link to="/services" className="flow-link">Get a Quote</Link>
            <span><FaGuitar style={{color:`rgb(0, 123, 255)`, fontSize:`12px`}}/></span>
            <Link to="/services#builder" className="flow-link">Project Builder</Link>
            <span><FaDrum style={{color:`rgb(0, 123, 255)`, fontSize:`12px`}}/></span>
            <Link to="/philosophy" className="flow-link">Wholistic Philosophy</Link>
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
