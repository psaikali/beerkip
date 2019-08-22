import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

class Login extends Component {
	render() {
		return (
			<View>
				<Text>Login screen</Text>
				<Button
					onPress={() => {
						this.props.navigation.navigate("BeersList");
					}}
				>
					<Text>Go to app</Text>
				</Button>
			</View>
		);
	}
}

export default Login;
