module.exports = {
  siteMetadata: {
    title: "Jan Bina - janbina.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jan Bina - janbina.com",
        short_name: "Jan Bina - janbina.com",
        start_url: "/",
        icon: "src/images/water_buffalo.png",
      }
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-44604096-6"
      }
    }
  ]
};
