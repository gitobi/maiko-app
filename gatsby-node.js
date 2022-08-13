const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all products in Shopify
  const shopifyProductsResult = await graphql(`
    query {
      allShopifyProduct(filter: { productType: { eq: "Maiko" } }, sort: { fields: [title] }) {
        edges {
          node {
            description
            descriptionHtml
            featuredImage {
              id
              originalSrc
            }
            images {
              id
              originalSrc
            }
            metafields {
              key
              value
            }
            options {
              name
              values
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            storefrontId
            title
            variants {
              price
              product {
                title
              }
              selectedOptions {
                name
                value
              }
              storefrontId
              title
            }
          }
        }
      }
    }
  `)

  // Iterate over all products and create a new page using a template
  shopifyProductsResult.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/fruits/${node.storefrontId}`,
      component: path.resolve(
        `./src/components/templates/fruit-page-layout.js`
      ),
      context: {
        product: node,
      },
    })
  })
}
