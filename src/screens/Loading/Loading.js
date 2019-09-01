import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";

class Loading extends Component {
	/**
	 * Let's check if user is logged in, or not
	 */
	componentDidMount() {
		const isLoggedIn = this.props.user && this.props.user.token;
		this.props.navigation.navigate(isLoggedIn ? "App" : "Login");
	}

	render() {
		return (
			<View>
				<Text>Loading screen</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	user: state.app.user,
});

export default connect(mapStateToProps)(Loading);
