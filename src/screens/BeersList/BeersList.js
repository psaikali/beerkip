import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, Icon } from "native-base";

import ScreenContent from "../../components/ScreenContent/ScreenContent";

class BeersList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddBeerButtonPress = () => {
		this.props.navigation.navigate("BeerAdd");
	};

	render() {
		return (
			<ScreenContent>
				<Text>Beers list</Text>
				<Button
					rounded
					bordered
					onPress={this.handleAddBeerButtonPress}
				>
					<Icon name="add" />
					<Text>Add a beer</Text>
				</Button>
			</ScreenContent>
		);
	}
}

export default BeersList;
