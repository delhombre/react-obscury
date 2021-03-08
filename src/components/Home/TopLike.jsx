/* eslint-disable react/no-unescaped-entities */
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
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
	content: {
		padding: "5px 0",
	},
}));

const TopLike = () => {
	const classes = useStyles();
	const datas = [
		{ image: djater, title: "Djater", author: "MG Family", likes: "1354" },
		{ image: valide, title: "Validé", author: "Innocent", likes: "452" },
		{
			image: lecouteau,
			title: "Le Couteau",
			author: "PKG Az Boy",
			likes: "321",
		},
		{ image: charisme, title: "Lionne", author: "Innocent", likes: "295" },
		{ image: valide, title: "Validé", author: "Innocent", likes: "290" },
		{ image: djater, title: "Djater", author: "MG Family", likes: "125" },
	];

	return (
		<>
			<Titles title="Top - J'aime" subtitle="Les titres les plus aimés" />
			<Grid container spacing={1} className={classes.container}>
				{datas.map((data, index) => (
					<Grid item xs={6} sm={4} md={2} key={index}>
						<Card className={classes.card}>
							<CardActionArea className={classes.actionArea}>
								<CardMedia
									title={data.title}
									image={data.image}
									className={classes.media}
								/>
								<CardContent className={classes.content}>
									<Typography variant="body1" className={classes.title}>
										{data.title} - {data.author}
									</Typography>
									{/* <Typography variant="subtitle1" className={classes.subtitle}>
										{data.author}
									</Typography> */}
									<Typography>
										<Favorite
											color="secondary"
											style={{
												verticalAlign: "middle",
												paddingRight: 5,
												fontSize: 20,
											}}
										/>
										<Typography
											component="span"
											variant="body1"
											style={{ verticalAlign: "middle" }}
										>
											{data.likes} J'aimes
										</Typography>
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

export default TopLike;
