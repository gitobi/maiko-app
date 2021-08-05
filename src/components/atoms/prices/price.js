import React from "react"

const Price = ({ amount }) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  })

  return <p>{formatter.format(amount)}</p>
}

export default Price
