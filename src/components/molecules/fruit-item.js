import React from "react"
import { Link } from "gatsby"

import ShopifyImage from "../atoms/images/shopify-image"
import MinPrice from "../atoms/prices/min-price"

import {
  container,
  fruitItem,
  fruitImage,
  fruitName,
  fruitPrice,
} from "./fruit-item.module.scss"

const FruitItem = ({node}) => (
  <Link
    className={fruitItem}
    key={node.storefrontId}
    to={`/fruits/${node.storefrontId}`}
  >
    <ShopifyImage
      className={fruitImage}
      src={node.images[0].originalSrc}
      width={600}
      alt={node.title}
      key={node.images[0].id}
    />
    <h3
      className={fruitName}
    >
      {node.title}
    </h3>
    <MinPrice amount={node.priceRangeV2.minVariantPrice.amount} className={fruitPrice}/>
  </Link>
)

export default FruitItem
