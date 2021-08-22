import React, { useContext } from "react"

import Price from "../atoms/prices/price"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

import {
  checkoutSection,
  checkoutUnorderedList,
  checkoutListItem,
  secondColumnContainer,
  checkoutButtonContainer,
  checkoutButton,
} from "./checkout.module.scss"

const Checkout = ({totalPrice, checkoutEditable}) => {
  const { proceedToCheckout } =
    useContext(StoreContext)

  const handleCheckout = () => {
    proceedToCheckout()
  }

  return (
    <section
      className={checkoutSection}
    >
      <ul
        className={checkoutUnorderedList}
      >
        <li
          className={checkoutListItem}
        >
          <p>
            小計（税込）
          </p>
          <div
            className={secondColumnContainer}
          >
            <Price
              amount={totalPrice}
            />
          </div>
        </li>
        <li className={checkoutListItem}>
          <p>
            送料
          </p>
          <div
            className={secondColumnContainer}
          >
            <p>
              別途
            </p>
          </div>
        </li>
      </ul>
      <div
        className={checkoutButtonContainer}
      >
        <button
          className={checkoutButton}
          disabled={!checkoutEditable}
          onClick={handleCheckout}
        >
          レジに進む
        </button>
      </div>
    </section>
  )
}

export default Checkout
