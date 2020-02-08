const { resolve } = require('path')

const generateBasePath = (...params) => {
  const args = ['./'].concat([].slice.call(params))
  return resolve(...args)
}

const paths = {
  src: generateBasePath.bind(null, 'src'),
}

module.exports = {
  siteMetadata: {
    title: `Portfolio Calculator`,
    description: `Simple calculator for asset allocation.`,
    author: `Derek Misler`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        atoms: paths.src('components/atoms'),
        molecules: paths.src('components/molecules'),
        organisms: paths.src('components/organisms'),
        utils: paths.src('utils'),
        constants: paths.src('constants'),
        styles: paths.src('styles'),
        pages: paths.src('pages'),
        images: paths.src('images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-calculator`,
        short_name: `Portfolio Calculator`,
        start_url: `/`,
        background_color: `#2E3440`,
        theme_color: `#BF616A`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    }
  ],
}
