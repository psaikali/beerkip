import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, Icon } from "native-base";

import TextInput from "../../fields/TextInput/TextInput";

import {
	required,
	number,
	floatWithPoint,
	warnMinMax,
	positive,
	rating,
} from "../../utils/formHelpers";

import COLORS from "../../utils/colors";

const abvWarning = value => warnMinMax(value, 0, 20);

class BeerAddForm extends Component {
	/**
	 * Render the "Aromas" repeatable fields
	 */
	renderAromasFields = ({ fields, meta: { error } }) => {
		return (
			<View>
				{fields.map((aroma, index) => (
					<View key={index} style={styles.aromaRow}>
						<Field
							name={`${aroma}.aroma`}
							label="Aroma"
							component={TextInput}
							style={styles.aromaInput}
						/>
						<TouchableOpacity
							onPress={() => fields.remove(index)}
							style={styles.aromaRemove}
						>
							<Icon name="trash" style={styles.aromaRemoveIcon} />
						</TouchableOpacity>
					</View>
				))}
				<Button
					light
					iconLeft
					small
					rounded
					onPress={() => fields.push({ aroma: "" })}
					style={styles.aromaAdd}
				>
					<Icon name="add" />
					<Text>Add aroma</Text>
				</Button>
			</View>
		);
	};

	render() {
		return (
			<View>
				<View style={STYLES.formWrapper}>
					<Field
						name="name"
						label="Beer name"
						autoCorrect={false}
						component={TextInput}
						validate={[required]}
					/>
					<Field
						name="brewery"
						label="Brewery"
						autoCorrect={false}
						component={TextInput}
					/>
					<Field
						name="style"
						label="Style"
						autoCorrect={false}
						component={TextInput}
						validate={[required]}
					/>
					<Field
						name="abv"
						label="ABV (%)"
						keyboardType="numeric"
						autoCorrect={false}
						component={TextInput}
						validate={[required, number, positive]}
						normalize={floatWithPoint}
						warn={abvWarning}
					/>
					<FieldArray
						name="aromas"
						component={this.renderAromasFields}
					/>
					<Field
						name="comment"
						label="Comment"
						autoCorrect={true}
						multiline={true}
						component={TextInput}
					/>
					<Field
						name="rating"
						label="Rating"
						keyboardType="numeric"
						autoCorrect={false}
						component={TextInput}
						validate={[required, number, positive, rating]}
						normalize={floatWithPoint}
					/>
				</View>
				<Button full warning rounded onPress={this.props.handleSubmit}>
					<Text>Add beer</Text>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	aromaRow: {
		flexDirection: "row",
	},
	aromaInput: {
		flexBasis: "90%",
	},
	aromaRemove: {
		justifyContent: "center",
		alignSelf: "center",
		flexBasis: "10%",
		height: 40,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.gray,
	},
	aromaRemoveIcon: {
		fontSize: 18,
		color: COLORS.orange,
		justifyContent: "center",
		textAlign: "center",
	},
	aromaAdd: {
		marginTop: 5,
		marginBottom: 5,
		width: 150,
		marginLeft: "auto",
	},
});

export default reduxForm({
	form: "beerAdd",
})(BeerAddForm);
