import React, { useState, useEffect, useRef } from "react";

import { DiAws, DiGoogleCloudPlatform, DiCode, DiJava, DiNodejsSmall, DiPython, DiNodejs, DiReact, DiAngularSimple } from 'react-icons/di';
import { FaVuejs } from "react-icons/fa";
import { GiSpring } from 'react-icons/gi';

import { FaChevronDown } from 'react-icons/fa';

const Technology = ({ className, onScroll }) => (
<div id="tech" className="content" style={{backgroundColor:`rgba(110,60,70,.95)`,color:`white`,border:`1px`,display:`flex`, height:"80vh",
    flexDirection:`column`,justifyContent:`space-between`, alignItems:`center`}}>
    <div>&nbsp;</div>
    <div>
  <h3 style={{textAlign:'center'}}>Some of the Tools we Use</h3><hr/>
  <ul style={{columns: `3`, textAlign:`left`, maxWidth:`375px`, listStyle: `none`}}>
  <li><DiAws style={{fontSize:`2em`}} /> AWS</li>
  <li><DiGoogleCloudPlatform style={{fontSize:`2em`}} /> GCP</li>
  <li><DiCode style={{fontSize:`2em`}}/> blueMix</li>
  <li><DiJava style={{fontSize:`2em`}} /> Java</li>
  <li><DiNodejsSmall style={{fontSize:`2em`}} /> Node</li>
  <li><DiPython style={{fontSize:`2em`}} /> Python</li>
  <li><GiSpring style={{fontSize:`2em`}}/>Spring Framework</li>
  <li><DiNodejsSmall style={{fontSize:`2em`}} /> Express</li>
  <li><DiNodejsSmall style={{fontSize:`2em`}} /> Koa</li>
  <li><DiReact style={{fontSize:`2em`}} /> React</li>
  <li><FaVuejs style={{fontSize:`2em`}} /> VueJS</li>
  <li><DiAngularSimple style={{fontSize:`2em`}} /> Angular</li>
  </ul>
  </div>
  <FaChevronDown style={{cursor:`pointer`}} onClick={onScroll ? onScroll : console.log('ignore')}/>
</div>
);

export default Technology;
// clipPath: `polygon(0 0, 100% 0, 100% 96%, 0 100%)`,

//<a className="softwarefont" style={{cursor:`pointer`}}>(Try The Project Builder)</a><br/>
