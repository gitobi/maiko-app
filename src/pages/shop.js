import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShopPage = () => (
  <Layout>
    <SEO title="Maiko オンラインストア" />
    <h1>Maiko オンラインストア</h1>
    <p>以下のフォームより、ご購入希望の商品をお知らせください。</p>
    <p>数量に限りがあるため、ご希望通りの数量を販売できない可能性がございます。</p>
    <p>ご購入可能な数量が確定いたしましたら、メールにてご連絡いたします。</p>
    <p>ご購入代金の精算方法と商品の受け渡し方法（手渡し、郵送）につきましても、メールにてご案内いたします。</p>
    <form name="Maiko オンラインストアフォーム" method="POST" netlify-honeypot="iambot" data-netlify="true">
      {/* Netlify Forms で必須のフィールド */}
      <input type="hidden" name="form-name" value="Maiko オンラインストアフォーム" />

      {/* Spam対策用のフィールド */}
      <p
        style={{
          display: `none`,
        }}
      >
        <input type="text" name="iambot" />
      </p>

      {/* Maiko オンラインストアフォームの本体 */}
      <p>
        <label htmlFor="name">お名前: <input type="text" id="name" name="name" /></label>
      </p>
      <p>
        <label htmlFor="email">メールアドレス: <input type="email" id="email" name="email" /></label>
      </p>
      <p>
        <label htmlFor="maiko_ruby_nashi_pear_quantity">
          Maiko ルビー梨 200円（税込）/個 : <select id="maiko_ruby_nashi_pear_quantity" name="maiko_ruby_nashi_pear_quantity[]">
            <option value="1">1個</option>
            <option value="2">2個</option>
            <option value="4">4個</option>
          </select>
        </label>
      </p>
      <p>
        <label htmlFor="maiko_gold_peach_quantity">
          Maiko ゴールドピーチ 200円（税込）/個 : <select id="maiko_gold_peach_quantity" name="maiko_gold_peach_quantity[]">
            <option value="1">1個</option>
            <option value="2">2個</option>
          </select>
        </label>
      </p>
      <p>
        <button type="submit">購入希望を送信する</button>
      </p>
    </form>
  </Layout>
)

export default ShopPage
