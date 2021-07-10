import React from "react"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"

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

export default Layout
