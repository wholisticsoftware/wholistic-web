import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Technology from '../components/technology.js';
import Companies from '../components/companies.js'; 

//GiMechanicGarage FaChevronDown
import { GiMechanicGarage } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import BackgroundImage from 'gatsby-background-image';
import Button from 'react-bootstrap/Button';

import MattLetter from "../components/matt-letter";

import "./layout.css"

const Quote = ({ className }) => {
  const getQuote = () => {
    alert('ok');
  }
  let scrollNext = (e) => {
    //console.info("BEGIN onWelcomeClick(): " + e.target);
	  let firstComponent = document.getElementById("tech");
	  console.info("BEGIN scrollNext(): " + firstComponent);
	  if (firstComponent){
	    let fcHeight = firstComponent.scrollHeight;
	    console.error("a woHeight: " + fcHeight);
	    if (window) console.info("woHeight: " + fcHeight);
		  window.scroll({ top: (fcHeight), left: 0, behavior: 'smooth' });
	  }
  }
  return (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "amsterdam.jpg" }) {
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
      
      return (
        <BackgroundImage className="philosophy" Tag="section" fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`, paddingTop:`7em`, backgroundOrigin:`bottom`}}>
            
                <hr/>
                <div className="content" style={{backgroundColor:`rgba(223,241,248,.85)`,width:`auto`}}>
                <h2 className="wholisticfont" style={{color:`rgb(56,80,107)`}}>Get a Quote</h2>
                <GiMechanicGarage style={{width:`80px`, height:`80px`,marginTop:`1em`, marginBottom:`1em`}}/>
                <p className="softwarefont">No Project too Big or Small</p>
                
                  <form style={{display:'flex', flexDirection:`column`, maxWidth:`100%`, justifyContent:`center`, alignItems:`center`}}>
                    <textarea placeholder="What are you working on?" style={{marginBottom:`.5em`,width:`300px`}}></textarea>
                    <input type="email" placeholder="Your Email"  style={{marginBottom:`.5em`,width:`300px`}}></input>
                    <Button style={{width:`300px`}} onClick={getQuote}>GO</Button>
                  </form>

                  <a className="softwarefont">Try The Project Builder</a><br/>
                  <FaChevronDown style={{cursor:`pointer`}} onClick={scrollNext}/>
                </div>
                <hr/>
                <Technology></Technology>
                <hr/>
                <Companies></Companies>
                <hr/>
                <hr/>
        </BackgroundImage>
      )
    }}
  />
)}

export default Quote

/*

<div>
                
                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p><hr/>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p><hr/>
                </div>
                
                */
