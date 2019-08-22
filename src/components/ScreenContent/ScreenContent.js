import React from "react";
import { Container, Content } from "native-base";

import STYLES from "../../utils/styles.js";

export default (ScreenContent = props => (
	<Container
		style={[
			STYLES.container,
			props.containerStyle ? props.containerStyle : {},
		]}
	>
		<Content
			contentContainerStyle={props.contentStyle ? props.contentStyle : {}}
		>
			{props.children}
		</Content>
	</Container>
));
