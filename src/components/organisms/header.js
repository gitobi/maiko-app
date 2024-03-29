import React, { useContext } from "react"
import { Link } from "gatsby"

import { StoreContext } from "@gitobi/gitobi-shopify-context"
import logo from "../../images/logo.png"
import font from "../../images/font.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faShoppingCart,
  faStore,
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

const Header = () => {
  const { currentTotalQuantity } = useContext(StoreContext)

  return (
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
              <FontAwesomeIcon icon={faStore} /> ストア
            </Link>
          </li>
          <li className={headerNavItem}>
            <Link className={headerNavItemLink} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> カート {currentTotalQuantity()}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
