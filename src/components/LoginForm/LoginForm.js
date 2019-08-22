import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View } from "react-native";
import { Button, Text } from "native-base";

import TextInput from "../../fields/TextInput/TextInput";

import COLORS from "../../utils/colors";

//import { required } from "../../utils/validation";

class LoginForm extends Component {
	render() {
		return (
			<View>
				<View style={STYLES.formWrapper}>
					<Field
						name="login"
						label="Identifiant"
						textContentType="username"
						autoCorrect={false}
						autoCapitalize="none"
						component={TextInput}
						icon="person"
						//validate={[required]}
					/>
					<Field
						name="password"
						label="Mot de passe"
						textContentType="password"
						secureTextEntry={true}
						autoCorrect={false}
						autoCapitalize="none"
						component={TextInput}
						icon="key"
						//validate={[required]}
					/>
				</View>
				<Button full warning rounded onPress={this.props.handleSubmit}>
					<Text>Log in</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
	form: "login",
})(LoginForm);
