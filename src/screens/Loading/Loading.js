import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import { clearMessages } from "../../store/actions/app";

class Loading extends Component {
	/**
	 * Let's check if user is logged in, or not
	 */
	componentDidMount() {
		// Let's also clear all UI (error) messages
		this.props.clearMessages();

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

const mapDispatchToProps = dispatch => {
	return {
		clearMessages: () => dispatch(clearMessages()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Loading);
