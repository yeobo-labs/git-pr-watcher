require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: 'GitHub PRoll',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: process.env.GITHUB_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        }
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GitHub PRoll',
        short_name: 'GitHub PRoll',
        start_url: '/',
        icon: 'static/assets/favicon.ico'
      }
    }
  ],
};
