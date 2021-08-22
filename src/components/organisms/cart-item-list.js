import React from "react"

import CartItem from "../molecules/cart-item"

import {
  lineItemUnorderedList,
} from "./cart-item-list.module.scss"

const CartItemList = ({lineItems}) => {
  return (
    <section>
      <ul
        className={lineItemUnorderedList}
      >
        {lineItems.map(lineItem => (
          <CartItem
            key={lineItem.variant.id}
            lineItem={lineItem}
          />
        ))}
      </ul>
    </section>
  )
}

export default CartItemList
