module.exports = {
  siteMetadata: {
    title: `Maiko`,
    description: `Maiko は、 Gitobi 合同会社が栽培・販売する日本の果物です。おいしく安心安全な日本の果物をいつでも食べられる幸せを、皆様にお贈りすることを私たちは目指しています。`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/colors";
          @import "${__dirname}/src/styles/variables";
        `,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve(
            "./src/components/templates/base-layout.js"
          ),
        },
      },
    },
  ],
}
