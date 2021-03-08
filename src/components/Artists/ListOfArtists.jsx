import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
	avatar: {
		marginBottom: theme.spacing(1),
	},
	info: {
		textAlign: "center",
	},

	title: {
		fontSize: "1.5rem",
		// fontWeight: 500,
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#122740",
	},
	subtitle: {
		fontSize: "0.875rem",
		// lineHeight: "normal",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#495869",
	},
}));

const ListOfArtists = () => {
	const classes = useStyles();
	const avatar = useRef(null);
	// eslint-disable-next-line no-unused-vars
	const [width, setWidth] = useState("100%");
	const [height, setHeight] = useState("auto");
	useEffect(() => {
		console.log(avatar.current.offsetWidth, avatar.current.clientWidth);
		setHeight(avatar.current.offsetWidth);
		const handleResize = () => {
			setHeight(avatar.current.offsetWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [avatar]);

	return (
		<>
			<Grid
				container
				justify="space-between"
				alignContent="space-between"
				spacing={2}
			>
				{[1, 2, 3, 4].map((item) => (
					<Grid item xs={6} sm={4} md={3} lg={2} key={item}>
						<Avatar
							className={classes.avatar}
							ref={avatar}
							style={{
								width: width,
								height: height,
							}}
						/>
						<div className={classes.info}>
							<Typography variant="h1" className={classes.title}>
								2bto
							</Typography>
							<Typography variant="h2" className={classes.subtitle}>
								Mali
							</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ListOfArtists;
