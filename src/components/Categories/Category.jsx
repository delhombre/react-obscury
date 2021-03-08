import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import lionne from "../../images/charisme.jpg";
import djater from "../../images/djater.jpg";

const useStyles = makeStyles((theme) => ({
	image: {
		position: "relative",
		height: 200,
		width: "100%",
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15,
			},
			"& $imageMarked": {
				opacity: 0,
			},
			"& $imageTitle": {
				border: "4px solid currentColor",
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%",
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity"),
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity"),
	},
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
	titles: {
		marginBottom: theme.spacing(1),
	},
}));

const images = [
	{
		url: djater,
		title: "Rap",
	},
	{
		url: lionne,
		title: "Pop",
	},
	{
		url: djater,
		title: "Rumba",
	},
];

function Category() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.titles}>
				<Typography className={classes.title}>
					Rap, Trap, {"R&B"}, Ambiance...
				</Typography>
				<Typography className={classes.subtitle}>
					La musique de votre choix
				</Typography>
			</div>
			<Grid container spacing={1}>
				{images.map((image, index) => (
					<Grid item xs={12} sm={6} md={4} lg={2} key={index}>
						<ButtonBase
							focusRipple
							className={classes.image}
							focusVisibleClassName={classes.focusVisible}
						>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${image.url})`,
								}}
							/>
							<span className={classes.imageBackdrop} />
							<span className={classes.imageButton}>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									className={classes.imageTitle}
								>
									{image.title}
									<span className={classes.imageMarked} />
								</Typography>
							</span>
						</ButtonBase>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default Category;
