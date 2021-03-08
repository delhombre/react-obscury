import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import charisme from "../../images/charisme.jpg";
import djater from "../../images/djater.jpg";
import lecouteau from "../../images/lecouteau.jpg";
import valide from "../../images/validé.jpg";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	media: {
		width: 180,
		height: 180,
		borderRadius: 6,
	},
	card: {
		border: "none",
		borderRadius: 6,
		boxShadow: "none",
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
	},
	actionArea: {
		borderRadius: 6,
		width: 180,
		// height: 150,
	},
	title: {
		fontSize: "1.2rem",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#122740",
	},
	subtitle: {
		fontSize: "0.875rem",
		lineHeight: "normal",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#495869",
	},
}));

const FreeMusics = () => {
	const classes = useStyles();
	const datas = [
		{ image: valide, title: "Validé", author: "Innocent" },
		{ image: djater, title: "Djater", author: "MG Family" },
		{ image: lecouteau, title: "Le Couteau", author: "PKG Az Boy" },
		{ image: charisme, title: "Lionne", author: "Innocent" },
	];

	return (
		<>
			<Titles
				title="Musiques gratuites"
				subtitle="Écoutez et téléchargez gratuitement vos sons"
			/>
			<HorizontalScroll>
				{datas.map((data, index) => (
					<Card className={classes.card} key={index}>
						<CardActionArea className={classes.actionArea}>
							<CardMedia
								title={data.title}
								image={data.image}
								className={classes.media}
							/>
							<CardContent>
								<Typography variant="body1" className={classes.title}>
									{data.title}
								</Typography>
								<Typography variant="subtitle1" className={classes.subtitle}>
									{data.author}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default FreeMusics;
