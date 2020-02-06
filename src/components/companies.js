import React, { useState, useEffect, useRef } from "react";

import IbmLogo from "../svg/ibm.svg";
import CiscoLogo from "../svg/cisco-logo.svg";
import DeloitteLogo from "../svg/Deloitte.svg";
import PacLifeLogo from "../svg/logo-pacific-life.svg";
import ActLogo from "../svg/ACT_logo.svg";
import NorthernTrustLogo from "../svg/northern-trust.svg";

const Technology = ({ className }) => (
  <div className="content" style={{backgroundColor:`rgba(50,50,75,.95)`,color:`white`,border:`1px`,display:`flex`,
     flexDirection:`column`,justifyContent:`center`, alignItems:`center`}}>
    <h3>Some Companies We've Worked With</h3><hr/>
    <ul style={{columns: `4`, textAlign:`left`, maxWidth:`375px`, listStyle: `none`}}>
    <li><IbmLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/></li>
    <li><CiscoLogo style={{maxWidth: `75px`, maxHeight:`75px`}}/></li>
    <li><ActLogo id="actLogo" style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    <li><PacLifeLogo style={{maxWidth: `125px`}}/></li>
    <li>Prolifics</li>
    <li><DeloitteLogo style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    <li><NorthernTrustLogo style={{maxWidth: `75px`, maxHeight:`75px`}} /></li>
    </ul>
  </div>
);

export default Technology;