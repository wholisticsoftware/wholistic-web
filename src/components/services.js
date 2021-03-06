import React, { useState } from "react";
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'


import Technology from '../components/technology.js';
import Companies from '../components/companies.js';
import Quote from '../components/quote.js';

//GiMechanicGarage FaChevronDown
import { GiMechanicGarage } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';
import { MdPhoneInTalk, MdDeveloperMode } from 'react-icons/md';
import { IoIosBusiness, IoIosCloudOutline, IoIosPeople } from 'react-icons/io';

import BackgroundImage from 'gatsby-background-image';
import Button from 'react-bootstrap/Button';

import "./layout.css";

const Services = ({ className }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => { e.preventDefault(); setShow(true); return false;}
  return (
    <div className="services">
      <Accordion style={{ width: "100%" }}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <IoIosBusiness style={{ fontSize: "3em" }} />
              <p>Technology Business Planning</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>We help founders and execs formulate effective technology strategy to implement business objectives.
              <br />
              <a href="#" onClick={handleShow}>Contact Us</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <IoIosCloudOutline style={{ fontSize: "3em" }} /> <p>Software Architecture</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Software Architecture is the bridge between business and tech. The high level vision of technology, staffing and specs are
            the most important technology artifacts in a software project.<br/>
            <a href="#" onClick={handleShow}>Contact Us</a>
            </Card.Body>

          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <MdDeveloperMode style={{ fontSize: "3em" }} /> <p>Coding and Development</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>We've built every imaginable kind of software, since 1999. Tools have improved. We love the cloud.
            But the SAME MISTAKES are still made, again and again.
            Don't cut corners on coding. Get people who care and know what they are doing.<br></br>
            <a href="#" onClick={handleShow}>Contact Us</a>
            </Card.Body>

          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <IoIosPeople style={{ fontSize: "3em" }} /> <p>Staffing</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>We are a custom software shop, and we can handle a great deal with our remote-flex team style.  Sometimes,
            you need even more help. Maybe you need some fulltime people to carry on the work.
            We'll hook you up with some of the best industry resources, period.<br></br>
            <a href="#" onClick={handleShow}>Contact Us</a>

            </Card.Body>

          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Wholistic</Modal.Title>
        </Modal.Header>
        <Modal.Body><Quote /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default Services

/*
<BackgroundImage className="quote" Tag="section" fluid={imageData} backgroundColor={`transparent`}
  style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`, paddingTop:`7em`, backgroundOrigin:`bottom`}}>

<div>

                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p><hr/>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p><hr/>
                </div>

                */
