import React, { Component } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Button, Text, Icon, Container, Content, Fab } from "native-base";
import { connect } from "react-redux";

import COLORS from "../../utils/colors";
import { deleteBeer } from "../../store/actions/beers";
import ScreenContent from "../../components/ScreenContent/ScreenContent";

class BeerDetails extends Component {
	constructor(props) {
		super(props);

		const beer = this.props.navigation.getParam("beer", null);

		this.state = {
			subMenuActive: false,
			beer,
		};
	}

	/**
	 * When we click on the Edit icon
	 */
	handleIconEditPress = () => {
		// Redirect to BeerAdd with extra "beer" prop
	};

	/**
	 * When we click on the Photo icon
	 */
	handleIconPhotoPress = () => {
		//
	};

	/**
	 * When we click on the Delete icon
	 */
	handleIconDeletePress = () => {
		// First, delete the beer.
		this.props.deleteBeer(this.state.beer.uid);

		// Then, redirect back to BeersList.
		this.props.navigation.navigate("BeersList");
	};

	renderSubMenu = () => {
		return (
			<Fab
				active={this.state.subMenuActive}
				direction="up"
				style={styles.subMenu}
				position="bottomRight"
				onPress={() =>
					this.setState({
						subMenuActive: !this.state.subMenuActive,
					})
				}
			>
				<Icon name="settings" style={styles.subMenuMainIcon} />
				<Button
					style={styles.subMenuIconEdit}
					onPress={this.handleIconEditPress}
				>
					<Icon name="create" />
				</Button>
				<Button
					style={styles.subMenuIconPhoto}
					onPress={this.handleIconPhotoPress}
				>
					<Icon name="image" />
				</Button>
				<Button
					style={styles.subMenuIconDelete}
					onPress={this.handleIconDeletePress}
				>
					<Icon name="trash" />
				</Button>
			</Fab>
		);
	};

	render() {
		const { beer } = this.state;

		if (!beer) {
			return null;
		}

		return (
			<View style={styles.contentWrapper}>
				<View style={styles.heroWrapper}>
					<ImageBackground
						source={beer.photo}
						style={styles.heroBackground}
						imageStyle={styles.heroBackgroundImage}
						resizeMode="cover"
						blurRadius={3}
					>
						<View style={styles.header}>
							<Text style={styles.headerMainText}>
								{beer.name}
							</Text>
							{beer.brewery ? (
								<Text style={styles.headerSubText}>
									by {beer.brewery}
								</Text>
							) : (
								<Text style={styles.headerSubText}>
									created on {beer.createdAt}
								</Text>
							)}
						</View>
					</ImageBackground>
					{this.renderSubMenu()}
				</View>
				<ScreenContent containerStyle={styles.screenContent}>
					<Text>Details:</Text>
					<Text>{JSON.stringify(beer, undefined, 2)}</Text>
				</ScreenContent>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentWrapper: {
		flex: 1,
	},
	heroWrapper: {
		paddingBottom: 45,
		marginBottom: -15,
	},
	subMenu: {
		backgroundColor: COLORS.gray,
	},
	subMenuMainIcon: {
		color: COLORS.black,
	},
	subMenuIconEdit: {
		backgroundColor: COLORS.yellow,
	},
	subMenuIconPhoto: {
		backgroundColor: COLORS.yellow,
	},
	subMenuIconDelete: {
		backgroundColor: COLORS.red,
	},
	heroBackground: {
		height: undefined,
		width: "100%",
		aspectRatio: 100 / 50,
		overflow: "hidden",
	},
	heroBackgroundImage: {
		bottom: "-100%",
	},
	header: {
		backgroundColor: "rgba(55, 5, 135, 0.35)",
		flex: 1,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	headerMainText: {
		fontSize: 30,
		marginTop: "auto",
		color: "#ffffff",
	},
	headerSubText: {
		fontSize: 12,
		textAlign: "left",
		color: "#ffffff",
	},
	screenContent: {
		paddingTop: 0,
	},
});

const mapDispatchToProps = dispatch => {
	return {
		deleteBeer: uid => dispatch(deleteBeer(uid)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(BeerDetails);
