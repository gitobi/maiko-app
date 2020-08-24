import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import "@csstools/normalize.css"
import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
