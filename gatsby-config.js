require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: 'Git PR Watcher',
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
  ],
};
