import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import stars from "../../images/stars.jpg";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	media: {
		width: 150,
		height: 150,
		borderRadius: 6,
	},
	container: {
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
		border: "none",
		borderRadius: 6,
		boxShadow: "none",
	},
	actionArea: {
		border: "none",
		borderRadius: 6,
		boxShadow: "none",
	},
}));

const NewMusics = () => {
	const classes = useStyles();

	return (
		<>
			<Titles
				title="Nouveaux hits"
				subtitle="Découvrez les tous derniers titres publiés"
			/>
			<HorizontalScroll>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
					<Card className={classes.container} key={num}>
						<CardActionArea className={classes.actionArea}>
							<CardMedia
								component="img"
								alt="stars"
								className={classes.media}
								image={stars}
								title="stars"
							/>
						</CardActionArea>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default NewMusics;
