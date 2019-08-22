import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Button, Text, Icon } from "native-base";

class BeersList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddBeerButtonPress = () => {
		this.props.navigation.navigate("BeerAdd");
	};

	render() {
		return (
			<Container>
				<Content>
					<Text>Beers list</Text>
					<Button
						rounded
						bordered
						onPress={this.handleAddBeerButtonPress}
					>
						<Icon name="add" />
						<Text>Add a beer</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default BeersList;
