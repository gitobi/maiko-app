/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import logo from "../images/logo.png"

function Seo({ description, lang, meta, title, imageUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  const [pathName, setPathName] = useState('')
  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])

  const metaDescription = description || site.siteMetadata.description
  const metaImageUrl = imageUrl || logo

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: `og: https://ogp.me/ns#`,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathName}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

export default Seo
