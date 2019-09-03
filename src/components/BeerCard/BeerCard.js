import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Body, Left, Right, Thumbnail } from "native-base";

export default BeerCard = ({ item, onPress }) => (
	<ListItem thumbnail key={item.uid} button onPress={onPress}>
		<Left>
			<Thumbnail square source={item.photo} />
		</Left>
		<Body>
			<Text>{item.name}</Text>
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
