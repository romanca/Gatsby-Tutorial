module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `  UPOZORNENIE: Rady a informácie na tejto stránke sú len
    všeobecné, nenahrádzajú rady skutočného lekára. Preto použitie
    liečivých rastlín konzultujte so svojím lekárom. Tvorcovia
    tohoto webu nezodpovedajú za zdravotné problemy alebo ujmy na
    zdraví, ktoré budú výsledkom nesprávneho výkladu obsahu tohoto
    servera bez porady s lekárom.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    // "gatsby-schema-field-absolute-path",
    // {
    //   resolve: "gatsby-schema-field-absolute-path",
    //   options: {
    //     // a. single directory
    //     dirs: "src/pages",
    //     // b. array of directories
    //     dirs: ["src/pages", "src/pages"],

    //     // or c. object with named field extension
    //     dirs: {
    //       "content/assets": "fileByAssetPath",
    //       "src/pages": "fileByImagePath",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
