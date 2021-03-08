import {
	Avatar,
	Button,
	Card,
	CardContent,
	Grid,
	IconButton,
	makeStyles,
	Typography,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Share from "@material-ui/icons/Share";
import React from "react";
import stars from "../../images/stars.jpg";

const useStyles = makeStyles((theme) => ({
	header: {
		marginBottom: theme.spacing(2),
	},
	avatar: {
		width: 80,
		height: 80,
		border: "2px solid #fff",
		margin: "-42px 18px 0 auto",
		"& > img": {
			margin: 0,
		},
	},
	card: {
		boxShadow: "none",
	},
	media: {
		height: 80,
	},
	content: {
		padding: "0 16px 0 16px",
	},
	username: {
		fontSize: "2.125rem",
		fontWeight: 600,
		lineHeight: "normal",
		color: "#122740",
	},
	country: {
		textTransform: "uppercase",
		fontSize: "1.2rem",
		color: "#122740",
		lineHeight: "normal",
	},
	button: {
		borderRadius: 50,
	},
}));

const ArtistShow = () => {
	const classes = useStyles();

	return (
		<>
			<Grid
				container
				spacing={1}
				direction="column"
				justify="center"
				alignItems="center"
				alignContent="center"
				wrap="nowrap"
			>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardMedia
							component="img"
							title=""
							image={stars}
							className={classes.media}
						/>
						<CardContent className={classes.content}>
							<Avatar className={classes.avatar} />
							<div className={classes.header}>
								<Typography component="h1" className={classes.username}>
									Gaspi
								</Typography>
								<Typography component="h2" className={classes.country}>
									Mali
								</Typography>
							</div>
							<Button
								variant="outlined"
								color="primary"
								className={classes.button}
								startIcon={<PeopleAlt />}
							>
								suivre
							</Button>
							<IconButton aria-label="share">
								<Share />
							</IconButton>
							<Grid container spacing={1} justify="space-between" wrap="nowrap">
								<Grid item>
									<Typography align="center">173570</Typography>
									<Typography align="center">Ecoutes</Typography>
								</Grid>
								<Grid item>
									<Typography align="center">15113</Typography>
									<Typography align="center">Téléchargements</Typography>
								</Grid>
								<Grid item>
									<Typography align="center">13</Typography>
									<Typography align="center">Favoris</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default ArtistShow;
