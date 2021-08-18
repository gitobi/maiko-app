import React from "react"
import { graphql } from "gatsby"

import FruitGrid from "../components/organisms/fruit-grid"
import BaseLayout from "../components/templates/base-layout"
import Seo from "../components/seo"

const ShopPage = ({ data }) => {
  return (
    <BaseLayout>
      <Seo
        title="ストア"
        description="Maiko のご購入はストアからどうぞ。"
      />
      <h1>ストア</h1>
      <h2>Maiko のご購入はストアからどうぞ。</h2>
      <FruitGrid edges={data.allShopifyProduct.edges} />
    </BaseLayout>
  )
}

export default ShopPage

export const query = graphql`
  {
    allShopifyProduct(filter: { productType: { eq: "Maiko" } }, sort: { fields: [title] }) {
      edges {
        node {
          title
          images {
            id
            originalSrc
          }
          storefrontId
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
