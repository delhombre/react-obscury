import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
	footer: {
		textAlign: "center",
		// marginTop: "auto",
		padding: theme.spacing(2, 0),
	},
}));

const Copyright = () => (
	<Typography variant="body2" color="textSecondary">
		{"Copyright © "}
		<Link color="inherit" href="https://material-ui.com/">
			OBSCURY
		</Link>{" "}
		{new Date().getFullYear()}
		{"."}
	</Typography>
);

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Typography variant="body1">
						Tous les droits sur ce site sont réservés.
					</Typography>
					<Copyright />
				</Container>
			</footer>
		</>
	);
};

export default Footer;
