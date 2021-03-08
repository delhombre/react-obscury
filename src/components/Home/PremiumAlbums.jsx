import {
	Button,
	CardActionArea,
	CardActions,
	Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import cx from "clsx";
import React from "react";
import incomprise from "../../images/incomprise.jpg";
import sebastian from "../../images/sebastian.jpg";
import totte from "../../images/totte.jpg";
import tripleK from "../../images/triplek.PNG";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		width: 300,
		borderRadius: 12,
		padding: 6,
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
		border: `1px solid ${red[100]}`,
		boxShadow: "none",
	},
	actionArea: {
		borderRadius: 12,
	},
	media: {
		borderRadius: 12,
	},
	actions: {
		justifyContent: "space-between",
	},
}));

const PremiumAlbums = () => {
	const styles = useStyles();
	const mediaStyles = useFourThreeCardMediaStyles();
	const textCardContentStyles = useN04TextInfoContentStyles();
	const datas = [
		{ image: incomprise, overline: "Innocent", heading: "Incomprise" },
		{ image: tripleK, overline: "King Kesh Khalifa", heading: "Tripl3 K" },
		{ image: totte, overline: "Lil Uzi Vert", heading: "Call Me" },
		{ image: sebastian, overline: "xxxTentacion", heading: "?" },
	];

	return (
		<>
			<Titles title="Albums premiums" subtitle="Albums et mixtapes payants" />
			<HorizontalScroll>
				{datas.map((data) => (
					<Card className={styles.root} key={data.overline}>
						<CardActionArea className={styles.actionArea}>
							<CardMedia
								className={cx(styles.media, mediaStyles.root)}
								image={data.image}
							/>
							<CardContent>
								<TextInfoContent
									classes={textCardContentStyles}
									overline={data.overline}
									heading={data.heading}
									body="Date de sortie: 02 Octobre 2019"
								/>
							</CardContent>
						</CardActionArea>
						<CardActions className={styles.actions}>
							<Button variant="outlined" color="secondary">
								Acheter
							</Button>
							<Typography variant="h6" color="initial">
								1000 FCFA
							</Typography>
						</CardActions>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default PremiumAlbums;
