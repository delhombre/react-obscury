import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: theme.spacing(2),
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
	img: {
		display: "block",
		// margin: "auto",
		width: "100%",
		height: "auto",
	},
}));

const Greeting = ({ title, subtitle, image }) => {
	const classes = useStyles();

	return (
		<>
			<Grid
				container
				spacing={1}
				justify="center"
				// direction="column"
				alignItems="center"
				// alignContent="center"
				// wrap="nowrap"
				className={classes.container}
			>
				<Grid item xs={8} sm={9}>
					<Typography variant="h1" className={classes.title}>
						{title}
					</Typography>
					<Typography variant="h2" className={classes.subtitle}>
						{subtitle}
					</Typography>
				</Grid>
				<Grid item xs={4} sm={3}>
					{image ? (
						<img className={classes.img} alt={""} src={image} />
					) : (
						<Skeleton variant="rect" />
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Greeting;
