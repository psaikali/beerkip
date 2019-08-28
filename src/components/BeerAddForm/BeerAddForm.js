import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View } from "react-native";
import { Button, Text } from "native-base";

import TextInput from "../../fields/TextInput/TextInput";

import { required, number, floatWithPoint } from "../../utils/formHelpers";

class BeerAddForm extends Component {
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
						validate={[required, number]}
						normalize={floatWithPoint}
					/>
					<Field
						name="aromas"
						label="Aromas"
						autoCorrect={false}
						component={TextInput}
					/>
					<Field
						name="comment"
						label="Comment"
						autoCorrect={true}
						component={TextInput}
					/>
					<Field
						name="rating"
						label="Rating"
						autoCorrect={false}
						component={TextInput}
						validate={[required]}
					/>
				</View>
				<Button full warning rounded onPress={this.props.handleSubmit}>
					<Text>Add beer</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
	form: "beerAdd",
})(BeerAddForm);
