import React from "react"

import mainStyles from "./main.module.scss"

const Main = ({ children }) => (
  <main className={mainStyles.main}>{children}</main>
)

export default Main
