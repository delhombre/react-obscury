import React from "react";
import playlist from "../images/undraw_music_r1se.png";
import GreetingColumn from "./GreetingColumn";
import SelectionOfTheDay from "./Playlist/SelectionOfTheDay";

const Playlist = () => {
	return (
		<>
			<GreetingColumn
				image={playlist}
				title="Playlist"
				subtitle="Bercez-vous par un océan de musiques"
			/>
			<SelectionOfTheDay />
		</>
	);
};

export default Playlist;
