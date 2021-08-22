import React, { useContext } from "react"

import Price from "../atoms/prices/price"
import ShopifyImage from "../atoms/images/shopify-image"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import {
  lineItemListItem,
  itemImage,
  itemName,
  secondColumnSecondRowContainer,
  actionButton,
  itemPrice,
  itemQuantity,
  thirdColumnContainer,
} from "./cart-item.module.scss"

const CartItem = ({lineItem}) => {
  const { store, updateLineItemQuantity, removeLineItem } =
    useContext(StoreContext)

  const handleQuantityChange = async (quantity, lineItemId) => {
    await updateLineItemQuantity(lineItemId, quantity).catch(err => {
      window.alert(err.message)
    })
  }

  const handleRemoveItem = async lineItemId => {
    await removeLineItem(lineItemId).catch(err => {
      window.alert(err.message)
    })
  }

  return (
    <li className={lineItemListItem}>
      <ShopifyImage
        className={itemImage}
        src={lineItem.variant.image.src}
        width={600}
        alt={lineItem.variant.title}
        key={lineItem.variant.image.id}
      />
      <div>
        <h3
          className={itemName}
        >
          {lineItem.title}
        </h3>
        <div
          className={secondColumnSecondRowContainer}
        >
          <Price
            className={itemPrice}
            amount={lineItem.variant.price}
          />
          <button
            className={actionButton}
            onClick={() => handleQuantityChange(lineItem.quantity - 1, lineItem.id)}
          >
            <FontAwesomeIcon
              icon={faMinus}
            />
          </button>
          <div
            className={itemQuantity}
          >
            {lineItem.quantity}
          </div>
          <button
            className={actionButton}
            onClick={() => handleQuantityChange(lineItem.quantity + 1, lineItem.id)}
          >
            <FontAwesomeIcon
              icon={faPlus}
            />
          </button>
        </div>
      </div>
      <div
        className={thirdColumnContainer}
      >
        <button
          className={actionButton}
          disabled={!store.checkoutEditable}
          onClick={() => handleRemoveItem(lineItem.id)}
        >
          <FontAwesomeIcon
            icon={faTimes}
          />
        </button>
      </div>
    </li>
  )
}

export default CartItem
