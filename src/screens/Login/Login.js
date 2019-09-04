import React, { Component } from "react";
import {
	View,
	Image,
	Linking,
	ActivityIndicator,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { Button, H3, Text } from "native-base";
import { connect } from "react-redux";

import FadeSlide from "../../animations/FadeSlide/FadeSlide";
import LoginForm from "../../components/LoginForm/LoginForm";

import logo from "../../assets/images/beerkip-logo-white.png";
import COLORS from "../../utils/colors";
import { login, clearMessages, pullData } from "../../store/actions/app";

class Login extends Component {
	handleLoginFormSubmit = values => {
		this.props.clearMessages();
		this.props.login(values.username, values.password);
	};

	componentDidUpdate() {
		const { user } = this.props;

		// We have a user and a token, so user just logged in.
		if (user && user.token) {
			this.props.clearMessages();
			this.props.navigation.navigate("BeersList");
			this.props.pullData();
		}
	}

	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<FadeSlide top={-75}>
						<Image source={logo} style={styles.logo} />
					</FadeSlide>

					<FadeSlide delay={150}>
						<View style={styles.loginFormBox}>
							<H3>Login</H3>
							<LoginForm
								onSubmit={this.handleLoginFormSubmit}
								disabled={this.props.loading}
							/>
							{this.props.loading && (
								<View style={styles.loadingContainer}>
									<ActivityIndicator
										animating={true}
										hidesWhenStopped={false}
										size="large"
										color={COLORS.purple}
									/>
								</View>
							)}
							{this.props.error && (
								<Text style={styles.errorMessage}>
									{this.props.error}
								</Text>
							)}
						</View>
					</FadeSlide>
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
						Made by Pierre Saïkali — www.saika.li
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
		width: "80%",
		aspectRatio: 507 / 102,
		marginLeft: "10%",
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
	loadingContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255,255,255,.85)",
		justifyContent: "center",
	},
	errorMessage: {
		fontSize: 11,
		marginTop: 20,
		fontStyle: "italic",
		color: COLORS.red,
	},
});

const mapStateToProps = state => ({
	user: state.app.user,
	loading: state.app.ui.loading,
	error: state.app.ui.messages.login,
});

const mapDispatchToProps = dispatch => {
	return {
		login: (email, password) => dispatch(login(email, password)),
		clearMessages: () => dispatch(clearMessages()),
		pullData: () => dispatch(pullData()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
