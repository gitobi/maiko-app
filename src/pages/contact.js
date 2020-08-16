import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="お問い合わせ" />
    <h1>お問い合わせ</h1>
    <form name="お問い合わせフォーム" method="POST" netlify-honeypot="iambot" data-netlify="true">
      {/* Netlify Forms で必須のフィールド */}
      <input type="hidden" name="form-name" value="お問い合わせフォーム" />

      {/* Spam対策用のフィールド */}
      <p
        style={{
          display: `none`,
        }}
      >
        <input type="text" name="iambot" />
      </p>

      {/* お問い合わせフォームの本体 */}
      <p>
        <label htmlFor="name">お名前: <input type="text" id="name" name="name" /></label>
      </p>
      <p>
        <label htmlFor="email">メールアドレス: <input type="email" id="email" name="email" /></label>
      </p>
      <p>
        <label htmlFor="message">お問い合わせ内容: <textarea id="message" name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">送信する</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage
