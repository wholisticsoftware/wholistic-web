import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import LeftBrace from "../svg/left-brace2.svg";
import RightBrace from "../svg/right-brace2.svg";

//import Slider from "react-slick";

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
