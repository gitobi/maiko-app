import React, { useContext, useState } from "react"
import isEqual from "lodash/isEqual"

import ShopifyImage from "../atoms/images/shopify-image"
import Price from "../atoms/prices/price"
import BaseLayout from "./base-layout"

import { StoreContext } from "@gitobi/gitobi-shopify-context"
import Seo from "../seo"

import {
  twoColumnGrid,
  fruitImage,
  input,
  button,
} from "./fruit-page-layout.module.scss"

const ProductPageLayout = ({ pageContext }) => {
  const { store, addVariantToCart } = useContext(StoreContext)
  const { product } = pageContext

  const { options, variants } = product
  const [initialVariant] = variants
  const [variant, setVariant] = useState({ ...initialVariant })
  const handleOptionBlur = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = variants.find(({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const available = true
  const handleAddToCartClick = async () => {
    await addVariantToCart(variant.storefrontId, quantity).catch(err => {
      window.alert(err.message)
    })
  }

  return (
    <BaseLayout>
      <Seo title={product.title} description={product.description} />
      <h1>{product.title}</h1>
      <section className={twoColumnGrid}>
        <div>
          <ShopifyImage
            className={fruitImage}
            src={product.images[0].originalSrc}
            width={600}
            alt={product.title}
            key={product.images[0].id}
          />
        </div>
        <div>
          <Price amount={variant.price} />
          <label htmlFor="quantity">数量</label>
          <input
            className={input}
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            step="1"
            onChange={handleQuantityChange}
            value={quantity}
          />
          <button
            className={button}
            type="submit"
            disabled={!available || !store.checkoutEditable}
            onClick={handleAddToCartClick}
          >
            カートに入れる
          </button>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </BaseLayout>
  )
}

export default ProductPageLayout
