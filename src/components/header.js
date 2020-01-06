import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../svg/wholistic-logo-tight.svg";
//{siteTitle}
//<Link to="/page-2/">intro</Link>
const Header = ({ siteTitle }) => (
<header>
  <nav className="navbar navbar-expand-lg fixed-top" fixed="top">
    <a className="navbar-brand" href="#"><Icon /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse justify-content-stretch" id="navbar6">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">welcome</a>
            </li>
            <li><a className="nav-link">{` `}</a></li>
            <li className="nav-item">
                <a className="nav-link" href="//codeply.com">services</a>
            </li>
            <li><a className="nav-link">{` `}</a></li>
            <li className="nav-item">
                <a className="nav-link" href="#">philosophy</a>
            </li>
            <li><a className="nav-link">{` `}</a></li>
            <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
            </li>
        </ul>
    </div>
</nav>
</header>
)
/*  
  <header style={{ background: `transparent` }} >
    <Icon style={{ maxWidth: `150px`, maxHeight: `150px`, paddingLeft: `2em` }}/>
    <div style={{ margin: `0 auto`, maxWidth: 960 }} >
    </div>
  </header>
)*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
