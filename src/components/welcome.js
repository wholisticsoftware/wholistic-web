import React, {useEffect} from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

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

const adjectives = [
  "Development Solutions", "Published Expertise", "Strategic Consultation"
];
const texts = [
   "Need some heavy lifting? Efficient and focused software development at the scale you need.",
   "Published expertise in the state-of-the-art, from JavaScript to devOps.",
   "Action without adaquate strategy is the number 1 cause of software project failure."
]
const buttonTexts = [
  "We Got Your Back",
  "Read Some Articles",
  "Get a free Consultation"
];
//https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
//https://www.schemecolor.com/soft-neutrals.php
//https://www.npmjs.com/package/react-text-transition
const Welcome = ({ className, onWelcomeClick, id, data }) => {
	const [banner, setBanner] = React.useState("Strategic Consultation");
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

//border: solid aliceblue 3px;
//<motion.span animate={{ opacity: opacity }} transition={{ duration: 1 }}>{adjective}</motion.span>
    return (
      <div id={id} Tag="section" className="welcome" style={{}}>
          <main class="wrapper">
            <section class="breweries" id="breweries">
              <ul>
                <li>
                  <figure>
                    <img src={microservices} alt="Several hands holding beer glasses" />
                    <figcaption><h3>What is Microservice Architecture?</h3></figcaption>
                  </figure>
                  <p>
                    Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?
                  </p>
                  <a href="#">Visit Website</a>
                </li>
                <li>
                  <figure>
                    <img src={suntzu} alt="Art of War" />
                    <figcaption><h3>Software Strategy</h3></figcaption>
                  </figure>
                  <p>
                    "'Weeks of coding can save you hours of strategizing.'"
                  </p>
                  <a href="#">Visit Website</a>
                </li>
                <li>
                  <figure>
                    <img src={modernui} alt="React, Angular and VueJS logos" />
                    <figcaption><h3>Modern JS Frameworks Explained</h3></figcaption>
                  </figure>
                  <p>
                    https://medium.com/@matthewcarltyson/modern-ui-explained-in-4-paragraphs-and-2-pictures-2494042b3847
                  </p>
                  <a href="#">Visit Website</a>
                </li>
              </ul>
            </section>
          </main>



          <div style={{backgroundColor:'#796465'}}>Wholistic Software delivers high-impact software strategy.</div>
          <div style={{backgroundColor:'#796465'}}>Technical Articles</div>
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
