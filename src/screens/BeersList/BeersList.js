import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
	Button,
	Text,
	Icon,
	ListItem,
	Thumbnail,
	H3,
	Left,
	Body,
	Right,
	Container,
	Content,
} from "native-base";

import { addBeer } from "../../store/actions/beers";
import dummyData from "../../utils/dummyData";

import BeerCard from "../../components/BeerCard/BeerCard";

import { connect } from "react-redux";
import COLORS from "../../utils/colors";

class BeersList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddBeerButtonPress = () => {
		this.props.navigation.navigate("BeerAdd");
	};

	/**
	 * Temporary add fake beers
	 */
	handleLoadDummyDataButton = () => {
		[...dummyData.beers, ...dummyData.beers, ...dummyData.beers].map(beer =>
			this.props.dispatch(addBeer(beer))
		);
	};

	render() {
		return (
			<Container>
				<Content>
					{this.props.beers.length > 0 ? (
						<FlatList
							data={this.props.beers}
							keyExtractor={(beer, index) => beer.uid}
							renderItem={({ item }) => (
								<BeerCard
									item={item}
									onPress={() => {
										this.props.navigation.navigate(
											"BeerDetails",
											{
												beer: item,
											}
										);
									}}
								/>
							)}
						/>
					) : (
						<ScreenContent>
							<H3>Your beer shelf is empty!</H3>
							<Text>
								Create your first beer by clicking the{" "}
								<Text style={{ fontWeight: "bold" }}>
									"Add beer"
								</Text>{" "}
								button below.
							</Text>
							<Button
								rounded
								secondary
								iconLeft
								dark
								onPress={this.handleLoadDummyDataButton}
								style={styles.dummyDataButton}
							>
								<Icon name="refresh" />
								<Text>Load dummy beers</Text>
							</Button>
						</ScreenContent>
					)}
				</Content>

				<Button
					rounded
					primary
					iconLeft
					onPress={this.handleAddBeerButtonPress}
					style={styles.addButton}
				>
					<Icon name="add" />
					<Text>Add beer</Text>
				</Button>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	addButton: {
		position: "absolute",
		bottom: 30,
		right: 30,
	},
	dummyDataButton: {
		marginTop: 10,
		justifyContent: "center",
	},
});

const mapStateToProps = state => ({
	beers: state.beers.sort((a, b) => b.createdAt - a.createdAt),
});

export default connect(mapStateToProps)(BeersList);
