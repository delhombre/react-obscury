import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: theme.spacing(1),
	},
	title: {
		fontSize: "1.3rem",
		fontWeight: 500,
		color: "#122740",
	},
}));

const Titles = ({ title }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Typography className={classes.title} noWrap>
				{title}
			</Typography>
		</div>
	);
};

export default Titles;
