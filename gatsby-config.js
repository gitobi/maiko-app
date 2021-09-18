require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    description: `Maiko は技術革新を常に取り入れ、美味しさ追求し続ける日本のフルーツです。`,
    siteUrl: `https://maiko.app`,
    title: `Maiko`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-CCPENSNREP`,
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maiko`,
        short_name: `Maiko`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(
            `./src/components/templates/base-layout.js`
          ),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/colors";
          @import "${__dirname}/src/styles/variables";
        `,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
