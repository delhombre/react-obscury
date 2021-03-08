/* eslint-disable no-undef */
import { Button, SwipeableDrawer, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "../images/logo.png";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
	width: {
		Width: "256px",
	},
	drawerHeader: {
		background: "#000000",
	},
	logo: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(4, 0, 1, 0),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "center",
		color: "#fff",
	},
	login: {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		padding: theme.spacing(1, 0, 1, 0),
	},
}));

const Sidebar = ({ open, onOpen }) => {
	const classes = useStyles();

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<>
			<SwipeableDrawer
				anchor="left"
				open={open}
				onClose={onOpen(false)}
				onOpen={onOpen(true)}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				className={classes.width}
			>
				<div className={classes.drawerHeader}>
					<div className={classes.logo}>
						<img width={28} height={28} src={logo} alt="logo" />
						<Typography variant="h5">OBSCURY</Typography>
					</div>
					<div className={classes.login}>
						<Button variant="contained" color="secondary" size="small">
							Connexion | Inscription
						</Button>
					</div>
				</div>
				<SideMenu />
			</SwipeableDrawer>
		</>
	);
};

export default Sidebar;
