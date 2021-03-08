import { Avatar, makeStyles } from "@material-ui/core";
import { blue, green, purple, yellow } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CloudDownload, Eco, FilterVintage, Star } from "@material-ui/icons";
import React from "react";
import lionne from "../../images/charisme.jpg";
import djater from "../../images/djater.jpg";
import vgHm from "../../images/vg_hm.jpg";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: theme.spacing(2),
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 4,
		margin: "auto",
	},
	icons: {
		fontSize: "1.25rem",
	},
	yellowAvatar: {
		color: yellow[100],
		backgroundColor: yellow["A700"],
		margin: "auto",
		width: 30,
		height: 30,
	},
	greenAvatar: {
		color: green[100],
		backgroundColor: green["A700"],
		margin: "auto",
		width: 30,
		height: 30,
	},
	blueAvatar: {
		color: blue[100],
		backgroundColor: blue["A700"],
		margin: "auto",
		width: 30,
		height: 30,
	},
	badgeName: {
		lineHeight: "normal",
		fontSize: "0.75rem",
		textAlign: "center",
		color: "#495869",
	},
	number: {
		color: purple[900],
		fontSize: "1rem",
		fontFamily: "Maven Pro",
	},
	title: {
		fontSize: "1rem",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		color: "#122740",
		textTransform: "uppercase",
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

const datas = [
	{ image: vgHm, title: "Horon Mousso", author: "VG Tanamon", downloads: 5241 },
	{ image: lionne, title: "Lionne", author: "Innocent", downloads: 4871 },
	{ image: djater, title: "Djater", author: "MG family", downloads: 4652 },
];

const TopDownload = () => {
	const classes = useStyles();

	return (
		<>
			<Titles title="Top - Téléchargements" />
			<div className={classes.container}>
				{datas.map((item, index) => (
					<Grid
						container
						justify="center"
						alignItems="center"
						spacing={1}
						wrap="wrap"
						key={index}
					>
						<Grid item xs={1}>
							<span className={classes.number}>{index + 1}</span>
						</Grid>
						<Grid item xs={3}>
							{(() => {
								switch (index) {
									case 0:
										return (
											<>
												<Avatar className={classes.yellowAvatar}>
													<Star className={classes.icons} />
												</Avatar>
												<Typography className={classes.badgeName}>
													Boss de la platine
												</Typography>
											</>
										);
									case 1:
									case 2:
									case 3:
									case 4:
										return (
											<>
												<Avatar className={classes.greenAvatar}>
													<Eco className={classes.icons} />
												</Avatar>
												<Typography className={classes.badgeName}>
													Challenger nº{index} du trône
												</Typography>
											</>
										);
									default:
										return (
											<>
												<Avatar className={classes.blueAvatar}>
													<FilterVintage className={classes.icons} />
												</Avatar>
												<Typography className={classes.badgeName}>
													Dans la course
												</Typography>
											</>
										);
								}
							})()}
						</Grid>
						<Grid item xs={3}>
							<Avatar alt="lorem" src={item.image} className={classes.avatar} />
						</Grid>
						<Grid item xs={5}>
							<Typography variant="subtitle2" className={classes.title}>
								{item.title}
							</Typography>
							<Typography variant="subtitle1" className={classes.subtitle}>
								{item.author}
							</Typography>
							<Typography className={classes.subtitle}>
								<CloudDownload
									style={{
										verticalAlign: "middle",
										paddingRight: 10,
										fontSize: "0.875rem",
									}}
								/>
								<Typography
									component="span"
									style={{ verticalAlign: "middle", fontSize: "0.875rem" }}
								>
									{item.downloads}
								</Typography>
							</Typography>
						</Grid>
					</Grid>
				))}
			</div>
		</>
	);
};

export default TopDownload;
