import React, { useContext } from "react"
import { Link, graphql } from "gatsby"

import ShopifyImage from "../components/atoms/images/shopify-image"
import MinPrice from "../components/atoms/prices/min-price"
import BaseLayout from "../components/templates/base-layout"
import Seo from "../components/seo"

import { StoreContext } from "@gitobi/gitobi-shopify-context"


const ShopPage = ({ data }) => {
  const { store } = useContext(StoreContext)

  return (
    <BaseLayout>
      <Seo
        title="Maiko オンラインストア"
        description="Maiko のご購入は Maiko オンラインストアからどうぞ。"
      />
      <h1>Maiko オンラインストア</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.storefrontId}>
            <ShopifyImage
              src={node.images[0].originalSrc}
              width={200}
              alt={node.title}
              key={node.images[0].id}
            />
            <h3>
              <Link to={`/fruits/${node.storefrontId}`}>{node.title}</Link>
            </h3>
            <MinPrice amount={node.priceRangeV2.minVariantPrice.amount} />
          </li>
        ))}
      </ul>
      {console.debug(JSON.parse(JSON.stringify(store)))}
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
