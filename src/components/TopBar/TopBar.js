import React, { Component } from "react";
import { Alert, StyleSheet } from "react-native";
import { Header, Button, Title, Left, Right, Body, Icon } from "native-base";

class TopBar extends Component {
	/**
	 * When we click on the "Left icon" arrow
	 */
	handleIconPress = action => {
		switch (action) {
			default:
			case "goBack":
				this.props.navigation.goBack();
				break;

			case "searchBeers":
				Alert.alert("Search form coming soon...");
				break;

			case "seeProfile":
				this.props.navigation.navigate("Profile");
				break;

			case "logout":
				Alert.alert(
					"Please don't go...",
					"Are you sure that you want to log out?",
					[
						{
							text: "Yes, log me out",
							onPress: () => {
								this.props.navigation.navigate("Login");
							},
						},
						{
							text: "Cancel",
							onPress: () => {},
							style: "cancel",
						},
					],
					{ cancelable: false }
				);
				break;
		}
	};

	/**
	 * Render a single clickable button with icon
	 */
	renderIcon = icon => {
		if (!icon) {
			return null;
		}

		let iconName = "home";

		switch (icon) {
			default:
			case "goBack":
				iconName = "arrow-back";
				break;

			case "searchBeers":
				iconName = "search";
				break;

			case "seeProfile":
				iconName = "person";
				break;

			case "logout":
				iconName = "power";
				break;
		}

		return (
			<Button
				transparent
				onPress={() => {
					this.handleIconPress(icon);
				}}
			>
				<Icon name={iconName} />
			</Button>
		);
	};

	render() {
		const { leftActionIcon, rightActionIcon } = this.props;

		return (
			<Header noShadow>
				<Left>{this.renderIcon(leftActionIcon)}</Left>
				<Body>
					<Title>{this.props.title}</Title>
				</Body>
				<Right>{this.renderIcon(rightActionIcon)}</Right>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	// TODO
});

export default TopBar;
