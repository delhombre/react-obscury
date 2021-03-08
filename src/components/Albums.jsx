import React from "react";
import album from "../images/undraw_photo_album_e8hj.png";
import ListOfAlbums from "./Albums/ListOfAlbums";
import Greeting from "./Greeting";

const Albums = () => {
	return (
		<>
			<Greeting
				title="ALBUM"
				subtitle="Albums et mixtapes gratuits"
				image={album}
			/>
			<ListOfAlbums />
		</>
	);
};

export default Albums;
