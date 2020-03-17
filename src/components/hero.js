import React, {useEffect} from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import microservices from '../images/microservices.png';
import suntzu from '../images/SunTzu.jpg';
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

const adjectives = [
  "We Know Remote", "Strategic Partner", "Simple, Efficient, Reliable"
];
const texts = [
   "Over 15 years of experience in remote dev at your service!",
   "Published expertise in the state-of-the-art, from JavaScript to devOps.",
   "Action without adaquate strategy is the number 1 cause of software project failure."
]
const buttonTexts = [
  "Dev Services",
  "Check it Out",
  "Get a free Consultation"
];



const Welcome = ({ className, onWelcomeClick, id, data, expandState }) => {
	const [banner, setBanner] = React.useState("We Know Remote");
  const [bannerX, setBannerX] = React.useState(0);
  const [adjIndex, setAdjIndex] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);
  const [scale, setScale] = React.useState(1);
  const [text, setText] = React.useState("Action without adaquate strategy is the number 1 cause of software project failure.");
  const [buttonText, setButtonText] = React.useState("Get a free Consultation");

  useEffect(() => {
    let interval = setInterval(function(){
  		setAdjIndex(adjIndex + 1);
      setOpacity(0);
      setScale(.95);
      setBannerX(40);
      let timeout = setTimeout(function(){
        setBanner(adjectives[adjIndex % adjectives.length]);
        setText(texts[adjIndex % texts.length]);
        setButtonText(buttonTexts[adjIndex % buttonTexts.length]);
        console.log("adj: " + adjectives[adjIndex % adjectives.length]);
        setOpacity(1);
        setScale(1);
        setBannerX(0);
      },1250)

  	}, 2500)
    return () => {
      clearInterval(interval);
      //clearTimeout(timeout);
    };
  });

    return (
      <motion.div className="hero" style={{backgroundPosition:"left", backgroundSize:"contain",  backgroundColor:"black"}} 
         initial={{height:0}} transition={{delay:.33}}
         animate={{height: expandState ? '' : 0 }}>
        <motion.h1 animate={{ opacity: opacity, x: bannerX }} transition={{ duration: 1.25 }}>{banner}</motion.h1>
          <article>
          <p>{text}</p>
          <a href="#breweries">{buttonText}</a>
          </article>
      </motion.div>
)}

const StyledWelcome = styled(Welcome)`

`
export default StyledWelcome
