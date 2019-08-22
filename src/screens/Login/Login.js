import React, { Component } from "react";
import {
	View,
	Image,
	Linking,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { Button, H3, Text } from "native-base";

import LoginForm from "../../components/LoginForm/LoginForm";

import logo from "../../assets/images/beerkip-logo-white.png";
import COLORS from "../../utils/colors";

class Login extends Component {
	handleLoginFormSubmit = values => {
		console.log(values);

		// For now, fake Login Success and navigate to BeersList.
		this.props.navigation.navigate("BeersList");
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
				</View>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							"https://saika.li/?utm_source=beerkip&utm_medium=app"
						);
					}}
					style={styles.creditsContainer}
				>
					<Text style={styles.creditsText}>
						An app by Pierre Saïkali — www.saika.li
					</Text>
				</TouchableOpacity>
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
	creditsContainer: {
		position: "absolute",
		bottom: 20,
		left: 5,
		right: 5,
	},
	creditsText: {
		textAlign: "center",
		color: "rgba(255,255,255,.25)",
		fontSize: 10,
	},
});

export default Login;
