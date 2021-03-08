import React from "react";
import composeMusic from "../images/undraw_compose_music_ovo2.png";
import Category from "./Categories/Category";
import GreetingColumn from "./GreetingColumn";

const Categories = () => {
	return (
		<div>
			<GreetingColumn
				image={composeMusic}
				title="Catégories"
				subtitle="Filtrer les titres par mes goûts musicaux"
			/>
			<Category />
		</div>
	);
};

export default Categories;
