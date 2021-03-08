import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import {
	Call,
	Facebook,
	Favorite,
	Instagram,
	Payment,
	PermIdentity,
	Settings,
	ShoppingCart,
	WhatsApp,
	YouTube,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		minWidth: 256,
		backgroundColor: theme.palette.background.paper,
	},
}));

// function ListItemLink(props) {
// 	return <ListItem button component="a" {...props} />;
// }

const SideMenu = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button>
					<ListItemIcon>
						<PermIdentity />
					</ListItemIcon>
					<ListItemText primary="Mon compte" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ShoppingCart />
					</ListItemIcon>
					<ListItemText primary="Mon panier" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<Favorite />
					</ListItemIcon>
					<ListItemText primary="Mes favoris" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<Payment />
					</ListItemIcon>
					<ListItemText primary="Mes achats" />
				</ListItem>
			</List>
			<Divider />
			<List component="nav" disablePadding={false}>
				<ListItem button>
					<ListItemIcon>
						<Call />
					</ListItemIcon>
					<ListItemText primary="Contactez-nous !" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<Settings />
					</ListItemIcon>
					<ListItemText primary="Paramètres" />
				</ListItem>
			</List>
			<Divider />

			<List component="nav" disablePadding={false}>
				<ListItem>
					<ListItemText primary="Suivez-nous sur :" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<IconButton>
							<Facebook />
						</IconButton>
					</ListItemIcon>
					<ListItemIcon>
						<IconButton>
							<Instagram />
						</IconButton>
					</ListItemIcon>
					<ListItemIcon>
						<IconButton>
							<WhatsApp />
						</IconButton>
					</ListItemIcon>
					<ListItemIcon>
						<IconButton>
							<YouTube />
						</IconButton>
					</ListItemIcon>
				</ListItem>
			</List>
			<Divider />
			<List component="nav" disablePadding={false}>
				<ListItem button>
					<ListItemText primary="Conditions générales d'utilisation" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Politique de confidentialité" />
				</ListItem>
			</List>
		</div>
	);
};

export default SideMenu;
