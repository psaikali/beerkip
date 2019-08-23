import React, { Component } from "react";
import { View } from "react-native";
import { Text, H3 } from "native-base";
import { connect } from "react-redux";
import UUIDGenerator from "react-native-uuid-generator";

import ScreenContent from "../../components/ScreenContent/ScreenContent";
import BeerAddForm from "../../components/BeerAddForm/BeerAddForm";

import { addBeer } from "../../store/actions/beers";

import dummyBeerImage from "../../assets/images/dummy/beer3.png";

class BeerAdd extends Component {
	handleBeerAddFormSubmit = values => {
		UUIDGenerator.getRandomUUID().then(uid => {
			this.props.addBeer({
				uid: uid,
				createdAt: Date.now(),
				editedAt: null,
				deletedAt: null,
				photo: dummyBeerImage,
				...values,
			});
		});
	};

	render() {
		return (
			<ScreenContent>
				<H3>New beer</H3>
				<BeerAddForm onSubmit={this.handleBeerAddFormSubmit} />
			</ScreenContent>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addBeer: data => dispatch(addBeer(data)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(BeerAdd);
