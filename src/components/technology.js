import React, { useState, useEffect, useRef } from "react";

import { DiAws, DiGoogleCloudPlatform, DiCode, DiJava, DiNodejsSmall, DiPython, DiNodejs, DiReact, DiAngularSimple } from 'react-icons/di';
import { FaVuejs } from "react-icons/fa";
import { GiSpring } from 'react-icons/gi';

const Technology = ({ className }) => (
<div id="tech" className="content" style={{backgroundColor:`rgba(110,60,70,.95)`,color:`white`,border:`1px`,display:`flex`,
    flexDirection:`column`,justifyContent:`center`, alignItems:`center`, height:`100vh`}}>
  <h3>Some of the Tools we Use</h3><hr/>
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
);

export default Technology;