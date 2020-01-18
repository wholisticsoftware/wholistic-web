import React, { useState } from 'react';
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

import Badge from 'react-bootstrap/Badge'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

// <div style={{ backgroundImage: `url(./images/willow-creek.jpg)` }}>foobar baz</div>
              
const BizTech = ({ className }) => {
	const [projectType, setProjectType] = useState("unknown");
	const [projectSize, setProjectSize] = useState("unknown");
	const [techPref, setTechPref] = useState("unknown");
	const [stack, setStack] = useState("unknown");  // frontend, backend, fullstack
	const [tech, setTech] = useState([]);
	
	let addTech = (name) => { setTech([...tech, name ]); };

	return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "sun-tzu.jpg" }) {
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
        <div className={className} fluid={imageData} style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`,
			backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `top`, backgroundColor: `black`}}>
          <div id="questions" className="questions" style={{ maxWidth: `750px`, maxHeight: `350px`, display: `flex`, justifyContent: `center`, alignItems: `center`,
			  flexDirection: `column`, minWidth: `750px`}}>
			  
			  <div className="projectType">
				  <h2>{projectType === "unknown" ? 'Tell us, are you' : 'We are'}</h2>
				  <div className="options">
					<form>
					  <Badge pill variant="primary" className={projectType === "unknown" ? '' : (projectType === 'new' ? 'rotate-90' : 'collapse')}>
						<div className="form-check">
						  <label><input type="radio" name="react-tips" value="new"  className="form-check-input" 
							 checked={projectType==='new'} onClick={() => setProjectType('new')}/>Building New Software</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={projectType === "unknown" ? '' : (projectType === 'existing' ? 'rotate-90' : 'collapse')} >
						<div className="form-check">
						  <label><input type="radio" name="react-tips" value="existing"  className="form-check-input" 
							  checked={projectType==='existing'} onClick={() => setProjectType('existing')} />Maintaining/Expanding</label>
						</div>
					  </Badge><br />
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
					  </Badge><br />
					  <Badge pill variant="primary" className={projectSize === "unknown" ? '' : (projectSize === 'medium' ? 'rotate-90' : 'collapse')} >
						<div className="form-check">
						  <label><input type="radio" name="project-size" value="medium" className="form-check-input" 
							  checked={projectSize==='medium'} onClick={() => setProjectSize('medium')} />Medium</label>
						</div>
					  </Badge><br />
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
					  </Badge><br />
					  <Badge pill variant="primary" className={techPref === "unknown" ? '' : (techPref === 'no' ? 'rotate-90' : 'collapse')}>
						<div className="form-check">
						  <label><input type="radio" name="techPref" value="no" className="form-check-input" 
							  checked={techPref==='no'} onClick={() => setTechPref('no')} />No</label>
						</div>
					  </Badge><br />
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
			     <h2>Tell Us About the Tech You Use (or Want To Use)</h2>
			     <div className="options">
					<form>
					  <Badge pill variant="primary" className={tech.includes('react') ? 'rotate-90' : ''}>
						<div className="form-check">
						  <label><input type="checkbox" name="tech" value="react" className="form-check-input" 
							 checked={tech.includes('react')} onClick={() => addTech('react')}/>React</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={tech.includes('vue') ? 'rotate-90' : ''}>
						<div className="form-check">
						  <label><input type="checkbox" name="tech" value="vue" className="form-check-input" 
							  checked={tech.includes('vue')} onClick={() => addTech('vue')} />VueJS</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={tech.includes('angular') ? 'rotate-90' : ''}>
						<div className="form-check">
						  <label><input type="checkbox" name="tech" value="angular" className="form-check-input"
							  checked={tech.includes('angular')} onClick={() => addTech('angular')}/>Angular</label>
						</div>
					  </Badge>
					</form>
				  </div>
			     
			   </div>
			   <div className={(techPref === "unknown" || techPref==="yes") ? 'collapse' : ''}>GET https://api.insideview.com/api/v1/reference/industries</div>
          </div>
        </div>
      )
    }}
  />
)}
//style={{visibility: (projectType === "unknown" || projectType === "existing") ? '' : 'hidden'}}
//Tag="section" backgroundColor={`transparent`} 
const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome
