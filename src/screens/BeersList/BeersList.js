import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { Button, Text, Icon, H3, Container, Content } from "native-base";
import NetInfo from "@react-native-community/netinfo";

import { addBeer } from "../../store/actions/beers";
import dummyData from "../../utils/dummyData";

import BeerCard from "../../components/BeerCard/BeerCard";

import { connect } from "react-redux";
import COLORS from "../../utils/colors";
import { push } from "../../store/actions/app";

class BeersList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			appConnectionSubscription: null,
			appConnectionIsConnected: false,
		};
	}

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
	 * Let's subscribe to the network connectivity status, to possibly send data to the server.
	 */
	componentDidMount() {
		this.appConnectionSubscription = NetInfo.addEventListener(
			this.handleConnectionInfoChange
		);
	}

	/**
	 * When unmounting this screen, remove the NetInfo listener.
	 */
	componentWillUnmount() {
		this.appConnectionSubscription && this.appConnectionSubscription();
	}

	/**
	 * Update the component state to store connectivity status.
	 */
	handleConnectionInfoChange = state => {
		this.setState(() => ({
			appConnectionIsConnected: state.isConnected,
		}));
	};

	/**
	 * Display a title before the list of beers, along with a Sync button.
	 */
	renderBeersListTitle = () => {
		const beersTotalCount = this.props.beers.length;
		const beersToPushCount = this.props.beers.filter(beer => beer.edited)
			.length;

		return (
			<View>
				<View style={styles.beersListTitle}>
					<H3>
						{beersTotalCount} beer{beersTotalCount > 1 ? "s" : ""}
					</H3>
					{beersToPushCount > 0 && !this.props.loading && (
						<Button
							rounded
							small
							warning
							iconLeft
							onPress={this.props.push}
							disabled={
								this.props.loading ||
								!this.state.appConnectionIsConnected
							}
						>
							<Icon name="refresh" />
							<Text>
								Sync {beersToPushCount} item
								{beersToPushCount > 1 ? "s" : ""}
							</Text>
						</Button>
					)}
					{beersToPushCount > 0 && this.props.loading && (
						<ActivityIndicator
							animating={true}
							hidesWhenStopped={false}
							size={30}
							color={COLORS.orange}
						/>
					)}
				</View>
				{beersToPushCount > 0 &&
					!this.state.appConnectionIsConnected && (
						<Text style={styles.appNeedsInternetMessage}>
							Please connect your device to the Internet to sync
							your latest data.
						</Text>
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
	appNeedsInternetMessage: {
		marginHorizontal: 15,
		backgroundColor: COLORS.orange,
		paddingVertical: 3,
		paddingHorizontal: 5,
		fontSize: 9,
		fontWeight: "bold",
		color: "#ffffff",
		borderRadius: 3,
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
	beers: state.beers
		.filter(beer => {
			if (state.app.user && state.app.user.id) {
				return beer.author === state.app.user.id;
			} else {
				return false;
			}
		})
		.sort((a, b) => b.createdAt - a.createdAt),
	loading: state.app.ui.loading,
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
