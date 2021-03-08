import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { PlayCircleFilled } from "@material-ui/icons";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { Column, Item, Row } from "@mui-treasury/components/flex";
import {
	Info,
	InfoCaption,
	InfoSubtitle,
	InfoTitle,
} from "@mui-treasury/components/info";
import { useGrowAvatarStyles } from "@mui-treasury/styles/avatar/grow";
import { useMusicInfoStyles } from "@mui-treasury/styles/info/music";
import React from "react";
import charisme from "../../images/charisme.jpg";
import vgHm from "../../images/vg_hm.jpg";
import wari from "../../images/wari.jpg";
const useStyles = makeStyles((theme) => ({
	text: {
		display: "flex",
		alignItems: "center",
		"& > svg": {
			fontSize: 18,
			color: "#888",
			marginRight: 4,
		},
	},
	title: {
		fontSize: "1.5rem",
		fontWeight: 500,
		lineHeight: "normal",
		color: "#122740",
		marginBottom: theme.spacing(2),
	},
}));

const SelectionOfTheDay = () => {
	const commonProps = {
		blur: "12px",
		radius: 6,
		size: 80,
		opacity: 0.6,
	};
	const src = charisme;
	const avatarStyles = useGrowAvatarStyles({ src, ...commonProps });
	const src2 = vgHm;
	const avatarStyles2 = useGrowAvatarStyles({ src: src2, ...commonProps });
	const src3 = wari;
	const avatarStyles3 = useGrowAvatarStyles({ src: src3, ...commonProps });
	const styles = useStyles();

	return (
		<>
			<Typography className={styles.title}>Sélections du jour</Typography>
			<Column gap={2} width={"100%"} style={{ padding: 0 }}>
				<Row>
					<Item>
						<div className={avatarStyles.root}>
							<Avatar src={src} />
						</div>
					</Item>
					<Info useStyles={useMusicInfoStyles} minWidth={0}>
						<InfoTitle>Lionne</InfoTitle>
						<InfoSubtitle>Innocent</InfoSubtitle>
					</Info>
					<Item position={"right"}>
						<IconButton size={"small"}>
							<MoreHoriz />
						</IconButton>
					</Item>
				</Row>
				<Row mt={2}>
					<Item>
						<div className={avatarStyles2.root}>
							<Avatar src={src2} />
						</div>
					</Item>
					<Info useStyles={useMusicInfoStyles} minWidth={0}>
						<InfoTitle>Horon Mousso</InfoTitle>
						<InfoSubtitle>VG Tanamon</InfoSubtitle>
						<InfoCaption className={styles.text}>
							<PlayCircleFilled /> {"entrain d'être joué..."}
						</InfoCaption>
					</Info>
					<Item position={"right"}>
						<IconButton size={"small"}>
							<MoreHoriz />
						</IconButton>
					</Item>
				</Row>
				<Row mt={2}>
					<Item>
						<div className={avatarStyles3.root}>
							<Avatar src={src3} />
						</div>
					</Item>
					<Info useStyles={useMusicInfoStyles} minWidth={0}>
						<InfoTitle>Wari Wari</InfoTitle>
						<InfoSubtitle>Fine Flow</InfoSubtitle>
						{/* <InfoCaption className={styles.text}>
							<PlayCircleFilled /> {"entrain d'être joué..."}
						</InfoCaption> */}
					</Info>
					<Item position={"right"}>
						<IconButton size={"small"}>
							<MoreHoriz />
						</IconButton>
					</Item>
				</Row>
			</Column>
		</>
	);
};

export default SelectionOfTheDay;
