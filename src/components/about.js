import React, { useState, useEffect, useRef } from "react";
//import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby";


import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import BackgroundImage from 'gatsby-background-image';

//import Scrollable from "../components/scrollable/scrollable";

import Welcome from "../components/welcome"
import Wholistic from "../components/wholistic"
//import BizTech from "../components/business-tech"
import Philosophy from "../components/philosophy"

const About = () => {
  return (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "guitar4.jpg" }) {
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
        <BackgroundImage className="quote" Tag="section" fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height:`100vh`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`left`, flexDirection:`column`, paddingTop:`7em`, backgroundOrigin:`bottom`}}>
          <div style={{padding: `10rem`}}>
      <h2>About this Website</h2>
      <div style={{backgroundColor:`rgba(255,255,255,.9)`}}>
        <h3>Photographs</h3>
        <p>The shot of the river on this website comes from the extraordinary nature photography of Jane Palmer: janepalmerphotography.com</p>
        <p>In addition to photography, Jane is passionate about Horse Rescue: <a href="http://www.equineadoption.com/">Equestrian Rescue Foundation.</a></p>
      </div>
      <hr/>
      <div style={{backgroundColor:`rgba(255,255,255,.9)`}}>
        <h3>Development</h3>
        <p>Some of the work on this UI was done by Dominic Gerweck, of Verden (Aller), Deutschland.</p>
        <p>dominic-gerweck.de | @Doger83_Dev</p>
      </div>
        <hr/>
        <p>This page uses Gatsby, on top of React.</p>
        <p>See something you think could be better?</p>
        <p>Awesome, Build it! https://github.com/wholisticsoftware/wholistic-web</p>
    </div>
        </BackgroundImage>
      )
    }}
  />
)}
  
export default About;
/*
const About = () => {
  const wholisticComponent = useRef(null);
  const [showBrand, setShowBrand] = useState(true);
  useEffect(() => { 
    function handleScroll() {
      //setScrollPosition(getScroll())
      let scrollY = window.scrollY;
      //console.log("Scroll: " + scrollY);
      if (scrollY > 1){
		let wholisticOuter = document.getElementById("wholistic-outer");
		if (wholisticOuter){
		  let woHeight = wholisticOuter.scrollHeight;
		  //console.log("wholisticComponent: " + wholisticOuter.scrollHeight);
		  if (scrollY >= (woHeight - 100)){
	        setShowBrand(true);
		  } else {
			setShowBrand(false);
		  }
		}
	  }
    }
	if (window){
	  console.log("window: " + window);
	  window.addEventListener('scroll', handleScroll);
	}
	return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  let onWelcomeClick = () => {
    console.info("BEGIN onWelcomeClick()");
	let wholisticOuter = document.getElementById("wholistic-outer");
	if (wholisticOuter){
	  let woHeight = wholisticOuter.scrollHeight;
	  console.error("a woHeight: " + woHeight);
	  if (window)
	    console.info("woHeight: " + woHeight);
		window.scroll({
		  top: (woHeight), 
		  left: 0, 
		  behavior: 'smooth'
		});
	  }
  }
  return (
    <div style={{padding: `10rem`}}>
      <h2>About this Website</h2>
      <h3>Photographs</h3>
      <p>The shot of the river on this website comes from the extraordinary nature photography of Jane Palmer: janepalmerphotography.com</p>
      <p>In addition to photography, Jane is passionate about Horse Rescue: <a href="http://www.equineadoption.com/">Equestrian Rescue Foundation.</a></p>
      <hr/>
      <h3>Development</h3>
      <p>Some of the work on this UI was done by Dominic Gerweck, of Verden (Aller), Deutschland.</p>
      <p>dominic-gerweck.de | @Doger83_Dev</p>
      <hr/>
      <p>This page uses Gatsby, on top of React.</p>
      <p>See something you think could be better?</p>
      <p>Awesome, Build it! https://github.com/wholisticsoftware/wholistic-web</p>
    </div>
)}


*/
/*
 * 
 * -componentDidMount() {
+useEffect(() => {
   axios
     .get(
       "https://gist.githubusercontent.com/witalewski/fc8f043d53a0d505f84c5ddb04ae76ea/raw/7c505bbc1675a0bc8a067f8b633b531c769bb64c/data.json"
     )
     .then(({ data }) => {
-      this.setState({ todos: data });
-      this.setState({ nextTodoId: data.length });
+      setTodos(data);
+      setNextTodoId(data.length);
     });
+}, []);
-}
* */
