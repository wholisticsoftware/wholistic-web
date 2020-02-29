import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import LeftBrace from "../svg/left-brace2.svg";
import RightBrace from "../svg/right-brace2.svg";

import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "./layout.css"

function Wholistic(props) {
  function clickWelcome(){
	  if (props.onWelcomeClick){
		  props.onWelcomeClick();
	  }
  }
  const settings = {dots: false,infinite: false,slidesToShow: 1,slidesToScroll: 1,autoplay: true,fade: true,speed: 500 };  //, cssEase: "linear"
  return (
    <div className="wholistic-outer" id="wholistic-outer" style= {{ }} >
        <LeftBrace style={{opacity: 0}}/>
          <Slider {...settings} className="wholistic-slider-container">
              <span className='wholistic-inner' style={{}}>
				<div className='wholisticfont'  style={{}}>Software is</div>
        <div>&nbsp;</div>
				<div className='complexfont' style={{ fontSize: `50px`}}>complex</div>
			  </span>
			  <span className='wholistic-inner' style={{}}>
				<div className='softwarefont'  style={{}}>We Make It</div>
				<div>&nbsp;</div>
				<div className='wholisticfont' style={{}}>Simple</div>
			  </span>
			  <span className='wholistic-inner' style={{}}>
			    <div className='softwarefont' style={{}}>Find Your</div>
			    <div>&nbsp;</div>
			    <div className='wholisticfont'  style={{}}>Solution</div>
			    <div>&nbsp;</div>
			    <div className='wholistic-arrow' onClick={clickWelcome}><FontAwesomeIcon icon={faChevronDown} /></div>
			  </span>
          </Slider>
        <RightBrace style={{opacity: 0}}/>
    </div>
  )
}
export default Wholistic
//  &raquo; &rsaquo; &darr;

/*
<span className='wholistic-inner' style={{}}>
				<div className='wholisticfont'  style={{}}>Wholistic</div>
				<div className='softwarefont' style={{}}>Systems</div>
			  </span>
*/
