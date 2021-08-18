import React from "react"

const MinPrice = ({ amount, className }) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  })

  return <p className={className}>{formatter.format(amount)}から</p>
}

export default MinPrice
