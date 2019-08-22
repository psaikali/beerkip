import React from "react";
import { Container, Content } from "native-base";

import STYLES from "../../utils/styles.js";

export default (ScreenContent = props => (
	<Container style={STYLES.container}>
		<Content>{props.children}</Content>
	</Container>
));
