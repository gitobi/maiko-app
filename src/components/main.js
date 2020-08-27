import React from "react"
import PropTypes from "prop-types"

import mainStyles from "./main.module.scss"

const Main = ({ children }) => (
  <main className={mainStyles.main}>{children}</main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
