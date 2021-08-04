import React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"
import font from "../../images/font.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faShoppingCart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
  header,
  topLinkContainer,
  siteLogo,
  siteFont,
  headerNav,
  headerNavItem,
  headerNavItemLink,
} from "./header.module.scss"

const Header = () => (
  <header className={header}>
    <div className={topLinkContainer}>
      <Link to="/">
        <img className={siteLogo} src={logo} alt="Maiko logo" />
        <img className={siteFont} src={font} alt="Maiko" />
      </Link>
    </div>
    <nav>
      <ul className={headerNav}>
        <li className={headerNavItem}>
          <Link className={headerNavItemLink} to="/">
            <FontAwesomeIcon icon={faHome} /> ホーム
          </Link>
        </li>
        <li className={headerNavItem}>
          <Link className={headerNavItemLink} to="/shop">
            <FontAwesomeIcon icon={faShoppingCart} /> オンラインストア
          </Link>
        </li>
        <li className={headerNavItem}>
          <Link className={headerNavItemLink} to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
