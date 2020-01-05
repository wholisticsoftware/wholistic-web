import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../svg/wholistic-logo-tight.svg";
//{siteTitle}
const Header = ({ siteTitle }) => (
  <header style={{ background: `transparent` }} >
    <Icon style={{ maxWidth: `150px`, maxHeight: `150px`, paddingLeft: `2em` }}/>
    <div style={{ margin: `0 auto`, maxWidth: 960 }} >
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
