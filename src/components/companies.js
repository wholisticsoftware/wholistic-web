import React, { useState, useEffect, useRef } from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

//import IbmLogo from "../images/ibm-logo.png";

import IbmLogo from "../svg/ibm.svg";
import CiscoLogo from "../svg/cisco-logo.svg";
import DeloitteLogo from "../svg/Deloitte.svg";
import PacLifeLogo from "../svg/logo-pacific-life.svg";
import ActLogo from "../svg/ACT_logo.svg";
import NorthernTrustLogo from "../svg/northern-trust-logo.svg";
import ProlificsLogo from "../svg/prolifics-logo.svg";

//import Slider from "react-slick";

import { FaChevronDown } from 'react-icons/fa';

const Technology = ({ className, onScroll }) => {
  //const settings = {dots: false,infinite: true,slidesToShow: 1,slidesToScroll: 1,autoplay: true,fade: true,speed: 300 };  //, cssEase:

  return (
  <div id="companies" className="content" style={{backgroundColor:`rgba(50,50,75,.95)`,color:`white`,border:`1px`,display:`flex`,
    flexDirection:`column`,justifyContent:`space-between`, alignItems:`center`, height:`100vh`}}>
    <div>&nbsp;</div>
    <div style={{height:`300px`}}>
      <h3>Some Companies We've Worked With</h3><hr/>
      <div style={{display:`flex`, flexDirection:`row`, justifyContent:`space-between`}}>
        <IbmLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/>
        <CiscoLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/>
        <ActLogo id="actLogo" style={{maxWidth: `150px`, maxHeight:`75px`}} />
        <PacLifeLogo style={{maxWidth: `125px`}}/>
      </div>
      <div style={{display:`flex`, flexDirection:`row`, minHeight:`300px`, justifyContent:`space-around`}}>
        <ProlificsLogo style={{maxWidth: `125px`}}/>
        <DeloitteLogo style={{maxWidth: `75px`, maxHeight:`30px`}} />
        <NorthernTrustLogo style={{maxWidth: `75px`, maxHeight:`75px`}} />
      </div>
    </div>
    <FaChevronDown style={{cursor:`pointer`}} onClick={onScroll ? onScroll : console.log('ignore')}/>
  </div>
)};

export default Technology;

/*

<div>
    <h3>Some Companies We've Worked With</h3><hr/>
    <ul style={{columns: `4`, textAlign:`left`, maxWidth:`375px`, listStyle: `none`}}>
    <li><IbmLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/></li>
    <li><CiscoLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/></li>
    <li><ActLogo id="actLogo" style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    <li><PacLifeLogo style={{maxWidth: `125px`}}/></li>
    <li>Prolifics</li>
    <li><DeloitteLogo style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    <li><NorthernTrustLogo style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    </ul>
  </div>
*/