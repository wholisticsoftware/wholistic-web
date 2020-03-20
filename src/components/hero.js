import React, { useEffect, useState } from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import microservices from '../images/microservices.png';
import suntzu from '../images/SunTzu.jpg';
import modernui from '../images/ui.jpeg';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Quote from '../components/quote.js';

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
  "Fully Remote, Fully Capable", "Deep Technology Expertise", "Simple, Efficient, Reliable"
];
const texts = [
  "15 years of delivering exceptional teamwork and software to projects of every size and scope.",
  "We are published experts in building modern web apps. From JavaScript to devOps, from Cloud Platforms to NoSQL.",
  "Our mission is to be the simplest way for you to get the software services you need."
]
const buttonTexts = [
  "Learn More",
  "Check it Out",
  "Contact Us"
];

const Welcome = ({ className, onWelcomeClick, id, data, expandState }) => {
  const [banner, setBanner] = React.useState("We Know Remote");
  const [bannerX, setBannerX] = React.useState(0);
  const [adjIndex, setAdjIndex] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);
  const [scale, setScale] = React.useState(1);
  const [text, setText] = React.useState("Our mission is to be the simplest way for you to get the software services you need.");
  const [buttonText, setButtonText] = React.useState("Simple, Efficient, Reliable");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => { e.preventDefault(); setShow(true); return false;}

  useEffect(() => {
    let interval = setInterval(function () {
      setAdjIndex(adjIndex + 1);
      setOpacity(0);
      setScale(.95);
      setBannerX(40);
      let timeout = setTimeout(function () {
        setBanner(adjectives[adjIndex % adjectives.length]);
        setText(texts[adjIndex % texts.length]);
        setButtonText(buttonTexts[adjIndex % buttonTexts.length]);
        console.log("adj: " + adjectives[adjIndex % adjectives.length]);
        setOpacity(1);
        setScale(1);
        setBannerX(0);
      }, 1250)

    }, 2500)
    return () => {
      clearInterval(interval);
      //clearTimeout(timeout);
    };
  });

  return (
    <motion.div className="hero" style={{ backgroundPosition: "left", backgroundSize: "contain", backgroundColor: "black" }}
      initial={{ height: 0 }} transition={{ delay: .33 }}
      animate={{ height: expandState ? '' : 0 }}>
      <motion.h1 animate={{ opacity: opacity, x: bannerX }} transition={{ duration: 1.25 }}>{banner}</motion.h1>
      <article>
        <p>{text}</p>
        <a href="#" onClick={handleShow}>{buttonText}</a>
      </article>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body><Quote /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  )
}

const StyledWelcome = styled(Welcome)`

`
export default StyledWelcome
