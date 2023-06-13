module.exports = {
  siteMetadata: {
    title: `Big Data at Berkeley`,
    description: `Big Data at Berkeley is a UC Berkeley student organization dedicated to promoting data science in our community through educational bootcamps and industry-level data consulting projects.`,
    keywords: ['Big Data at Berkeley', 'Big Data', 'Data Science', 'UC Berkeley', 'Big Data Bootcamp', 'Berkeley', 'Consulting', 'Education', 'Organization', 'RSO', 'Berkeley Club', 'ASUC'],
    url: "https://www.bd.berkeley.edu",
    ogImage: 'src/images/square_dark_logo.jpg',
    favicon: {
      ico: 'src/images/favicon.ico'
    },
    lang: `en`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1M1KNCK201", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ]
};
