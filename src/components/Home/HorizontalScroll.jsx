import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "auto",
		whiteSpace: "nowrap",
		marginBottom: theme.spacing(2),
		// WebkitOverflowScrolling: "touch",
	},
}));

const HorizontalScroll = (props) => {
	const classes = useStyles();

	return <div className={classes.root}>{props.children}</div>;
};

export default HorizontalScroll;
