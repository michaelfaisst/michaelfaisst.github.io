import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const BackgroundImage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "background.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Img
			style={{
				position: "absolute",
				width: "100%",
				height: "100vh",
				top: 0,
				left: 0,
				zIndex: -1
			}}
			fluid={data.file.childImageSharp.fluid}
		/>
	);
};

export default BackgroundImage;
