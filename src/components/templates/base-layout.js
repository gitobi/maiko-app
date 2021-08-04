import React from "react"

import { Helmet } from "react-helmet"

import Footer from "../organisms/footer"
import Header from "../organisms/header"
import Main from "../organisms/main"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"
import "./base-layout.scss"

const BaseLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
      </Helmet>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  )
}

export default BaseLayout
