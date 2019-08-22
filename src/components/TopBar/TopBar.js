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
	renderIcon = (icon, isRight = false) => {
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

		const Wrapper = isRight ? Right : Left;

		return (
			<Wrapper>
				<Button
					transparent
					onPress={() => {
						this.handleIconPress(icon);
					}}
				>
					<Icon name={iconName} />
				</Button>
			</Wrapper>
		);
	};

	getTitle = () => {
		const { navigation } = this.props;

		if (navigation.state.routeName === "BeerDetails") {
			const beer = navigation.getParam("beer", null);

			if (beer) {
				return beer.name;
			}
		}

		return this.props.title;
	};

	render() {
		const { leftActionIcon, rightActionIcon } = this.props;

		return (
			<Header noShadow>
				{this.renderIcon(leftActionIcon, false)}
				<Body>
					<Title>{this.getTitle()}</Title>
				</Body>
				{this.renderIcon(rightActionIcon, true)}
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	// TODO
});

export default TopBar;
