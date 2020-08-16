import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <ul>
      <li><Link to="/">ホーム</Link></li>
      <li><Link to="/shop">オンラインストア</Link></li>
      <li><Link to="/contact">お問い合わせ</Link></li>
    </ul>
    <p>&copy; 2020 <a href="https://www.gitobi.com" target="_blank" rel="noopener noreferrer">Gitobi LLC.</a></p>
  </footer>
)

export default Footer
