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
		}
	};

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

const styles = StyleSheet.create({});

export default TopBar;
