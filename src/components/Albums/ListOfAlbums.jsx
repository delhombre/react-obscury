import {
	Avatar,
	Card,
	CardActionArea,
	CardContent,
	makeStyles,
	Typography,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { QueueMusicRounded } from "@material-ui/icons";
import React from "react";
import tripleK from "../../images/triplek.PNG";

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: "1.5rem",
		fontWeight: 500,
		lineHeight: "normal",
		color: "#122740",
		marginBottom: theme.spacing(1),
	},
	image: {
		width: "100%",
		height: "auto",
	},
	name: {
		fontSize: "1.5rem",
		fontWeight: 500,
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#122740",
	},
	author: {
		fontSize: "0.875rem",
		lineHeight: "normal",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#495869",
	},
	avatar: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		margin: "auto",
	},
}));

const ListOfAlbums = () => {
	const classes = useStyles();

	return (
		<>
			<Typography variant="body1" className={classes.title}>
				{"Explorez notre collection d'albums"}
			</Typography>
			<Grid
				container
				justify="space-between"
				alignContent="space-between"
				spacing={2}
			>
				{[1, 2, 3, 4].map((item) => (
					<Grid item xs={6} sm={4} lg={2} key={item}>
						<Card>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="triplek"
									image={tripleK}
									className={classes.image}
								/>
								<CardContent>
									<Grid
										container
										justify="space-between"
										spacing={1}
										alignItems="center"
									>
										<Grid item xs={8}>
											<Typography className={classes.name}>Triple K</Typography>
											<Typography className={classes.author}>
												King Kesh khalifa
											</Typography>
										</Grid>
										<Grid item xs={4}>
											<Avatar className={classes.avatar}>
												<QueueMusicRounded />
											</Avatar>
											<Typography align="center" variant="body1">
												50
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ListOfAlbums;
