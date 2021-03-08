import {
	Avatar,
	Button,
	IconButton,
	makeStyles,
	Paper,
	Tab,
	Tabs,
	Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
	AddCommentRounded,
	HeadsetMicRounded,
	PeopleAlt,
	PlaylistPlayRounded,
	Share,
} from "@material-ui/icons";
import React from "react";
import stars from "../../images/stars.jpg";
import ArtistMusicsTopDownloaded from "./ArtistMusicsTopDownloaded";

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: 110,
		height: 110,
		border: "2px solid #fff",
		"& > img": {
			margin: 0,
		},
		marginRight: 10,
	},
	img: {
		width: "100%",
		height: 90,
	},
	card: {
		marginTop: -67,
		textAlign: "center",
		marginBottom: theme.spacing(1),
	},
	header: {
		marginBottom: theme.spacing(2),
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
	buttons: {
		marginBottom: theme.spacing(1),
	},
	infos: {
		textAlign: "center",
		marginBottom: theme.spacing(1),
	},
	heading: {
		fontWeight: 600,
		color: "#122740",
	},
	subheading: {
		fontSize: "0.75rem",
	},
	paper: {
		flexGrow: 1,
		width: "100%",
		boxShadow: "none",
		marginBottom: theme.spacing(2),
	},
}));

const ArtistShow = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<img src={stars} alt="lll" className={classes.img} />
			<Grid
				container
				justify="space-between"
				alignItems="flex-end"
				wrap="nowrap"
				spacing={1}
				className={classes.card}
			>
				<Grid item>
					<Typography className={classes.heading}>15800</Typography>
					<Typography className={classes.subheading}>Abonnés</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.heading}>2192</Typography>
					<Typography className={classes.subheading}>Abonnements</Typography>
				</Grid>
				<Grid item>
					<Avatar className={classes.avatar} />
				</Grid>
			</Grid>
			<div className={classes.header}>
				<Typography component="h1" className={classes.username}>
					Innocent
				</Typography>
				<Typography component="h2" className={classes.country}>
					Mali
				</Typography>
			</div>
			<Grid
				container
				alignItems="center"
				spacing={1}
				className={classes.buttons}
			>
				<Grid item xs={5}>
					<Button
						variant="outlined"
						color="primary"
						className={classes.button}
						startIcon={<PeopleAlt />}
					>
						suivre
					</Button>
				</Grid>
				<Grid item>
					<IconButton aria-label="share">
						<Share />
					</IconButton>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={1}
				alignItems="center"
				justify="space-between"
				wrap="nowrap"
				className={classes.infos}
			>
				<Grid item>
					<Typography className={classes.heading}>173570</Typography>
					<Typography className={classes.subheading}>Écoutes</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.heading}>15113</Typography>
					<Typography className={classes.subheading}>
						Téléchargements
					</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.heading}>13</Typography>
					<Typography className={classes.subheading}>Favoris</Typography>
				</Grid>
			</Grid>
			<Paper className={classes.paper}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="fullWidth"
					indicatorColor="secondary"
					textColor="secondary"
				>
					<Tab icon={<HeadsetMicRounded />} />
					<Tab icon={<PlaylistPlayRounded />} />
					<Tab icon={<AddCommentRounded />} />
				</Tabs>
			</Paper>
			{value === 0 && <ArtistMusicsTopDownloaded />}
			{/* {value === 1 && <Premium />}
			{value === 2 && <Rankings />} */}
		</>
	);
};

export default ArtistShow;
