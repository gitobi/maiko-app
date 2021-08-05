import React from "react"

const ShopifyImage = ({ src, width, alt }) => {
  const pattern = /.jpg|.png/
  const index = src.search(pattern)
  const resizedSrc = src.slice(0, index) + `_${width}x` + src.slice(index)

  return <img src={resizedSrc} alt={alt} />
}

export default ShopifyImage
