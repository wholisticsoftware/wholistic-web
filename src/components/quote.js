import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Icon from "../svg/wholistic-logo-tight.svg";

import Popup from "./popup";

import Technology from '../components/technology.js';
import Companies from '../components/companies.js';

//GiMechanicGarage FaChevronDown
import { GiMechanicGarage } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';
import { MdPhoneInTalk, MdDeveloperMode } from 'react-icons/md';
import {IoIosBusiness, IoIosCloudOutline, IoIosPeople} from 'react-icons/io';

import BackgroundImage from 'gatsby-background-image';
import Button from 'react-bootstrap/Button';

import "./layout.css";

const Quote = ({ className }) => {
  useEffect(() => {
    if (window) window.emailjs.init("user_4oDwty2PIsJhhdqS2Hyre")
  }, []);

  const [email, setEmail] = useState();
  const [body, setBody] = useState();
  const [complete, setComplete] = useState(false);
  // TODO: The below scroll handlers are brittle
  const techScroll = () => {
    scrollNext(null, "companies");
  }
  const compScroll = () => {
    scrollNext(null, "builder");
  }
  const submitForm = () => {
    var templateParams = {
        from_name: email,
        to_name: 'sales@wholisticsoftware',
        message_html: `A contact from wholistic-web (quote). email: ${email}
          <br>
          body: ${body}
        `
    };
    window.emailjs.send(
        'default_service', // default email provider in your EmailJS account
        'template_p7ivdTfl',
        templateParams
      ).then(res => {
        this.setState({ formEmailSent: true })
      }).catch(err => console.error('Failed to send feedback. Error: ', err));
      setComplete(true);
  }
  let scrollNext = (e, whereTo="tech") => {
    console.info(`Scrolling to domnode with id=${whereTo}`);
    //console.info("BEGIN onWelcomeClick(): " + e.target);
	  let firstComponent = document.getElementById(whereTo);
	  console.info("BEGIN scrollNext(): " + firstComponent);
	  if (firstComponent){
	    let fcHeight = firstComponent.offsetTop;
	    console.error("a woHeight: " + fcHeight);
	    if (window) {
        console.info("woHeight: " + fcHeight);
        window.scroll({ top: (fcHeight), left: 0, behavior: 'smooth' });
      }
	  }
  }
  return (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "amsterdam.jpg" }) {
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
        <div className="plan" style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`,
            backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`,
            backgroundOrigin:`bottom`, backgroundColor:"#bbe1fa"}}>
             <div>
              <Icon style={{maxWidth:"45%", maxHeight:'100px', margin: "2em"}}/>
             </div>
             {complete ? 
               <div>Message Received, thanks.</div>
               :
               <form style={{display:'flex', flexDirection:`column`, maxWidth:`100%`, justifyContent:`center`, alignItems:`center`}}>
                 <textarea placeholder="What are you working on?" value={body}
                   onChange={(e) => setBody(e.target.value)} style={{marginBottom:`.5em`,width:`300px`}}></textarea>
                 <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email} style={{marginBottom:`.5em`,width:`300px`}}></input>
                 <Button className="go-button" style={{width:`300px`}} onClick={submitForm}>GO</Button>
                 <a href="#" style={{fontSize:'8px'}} onClick={
                   (e) => { 
                     e.preventDefault(); 
                     alert("Wholistic does not discuss your business with anyone else. Ever. Nor do we sell information. We send out an occasional newsletter covering the tech industry."); return false; }
                 }>Privacy Policy</a>
                 
               </form>
              }
        </div>
      )
    }}
  />
)}

export default Quote


/*

<Accordion style={{width:"95%"}}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <IoIosBusiness style={{fontSize:"3em"}}/>
                    <p>Technology Business Planning</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>We help founders and execs formulate effective technology strategy to implement business objectives.
                      <br/>
                      <a href="">Contact</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <IoIosCloudOutline style={{fontSize:"3em"}}/> <p>Software Architecture</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Software Architecture is the bridge between business and tech. The high level vision of technology, staffing and specs are
                     the most important technology artifacts in a software project.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <MdDeveloperMode style={{fontSize:"3em"}}/> <p>Coding and Development</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>We've built every imaginable kind of software, since 1999. Tools have improved. We love the cloud.
                    But the SAME DAMN MISTAKES are still made, again and again.
                    Don't cut corners on your coding. Get people who care and know what they are doing. Wholistic.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <IoIosPeople style={{fontSize:"3em"}}/> <p>Staffing</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>We are a custom software shop, and we can handle a great deal with our remote-flex team style.  Sometimes,
                    you need even more help. Maybe you need some fulltime people to carry on the work.
                    We'll hook you up with some of the best industry resources, period.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              */

/*
<BackgroundImage className="quote" Tag="section" fluid={imageData} backgroundColor={`transparent`}
  style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`, paddingTop:`7em`, backgroundOrigin:`bottom`}}>

<div>

                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p><hr/>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p><hr/>
                </div>

                */
