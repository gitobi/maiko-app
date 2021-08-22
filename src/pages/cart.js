import React, { useContext } from "react"

import Checkout from "../components/organisms/checkout"
import CartItemList from "../components/organisms/cart-item-list"
import BaseLayout from "../components/templates/base-layout"
import Seo from "../components/seo"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

const CartPage = ({ data }) => {
  const { store } =
    useContext(StoreContext)

  return (
    <BaseLayout>
      <Seo title="カート" description="カート" />
      <h1>カート</h1>
      <h2>商品をご確認いただき、レジにお進み下さい。</h2>
      <CartItemList
        lineItems={store.checkout.lineItems}
      />
      <Checkout
        checkoutEditable={store.checkoutEditable}
        totalPrice={store.checkout.totalPrice}
      />
    </BaseLayout>
  )
}

export default CartPage
