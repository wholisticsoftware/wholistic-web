import React, { useState } from "react";
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";

import Technology from '../components/technology.js';
import Companies from '../components/companies.js'; 

//GiMechanicGarage FaChevronDown
import { GiMechanicGarage } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import BackgroundImage from 'gatsby-background-image';
import Button from 'react-bootstrap/Button';

import "./layout.css";

const Quote = ({ className }) => {
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
	    if (window) console.info("woHeight: " + fcHeight);
		  window.scroll({ top: (fcHeight), left: 0, behavior: 'smooth' });
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
        <BackgroundImage className="quote" Tag="section" fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`, paddingTop:`7em`, backgroundOrigin:`bottom`}}>
          
                <hr/>
                <div className="content" style={{backgroundColor:`rgba(223,241,248,.95)`,width:`auto`, display:!complete ? "" : "none" }}>
                  <h2 className="wholisticfont" style={{color:`rgb(56,80,107)`}}>Get a Quote</h2>
                  <GiMechanicGarage style={{width:`80px`, height:`80px`,marginTop:`1em`, marginBottom:`1em`}}/>
                  <p className="softwarefont">No Project too Big or Small</p>
                
                  <form style={{display:'flex', flexDirection:`column`, maxWidth:`100%`, justifyContent:`center`, alignItems:`center`}}>
                    <textarea placeholder="What are you working on?" value={body} 
                      onChange={(e) => setBody(e.target.value)} style={{marginBottom:`.5em`,width:`300px`}}></textarea>
                    <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email} style={{marginBottom:`.5em`,width:`300px`}}></input>
                    <Button className="go-button" style={{width:`300px`}} onClick={submitForm}>GO</Button>
                  </form>

                  <a className="softwarefont" style={{cursor:`pointer`}} onClick={scrollNext}>Learn More</a><br/>
                  <FaChevronDown style={{cursor:`pointer`}} onClick={scrollNext}/>
                </div>
                <div className="content" style={{display:complete ? "" : "none"}}>
                  <p>Message Received</p>
                  <h2 className="wholisticfont">Thanks!</h2>
                </div>
                <hr/>
                <Technology onScroll={() => techScroll()}></Technology> 
                <hr/><hr/>
                <Companies onScroll={() => compScroll()}></Companies>
                <hr/>
                <hr/>
        </BackgroundImage>
      )
    }}
  />
)}

export default Quote

/*

<div>
                
                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p><hr/>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p><hr/>
                </div>
                
                */
