import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon, Body, Left, Right, Thumbnail } from "native-base";

export default BeerCard = ({ item, onPress }) => (
	<ListItem thumbnail key={item.uid} button onPress={onPress}>
		<Left>
			<Thumbnail square source={item.photo} />
			{item.edited && (
				<View style={styles.beerNeedsSync}>
					<Icon name="refresh" style={styles.beerNeedsSyncIcon} />
				</View>
			)}
		</Left>
		<Body>
			<Text style={styles.beerName}>{item.name}</Text>
			<Text note numberOfLines={1}>
				{item.comment}
			</Text>
		</Body>
		<Right>
			<View style={styles.beerRating}>
				<Text style={styles.beerRatingText}>{item.rating}</Text>
			</View>
		</Right>
	</ListItem>
);

const styles = StyleSheet.create({
	beerNeedsSync: {
		position: "absolute",
		backgroundColor: COLORS.orange,
		top: 3,
		right: 3,
		borderRadius: 15,
		width: 15,
		height: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	beerNeedsSyncIcon: {
		width: 10,
		height: 10,
		fontSize: 10,
		color: "#ffffff",
		marginLeft: 2,
	},
	beerName: {
		fontWeight: "bold",
	},
	beerRating: {
		backgroundColor: COLORS.gray,
		borderRadius: 50,
		width: 30,
	},
	beerRatingText: {
		fontSize: 9,
		textAlign: "center",
		paddingVertical: 9,
	},
});
