import {
	Avatar,
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { blue, green, yellow } from "@material-ui/core/colors";
import { Eco, FilterVintage, Star } from "@material-ui/icons";
import React from "react";
import frank from "../../images/frank.jpg";
import microphone from "../../images/microphone.jpg";
import stars from "../../images/stars.jpg";
import totte from "../../images/totte.jpg";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 200,
		position: "relative",
		border: "none",
		boxShadow: "none",
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
	},
	media: {
		position: "relative",
		// ⚠️ object-fit is not supported by IE 11.
		objectFit: "cover",
	},
	footer: {
		position: "absolute",
		background: "rgba(0, 0, 0, 0.5)",
		bottom: 0,
		width: "100%",
		maxWidth: 200,
		color: "white",
	},
	yellowAvatar: {
		color: yellow[100],
		backgroundColor: yellow["A700"],
	},
	greenAvatar: {
		color: green[100],
		backgroundColor: green["A700"],
	},
	blueAvatar: {
		color: blue[100],
		backgroundColor: blue["A700"],
	},
	badgeName: {
		fontSize: "0.75rem",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	},
}));

const Top10Download = () => {
	const classes = useStyles();
	const datas = [
		{ alt: "microphone", image: microphone },
		{ alt: "stars", image: stars },
		{ alt: "microphone", image: microphone },
		{ alt: "frank", image: frank },
		{ alt: "totte", image: totte },
		{ alt: "frank", image: frank },
		{ alt: "microphone", image: microphone },
		{ alt: "totte", image: totte },
		{ alt: "microphone", image: microphone },
		{ alt: "frank", image: frank },
	];

	return (
		<>
			<Titles
				title="Top - Téléchargements"
				subtitle="Top 10 des titres les plus téléchargés"
			/>
			<HorizontalScroll>
				{datas.map((data, index) => (
					<Card className={classes.card} key={index}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt={data.alt}
								className={classes.media}
								height="200"
								width="200"
								image={data.image}
								title={data.alt}
							/>
							<div className={classes.footer}>
								<Grid
									container
									justify="space-between"
									alignItems="center"
									alignContent="space-between"
								>
									<Grid item style={{ padding: 6 }}>
										{(() => {
											switch (index) {
												case 0:
													return (
														<>
															<Typography
																className={classes.badgeName}
																style={{ color: yellow[100] }}
															>
																Boss de la platine
															</Typography>
														</>
													);
												case 1:
												case 2:
												case 3:
												case 4:
													return (
														<>
															<Typography
																className={classes.badgeName}
																style={{ color: green[100] }}
															>
																Challenger nº{index} du trône
															</Typography>
														</>
													);
												default:
													return (
														<>
															<Typography
																className={classes.badgeName}
																style={{ color: blue[100] }}
															>
																Dans la course
															</Typography>
														</>
													);
											}
										})()}
									</Grid>
									<Grid item style={{ padding: 6 }}>
										{(() => {
											switch (index) {
												case 0:
													return (
														<Avatar className={classes.yellowAvatar}>
															<Star />
														</Avatar>
													);
												case 1:
												case 2:
												case 3:
												case 4:
													return (
														<Avatar className={classes.greenAvatar}>
															<Eco />
														</Avatar>
													);
												default:
													return (
														<Avatar className={classes.blueAvatar}>
															<FilterVintage />
														</Avatar>
													);
											}
										})()}
									</Grid>
								</Grid>
							</div>
						</CardActionArea>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default Top10Download;
