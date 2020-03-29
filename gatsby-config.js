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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
