require('dotenv').config()
const { resolve } = require('path')

const generateBasePath = (...params) => {
  const args = ['./'].concat([].slice.call(params))
  return resolve(...args)
}

const paths = {
  src: generateBasePath.bind(null, 'src')
}

module.exports = {
  siteMetadata: {
    title: `Asset Calculator`,
    description: `Simple calculator for asset allocation.`,
    author: `Derek Misler`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        types: paths.src('types')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Calculator`,
        short_name: `Portfolio Calculator`,
        start_url: `/`,
        background_color: `#2E3440`,
        theme_color: `#BF616A`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icons: [
          {
            src: 'icon-128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icon-384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false
        }
      }
    }
  ]
}
