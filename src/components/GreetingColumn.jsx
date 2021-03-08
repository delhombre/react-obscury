import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: theme.spacing(2),
	},
	avatar: {
		width: "100%",
		height: "auto",
	},
	title: {
		fontSize: "1.25rem",
		fontWeight: 400,
		textAlign: "center",
		color: red[300],
		[theme.breakpoints.up("md")]: {
			fontSize: "2rem",
		},
		textTransform: "uppercase",
	},
	subtitle: {
		textAlign: "center",
		fontSize: "1rem",
		[theme.breakpoints.up("md")]: {
			fontSize: "1.5rem",
		},
	},
}));

const GreetingColumn = ({ image, title, subtitle }) => {
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
				className={classes.container}
			>
				<Grid item xs={6} md={4} lg={2}>
					<Avatar alt="Homepage" src={image} className={classes.avatar} />
				</Grid>
				<Grid item>
					<Typography variant="h1" className={classes.title}>
						{title}
					</Typography>
					<Typography variant="h2" className={classes.subtitle}>
						{subtitle}
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default GreetingColumn;
