/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Bootstrap`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `this is the description of out website`,
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: '/static/gatsby.jpg',
    url: 'https://www.gatsbyjs.org/'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "https://practice.codingsrc.com/",
        protocol: "http",
        hostingWPCOM: false,
      },
    },
  ],
}
