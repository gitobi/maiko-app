import React from "react"

const Price = ({ amount, className }) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  })

  return <p className={className}>{formatter.format(amount)}</p>
}

export default Price
