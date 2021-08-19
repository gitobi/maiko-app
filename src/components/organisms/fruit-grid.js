import React from "react"

import FruitItem from "../molecules/fruit-item"

import {
  fruitGrid,
} from "./fruit-grid.module.scss"

const FruitGrid = ({edges}) => (
  <section className={fruitGrid}>
    {edges.map(({ node }) => (
      <FruitItem node={node} key={node.storefrontId} />
    ))}
  </section>
)

export default FruitGrid
