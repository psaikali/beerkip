import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View } from "react-native";
import { Button, Text } from "native-base";

import TextInput from "../../fields/TextInput/TextInput";

import COLORS from "../../utils/colors";

//import { required } from "../../utils/validation";

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
						//validate={[required]}
					/>
					<Field
						name="brewery"
						label="Brewery"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="style"
						label="Style"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="abv"
						label="ABV (%)"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="aromas"
						label="Aromas"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="comment"
						label="Comment"
						autoCorrect={true}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="rating"
						label="Rating"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
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
