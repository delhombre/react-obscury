import React from "react";
import happyMusic from "../images/undraw_happy_music_g6wc.png";
import ListOfArtists from "./Artists/ListOfArtists";
import GreetingColumn from "./GreetingColumn";

const Artists = () => {
	return (
		<>
			<GreetingColumn
				image={happyMusic}
				title="Artistes"
				subtitle="Suivez vos artistes en un clic"
			/>
			<ListOfArtists />
		</>
	);
};

export default Artists;
