import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import charisme from "../../images/charisme.jpg";
import djater from "../../images/djater.jpg";
import lecouteau from "../../images/lecouteau.jpg";
import valide from "../../images/validé.jpg";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: theme.spacing(2),
	},
	media: {
		width: 150,
		height: 150,
		borderRadius: 6,
	},
	card: {
		border: "none",
		borderRadius: 6,
		boxShadow: "none",
	},
	actionArea: {
		borderRadius: 6,
		width: 150,
		height: "auto",
	},
	title: {
		fontSize: "1.2rem",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#122740",
	},
	subtitle: {
		fontSize: "0.875rem",
		lineHeight: "normal",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#495869",
	},
}));

const Recommended = () => {
	const classes = useStyles();
	const datas = [
		{ image: valide, title: "Validé", author: "Innocent" },
		{ image: djater, title: "Djater", author: "MG Family" },
		{ image: lecouteau, title: "Le Couteau", author: "PKG Az Boy" },
		{ image: charisme, title: "Lionne", author: "Innocent" },
	];

	return (
		<>
			<Titles title="Recommandations" />
			<Grid container spacing={1} className={classes.container}>
				{datas.map((data, index) => (
					<Grid item xs={6} sm={4} md={3} key={index}>
						<Card className={classes.card}>
							<CardActionArea className={classes.actionArea}>
								<CardMedia
									title={data.title}
									image={data.image}
									className={classes.media}
								/>
								<CardContent>
									<Typography variant="body1" className={classes.title}>
										{data.title}
									</Typography>
									<Typography variant="subtitle1" className={classes.subtitle}>
										{data.author}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Recommended;
