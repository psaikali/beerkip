import React from "react";
import { Animated, Easing } from "react-native";

class FadeSlide extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			top: new Animated.Value(props.top || 75),
			opacity: new Animated.Value(props.opacity || 0),
		};
	}

	componentDidMount() {
		Animated.timing(this.state.top, {
			toValue: 0,
			duration: this.props.duration || 1000,
			delay: this.props.delay || 0,
			easing: Easing.inOut(Easing.quad),
		}).start();

		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: this.props.duration || 1000,
			delay: this.props.delay || 0,
			easing: Easing.inOut(Easing.quad),
		}).start();
	}

	render() {
		let { top, opacity } = this.state;

		return (
			<Animated.View
				style={{
					...this.props.style,
					top: top,
					opacity: opacity,
				}}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}

export default FadeSlide;
