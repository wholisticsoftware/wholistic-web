import React, {useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Frame, Scroll } from "framer";
import { motion, useMotionValue } from "framer-motion";
import BackgroundImage from 'gatsby-background-image';

import Icon from "../svg/wholistic-logo-tight.svg";

import Header from "./header2"
import "./layout.css"
import Popup from "./popup"

import { IoLogoLinkedin } from 'react-icons/io';

const Layout = ({ children, showBrand, brandClass, navBaseClass, parentData, onLogoClick }) => {
  const layoutRef = useRef();
  let [logoScale, setLogoScale] = useState(1);
  let [logoPosition, setLogoPosition] = useState("inherit");
  let [navTop, setNavTop] = useState("auto");
  let [navHeight, setNavHeight] = useState("100vh");
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }      
    }
  `)
  let navClick = (e) => {
    setNavHeight("15vh");
    if (onLogoClick) {
      onLogoClick();
    }
    //console.log("layoutRef.current.parentNode: " + layoutRef.current.parentNode);
    layoutRef.current.parentNode.style.overflow = "inherit";
  }
  useEffect(() => {
    function handleScroll() {
      navClick();
    }
    if (window){
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  let onScroll = (info) => {/*
    console.log("point: " + info.point.y);
    console.log("offset: " + info.offset.y);
    console.log("delta: " + info.delta.y);
    console.log("logoScale: " + logoScale);

    let logoNode = logoRef.current.childNodes[0].childNodes[0];
    let logoOffset = logoNode.getBoundingClientRect().y;
    console.log("logoRef: " + logoOffset);

    if (logoOffset <= 6){
      setLogoPosition("fixed");
      setNavTop(0);
    }

    if (info.offset.y < 0){
        if (logoScale > .25) setLogoScale(logoScale-.05);
      } else {
        if (logoScale < 1) setLogoScale(logoScale+.05);
      }
    */} 
  /*
<BackgroundImage id="breweries" className="breweries" Tag="section" fluid={parentData.logo.childImageSharp.fluid} 
          backgroundColor="white" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `contain`, backgroundPosition: `bottom`, textAlign:`center`}}>
        </BackgroundImage>
  */
  /*
          <BackgroundImage id="logo" Tag="section" fluid={fluid={parentData.guitar.childImageSharp.fluid} backgroundColor={`transparent`} 
            style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
        backgroundSize: `cover`, backgroundPosition: `bottom`, textAlign:`center`}}>
        */
  return ( 
    <div className="layout1" style={{}} ref={layoutRef}>
      <motion.nav id="behind-nav" style={{top:0, left: 0, width:'100vw',height:navHeight}} animate={{height:navHeight}}></motion.nav>
      <motion.nav id="nav" style={{backgroundColor:'white',position:"fixed", top:0, left: 0, width:'100vw',height:navHeight, textAlign:"center",
          display: 'flex', display: `flex`, justifyContent: `center`, alignItems: `center`}}
          onClick={navClick} animate={{height:navHeight, scale:1}} initial={{scale:0}}>
        <Icon id="foo" style={{height:'50%', minHeight:'10vh', maxWidth:'70%', paddingTop: "10px", paddingBottom: "10px"}} />
        {/*<BackgroundImage id="logo" className="logo" Tag="section" fluid={parentData.logo.childImageSharp.fluid} 
          backgroundColor="white" style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `contain`, backgroundPosition: `center`, textAlign:`center`}}>
        </BackgroundImage>
        */}
      </motion.nav>
      <main style={{width:'100%'}}>{children}</main>
      <footer>
        <span>&copy; 2020. Wholistic. Built with Gatsby and Framer.</span>&nbsp;&nbsp;
        <span style={{fontSize:'20px'}}><a href="https://www.linkedin.com/company/wholistic-software-llc"><IoLogoLinkedin /></a></span>
      </footer>
    </div>
  )
}
//<Scroll height="100vh" width="100vw" style={{ overflow:"visible"}} onScroll={onScroll}>
//<Header siteTitle={data.site.siteMetadata.title} showBrand={showBrand} brandClass={brandClass} navBaseClass={navBaseClass}/>
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


/*
<Scroll height="100vh" width="100vw" style={{backgroundColor:"orange"}} onScroll={onScroll}>
      <Header />
      <header>
      <motion.nav ref={logoRef} style={{height:'100vh',width:'100vw', textAlign:'center', position:logoPosition, top:{navTop}}} 
          animate={{scale:logoScale}} initial={{scale:0}}>
        <Icon id="foo" style={{width:'75%'}} />
      </motion.nav>
      <div className="nav-divider" style={{backgroundColor:"#0f4c75", height:`3px`, width:'100%'}}></div>
      </header>
      <main style={{width:'100%'}}>{children}</main>
      <footer>
        <span>&copy; 2020. Wholistic. Built with Gatsby and Framer.</span>&nbsp;&nbsp;
        <span style={{fontSize:'20px'}}><a href="https://www.linkedin.com/company/wholistic-software-llc"><IoLogoLinkedin /></a></span>
      </footer>
      </Scroll>

  */

  //      {/*<Popup />*/}




  /* scroll for framer scroll
  let onScroll = (info) => {
    console.log("point: " + info.point.y);
    console.log("offset: " + info.offset.y);
    console.log("delta: " + info.delta.y);
    console.log("logoScale: " + logoScale);

    let logoNode = logoRef.current.childNodes[0].childNodes[0];
    let logoOffset = logoNode.getBoundingClientRect().y;
    console.log("logoRef: " + logoOffset);

    if (logoOffset <= 6){
      setLogoPosition("fixed");
      setNavTop(0);
    }

    if (info.offset.y < 0){
        if (logoScale > .25) setLogoScale(logoScale-.05);
      } else {
        if (logoScale < 1) setLogoScale(logoScale+.05);
      }
    } 
    */

    /*

    let onScroll = (event) => {
    let scrollTop = window.scrollY, minHeight = 30, logoHeight = Math.max(minHeight, 200 - scrollTop);
    console.log("scrolling: " + logoHeight);
    setNavHeight(logoHeight+"vh");
  }
  useEffect(() => {
    if (window){
      window.addEventListener('scroll', onScroll);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  */