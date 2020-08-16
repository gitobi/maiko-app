import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="お問い合わせ" />
    <h1>お問い合わせはこちらからお願いします。</h1>
    <form name="お問い合わせフォーム" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="お問い合わせフォーム" />
      <p>
        <label>お名前: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>メールアドレス: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>お問い合わせ内容: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">送信する</button>
      </p>
    </form>
  </Layout>
)

export default SecondPage
