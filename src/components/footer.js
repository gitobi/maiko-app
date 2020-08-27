import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faShoppingCart, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <nav>
      <ul className={footerStyles.footerNav}>
        <li className={footerStyles.footerNavItem}>
          <Link className={footerStyles.footerNavItemLink} to="/">
            <FontAwesomeIcon className={footerStyles.footerNavItemLinkIcon} icon={faHome} />
            <span className={footerStyles.footerNavItemLinkText}> ホーム</span>
          </Link>
        </li>
        <li className={footerStyles.footerNavItem}>
          <Link className={footerStyles.footerNavItemLink} to="/shop">
            <FontAwesomeIcon className={footerStyles.footerNavItemLinkIcon} icon={faShoppingCart} />
            <span className={footerStyles.footerNavItemLinkText}> オンラインストア</span>
          </Link>
        </li>
        <li className={footerStyles.footerNavItem}>
          <Link className={footerStyles.footerNavItemLink} to="/contact">
            <FontAwesomeIcon className={footerStyles.footerNavItemLinkIcon} icon={faEnvelope} />
            <span className={footerStyles.footerNavItemLinkText}> お問い合わせ</span>
          </Link>
        </li>
      </ul>
    </nav>
    <p className={footerStyles.footerCopyRight}>
      &copy; 2020&nbsp;
      <a className={footerStyles.footerCopyRightLink} href="https://www.gitobi.com" target="_blank" rel="noopener noreferrer">
        Gitobi LLC.
      </a>
    </p>
  </footer>
)

export default Footer
