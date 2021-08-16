import React from "react"
import { StoreProvider } from "@gitobi/gitobi-shopify-context"

export const wrapRootElement = ({ element }) => (
  <StoreProvider
    localStorageKey='shopify_checkout_id_for_maiko_app'
  >
    {element}
  </StoreProvider>
)
