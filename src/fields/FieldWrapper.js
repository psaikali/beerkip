import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "native-base";

import COLORS from "../utils/colors";

class FieldWrapper extends Component {
	render() {
		return (
			<View
				style={[
					styles.inputContainer,
					this.props.meta.touched && this.props.meta.error
						? styles.inputContainerInvalid
						: {},
				]}
			>
				{this.props.children}
				{this.props.meta.touched && this.props.meta.error && (
					<Text style={styles.error}>{this.props.meta.error}</Text>
				)}

				{this.props.meta.warning && (
					<Text style={styles.warning}>
						{this.props.meta.warning}
					</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 5,
		marginBottom: 5,
		//flex: 1
	},
	inputContainerInvalid: {
		//backgroundColor: "#F8ECEB"
	},
	fieldDescription: {
		fontStyle: "italic",
		fontSize: 10,
		marginTop: 5,
	},
	error: {
		fontSize: 9,
		fontWeight: "bold",
		fontStyle: "italic",
		paddingTop: 3,
		paddingBottom: 6,
		color: COLORS.red,
	},
	warning: {
		fontSize: 9,
		fontWeight: "bold",
		fontStyle: "italic",
		paddingTop: 3,
		paddingBottom: 6,
		color: COLORS.orange,
	},
});

export default FieldWrapper;
