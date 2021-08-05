import React from "react"

const MinPrice = ({ amount }) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  })

  return <p>{formatter.format(amount)}から</p>
}

export default MinPrice
