import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	topTitle: {
		fontSize: "1.5rem",
		fontWeight: 500,
		lineHeight: "normal",
		color: "#122740",
		marginBottom: theme.spacing(1),
	},
}));

const Titles = ({ title }) => {
	const classes = useStyles();

	return (
		<>
			<Typography component="h1" className={classes.topTitle}>
				{title}
			</Typography>
		</>
	);
};

export default Titles;
