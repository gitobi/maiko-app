import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"
import font from "../images/font.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faShoppingCart, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.topLinkContainer}>
      <Link to="/">
        <img className={headerStyles.siteLogo} src={logo} alt="Maiko logo" />
        <img className={headerStyles.siteFont} src={font} alt="Maiko" />
      </Link>
    </div>
    <nav>
      <ul className={headerStyles.headerNav}>
        <li>
          <Link className={headerStyles.headerNavItemLink} to="/">
            <FontAwesomeIcon icon={faHome} /> ホーム
          </Link>
        </li>
        <li>
          <Link className={headerStyles.headerNavItemLink} to="/shop">
            <FontAwesomeIcon icon={faShoppingCart} /> オンラインストア
          </Link>
        </li>
        <li>
          <Link className={headerStyles.headerNavItemLink} to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
