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
  const settings = {
	  dots: true,
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  speed: 750,
	  cssEase: "linear"
  };
  return (
    <div className="wholistic-outer" id="wholistic-outer" style= {{ }} >
        <LeftBrace />
          <Slider {...settings} className="wholistic-slider-container">
              <span className='wholistic-inner' style={{}}>
				<div className='wholisticfont'  style={{}}>Software is</div>
				<div className='deutschfont' style={{}}>Complex</div>
			  </span>
			  <span className='wholistic-inner' style={{}}>
				<div className='wholisticfont'  style={{}}>We Make It</div>
				<div className='softwarefont' style={{}}>Simple</div>
			  </span>
			  <span className='wholistic-inner' style={{}}>
				<div className='wholisticfont'  style={{}}>Wholistic</div>
				<div className='softwarefont' style={{}}>Systems</div>
			  </span>
			  <span className='wholistic-inner' style={{}}>
			    <div className='softwarefont' style={{}}>Find Your</div>
			    <div>&nbsp;</div>
			    <div className='wholisticfont'  style={{}}>Solution</div>
			    <div>&nbsp;</div>
			    <div className='wholistic-arrow'><FontAwesomeIcon icon={faChevronDown} /></div>
			  </span>
          </Slider>
        <RightBrace />
    </div>
  )
}
export default Wholistic
//  &raquo; &rsaquo; &darr;
