import {
	AppBar,
	Avatar,
	Divider,
	IconButton,
	InputBase,
	Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Search } from "@material-ui/icons";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import React from "react";

const useStyles = makeStyles((theme) => ({
	navbar: {
		borderRadius: "10px",
		marginBottom: theme.spacing(2),
	},
	input: {
		marginLeft: theme.spacing(0),
		flex: 1,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

const Topbar = ({ onOpen }) => {
	const classes = useStyles();
	const tiny = useSizedIconButtonStyles({ childSize: 28 });

	return (
		<AppBar position="static" color="transparent" className={classes.navbar}>
			<Toolbar>
				<IconButton
					edge="start"
					aria-label="menu"
					onClick={onOpen(true)}
					onKeyDown={onOpen(true)}
				>
					<Menu />
				</IconButton>

				<InputBase
					className={classes.input}
					placeholder="Rechercher sur obscury..."
					inputProps={{ "aria-label": "search obscury" }}
				/>
				<IconButton type="submit" aria-label="search">
					<Search />
				</IconButton>
				<Divider className={classes.divider} orientation="vertical" />
				<IconButton classes={tiny} edge="end" className={classes.avatarButton}>
					<Avatar />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
