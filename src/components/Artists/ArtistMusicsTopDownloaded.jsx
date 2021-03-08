import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {
	FavoriteRounded,
	GetAppRounded,
	ShareRounded,
} from "@material-ui/icons";
import React from "react";
import lionne from "../../images/charisme.jpg";
import Titles from "./Titles";

const useStyles = makeStyles(() => ({
	image: {
		width: 60,
		height: 60,
	},
	title: {
		fontWeight: 500,
		color: "#122740",
	},
	subtitle: {
		fontSize: "0.875rem",
		color: "#122740",
	},
}));

const ArtistMusicsTopDownloaded = () => {
	const classes = useStyles();

	return (
		<>
			<Titles title="Titres les plus téléchargés" />
			<Grid
				container
				justify="space-between"
				alignItems="center"
				alignContent="center"
				spacing={1}
				wrap="nowrap"
			>
				<Grid item>
					<Card>
						<CardMedia
							component="img"
							alt="lionne"
							image={lionne}
							className={classes.image}
						/>
					</Card>
				</Grid>
				<Grid item>
					<Typography className={classes.title} noWrap>
						Lionne
					</Typography>
					<Typography className={classes.subtitle} noWrap>
						Innocent
					</Typography>
				</Grid>
				<Grid item>
					<IconButton aria-label="Like button">
						<FavoriteRounded />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton aria-label="Share button">
						<ShareRounded />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton aria-label="Download button">
						<GetAppRounded />
					</IconButton>
				</Grid>
			</Grid>
		</>
	);
};

export default ArtistMusicsTopDownloaded;
