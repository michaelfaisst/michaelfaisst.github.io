import React from "react";

import "../style/main.scss";
import SEO from "../components/seo";
import BackgroundImage from "../components/background";
import Icon from "../images/dove_color.svg";

const IndexPage = () => (
	<main className="container">
		<BackgroundImage />
		<SEO title="Home" />
		<div className="card">
			<Icon className="icon" />
			<h1>Save the date</h1>
			<div className="seperator">~</div>

			<div className="subText">
				Michael &amp; Manuela
				<br />
				are getting married!
			</div>
			<div className="seperator">~</div>
			<div className="dateText">Friday, 4th September 2020</div>
		</div>
	</main>
);

export default IndexPage;
