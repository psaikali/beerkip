import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "native-base";

import logo from "../../assets/images/beerkip-logo-white.png";
import COLORS from "../../utils/colors";

class Login extends Component {
	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<Image source={logo} style={styles.logo} />

					<Button
						bordered
						light
						onPress={() => {
							this.props.navigation.navigate("BeersList");
						}}
					>
						<Text>Go to app</Text>
					</Button>
				</View>
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
		marginBottom: 20,
	},
});

export default Login;
