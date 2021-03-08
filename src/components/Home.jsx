import React from "react";
import Listening from "../images/undraw_listening_1u79.png";
import GreetingColumn from "./GreetingColumn";
import Artists from "./Home/Artists";
import FreeAlbums from "./Home/FreeAlbums";
import FreeMusics from "./Home/FreeMusics";
import Freestyles from "./Home/Freestyles";
import NewMusics from "./Home/NewMusics";
import PremiumAlbums from "./Home/PremiumAlbums";
import Recommended from "./Home/Recommended";
import Top10Download from "./Home/Top10Download";
import TopLike from "./Home/TopLike";

const Home = () => {
	return (
		<>
			<GreetingColumn
				image={Listening}
				title="obscury"
				subtitle="Votre plateforme de streaming musical, Rejoignez l'aventure"
			/>
			<NewMusics />
			<PremiumAlbums />
			<Recommended />
			<Top10Download />
			<FreeMusics />
			<Artists />
			<FreeAlbums />
			<TopLike />
			<Freestyles />
		</>
	);
};

export default Home;
