import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faShoppingCart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
  footer,
  footerNav,
  footerNavItem,
  footerNavItemLink,
  footerNavItemLinkIcon,
  footerNavItemLinkText,
  footerCopyRight,
  footerCopyRightLink,
} from "./footer.module.scss"

const Footer = () => (
  <footer className={footer}>
    <nav>
      <ul className={footerNav}>
        <li className={footerNavItem}>
          <Link className={footerNavItemLink} to="/">
            <FontAwesomeIcon className={footerNavItemLinkIcon} icon={faHome} />
            <span className={footerNavItemLinkText}> ホーム</span>
          </Link>
        </li>
        <li className={footerNavItem}>
          <Link className={footerNavItemLink} to="/shop">
            <FontAwesomeIcon
              className={footerNavItemLinkIcon}
              icon={faShoppingCart}
            />
            <span className={footerNavItemLinkText}> オンラインストア</span>
          </Link>
        </li>
        <li className={footerNavItem}>
          <Link className={footerNavItemLink} to="/contact">
            <FontAwesomeIcon
              className={footerNavItemLinkIcon}
              icon={faEnvelope}
            />
            <span className={footerNavItemLinkText}> お問い合わせ</span>
          </Link>
        </li>
      </ul>
    </nav>
    <p className={footerCopyRight}>
      &copy; 2020&nbsp;
      <a
        className={footerCopyRightLink}
        href="https://www.gitobi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gitobi LLC.
      </a>
    </p>
  </footer>
)

export default Footer
