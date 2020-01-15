module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatbsy + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Source Code Pro",
            variants: ["300", "400", "500"]
          }
        ]
      }
    }
  ]
};
