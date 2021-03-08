/* eslint-disable no-unused-vars */
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { Item, Row } from "@mui-treasury/components/flex";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: { marginBottom: theme.spacing(1) },
	title: {
		fontSize: "1.5rem",
		fontWeight: 500,
		lineHeight: "normal",
		color: "#122740",
	},
	subtitle: {
		fontSize: "0.875rem",
		lineHeight: "normal",
		color: "#495869",
	},
}));

const Titles = ({ title, subtitle }) => {
	const classes = useStyles();
	const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
	return (
		<Row className={classes.container}>
			<Item position="left">
				<Typography className={classes.title}>{title}</Typography>
				<Typography className={classes.subtitle}>{subtitle}</Typography>
			</Item>
			<Item position="right" mr={-0.5}>
				<IconButton classes={iconBtnStyles}>
					<ArrowForward />
				</IconButton>
			</Item>
		</Row>
	);
};

export default Titles;
