module.exports = {
	siteMetadata: {
		title: `Michi & Manu - Save the date`,
		description: `Michi & Manu are getting married! Save the date!`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Great Vibes`, `Poiret One`]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images/
				}
			}
		},
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
				icon: `./src/images/icon.png`
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
