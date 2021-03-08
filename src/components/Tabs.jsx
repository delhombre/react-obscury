import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import MuiTabs from "@material-ui/core/Tabs";
import { useGmailTabsStyles } from "@mui-treasury/styles/tabs";
import React from "react";
import Albums from "./Albums";
import Artists from "./Artists";
import Categories from "./Categories";
import Home from "./Home";
import Playlist from "./Playlist";
import Premium from "./Premium";
import Rankings from "./Rankings";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	appbar: {
		border: "none",
		boxShadow: "none",
	},

	tabRoot: {
		fontFamily: ["Maven Pro", "Source Sans Pro"].join(","),
		"&:hover": {
			color: red[500],
		},
		"&tabSelected": {
			color: red[700],
		},
		"&:focus": {
			color: red[700],
		},
	},
	tabSelected: {
		color: red[700],
	},
}));

const indicatorColors = [];

const Tabs = (props) => {
	const { match, history } = props;
	const { params } = match;
	const { page } = params;

	const tabNameToIndex = {
		0: "",
		1: "premium",
		2: "classements",
		3: "playlist",
		4: "albums",
		5: "artistes",
		6: "categories",
	};
	const indexToTabName = {
		accueil: 0,
		premium: 1,
		classements: 2,
		playlist: 3,
		albums: 4,
		artistes: 5,
		categories: 6,
	};

	let tabIndex = page === undefined ? "accueil" : page;

	const classes = useStyles();
	const [selectedTab, setSelectedTab] = React.useState(
		indexToTabName[tabIndex]
	);
	const tabsStyles = useGmailTabsStyles({ indicatorColors });

	const handleChange = (item, index) => {
		history.push(`/${tabNameToIndex[index]}`);
		setSelectedTab(index);
	};

	return (
		<>
			<MuiTabs
				className={classes.root}
				classes={tabsStyles}
				value={selectedTab}
				onChange={handleChange}
				TabIndicatorProps={{
					children: (
						<div
							className={`MuiIndicator-${selectedTab}`}
							style={{ backgroundColor: red[700] }}
						/>
					),
					indicator: { color: "#fff" },
				}}
				variant="scrollable"
				scrollButtons="auto"
			>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Accueil"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Premium"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Classements"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Playlist"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Albums"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Artistes"}
				/>
				<Tab
					classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
					label={"Catégories"}
				/>
			</MuiTabs>
			{selectedTab === 0 && <Home />}
			{selectedTab === 1 && <Premium />}
			{selectedTab === 2 && <Rankings />}
			{selectedTab === 3 && <Playlist />}
			{selectedTab === 4 && <Albums />}
			{selectedTab === 5 && <Artists />}
			{selectedTab === 6 && <Categories />}
		</>
	);
};

export default Tabs;
