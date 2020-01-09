import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import LeftBrace from "../svg/left-brace2.svg";
import RightBrace from "../svg/right-brace2.svg";

import Slider from "react-slick";

import "./layout.css"

function Wholistic(props) {
  return (
    <div className="wholistic-outer" style= {{ }} >
        <LeftBrace />
          <span className='wholistic-inner' style={{}}>
            <div className='wholisticfont'  style={{}}>Wholistic</div>
            <div className='softwarefont' style={{}}>Software</div>
          </span>
        <RightBrace />
    </div>
  )
}
export default Wholistic
