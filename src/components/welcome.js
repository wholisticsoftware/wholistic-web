import React, {useEffect} from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

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

const adjectives = [
  "Partner", "Advisor", "Ally"
];

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
//https://www.schemecolor.com/soft-neutrals.php
//https://www.npmjs.com/package/react-text-transition
const Welcome = ({ className, onWelcomeClick, id, data }) => {
	const [adjective, setAdjective] = React.useState("Partner");
  const [adjIndex, setAdjIndex] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);
  const [scale, setScale] = React.useState(1);

  useEffect(() => {
    let interval = setInterval(function(){
  		setAdjIndex(adjIndex + 1);
      setOpacity(0);
      setScale(.95);
      let timeout = setTimeout(function(){
        setAdjective(adjectives[adjIndex % adjectives.length]);
        console.log("adj: " + adjectives[adjIndex % adjectives.length]);
        setOpacity(1);
        setScale(1);
      },1000)

  	}, 2000)
    return () => {
      clearInterval(interval);
      //clearTimeout(timeout);
    };
  });
//border: solid aliceblue 3px;
//<motion.span animate={{ opacity: opacity }} transition={{ duration: 1 }}>{adjective}</motion.span>
    return (
      <BackgroundImage Tag="section" fluid={data.bixby.childImageSharp.fluid} backgroundColor={`#040e18`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`}}>
        <motion.div className="front-page" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }}
          animate={{ borderWidth: 30 }} initial={{borderWidth:"15px"}} transition={{ yoyo: Infinity, ease: "backInOut", duration: 1.5 }}>
          <motion.div className="text-slider-container circle" onClick={onWelcomeClick}
						 animate={{scale:1}} initial={{ scale: 0 }} transition={{ mass: 1, type: "spring" }}>
               <p>Your Bridge From</p>
								<h1 className="wholisticfont">Business to Technology</h1>
                <div style={{backgroundColor:"darkseagreen", width: "50px", height: "50px"}}></div>
          </motion.div>
        </motion.div>
      </BackgroundImage>
)}

const StyledWelcome = styled(Welcome)`

`
export default StyledWelcome

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
