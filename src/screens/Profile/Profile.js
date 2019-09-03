import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { H3, Text, Left, Right, List, ListItem } from "native-base";
import { connect } from "react-redux";

import ScreenContent from "../../components/ScreenContent/ScreenContent";

class Profile extends Component {
	render() {
		const { login, email, name } = this.props.user;

		return (
			<ScreenContent>
				<H3>User profile</H3>
				<List>
					<ListItem>
						<Text style={styles.listLabel}>Login: </Text>
						<Text>{login}</Text>
					</ListItem>
					<ListItem>
						<Text style={styles.listLabel}>E-mail address: </Text>
						<Text>{email}</Text>
					</ListItem>
					<ListItem>
						<Text style={styles.listLabel}>Name: </Text>
						<Text>{name}</Text>
					</ListItem>
				</List>
			</ScreenContent>
		);
	}
}

const styles = StyleSheet.create({
	listLabel: {
		fontWeight: "bold",
	},
});

const mapStateToProps = state => ({
	user: state.app.user,
});

export default connect(mapStateToProps)(Profile);
