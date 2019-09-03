import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import { clearMessages, stopLoading } from "../../store/actions/app";

class Loading extends Component {
	/**
	 * Let's check if user is logged in, or not
	 */
	componentDidMount() {
		// Let's reset the UI.
		this.props.stopLoading();
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
		stopLoading: () => dispatch(stopLoading()),
		clearMessages: () => dispatch(clearMessages()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Loading);
