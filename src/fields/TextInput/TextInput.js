import React, { Component } from "react";
import { StyleSheet } from "react-native";
import FieldWrapper from "../FieldWrapper";
import { Text, Input, Item, Icon, Label } from "native-base";

import COLORS from "../../utils/colors";

class TextInput extends Component {
	render() {
		const { input, meta, label, ...inputProps } = this.props;

		return (
			<FieldWrapper {...this.props}>
				<Item error={meta.touched && meta.error ? true : false}>
					{this.props.icon && (
						<Icon
							name={this.props.icon}
							style={
								meta.active
									? styles.iconActive
									: styles.iconInactive
							}
						/>
					)}
					<Input
						{...inputProps}
						placeholder={label}
						onChangeText={input.onChange}
						onBlur={input.onBlur}
						onFocus={input.onFocus}
						value={
							inputProps.hasNormalize ? input.value : undefined
						}
					/>
				</Item>
			</FieldWrapper>
		);
	}
}

const styles = StyleSheet.create({
	iconActive: {
		color: COLORS.purple,
	},
	iconInactive: {
		color: COLORS.black,
	},
});

export default TextInput;
