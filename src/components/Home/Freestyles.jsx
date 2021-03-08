import {
	Avatar,
	Card,
	CardActionArea,
	CardHeader,
	CardMedia,
	makeStyles,
} from "@material-ui/core";
import React from "react";
import frank from "../../images/frank.jpg";
import sebastian from "../../images/sebastian.jpg";
import totte from "../../images/totte.jpg";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: "#495869",
	},
	media: {
		height: 200,
		width: 240,
		borderRadius: 12,
	},
	actionArea: {
		borderRadius: 12,
	},
	card: {
		maxWidth: 240,
		boxShadow: "none",
		display: "inline-block",
		padding: theme.spacing(0, 1, 0, 0),
	},
	CardHeader: {
		padding: "16px 0",
	},
}));

const Freestyles = () => {
	const classes = useStyles();
	const datas = [
		{
			image: sebastian,
			title: "sebastian",
			avatar: 2,
			title2: "2bto - freestyle Leonidas",
		},
		{
			image: frank,
			title: "frank",
			avatar: "I",
			title2: "Innocent - freestyle Validé",
		},
		{
			image: totte,
			title: "totte",
			avatar: "x",
			title2: "xxxTentacion - freestyle Sad",
		},
	];

	return (
		<>
			<Titles
				title="Freestyles"
				subtitle="Les freestyles les plus hots du game"
			/>
			<HorizontalScroll>
				{datas.map((data) => (
					<Card className={classes.card} key={data.title}>
						<CardActionArea className={classes.actionArea}>
							<CardMedia
								// component="img"
								// alt={data.title}
								className={classes.media}
								image={data.image}
								title={data.title}
							/>
							<CardHeader
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
										{data.avatar}
									</Avatar>
								}
								className={classes.CardHeader}
								title={data.title2}
								subheader="Septembre 2016"
							/>
						</CardActionArea>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default Freestyles;
