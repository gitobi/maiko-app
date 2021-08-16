import React, { useContext } from "react"
import { Link } from "gatsby"

import ShopifyImage from "../components/atoms/images/shopify-image"
import Price from "../components/atoms/prices/price"
import BaseLayout from "../components/templates/base-layout"
import Seo from "../components/seo"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

const CartPage = ({ data }) => {
  const { store, updateLineItemQuantity, removeLineItem, proceedToCheckout } =
    useContext(StoreContext)

  const handleQuantityChange = async ({ target }, lineItemId) => {
    await updateLineItemQuantity(lineItemId, target.value).catch(err => {
      window.alert(err.message)
    })
  }

  const handleRemoveItem = async lineItemId => {
    await removeLineItem(lineItemId).catch(err => {
      window.alert(err.message)
    })
  }

  const handleCheckout = () => {
    proceedToCheckout()
  }

  return (
    <BaseLayout>
      <Seo title="カート" description="カート" />
      <h1>カート</h1>
      {store.checkout.lineItems.map(lineItem => (
        <div key={lineItem.variant.id}>
          <h2>
            <Link to={`/fruits/${lineItem.variant.product.id}`}>
              {lineItem.title}
            </Link>
          </h2>
          <ShopifyImage
            src={lineItem.variant.image.src}
            width={200}
            alt={lineItem.variant.title}
            key={lineItem.variant.image.id}
          />
          <p>
            {lineItem.variant.title !== "Default Title"
              ? lineItem.variant.title
              : ""}
          </p>
          <Price amount={lineItem.variant.price} />
          <label htmlFor="quantity">数量</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            onChange={event => handleQuantityChange(event, lineItem.id)}
            value={lineItem.quantity}
          />
          <button
            disabled={!store.checkoutEditable}
            onClick={() => handleRemoveItem(lineItem.id)}
          >
            削除
          </button>
        </div>
      ))}
      <p>小計（税抜き）</p>
      <Price amount={store.checkout.totalPrice} />
      <button disabled={!store.checkoutEditable} onClick={handleCheckout}>
        レジに進む
      </button>
    </BaseLayout>
  )
}

export default CartPage
