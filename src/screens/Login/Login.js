import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, H3, Text } from "native-base";

import LoginForm from "../../components/LoginForm/LoginForm";

import logo from "../../assets/images/beerkip-logo-white.png";
import COLORS from "../../utils/colors";

class Login extends Component {
	handleLoginFormSubmit = values => {
		console.log(values);
	};

	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<Image source={logo} style={styles.logo} />

					<View style={styles.loginFormBox}>
						<H3>Login</H3>
						<LoginForm onSubmit={this.handleLoginFormSubmit} />
					</View>

					<Button
						bordered
						light
						small
						onPress={() => {
							this.props.navigation.navigate("BeersList");
						}}
					>
						<Text>Go to app</Text>
					</Button>
				</View>
				<Text style={styles.credits}>
					An app by Pierre Saïkali — www.saika.li
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screenContentWrapper: {
		flex: 1,
		backgroundColor: COLORS.purple,
		justifyContent: "center",
	},
	contentBox: {
		marginHorizontal: 50,
	},
	logo: {
		height: undefined,
		width: "100%",
		aspectRatio: 507 / 102,
		marginBottom: 30,
	},
	loginFormBox: {
		backgroundColor: "#ffffff",
		borderRadius: 5,
		paddingVertical: 30,
		paddingHorizontal: 15,
		marginBottom: 30,
		elevation: 25,
	},
	credits: {
		position: "absolute",
		bottom: 20,
		left: 5,
		right: 5,
		textAlign: "center",
		color: "rgba(255,255,255,.25)",
		fontSize: 10,
	},
});

export default Login;
