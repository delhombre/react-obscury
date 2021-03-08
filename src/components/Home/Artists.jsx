/* eslint-disable react/no-unescaped-entities */
import { Button, CardActionArea, CardActions } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { blue, grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	card: {
		border: `2px solid ${blue[50]}`,
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
		borderRadius: 12,
		boxShadow: "none",
		maxWidth: 256,
		textAlign: "center",
		fontFamily: "Maven Pro, Source Sans Pro",
	},
	actionArea: {
		borderRadius: 12,
		fontFamily: "Maven Pro, Source Sans Pro",
	},
	avatar: {
		width: 60,
		height: 60,
		margin: "auto",
	},
	heading: {
		fontSize: 18,
		fontWeight: 500,
		letterSpacing: "0.5px",
		marginTop: 8,
		marginBottom: 0,
		color: "#122740",
	},
	subheader: {
		fontSize: 14,
		color: grey[500],
		marginBottom: "0.875em",
	},
	statLabel: {
		fontSize: 12,
		color: grey[500],
		// fontWeight: 500,
		margin: 0,
	},
	statValue: {
		fontSize: 20,
		// fontWeight: "bold",
		marginBottom: 4,
		letterSpacing: "1px",
	},
}));

const datas = [
	{ name: "Iba One", followers: 24052, following: 12458, isFollowed: true },
	{ name: "Gaspi", followers: 16941, following: 9781 },
	{ name: "2bto", followers: 6941, following: 2781 },
	{ name: "Mobjack", followers: 5741, following: 2071 },
];

const Artists = () => {
	const styles = useStyles();
	const borderedGridStyles = useGutterBorderedGridStyles({
		borderColor: "rgba(0, 0, 0, 0.08)",
		height: "50%",
	});

	return (
		<>
			<Titles
				title="Vos artistes"
				subtitle="Retrouvez et abonnez-vous à vos artistes préférés"
			/>
			<HorizontalScroll>
				{datas.map((data, index) => (
					<Card className={styles.card} key={index}>
						<CardActionArea className={styles.actionArea}>
							<CardContent>
								<Avatar
									className={styles.avatar}
									src={"https://i.pravatar.cc/300"}
								/>
								<h3 className={styles.heading}>{data.name}</h3>
								{/* <span className={styles.subheader}>Poland</span> */}
							</CardContent>
							<Divider style={{ backgroundColor: blue[50] }} />
							<Box display={"flex"}>
								<Box p={2} flex={"auto"} className={borderedGridStyles.item}>
									<p className={styles.statLabel}>Abonnés</p>
									<p className={styles.statValue}>{data.followers}</p>
								</Box>
								<Box p={2} flex={"auto"} className={borderedGridStyles.item}>
									<p className={styles.statLabel}>Abonnements</p>
									<p className={styles.statValue}>{data.following}</p>
								</Box>
							</Box>
						</CardActionArea>
						<CardActions>
							{data.isFollowed ? (
								<Button
									variant="outlined"
									color="secondary"
									style={{ margin: "auto" }}
								>
									Se désabonner
								</Button>
							) : (
								<Button
									variant="outlined"
									color="primary"
									style={{ margin: "auto" }}
								>
									S'abonner
								</Button>
							)}
						</CardActions>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default Artists;
