import React, {useEffect, useState} from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';

import Modal from 'react-bootstrap/Modal'


import Quote from '../components/quote.js';

import microservices from '../images/microservices.png';
import suntzu from '../images/sun-tzu-planning.png';
import modernui from '../images/ui.jpeg';

import Button from 'react-bootstrap/Button';

import { motion, useMotionValue } from "framer-motion";

import ReactTextTransition, { presets } from "react-text-transition";

import BackgroundImage from 'gatsby-background-image'

import Slider from "react-slick";

import { FaFly } from "react-icons/fa";
import { GiCurledLeaf } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";

import Icon from "../svg/wholistic-logo-tight.svg";

import "./layout.css"
//https://colorhunt.co/palette/167893
//https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
//https://www.schemecolor.com/soft-neutrals.php
//https://www.npmjs.com/package/react-text-transition
const Welcome = ({ className, onWelcomeClick, id, data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => { e.preventDefault(); setShow(true); return false;}

//border: solid aliceblue 3px;
//<motion.span animate={{ opacity: opacity }} transition={{ duration: 1 }}>{adjective}</motion.span>
    return (
      <div id={id} className="welcome" style={{}}>
          <main className="wrapper">
            <section className="breweries" id="breweries">
            {/*<BackgroundImage id="breweries" className="breweries" Tag="section" fluid={data.guitar.childImageSharp.fluid} backgroundColor={`#040e18`}>*/}
              <ul>
                <li>
                  <figure>
                    <img src={suntzu} alt="Art of War" />
                    <figcaption><h3>Software Strategy</h3></figcaption>
                  </figure>
                  <p>
                    We work with founders, engineers and execs to help define and refine strategy. Get the high-level strategy right
                    to make the most of your process, people and tech.
                  </p>
                  <a href="#" onClick={handleShow}>Get a Free 1 Hour Consult</a>
                </li>
                <li>
                  <figure>
                    <img src={microservices} alt="Several hands holding beer glasses" />
                    <figcaption><h3>What is Microservice Architecture?</h3></figcaption>
                  </figure>
                  <p>
                    Microservices decompose applications into remotely decoupled components. Is microservice right for your needs?
                  </p>
                  <a href="https://medium.com/swlh/what-why-when-microservices-4c5797c319d8">Learn About Microservices</a>
                </li>

                <li>
                  <figure>
                    <img src={modernui} alt="React, Angular and VueJS logos" />
                    <figcaption><h3>Modern JS Frameworks Explained</h3></figcaption>
                  </figure>
                  <p>
                    React, Angular and Vue took the JavaScript and web UI world by storm. What is it about them? How do they work?
                  </p>
                  <a href="https://medium.com/@matthewcarltyson/modern-ui-explained-in-4-paragraphs-and-2-pictures-2494042b3847">Learn About Modern UI</a>
                </li>
              </ul>
            </section>
          </main>

          {/*<motion.div className="text-slider-container circle" onClick={onWelcomeClick} animate={{scale:1}} initial={{ scale: 0 }}
             transition={{ mass: 1, type: "spring" }}>
               <h1 className="wholisticfont" style={{fontSize:`50px`}}>Strategy</h1>
</motion.div>*/}
             {/*
               <div>&nbsp;</div>
               <div className="button" style={{marginTop:'5px'}}>
                 <span style={{fontSize:"12px"}}>For</span> <span style={{fontSize:`15px`, fontWidth:'bold', marginTop:'-5px'}}>Founders</span>
                 <span>&nbsp;</span>
               </div>
               <div>&nbsp;</div>
								<h1 className="wholisticfont" style={{textShadow: `1px 0px 0px rgba(0,0,0,1)`, fontSize:`40px`}}>Strategic Counsel</h1>
                <div style={{display:'flex',flexDirection:'row'}}>

                  <div className="button" style={{marginTop:'25px'}}>
                    <p style={{fontSize:"12px"}}>For</p> Coders</div>
                  <div className="button" style={{}}>
                    <p style={{fontSize:"12px"}}>For</p> Executives</div>
                </div>
              */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Wholistic</Modal.Title>
        </Modal.Header>
        <Modal.Body><Quote /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      </div>
)}

const StyledWelcome = styled(Welcome)`

`
export default StyledWelcome
/*
<BackgroundImage className="welcome" Tag="section" fluid={data.bixby.childImageSharp.fluid} backgroundColor={`#040e18`}
style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`}}>
*/

/*
<motion.div className="front-page" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}
  animate={{ borderWidth: 30 }} initial={{borderWidth:"15px"}} transition={{ yoyo: Infinity, ease: "backInOut", duration: 1.5 }}>
  */
/*
<div id={id} Tag="section" className="welcome" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`}}>
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
