import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import ArtistShow from "./components/Artists/ArtistShow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Tabs from "./components/Tabs";

const theme = createMuiTheme({
	typography: {
		fontFamily: "Maven Pro, Titillium Web, Source Sans Pro, Open Sans",
		htmlFontSize: 16,
	},
});

const useStyles = makeStyles((theme) => ({
	app: {
		margin: theme.spacing(1),
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.app}>
				<Navbar />
				<Switch>
					<Route exact path="/:page?" render={(props) => <Tabs {...props} />} />
					<Route path="/connexion" render={(props) => <SignIn {...props} />} />
					<Route path="/connexion" render={(props) => <SignUp {...props} />} />
				</Switch>
				{/* <ArtistShow /> */}
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
