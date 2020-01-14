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
          <div id="questions" style={{ maxWidth: `750px`, maxHeight: `350px`, display: `flex`, justifyContent: `center`, alignItems: `center`,
			  flexDirection: `column`, minWidth: `750px`}}>
			  
			  <div className="projectType">
				  <h2>{projectType === "unknown" ? 'Tell us, are you' : 'We are'}</h2>
				  <div className="options">
					<form>
					  <Badge pill variant="primary" className={(projectType === "unknown" || projectType === "new") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="react-tips" value="new" checked={false} className="form-check-input" 
							 checked={projectType==='new'} onClick={() => setProjectType('new')}/>Building New Software</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(projectType === "unknown" || projectType === "existing") ? '' : 'collapse'} >
						<div className="form-check">
						  <label><input type="radio" name="react-tips" value="existing" checked={false} className="form-check-input" 
							  checked={projectType==='existing'} onClick={() => setProjectType('existing')} />Maintaining/Expanding</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(projectType === "unknown" || projectType === "both") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="react-tips" value="both" checked={false} className="form-check-input"
							  checked={projectType==='both'} onClick={() => setProjectType('both')}/>
							Both/Not Sure
						  </label>
						</div>
					  </Badge>
					</form>
				  </div>
			   </div>
			   <div className="projectSize" className={(projectType === "unknown") ? 'collapse' : ''}>
				  <h2>{projectSize === "unknown" ? 'How Big Is It?' : 'It\'s'}</h2>
				  <div className="options">
					<form>
					  <Badge pill variant="primary" className={(projectSize === "unknown" || projectSize === "small") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="project-size" value="small" checked={false} className="form-check-input" 
							 checked={projectType==='small'} onClick={() => setProjectSize('small')}/>Small</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(projectSize === "medium" || projectSize === "medium") ? '' : 'collapse'} >
						<div className="form-check">
						  <label><input type="radio" name="project-size" value="medium" checked={false} className="form-check-input" 
							  checked={projectType==='medium'} onClick={() => setProjectSize('medium')} />Medium</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(projectSize === "large" || projectSize === "large") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="project-size" value="large" checked={false} className="form-check-input"
							  checked={projectSize==='large'} onClick={() => setProjectSize('large')}/>Large</label>
						</div>
					  </Badge>
					</form>
				  </div>
			   </div>
			   <div className="techPref" className={(projectSize === "unknown") ? 'collapse' : ''}>
				  <h2>Do you have tech preference:</h2>
				  <div className="options">
					<form>
					  <Badge pill variant="primary" className={(techPref === "unknown" || techPref === "new") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="techPref" value="yes" checked={false} className="form-check-input" 
							 checked={projectType==='yes'} onClick={() => setTechPref('yes')}/>Yes</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(techPref === "unknown" || techPref === "existing") ? '' : 'collapse'} >
						<div className="form-check">
						  <label><input type="radio" name="techPref" value="no" checked={false} className="form-check-input" 
							  checked={projectType==='no'} onClick={() => setTechPref('no')} />No</label>
						</div>
					  </Badge><br />
					  <Badge pill variant="primary" className={(techPref === "unknown" || techPref === "both") ? '' : 'collapse'}>
						<div className="form-check">
						  <label><input type="radio" name="techPref" value="notsure" checked={false} className="form-check-input"
							  checked={projectType==='notsure'} onClick={() => setTechPref('notsure')}/>Not Sure</label>
						</div>
					  </Badge>
					</form>
				  </div>
			   </div>
			   <div className="tech" className={(techPref === "unknown" || techPref==="no") ? 'collapse' : ''}>Tell Us About the Tech You Use (or Want To Use):</div>
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
