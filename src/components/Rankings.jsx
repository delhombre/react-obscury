import React from "react";
import chart from "../images/undraw_visual_data_b1wx.png";
import Greeting from "./Greeting";
import TopDownload from "./Rankings/TopDownload";
import TopLikes from "./Rankings/TopLikes";

const Rankings = () => {
	return (
		<>
			<Greeting
				title="CLASSEMENTS"
				subtitle="Le top des classements"
				image={chart}
			/>
			<TopDownload />
			<TopLikes />
		</>
	);
};

export default Rankings;
