import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../svg/wholistic-systems-b.svg";
//{siteTitle}
//<Link to="/page-2/">intro</Link>
//style={{ backgroundColor: `transparent!important`}}
const Header = ({ siteTitle, showBrand, brandClass, navBaseClass }) => {
  console.log("showBrand: " + showBrand);
  console.log("brandClass: " + brandClass);
  if (!navBaseClass) navBaseClass = "nav-link";
  return (
  <header>
  <div className="navbar-spacer"></div>
	<nav className="navbar navbar-expand-lg fixed-top navbar-light" fixed="top">
      <span className="navbar-brand" href="#">
        <Link to="/" style={{visibility: showBrand ? '' : 'hidden'}} className={brandClass}>
          <Icon className="nav-logo"/>
        </Link>
      </span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
	  <div className="collapse navbar-collapse justify-content-stretch" id="navbarSupportedContent">
		<ul className="navbar-nav ml-auto">
		  <li className="nav-item">
		    <Link className={navBaseClass} activeClassName="active-link" to="">home</Link>
		  </li>
		  <li><span className="nav-link">{` `}</span></li>
		  <li className="nav-item">
		    <Link className={navBaseClass} activeClassName="active-link" to="/plan">plan</Link>
		  </li>
		  <li><span className="nav-link">{` `}</span></li>
		  <li className="nav-item">
		    <Link className={navBaseClass} activeClassName="active-link" to="/design">design</Link>
		  </li>
		  <li><span className="nav-link">{` `}</span></li>
		  <li className="nav-item">
		    <Link className={navBaseClass} activeClassName="active-link" to="/code">code</Link>
		  </li>
		  <li><span className="nav-link">{` `}</span></li>
		  <li className="nav-item">
		    <Link className={navBaseClass} activeClassName="active-link" to="/contact">contact</Link>
		  </li>
		</ul>
	  </div>
	</nav>
  <div className="nav-divider" style={{backgroundColor:"#0f4c75", height:`3px`, width:'100%'}}></div>
  </header>
)}
// <li className="nav-item"><Link className="nav-link" style={{ color: navLinkColor }}>contact</Link></li>
/* to make a transparent backgruond on nav link holder: backgroundColor: `rgba(255,255,255,.98)` */
/*
  <header style={{ background: `transparent` }} >
    <Icon style={{ maxWidth: `150px`, maxHeight: `150px`, paddingLeft: `2em` }}/>
    <div style={{ margin: `0 auto`, maxWidth: 960 }} >
    </div>
  </header>
)*/
/* style={{ alignItems: `start` }} This style will cause menu to hug top when applied to navbar */
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
/*
  <nav className="navbar navbar-expand-lg fixed-top" fixed="top">
		<a className="navbar-brand" href="#"><Link to="/"><Icon /></Link></a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
		    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="navbar-collapse collapse justify-content-stretch" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a className="nav-link" href="#">welcome</a>
				</li>
				<li><a className="nav-link">{` `}</a></li>
				<li className="nav-item">
					<Link className="nav-link" to="/page-2/">services</Link>
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
* */

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
*/
