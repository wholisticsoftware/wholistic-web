import React, { useState, useEffect } from 'react';
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import BackgroundImage from 'gatsby-background-image';

import "./layout.css"

//import { Helmet } from "react-helmet";

//

// <div style={{ backgroundImage: `url(./images/oak-creek.jpg)` }}>foobar baz</div>
              
const BizTech = ({ className }) => {
	const [projectType, setProjectType] = useState("unknown");
	const [projectSize, setProjectSize] = useState("unknown");
	const [techPref, setTechPref] = useState("unknown");
	const [stack, setStack] = useState("unknown");  // frontend, backend, fullstack
	const [tech, setTech] = useState([]);
  const [otherTech, setOtherTech] = useState([]);
  
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  
  const [complete, setComplete] = useState(false);
  
  useEffect(() => {
    window.emailjs.init("user_4oDwty2PIsJhhdqS2Hyre")
  }, []);
  
	let addTech = (name) => { setTech([...tech, name ]); };

  const submitForm = () => {
    var templateParams = {
        from_name: email,
        to_name: 'sales@wholisticsoftware',
        message_html: `A contact from wholistic-web. email: ${email} phone: ${phone}
          <br>
          project type: ${projectType}
          project size: ${projectSize}
          tech pref: ${techPref}
          tech: ${tech}
          otherTech: ${otherTech}
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

	return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "oak-creek.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, speed: 500, cssEase: "linear" };
      return (
      <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
            style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, backgroundRepeat: `no-repeat`, 
        backgroundSize: `cover`, backgroundPosition: `bottom`, textAlign:`center`}}>
        {complete}
            <div id="questions" style={{ width: `100%`, maxHeight: `350px`, display: `flex`, justifyContent: `center`, alignItems: `center`,
          flexDirection: `column`, minWidth: `750px`, backgroundColor: `rgba(255,255,255,.5)`, borderTop: `2px solid grey`, borderBottom: `2px solid grey`, borderRadius:`0px 0px 0px 0px` }}>
          <div id="complete-msg" className={complete === true ? '' : 'collapse'} style={{paddingTop:`1em`}} >
            <h2 className="wholisticfont">Thanks!</h2>
          </div>
          <div className={complete === false ? 'questions' : 'collapse'}>
          <div className="projectType">
            <h2>{projectType === "unknown" ? 'Tell Us a Little About Your Project' : ''}</h2>
            <div className="options">
            <form>
              <Badge pill variant="primary" className={projectType === "unknown" ? '' : (projectType === 'new' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="react-tips" value="new"  className="form-check-input" 
                 checked={projectType==='new'} onClick={() => setProjectType('new')}/>Building New Software</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={projectType === "unknown" ? '' : (projectType === 'existing' ? 'rotate-90' : 'collapse')} >
              <div className="form-check">
                <label><input type="radio" name="react-tips" value="existing"  className="form-check-input" 
                  checked={projectType==='existing'} onClick={() => setProjectType('existing')} />Maintaining/Expanding</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={projectType === "unknown" ? '' : (projectType === 'both' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="react-tips" value="both" className="form-check-input"
                  checked={projectType==='both'} onClick={() => setProjectType('both')}/>
                Both/Not Sure
                </label>
              </div>
              </Badge>
            </form>
            </div>
           </div>
           <div className="projectSize" className={(projectType === "unknown") ? 'collapse' : ''}>
            <h2>{projectSize === "unknown" ? 'How Big Is It?' : ''}</h2>
            <div className="options">
            <form>
              <Badge pill variant="primary" className={projectSize === "unknown" ? '' : (projectSize === 'small' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="project-size" value="small" className="form-check-input" 
                 checked={projectSize==='small'} onClick={() => setProjectSize('small')}/>Small</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={projectSize === "unknown" ? '' : (projectSize === 'medium' ? 'rotate-90' : 'collapse')} >
              <div className="form-check">
                <label><input type="radio" name="project-size" value="medium" className="form-check-input" 
                  checked={projectSize==='medium'} onClick={() => setProjectSize('medium')} />Medium</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={projectSize === "unknown" ? '' : (projectSize === 'large' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="project-size" value="large" className="form-check-input"
                  checked={projectSize==='large'} onClick={() => setProjectSize('large')}/>Large</label>
              </div>
              </Badge>
            </form>
            </div>
           </div>
           <div className="techPref" className={(projectSize === "unknown") ? 'collapse' : ''}>
            <h2>{techPref === "unknown" ? "Do you have tech preference" : ""}</h2>
            <div className="options">
            <form>
              <Badge pill variant="primary" className={techPref === "unknown" ? '' : (techPref === 'yes' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="techPref" value="yes" className="form-check-input" 
                 checked={techPref==='yes'} onClick={() => setTechPref('yes')}/>Yes</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "unknown" ? '' : (techPref === 'no' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="techPref" value="no" className="form-check-input" 
                  checked={techPref==='no'} onClick={() => setTechPref('no')} />No</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "unknown" ? '' : (techPref === 'notsure' ? 'rotate-90' : 'collapse')}>
              <div className="form-check">
                <label><input type="radio" name="techPref" value="notsure" className="form-check-input"
                  checked={techPref==='notsure'} onClick={() => setTechPref('notsure')}/>Not Sure</label>
              </div>
              </Badge>
            </form>
            </div>
           </div>
           <div className="tech" className={(techPref === "unknown" || techPref === "no") ? 'collapse' : ''}>
             <h2>{techPref==="complete" ? '' : "Tell Us About the Tech You Use (or Want To Use)"}</h2>
             <div className="options">
            <form>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('react') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="react" className="form-check-input" 
                 checked={tech.includes('react')} onClick={() => addTech('react')}/>React</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('vue') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="vue" className="form-check-input" 
                  checked={tech.includes('vue')} onClick={() => addTech('vue')} />VueJS</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('angular') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="angular" className="form-check-input"
                  checked={tech.includes('angular')} onClick={() => addTech('angular')}/>Angular</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('java') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="java" className="form-check-input"
                  checked={tech.includes('java')} onClick={() => addTech('java')}/>Java</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('nodejs') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="nodejs" className="form-check-input"
                  checked={tech.includes('nodejs')} onClick={() => addTech('nodejs')}/>NodeJS</label>
              </div>
              </Badge>
              <Badge pill variant="primary" className={techPref === "complete" && !tech.includes('other') ? 'collapse' : ''}>
              <div className="form-check">
                <label><input type="checkbox" name="tech" value="other" className="form-check-input"
                  checked={tech.includes('other')} onClick={() => addTech('other')}/>&nbsp;</label>
                  <input type='text' value={otherTech} placeholder="Other Tech?" onChange={(e)=>setOtherTech(e.target.value)}></input>
              </div>
              </Badge>
              <Button onClick={() => setTechPref('complete')} className={techPref==="complete" ? 'collapse' : ''}>Done with Tech</Button>
            </form>
            </div>
            </div>
            <div className="contact" className={(techPref === "no" || techPref === "complete") ? '' : 'collapse'}>
             <h2>Got it. How do we get a hold of you?</h2>
             <div className="options" id="contact-form" style={{display:`flex`, flexLayout:`space-between`}}>
                <Badge pill variant="primary">
                  <label style={{paddingRight:`1em`}}><input type='email' value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input></label><br />
                </Badge>
                <Badge pill variant="primary">
                  <label><input type='tel' value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}></input></label><br/>
                </Badge>
                <Button onClick={submitForm}>Done!</Button>
             </div>
           </div>
          </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)}
//GET https://api.insideview.com/api/v1/reference/industries
//style={{visibility: (projectType === "unknown" || projectType === "existing") ? '' : 'hidden'}}
//Tag="section" backgroundColor={`transparent`} 
const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome
