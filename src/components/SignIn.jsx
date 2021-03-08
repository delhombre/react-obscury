import { IconButton, InputAdornment } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				{/* <CssBaseline /> */}
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Connexion
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Adresse Email"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							id="password"
							type={values.showPassword ? "text" : "password"}
							value={values.password}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Mot de passe"
							onChange={handleChange("password")}
							autoComplete="current-password"
							InputProps={{
								endAdornment: (
									<InputAdornment
										position="end"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										<IconButton>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Rester connecté e"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Se connecter
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Mot de passe oublié?
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</>
	);
};

export default SignIn;
