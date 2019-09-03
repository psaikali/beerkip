import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text, Badge, Icon, H3, Container, Content } from "native-base";

import { addBeer } from "../../store/actions/beers";
import dummyData from "../../utils/dummyData";

import BeerCard from "../../components/BeerCard/BeerCard";

import { connect } from "react-redux";
import COLORS from "../../utils/colors";
import { push } from "../../store/actions/app";

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

	/**
	 * We want to possibly send data on the first load of the screen
	 */
	componentDidMount() {
		this.props.push();
	}

	/**
	 * We also want to send data anytime we got new/edited/deleted beers (this.props.beers comes from our connected Redux store)
	 */
	componentDidUpdate() {
		this.props.push();
	}

	renderBeersListTitle = () => {
		const beersTotalCount = this.props.beers.length;
		const beersToPushCount = this.props.beers.filter(beer => beer.edited)
			.length;

		return (
			<View style={styles.beersListTitle}>
				<H3>
					{beersTotalCount} beer{beersTotalCount > 1 ? "s" : ""}
				</H3>
				{beersToPushCount > 0 && (
					<Badge warning>
						<Text>{beersToPushCount} to sync</Text>
					</Badge>
				)}
			</View>
		);
	};

	render() {
		return (
			<Container>
				<Content>
					{this.props.beers.length > 0 ? (
						<View>
							{this.renderBeersListTitle()}
							<FlatList
								data={this.props.beers.filter(
									beer => !beer.deleted
								)}
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
						</View>
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
	beersListTitle: {
		marginHorizontal: 15,
		marginTop: 25,
		marginBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	beersToPushCount: {
		fontSize: 10,
	},
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

const mapDispatchToProps = dispatch => {
	return {
		push: () => dispatch(push()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BeersList);
