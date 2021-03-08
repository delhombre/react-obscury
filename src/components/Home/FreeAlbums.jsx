import { CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { indigo } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import cx from "clsx";
import React from "react";
import sebastian from "../../images/sebastian.jpg";
import totte from "../../images/totte.jpg";
import HorizontalScroll from "./HorizontalScroll";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
	card: {
		minWidth: 230,
		// width: 300,
		borderRadius: 6,
		padding: 2,
		display: "inline-block",
		margin: theme.spacing(0, 1, 0, 0),
		border: `1px solid ${indigo[100]}`,
		boxShadow: "none",
	},
	actionArea: {
		borderRadius: 6,
	},
	media: {
		borderRadius: 6,
	},
}));

const FreeAlbums = () => {
	const styles = useStyles();
	const mediaStyles = useFourThreeCardMediaStyles();
	const textCardContentStyles = useN04TextInfoContentStyles();
	const datas = [
		{ image: totte, overline: "Lil Uzi Vert", heading: "Call Me" },
		{ image: sebastian, overline: "xxxTentacion", heading: "?" },
	];

	return (
		<>
			<Titles
				title="Albums gratuits"
				subtitle="Ambiancez-vous sur les œuvres de vos artistes"
			/>
			<HorizontalScroll>
				{datas.map((data) => (
					<Card className={styles.card} key={data.overline}>
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
									body="02 Octobre 2019"
								/>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</HorizontalScroll>
		</>
	);
};

export default FreeAlbums;
